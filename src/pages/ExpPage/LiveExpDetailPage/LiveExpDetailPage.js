import React from "react";
import ClientTemplate from "clientTemplate";
import { useParams } from "react-router-dom";
import { GET } from "constant";
import host from "config";
import Button from "commons/Button";
import io from "socket.io-client";
import { connect } from "react-redux";

class LiveExpDetail extends React.Component {
  GetLiveExpDetail = () => {
    const url = `${host}/user/exp/live/${this.props.live_id}`;
    fetch(url, GET)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          if (data.detail) {
            this.setState({ detail: data.detail });
            this.setState({ status: "STANDBY" });
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
  constructor(props) {
    super(props);
    this.state = {
      status: "INIT", // init,
      detail: null,
      url: null,
    };
    this.socket = io("https://place.opensrcdesign.com/webgame2", {
      path: "/socket.io",
      transports: ["websocket", "polling", "flashsocket"],
    })
      .on("no-room", () => alert("서버연결에 실패하였습니다. 방이 없습니다."))
      .on("start-with-you", (obj) => {
        try {
          this.setState({
            url: JSON.parse(JSON.parse(obj)["game_files"])[0].path,
            status: "START",
          });
        } catch (e) {
          console.log(e);
          alert("게임경로를 가져오지 못하였습니다");
        }
      })
      .on("close-room", () => {
        alert("라이브가 종료되었습니다.");
      });
  }
  RequestJoin = () => {
    this.socket.emit("join-room", {
      room: this.props.live_id,
      userInfo: this.props.userInfo,
    });
    this.setState({ status: "JOIN" });
  };
  render() {
    const { status, detail, url } = this.state;
    console.log(this.props, this.state);
    return (
      <>
        {status === "INIT" && <></>}
        {status === "STANDBY" && (
          <>
            <Button onClick={this.RequestJoin}>
              <div className="text">참가신청</div>
            </Button>
          </>
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
          <>
            <iframe src={url} width="100%" height="100%" />
          </>
        )}
      </>
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
