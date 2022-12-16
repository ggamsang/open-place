import React from "react";
import styled from "styled-components";
import { goto } from "src/utils/navigator";
// import SearchForm from 'components/Commons/Search/SearchForm';
import MemberSearchForm from "../../components/Commons/Search/MemberSearchForm";
import DateFormat from "../../modules/DateFormat";
import profile from "src/imgs/Profile.svg";

const Peer = styled.div`
  box-sizing: border-box;
  // width: 355px;
  width: 100%;
  height: 79px;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 10px;
  padding: 15px 13px 15px 10px;
  margin-bottom: 15px;

  .thumbnail {
    background-image: url(${(props) => props.url || profile});
    width: 49px;
    height: 49px;
    border-radius: 100%;
    background: #e9e9e9 0% 0% no-repeat padding-box;
    position: relative;
    .led {
      position: absolute;
      transform: translate(-25%, -100%);
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background: #ff0000 0% 0% no-repeat padding-box;
      font: normal normal 500 15px/20px Pretendard;
      color: #ffffff;
      text-align: center;
    }
  }
  &.row {
    display: flex;
    flex-direction: row;
  }
  .col {
    display: flex;
    flex-direction: column;
  }
  .date {
    margin-left: auto;
    height: 16px;
    text-align: left;
    font: normal normal 300 13px/16px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    width: max-content;
  }
  .text-wrapper {
    margin-left: 10px;
  }
  .nick {
    height: 18px;
    text-align: left;
    font: normal normal bold 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #000000;
  }
  .recent {
    margin-top: 5px;
    height: 18px;
    text-align: left;
    font: normal normal normal 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #000000;
  }
`;
const Wrapper = styled.div`
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  .list {
    width: 100%;
    box-sizing: border-box;
    padding: 0px 20px;
  }
  margin: auto;
  .blanker {
    height: 44px;
  }
  .gradient {
    width: 100%;
    height: 100px;
    background: linear-gradient(69deg, #501b1b, #655ffa, #d30e0e);
    background-size: 200% 200%;
    background-position: top right;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      margin: auto;
      margin-top: 18px;
      color: white;
      width: max-content;
      text-align: center;
      font-family: Pretendard;
      font-weight: 500;
      font-size: 20px;
      line-height: 20px;
    }
    margin-bottom: 20px;
  }
  .no-data {
    box-sizing: border-box;
    padding: 10px 15px;
    border: 1px dashed #aaa;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Pretendard;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #999;
    margin-bottom: 25px;
  }
`;

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
        <Peer
          onClick={() => goto("MESSAGE", message_group_id)}
          url={url}
          className="row"
        >
          <div className="thumbnail">
            <img src={url} className="thumbnail" />
            {/* {unread !== 0 && <div className="led">{unread}</div>} */}
          </div>
          <div className="col text-wrapper">
            <div className="nick">{nick_name}</div>
            <div className="recent">{message}</div>
          </div>
          <div className="date">{DateFormat(create_at)}</div>
        </Peer>
      );
    };
    return (
      <Wrapper>
        <div className="gradient">
          <div className="blanker">&nbsp;</div>
          <MemberSearchForm
            placeholder={"대화상대 찾아보기"}
            disabled_filter
            keyword={null}
          />
        </div>
        <div className="list">
          {groups && groups.length > 0 ? (
            groups.map((item, index) => <PeerElement key={index} {...item} />)
          ) : (
            <div className="no-data">대화 내역 없습니다.</div>
          )}
        </div>
      </Wrapper>
    );
  }
}
export default MessageGroupList;