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
          if (data.detail?.opener === this.props.userInfo.uid) {
            alert("개설자의 페이지로 이동합니다.");
            goto("SOMEWHERE", `paidExp/${data.detail.payment_id}`);
          }
          if (data.detail) {
            console.log(data);
            if (data.detail.status === "LIVE") {
              console.log(data.detail);
              this.setState({ detail: data.detail });
              this.setState({ status: "STANDBY" });
            } else {
              alert("게임이 이미 시작되었습니다.");
              // this.gotopslaylist();
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
  gotoplaylist = () => goto("PLAY", "1/null");
  componentDidMount() {
    this.GetLiveExpDetail();
    window.addEventListener("message", (e) => {
      if (e.data === "GAMEOVER") {
        this.socket && this.socket.emit("close-room", this.props.live_id);
        alert("게임이 종료되었습니다.");
        this.gotoplaylist();
      }
    });
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
          alert("게임에 참가합니다.");
          try {
            this.setState({
              url: JSON.parse(JSON.parse(game.url)["game_files"])[0].path,
              status: "START",
              gamepoint: game.gamepoint,
            });
          } catch (e) {
            console.log(e);
            alert("게임을 시작할 수 없습니다.");
            this.socket = null;
            this.gotoplaylist();
          }
        } else {
          alert(
            `게임 개설자가 ${user}와 게임을 시작하였습니다.\n리스트 페이지로 이동합니다.`
          );
          this.gotoplaylist();
        }
        this.socket = null;
      })
      .on("close-room", () => {
        alert("게임이 종료되었습니다.\n놀기 페이지로 이동합니다.");
        this.gotoplaylist();
      });
    this.socket && this.socket.emit("standby", { room: this.props.live_id });
  }
  RequestJoin = () => {
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
          <iframe
            id="iFrame1"
            src={URL}
            width="100%"
            height="100%"
            onLoad={() => {
              document.getElementById("iFrame1").style.width = "100%";
            }}
          />
        )}
      </div>
    );
  }
}

function PageWrapper(props) {
  let params = useParams();
  // console.log("PROPS", props);
  return (
    <ClientTemplate>
      {props.userInfo && <LiveExpDetail {...props} live_id={params.id} />}
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
