import Button from "commons/Button";
import host from "config";
import { authGET, DELETE, PUT } from "constant";
import React from "react";
import io from "socket.io-client";

class PlayGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      live: false,
      liveId: false,
      peer: null,
      selected: false,
      started: false,
      gamepoint: 100,
    };
    this.socket = null;
    this.listpagesocket = null;
  }
  createSocketRoom = (room) =>
    room &&
    this.socket.emit("join", { roomNum: room, user: this.props.userInfo });

  ConnectSocket = () => {
    if (!this.socket) {
      this.listpagesocket = io("https://place.opensrcdesign.com/list-page", {
        path: "/socket.io",
        transports: ["websocket", "polling"], // "flashsocket"],
      }).on("incoming", () => {});

      this.socket = io("https://place.opensrcdesign.com/waiting", {
        path: "/socket.io",
        transports: ["websocket", "polling"], // "flashsocket"],
      })
        .on("user-list", (obj) => {
          const users = obj.map((element) => element.user);
          const peer = users.filter(
            (user) => user.uid !== this.props.userInfo.uid
          );
          this.setState({ peer: peer });
        })
        .on("started", () => {
          this.socket = null;
        });
    }
  };
  GameOpenRequest = () => {
    //-= socket connection =-//
    this.ConnectSocket();
    //-= restapi request =-//
    const { token, payment_id: id } = this.props;
    const url = `${host}/user/exp/open/${id}`;
    return fetch(url, authGET(token))
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.setState({ live: data.success });
          this.setState({ liveId: data.detail });
          this.createSocketRoom(data.detail);
          this.listpagesocket.emit("incoming");
        } else {
          console.error("failed to open live room: ", data);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  componentWillUnmount() {
    this.socket = null;
  }
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
          this.socket && this.socket.emit("close-room", liveId);
          this.listpagesocket && this.listpagesocket.emit("incoming");
          this.setState({ live: false, liveId: false, started: false });
        } else {
          alert("failed to close game");
        }
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        this.socket = null;
      });
  };
  GamePlayingRequest = () => {
    const { token } = this.props;
    const url = `${host}/user/exp/play/${this.state.liveId}`;
    return fetch(url, authGET(token));
  };
  CheckAlreadyOpened = () => {
    const { payment_id, token } = this.props;
    const url = `${host}/user/exp/opened/${payment_id}`;
    return fetch(url, authGET(token))
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.setState({ live: true, liveId: data.detail });
          this.ConnectSocket();
          this.socket &&
            data.detail &&
            this.socket.emit("join", {
              roomNum: data.detail,
              user: { ...this.props.userInfo, opener: true },
            });
          this.socket &&
            data.detail &&
            this.socket.emit("get-users", { roomNum: data.detail });
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  componentDidMount() {
    this.CheckAlreadyOpened();

    window.addEventListener("message", (e) => {
      console.log(e.data);
      if (e.data === "GAMEOVER") {
        alert("게임이 종료되었습니다.");
        this.GameCloseRequest();
      }
    });
  }
  SelectUser = () => {
    if (this.state.selected) {
      this.socket.emit("started", {
        roomNum: this.state.liveId,
        withUser: this.state.selected,
        game: {
          url: this.props.detail.type_detail,
          gamepoint: this.state.gamepoint,
        },
      });
      const url = JSON.parse(
        JSON.parse(this.props.detail.type_detail)["game_files"]
      )[0].path;
      this.setState({ started: true, url: url });
      this.GamePlayingRequest();
      // this.socket = null;
    }
  };
  render() {
    const { live, liveId, peer, started, url } = this.state;
    console.log(this.state, this.props);
    console.log({ url }, { peer });
    const URL = `${url}?room='${this.props.userInfo?.nick_name}의 ${this.props.detail?.title}'&isOpener=true&name=${this.props.userInfo?.nick_name}&url=${this.props.userInfo?.l_img}&GAMEPOINT=${this.state.gamepoint}`;
    console.log(URL);
    return live && liveId ? (
      started ? (
        <>
          <div
            style={{
              height: "auto",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* {url}
            <br />
            {URL} */}
            <div style={{ height: "100vh" }}>
              <iframe id="game-frame" src={URL} width="100%" height="100%" />
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
          <div
            style={{ margin: "auto", width: "max-content", display: "flex" }}
          >
            <div style={{ width: "250px" }}>
              <div
                style={{
                  backgroundColor: "rgba(10,10,100,0.5)",
                  color: "white",
                  fontSize: "1.25rem",
                  textAlign: "center",
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
                {peer &&
                  peer.length > 0 &&
                  peer.map((user) => (
                    <div
                      style={{
                        backgroundColor:
                          this.state.selected === user.id
                            ? "rgba(100,100,255,0.7)"
                            : "",
                        color: "black",
                      }}
                      key={user.id}
                      onClick={() => this.setState({ selected: user.id })}
                    >
                      {user.nick_name}({user.id})
                      {this.state.selected === user.id && (
                        <div>
                          <Button
                            w={100}
                            h={25}
                            onClick={() => this.SelectUser()}
                          >
                            <div className="text">게임시작</div>
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <div
                className="text"
                style={{ width: "max-content", padding: "5px" }}
              >
                점수설정
              </div>
              <div className="text">
                <input
                  style={{ fontSize: "1.5rem" }}
                  min="10"
                  max="100"
                  type="number"
                  value={this.state.gamepoint}
                  onChange={(e) => {
                    this.setState({ gamepoint: e.target.value });
                  }}
                />
              </div>
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
        <Button disabled={false} onClick={() => this.GameOpenRequest()}>
          <div className="text">게임개설</div>
        </Button>
      </>
    );
  }
}

export default PlayGame;
