import React from "react";
import ClientTemplate from "clientTemplate";
import { useParams } from "react-router-dom";
import { GET } from "constant";
import host from "config";
import Button from "commons/Button";
import io from "socket.io-client";
import { connect } from "react-redux";
import { goto } from "navigator";

class LiveExpDetail extends React.Component {
  GetLiveExpDetail = () => {
    const url = `${host}/user/exp/live/${this.props.live_id}`;
    fetch(url, GET)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          if (data.detail) {
            if (data.detail.status === "LIVE") {
              console.log(data.detail);
              this.setState({ detail: data.detail });
              this.setState({ status: "STANDBY" });
            } else {
              alert("게임이 이미 시작되었습니다.");
              goto("PLAY", "1/null");
            }
          } else {
            alert("잘못된 접근입니다.");
            window.history.back();
          }
        } else {
          alert(data.err);
        }
      })
      .catch((er) => alert(er));
  };
  componentDidMount() {
    this.GetLiveExpDetail();
  }
  componentWillUnmount() {
    this.socket = null;
  }
  constructor(props) {
    super(props);
    this.state = {
      status: "INIT", // init,
      detail: null,
      url: null,
      gamepoint: null,
    };
    this.socket = null;
  }
  RequestJoin = () => {
    //
    this.socket = io("https://place.opensrcdesign.com/waiting", {
      path: "/socket.io",
      transports: ["websocket", "polling", "flashsocket"],
    })
      .on("user-list", (obj) => {
        console.log(obj);
      })
      .on("started", (obj) => {
        const { user, game } = obj;
        console.log(obj);
        if (user === this.props.userInfo.id) {
          alert("게임에 참가되었습니다.");
          try {
            this.setState({
              url: JSON.parse(JSON.parse(game.url)["game_files"])[0].path,
              status: "START",
              gamepoint: game.gamepoint,
            });
          } catch (e) {
            console.log(e);
            alert("게임경로를 가져오지 못하였습니다");
          }
        } else {
          alert(
            `게임 개설자가 ${user}와 게임을 시작하였습니다.\n리스트 페이지로 이동합니다.`
          );
          goto("PLAY", "1/null");
        }
        this.socket = null;
      })
      .on("close-room", () => {
        alert("게임이 종료되었습니다.\n페이지로 이동합니다.");
        goto("PLAY", "1/null");
      });
    alert(this.props.userInfo.uid);
    this.socket &&
      this.socket.emit("join", {
        roomNum: this.props.live_id,
        user: this.props.userInfo,
      });

    this.socket &&
      this.socket.emit("get-users", { roomNum: this.props.live_id });

    this.setState({ status: "JOIN" });
  };
  render() {
    const { status, detail, url } = this.state;
    console.log(this.props, this.state);

    const URL = `${url}?room='${detail?.title}'&name=${this.props.userInfo?.nick_name}&url=${this.props.userInfo?.l_img}&GAMEPOINT=${this.state.gamepoint}`;
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {status === "INIT" && <></>}
        {status === "STANDBY" && (
          <Button w={512} h={256} onClick={this.RequestJoin}>
            <div className="text">참가신청</div>
          </Button>
        )}
        {status === "JOIN" && (
          <>
            <h3
              style={{ width: "max-content", margin: "auto", padding: "15px" }}
            >
              참가대기중…
            </h3>
          </>
        )}
        {status === "START" && (
          // <div style={{ width: "max-content" }}>
          // {/* {url}
          // <br />
          // {URL} */}
          <iframe
            id="iFrame1"
            src={URL}
            width="100%"
            height="100%"
            onLoad={() => {
              document.getElementById("iFrame1").style.width = "100%";
              // document.getElementById("iFrame1").style.height = "100%";
            }}
          />
          // </div>
        )}
      </div>
    );
  }
}

function PageWrapper(props) {
  let params = useParams();
  return (
    <ClientTemplate>
      <LiveExpDetail {...props} live_id={params.id} />
    </ClientTemplate>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.Authentication.status.isLoggedIn,
    userInfo: state.Authentication.status.userInfo,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);
