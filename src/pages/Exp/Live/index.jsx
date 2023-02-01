import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import Button from "../../../mobile/commons/Button";
import NeedToLogin from "../../../mobile/verify";
import * as styled from "./styles";
import { goto } from "../../../utils/navigator";

function LiveExpDetail({ live_id, userInfo }) {
  const [status, setState] = useState("INIT");
  const [detail, setDetail] = useState(null);
  const [gamepoint, setGamePoint] = useState(null);
  const [url, setUrl] = useState("");
  const gotoplaylist = () => goto("PLAY", "1/null");
  const socket =null;/* io("https://place.opensrcdesign.com/waiting", {
    path: "/socket.io",
    transports: ["websocket", "polling", "flashsocket"],
  })
    .on("user-list", (obj) => {
      console.log(obj);
    })
    .on("started", (obj) => {
      const { user, game } = obj;
      if (user === userInfo.id) {
        alert("게임에 참가합니다.");
        try {
          setUrl(JSON.parse(JSON.parse(game.url)["game_files"])[0].path);
          setState("START");
          setGamePoint(game.gamepoint);
        } catch (e) {
          console.error(e);
          alert("게임을 시작할 수 없습니다.");
          gotoplaylist();
        }
      } else {
        alert(
          `게임 개설자가 ${user}와 게임을 시작하였습니다.\n리스트 페이지로 이동합니다.`
        );
        gotoplaylist();
      }
    })
    .on("close-room", () => {
      alert("게임이 종료되었습니다.\n 놀기 페이지로 이동합니다.");
      gotoplaylist();
    }); */
  socket && socket.emit("standby", { room: live_id });
  const RequestJoin = () => {
    socket &&
      socket.emit("join", {
        roomNum: live_id,
        user: userInfo,
      });

    socket && socket.emit("get-users", { roomNum: live_id });
    setStatus("JOIN");
  };
  const GetLiveExpDetail = () => {
    const url = `${host}/user/exp/live/${live_id}`;
    fetch(url, GET)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          if (data.detail?.opener === userInfo.uid) {
            alert("개설자의 페이지로 이동합니다.");
            goto("SOMEWHERE", `paidExp/${data.detail.payment_id}`);
          }
          if (data.detail) {
            if (data.detail.status === "LIVE") {
              setDetail(data.detail);
              setStatus("STANDBY");
            } else {
              alert("게임이 이미 시작되었습니다.");
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
  useEffect(() => {
    GetLiveExpDetail();
    window.addEventListener("message", (e) => {
      if (e.data === "GAMEOVER") {
        socket && socket.emit("close-room", live_id);
        alert("게임이 종료되었습니다.");
        gotoplaylist();
      }
    });
  }, []);
  return (
    <styled.Container>
      {status === "INIT" && <></>}
      {status === "STANDBY" && (
        <Button w={512} h={256} onClick={() => RequestJoin()}>
          <div className="text">참가신청</div>
        </Button>
      )}
      {status === "JOIN" && (
        <>
          <h3 style={{ width: "max-content", margin: "auto", padding: "15px" }}>
            참가대기중…
          </h3>
        </>
      )}
      {status === "START" && (
        <styled.IFrame
          id="iFrame1"
          src={`${url}?room='${detail?.title}'&name=${userInfo?.nick_name}&url=${userInfo?.l_img}&GAMEPOINT=${this.state.gamepoint}`}
          onLoad={() =>
            (document.getElementById("iFrame1").style.width = "100%")
          }
        />
      )}
    </styled.Container>
  );
}
export default function LiveExpDetailPage() {
  const params = useParams();
  return NeedToLogin(
    <PageLayout>
      <LiveExpDetail live_id={params.id} />
    </PageLayout>
  );
}
