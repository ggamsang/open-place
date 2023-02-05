import React from "react";
import * as styled from "./styles";
import NeedToLogin from "../../mobile/verify";
import PageLayout from "../../components/PageLayout";
import { authGET, TokenName } from "../../constants";
import host from "../../config";
import { useEffect } from "react";
import { useState } from "react";
import { GetSession } from "../../mobile/modules";
import DateFormat from "../../mobile/modules/DateFormat";
import { useRef } from "react";
// import Socket from "../../mobile/modules/Socket";
import { useParams } from "react-router-dom";

const UserChat = ({ nick_name, create_at, message, url }) => {
  return (
    <styled.UserChat>
      <styled.UserImg url={url} />
      <styled.UserInfo>
        <styled.UserNameAndDate>
          <span>{nick_name}</span>
          <span>{DateFormat(create_at)}</span>
        </styled.UserNameAndDate>
        <styled.UserNotification>{message}</styled.UserNotification>
      </styled.UserInfo>
    </styled.UserChat>
  );
};
const MessageGroup = ({ reload, onClick }) => {
  const GetMessageGroupRequest = (page, token) => {
    return fetch(`${host}/message/${page}`, authGET(token))
      .then((res) => res.json())
      .then((data) => {
        return data?.detail || [];
      })
      .catch((_) => {
        // console.error(_);
        return [];
      });
  };
  const [page, setPage] = useState(0);
  const [messageGroup, setMessageGroup] = useState([]);
  const GetList = () => {
    GetSession(TokenName).then(async (token) => {
      const list = await GetMessageGroupRequest(page, token);
      setMessageGroup(list);
    });
  };

  useEffect(() => {
    reload && GetList();
  }, [reload]);

  useEffect(() => {
    GetList();
  }, []);

  return (
    <styled.ChatList>
      {messageGroup?.map((group, index) => (
        <li key={index} onClick={(_) => onClick(group.message_group_id)}>
          <UserChat {...group} />
        </li>
      ))}
    </styled.ChatList>
  );
};

const MessageDetail = ({ sent, selected, user_id }) => {
  const [page, setPage] = useState(0);
  const [detail, setDetail] = useState([]);
  const [opponent, setOpponent] = useState(null);
  const [more, noMore] = useState(true);
  const socket = null;
  //  new Socket("message")
  //   .emit("alive", {
  //     gid: selected,
  //     uid: user_id,
  //   })
  //   .once("chat", (chat) => {
  //     console.log("chat:", chat, detail);
  //   });
  useEffect(() => {
    return () => {
      socket && socket.close();
      console.log("unmount");
    };
  }, []);
  const GetMessageDetailRequest = (token, page, group_id) => {
    console.log(`${host}/message/${group_id}/detail/${page}`);
    return fetch(`${host}/message/${group_id}/detail/${page}`, authGET(token))
      .then((res) => res.json())
      .then((res) => res.detail)
      .catch((_) => []);
  };

  const GetMessageOpponentInfoRequest = (token, group_id) => {
    return fetch(`${host}/message/${group_id}/detail`, authGET(token))
      .then((res) => res.json())
      .then((res) => res.info)
      .catch((_) => null);
  };
  useEffect(() => {
    selected &&
      GetSession(TokenName).then(async (token) => {
        setPage(0);
        setOpponent(null);
        setDetail([]);
        noMore(true);
        const _detail = await GetMessageDetailRequest(token, 0, selected);
        setDetail(_detail.reverse());
        if (_detail.length < 10) {
          noMore(false);
        }
        const info = await GetMessageOpponentInfoRequest(token, selected);
        setOpponent(info);
        // const chats = document.getElementById("chats");
        // setTimeout(() => {
        //   if (chats && chats.clientHeight >= 100) {
        //     chats.scrollTop = chats.scrollHeight;
        //   }
        // }, 1000);
      });

    // const chats = document.getElementById("chats");
    // chats &&
    //   chats.addEventListener("scroll", async (e) => {
    //     if (more && e.target.scrollTop === 0) {
    //       // chats.scrollTo({ top: 5, behavior: "smooth" });
    //       // console.log("get more!");
    //       // console.log("request:", page + 1, selected, more);
    //       getMore();
    //     }
    //   });
  }, [selected]);

  const getMore = () => {
    GetSession(TokenName).then(async (token) => {
      const _detail = await GetMessageDetailRequest(token, page + 1, selected);
      setDetail(_detail.reverse().concat(detail));
      if (_detail.length < 10) {
        noMore(false);
      }
      console.log(_detail);
    });
    setPage(page + 1);
  };

  const handleScroll = (e) => {
    if (e.target.scrollTop === 0) {
      more && getMore();
      more && e.target.scrollTo({ top: 10 });
    }
  };
  const handlePaste = (e) => {
    // if (e.clipboardData && e.clipboardData.getData) {
    //   const node = document.getElementById("box");
    //   node.innerHTML = e.clipboardData.getData("text/html");
    // }
  };
  const send = () => {
    const text = document.getElementById("box");
    if (text.innerHTML) {
      socket &&
        socket.emit("chat", {
          gid: selected,
          uid: user_id,
          text: text.innerHTML,
          create_at: new Date().getTime(),
        });
      // console.log(text.innerHTML);
      text.innerHTML = "";
      sent();
    }
  };
  return selected ? (
    <styled.ChatWindow>
      debug: {selected},{page},{more ? "more" : "no-more"},{detail.length}
      <styled.NicknameText>{opponent?.nick_name}</styled.NicknameText>
      <styled.HorizonLine />
      {/* message list */}
      <styled.ChatWrapper id="chats" onScroll={handleScroll}>
        {detail.map((msg, index) =>
          user_id === msg.user_id ? (
            <styled.MyChat key={index}>
              <styled.ChatDate>{DateFormat(msg.create_at)}</styled.ChatDate>
              <styled.ChatBubble>{msg.message}</styled.ChatBubble>
            </styled.MyChat>
          ) : (
            <styled.OtherChat key={index}>
              <styled.ChatBubble>{msg.message}</styled.ChatBubble>
              <styled.ChatDate>{DateFormat(msg.create_at)}</styled.ChatDate>
            </styled.OtherChat>
          )
        )}
      </styled.ChatWrapper>
      {/* only for debug */}
      {more && <button onClick={() => getMore()}>{"more"}</button>}
      {/* send-wrapper */}
      <styled.SendMessageDiv>
        <styled.ChatInputBox
          contentEditable={true}
          id="box"
          // placeholder="asljflaskfjslakfjlsdkfjls"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (e.shiftKey) {
                return;
              }
              if (e.nativeEvent.isComposing === false) {
                e.preventDefault();
                send();
              }
            }
          }}
          onPaste={handlePaste}
        />
        <styled.SendButton onClick={send}>
          <span>보내기</span>
        </styled.SendButton>
      </styled.SendMessageDiv>
    </styled.ChatWindow>
  ) : (
    <styled.ChatWindow>
      <p>
        {
          "대화상대를 클릭하여주세요. 원하는 상대가 목록에 없다면 상단에서 상대를 검색하세요."
        }
      </p>
    </styled.ChatWindow>
  );
};
const SearchBox = () => {
  return (
    <styled.MessageBox>
      <span>닉네임/경험</span>
      <styled.FindPeople>
        <span>대화상대 찾기</span>
      </styled.FindPeople>
      <styled.FindButton>
        <span>찾아보기</span>
      </styled.FindButton>
    </styled.MessageBox>
  );
};
const Message = ({ /* loggedIn, */ userInfo }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [reload, setReload] = useState(0);
  const handleClickedUser = (id) => {
    setSelectedUser(id);
  };
  const handleSent = () => {
    setReload(reload + 1);
  };
  return userInfo ? (
    <styled.Container>
      {/* title */}
      <styled.MessageText>메세지</styled.MessageText>
      {/* find someone */}
      <SearchBox />
      {/* wrapper */}
      <styled.Wrapper>
        {/* user list */}
        <MessageGroup reload={reload} onClick={handleClickedUser} />
        {/* message detail */}
        <MessageDetail
          sent={handleSent}
          user_id={userInfo.uid}
          selected={selectedUser}
        />
      </styled.Wrapper>
    </styled.Container>
  ) : (
    <React.Fragment>{"verifying...wait a minute :)"}</React.Fragment>
  );
};
const MessagePage = () => {
  return NeedToLogin(
    <PageLayout>
      <Message />
    </PageLayout>
  );
};

export default MessagePage;
