import React from "react";
import Item from "components/Commons/Item";
import host from "config";
import { GET } from "constant";
import { io } from "socket.io-client";

export class LiveExpItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.socket = io("https://place.opensrcdesign.com/list-page", {
      path: "/socket.io",
      transports: ["websocket", "polling", "flashsocket"],
    }).on("incoming", () => {
      this.GetLiveList();
    });
  }
  GetLiveList = () => {
    const url = `${host}/user/exp/live`;
    fetch(url, GET)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.setState({ list: data.detail });
        }
      })
      .catch((error) => alert(error));
  };
  componentDidMount() {
    this.socket && this.socket.emit("I'mHere");
    this.GetLiveList();
  }
  componentWillUnmount() {
    this.socket = null;
  }
  render() {
    const { list } = this.state;
    console.log(this.state.list);

    return (
      list.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {list.map((item, index) => (
            <div
              key={index}
              style={{ width: "max-content", position: "relative" }}
            >
              <div
                style={
                  window.innerWidth > 500
                    ? {
                        position: "absolute",
                        top: "50%",
                        left: "3%",
                        background: "red",
                        color: "white",
                        width: "max-content",
                        fontSize: "1rem",
                        padding: "10px",
                        borderRadius: "10px",
                      }
                    : {
                        color: "white",
                        padding: "5px",
                        borderRadius: "5px",
                        zIndex: "999",
                        top: "2%",
                        left: "2%",
                        position: "absolute",
                        background: "red",
                        width: "max-content",
                      }
                }
              >
                {item.status}
              </div>
              <Item
                onClick={() => {
                  item.status === "LIVE"
                    ? (window.location.href = `/liveExp/${item.live_id}`)
                    : item.status === "PLAY"
                    ? alert("이미 게임이 시작되었습니다.")
                    : alert("접근할수없습니다");
                }}
                url={item.m_img}
                title={item.title}
                //   const {
                //     score,
                //     tags,
                //     taglist,
                //     price,
                //     like_count,
                //     like_id,
                //     category
                // } = this.props;
              />
            </div>
            //   <LiveItem key={index} />
          ))}
        </div>
      )
    );
  }
}
