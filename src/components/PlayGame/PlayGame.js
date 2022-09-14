import Button from "commons/Button";
import host from "config";
import { authGET, DELETE } from "constant";
import React from "react";
import io from "socket.io-client";

class PlayGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      live: false,
      liveId: false,
      peer: [],
      selected: false,
      started: false,
    };
    this.socket = io("https://place.opensrcdesign.com/webgame2", {
      path: "/socket.io",
      transports: ["websocket", "polling", "flashsocket"],
    }).on("new-user", (obj) => {
      const peer = this.state.peer.filter(
        (peer) => peer.userInfo.id != obj.userInfo.id
      );
      peer.push(obj.userInfo);
      this.setState({ peer: peer });
    });
  }
  createSocketRoom = (room) => room && this.socket.emit("create-room", room);

  GameOpenRequest = () => {
    const { token, payment_id: id } = this.props;
    const url = `${host}/user/exp/open/${id}`;
    return fetch(url, authGET(token))
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.setState({ live: data.success });
          this.setState({ liveId: data.detail });
          this.createSocketRoom(data.detail);
          console.log(data);
        } else {
          console.log(data);
          alert("foo");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  GameCloseRequest = () => {
    const { liveId } = this.state;
    const { token } = this.props;
    if (liveId == null) return;
    const url = `${host}/user/exp/open/${liveId}`;
    return fetch(url, DELETE(token))
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("라이브 게임이 정상적으로 닫혔습니다.");
          this.socket.emit("close-room", liveId);
          this.setState({ live: false, liveId: false });
        } else {
          alert("failed to close game");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  CheckAlreadyOpened = () => {
    const { payment_id, token } = this.props;
    const url = `${host}/user/exp/opened/${payment_id}`;
    return fetch(url, authGET(token))
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.setState({ live: true, liveId: data.detail });
          this.createSocketRoom(data.detail);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  componentDidMount() {
    this.CheckAlreadyOpened();
  }
  SelectUser = () => {
    this.socket.emit("start-with-you", {
      who: this.state.selected,
      url: this.props.detail.type_detail,
    });
    const url = JSON.parse(
      JSON.parse(this.props.detail.type_detail)["game_files"]
    )[0].path;
    this.setState({ started: true, url: url });
  };
  render() {
    const { live, liveId, peer, started, url } = this.state;
    console.log(this.state, this.props);
    return live && liveId ? (
      started ? (
        <>
          <iframe src={url} width="100%" height="100%"/>
          <div
            style={{
              width: "max-content",
              marginLeft: "auto",
              marginRight: "15px",
            }}
          >
            <Button onClick={() => live && liveId && this.GameCloseRequest()}>
              <div className="text">게임종료</div>
            </Button>
          </div>
        </>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ margin: "auto", width: "max-content" }}>
            <h3>게임이 개설되었습니다. 원하시는 상대를 선택하여주세요.</h3>
          </div>
          <div style={{ margin: "auto", width: "max-content" }}>
            <div style={{ width: "250px" }}>
              <div
                style={{
                  backgroundColor: "rgba(100,100,100,0.5)",
                  color: "white",
                }}
              >
                참가자목록
              </div>
              <div
                style={{
                  color: "gray",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden scroll",
                  height: "100px",
                }}
              >
                {peer.map((user) => (
                  <div
                    style={{
                      backgroundColor:
                        this.state.selected === user.id
                          ? "rgba(100,100,255,0.7)"
                          : "",
                    }}
                    key={user.id}
                    onClick={() => this.setState({ selected: user.id })}
                  >
                    {user.nick_name}({user.id})
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Button onClick={() => this.SelectUser()}>
                <div className="text">게임시작</div>
              </Button>
            </div>
          </div>

          <div
            style={{
              width: "max-content",
              marginLeft: "auto",
              marginRight: "15px",
            }}
          >
            <Button onClick={() => live && liveId && this.GameCloseRequest()}>
              <div className="text">게임종료</div>
            </Button>
          </div>
        </div>
      )
    ) : (
      <>
        <Button onClick={() => this.GameOpenRequest()}>
          <div className="text">게임개설</div>
        </Button>
      </>
    );
  }
}

export default PlayGame;
