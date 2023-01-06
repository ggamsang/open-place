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
const MessageGroup = ({ onClick }) => {
  const GetMessageGroupRequest = (page, token) => {
    return fetch(`${host}/message/${page}`, authGET(token))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data?.detail || [];
      })
      .catch((_) => {
        console.error(_);
        return [];
      });
  };
  const [page, setPage] = useState(0);
  const [messageGroup, setMessageGroup] = useState([]);
  useEffect(() => {
    GetSession(TokenName).then(async (token) => {
      const list = await GetMessageGroupRequest(page, token);
      setMessageGroup(list);
      console.log(list);
    });
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
const MessageDetail = ({ selected, user_id }) => {
  const [page, setPage] = useState(0);
  const [detail, setDetail] = useState([]);
  const [opponent, setOpponent] = useState(null);
  const [more, noMore] = useState(true);

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
  return selected ? (
    <styled.ChatWindow>
      debug: {selected},{page},{more ? "more" : "no-more"},{detail.length}
      <styled.NicknameText>{opponent?.nick_name}</styled.NicknameText>
      <styled.HorizonLine />
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
      {more && <button onClick={() => getMore()}>{"more"}</button>}
      <styled.SendMessageDiv>
        <styled.ChatInputBox />
        <styled.SendButton>
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
const Message = ({ /*loggedIn,*/ userInfo }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const handleClickedUser = (id) => {
    setSelectedUser(id);
    // console.log(selectedUser);
  };
  return userInfo ? (
    <styled.Container>
      {/* title */}
      <styled.MessageText>메세지</styled.MessageText>

      {/* find someone */}
      <SearchBox />

      <styled.Wrapper>
        {/* user list */}
        <MessageGroup onClick={handleClickedUser} />

        {/* message detail */}
        <MessageDetail user_id={userInfo.uid} selected={selectedUser} />
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

/* */
