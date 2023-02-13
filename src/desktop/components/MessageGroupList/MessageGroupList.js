import React from "react";
import { goto } from "navigator";
import MemberSearchForm from "desktop/components/Commons/Search/MemberSearchForm";
import DateFormat from "modules/DateFormat";
import * as styled from "./styles";
import noprofile from "resources/Profile.svg";
const SearchBox = () => {
  return (
    <MemberSearchForm
      placeholder={"대화상대 찾아보기"}
      disabled_filter
      keyword={null}
    />
  );
};
class MessageGroupList extends React.Component {
  render() {
    const { groups = [] } = this.props;
    const PeerElement = function ({
      message_group_id,
      unread,
      url,
      nick_name,
      message,
      create_at,
    }) {
      return (
        <styled.Peer
          onClick={() => goto("MESSAGE", message_group_id)}
          url={url}
          className="row"
        >
          <div className="thumbnail">
            <img alt="thumbnail" src={url || noprofile} className="thumbnail" />
            {/* {unread !== 0 && <div className="led">{unread}</div>} */}
          </div>
          <div className="col text-wrapper">
            <div className="nick">{nick_name}</div>
            <div className="recent">{message}</div>
          </div>
          <div className="date">{DateFormat(create_at)}</div>
        </styled.Peer>
      );
    };
    return (
      <styled.Container>
        <styled.MessageText>메시지</styled.MessageText>
        <SearchBox />
        <styled.MessageContainer>
          <styled.Groups>
            {groups && groups.length > 0 ? (
              groups.map((item, index) => <PeerElement key={index} {...item} />)
            ) : (
              <div className="no-data">대화 내역 없습니다.</div>
            )}
          </styled.Groups>
          <styled.ChatDetail></styled.ChatDetail>
        </styled.MessageContainer>
      </styled.Container>
    );
  }
}
export default MessageGroupList;
