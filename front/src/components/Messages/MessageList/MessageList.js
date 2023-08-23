import React from "react";
import noImage from "source/thumbnail.png";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import new_logo_plus2 from "source/new_logo_plus2.svg";
import SearchMemberContainer from "containers/Commons/SearchMemberContainer/SearchMemberContainer";
import MessageDetailContainer from "containers/Messages/MessageDetailContainer";
import Socket from "modules/Socket";
import { alert } from "components/Commons/Alert/Alert";
import opendesign_style from "opendesign_style";
import sendImg from "source/msg_send_btn.svg";
import DateFormat from "modules/DateFormat";

const MainBox = styled.div`
  width: 100%;
  height: ${window.innerHeight * 0.8}px;
  min-height: 600px;
  height: 80vh;
  margin-top: 10px;
  margin-bottom: 20px;
  * {
    // border:1px solid black;
    font-family: Noto Sans KR;
    color: #707070;
  }
  .flexBox_column {
    display: flex;
    flex-direction: column;
  }
  .flexBox_row {
    display: flex;
  }
  .content_center {
    justify-content: center;
  }
  .items_center {
    align-items: center;
  }
  .bg_gray {
    background-color: #efefef;
  }
  .font_big {
    font-size: 20px;
  }
  .font_middle {
    font-size: 18px;
  }
  .font_small {
    font-size: 16px;
  }
  .font_mini {
    font-size: 12px;
  }
  .cursor_pointer {
    cursor: pointer;
  }
  .font_fit {
    font-weight: 300;
  }
  .font_bold {
    font-weight: 500;
  }
  .border_radius {
    border-radius: 25px;
  }
  .fitBox {
    width: max-content;
    height: max-content;
  }

  .mainBanner {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    .label {
      min-width: 90%;
    }
  }
  .mainContent {
    width: 100%;
    height: 100%;
    margin-top: 25px;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    overflow: hidden;
  }
  .mobilelistIcon {
    padding: 0px 5px;
    width: 50px;
    height: 50px;
    display: none;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 0px) and (max-width: 1024px) {
    margin-top: 25px;
    .wrapper {
      height: 90%;
      flex-direction: column;
    }
  }
  // @media only screen and (min-width : 0px) and (max-width:500px) {

  //   // border:1px solid black;
  //   min-height:500px;
  //   margin-top:100px;
  //   .wrapper{
  //     height:90%;
  //     flex-direction:column;
  //   }
  // }
  // @media only screen and (min-width : ${opendesign_style.resolutions
    .SmallMinWidth}px)
  // and (max-width:${opendesign_style.resolutions.SmallMaxWidth}px) {
  //   min-height:300px;
  //   margin-bottom:0px;
  //   height:${window.innerHeight * 0.7}px;
  //   .mobilelistIcon{
  //     display:flex;
  //   }
  //   .mainBanner{
  //     display:none;
  //   }
  //   .wrapper{
  //     width:100%;
  //     height:100%;
  //   }
  // }
  @media only screen and (min-width: 1920px) {
    min-width: 1820px;
  }
`;
const RoomListBox = styled.div`
  width: 15%;
  min-width: 270px;
  height: 100%;
  background-color: #efefef;
  z-index: 500;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .header-item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 24px;
      * {
        color: #4f4f4f;
      }
    }
    .opacity_trans {
      opacity: 0;
    }
  }
  .roomList {
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 0px) and (max-width: 1024px) {
    padding: 10px 40px;
    width: 100%;
    height: 40%;
    overflow: hidden;
  }
  // @media only screen and (min-width : 0px) and (max-width:500px) {
  //   padding:5px 40px;
  //   width:100%;
  //   height:40%;
  //   overflow:hidden;
  // }
  //   @media only screen and (min-width : ${opendesign_style.resolutions
    .SmallMinWidth}px)
  //   and (max-width:${opendesign_style.resolutions.SmallMaxWidth}px) {
  //     height:${(props) => (props.isSelectMsg === true ? "60px" : "100%")};
  //     overflow:hidden;
  // }
`;
const WhiteBox = styled.div`
  width: 1%;
  min-width: 5px;
  height: 100%;
  background-color: white;
  @media only screen and (min-width: 0px) and (max-width: 1024px) {
    width: 100%;
    height: 1%;
  }
  // @media only screen and (min-width : 0px) and (max-width:500px) {
  //   width:100%;
  //   height:1%;
  // }
`;
const ChatBox = styled.div`
  // *{
  //   border:1px solid black;
  // }
  width: 100%;
  height: 100%;
  background-color: #efefef;
  position: relative;
  display: flex;
  flex-direction: column;
  .header {
    margin-top: 25px;
    margin-left: 40px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
  }
  .wrapper {
    width: 100%;
    height: 100%;
    // border:1px solid blue;
  }
  .content {
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    padding: 0px 2%;
  }
  .send {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    padding: 20px 37px;
    .sendBox {
      min-width: 100%;
      height: 100%;
      border-top: 1px solid #707070;
      background-color: #efefef;
    }
    .sendButton_wrap {
      position: absolute;
      display: flex;
      align-items: center;
      min-width: 55px;
      max-width: 55px;
      max-height: 130px;
      height: 100%;
      right: 3%;
    }
    .sendButton {
      min-width: 55px;
      min-height: 55px;
      max-width: 55px;
      max-height: 55px;
      cursor: pointer;
      background-image: url(${sendImg});
      background-size: contain;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 1024px) {
    width: 100%;
    min-height: 70%;
    .send {
      absolute: fixed;
      height: 25%;
    }
  }
  // @media only screen and (min-width : 0px) and (max-width:500px) {
  //   width:100%;
  //   min-height:70%;
  //   .send{
  //     absolute:fixed;
  //     height:25%;
  //   }
  // }
  // @media only screen and (min-width : ${opendesign_style.resolutions
    .SmallMinWidth}px)
  //   and (max-width:${opendesign_style.resolutions.SmallMaxWidth}px) {
  //     display:${(props) => (props.isSelectMsg === true ? "flex" : "none")}
  //     .content{
  //       padding: 0px 5%;
  //     }
  //     .header{
  //       margin-top:0px;
  //     }
  // }
`;

const SearchMemberBox = styled.div`
  // width: 100%;
  // padding-left: 10px;
  // padding-right: 10px;
  // height: max-content;
  // position: absolute;
  // top: 50px;
  // z-index: 900;
`;
const PlusIcon = styled.div`
  cursor: pointer;
  width: 65px;
  height: 65px;
  min-width: 30px;
  min-height: 30px;
  color: #707070;
  background: url(${new_logo_plus2});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 1;
  :hover {
    opacity: 0.5;
  }
  @media only screen and (min-width: ${opendesign_style.resolutions
      .SmallMinWidth}px) and (max-width: ${opendesign_style.resolutions
      .SmallMaxWidth}px) {
    display: ${(props) => (props.isSelectMsg === true ? "none" : "flex")};
  }
`;
const SendButton = styled.div`
  min-width: 10%;
  height: 100%;
  background-color: white;
  border: 1px solid #efefef;
  border-radius: 0px 0px 25px 0px;
  border-top: 1px solid #707070;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.7;
  }
  .sendButton_label {
    font-family: Noto Sans KR;
    font-size: 18px;
    font-weight: 500;
    color: #707070;
  }
`;
const SendMessageTextarea = styled.div`
  max-width: 100%;
  min-width: 100%;
  height: 100%;
  font-size: 18px;
  text-align: left;
  line-height: 27px;
  background-color: #efefef;
  resize: none;
  border: none;
  outline: none;
  padding: 20px 125px 0px 0px;
  overflow: auto;
  @media only screen and (min-width: 780px) and (max-width: 1440px) {
  }
  @media only screen and (min-width: 360px) and (max-width: 780px) {
    height: 100%;
  }
`;
const SummaryList = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  padding-bottom: 50px;
  &:hover {
    overflow-y: overlay;
  }
  @media only screen and (min-width: 0px) and (max-width: 1024px) {
    padding-top: 5px;
  }
  // @media only screen and (min-width : 0px) and (max-width:500px) {
  //   padding-top:5px;
  //   overflow-y:auto;
  // }
`;
const SummaryItemBox = styled.div`
  * {
    cursor: pointer;
  }
  cursor: pointer;
  position: relative;
  width: 100%;
  opacity: ${(props) => (props.isSelect === true ? 1 : 0.5)};
  display: flex;
  padding: 15px 21px;
  .summary_box {
    // width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 22px;
  }
  .summary_Name {
    width: 100%;
    height: 19px;
    font-size: 14px;
    font-weight: 500;
    font-family: Spoqa Han Sans Neo;
    color: #4f4f4f;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .summary_message {
    // width: 100%;
    // height: 22px;
    // font-size: 14px;
    // font-weight: 200;
    // font-family: Noto Sans KR;
    // color: #707070;
    // text-align: left;
    // line-height: 19px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 223px;
    height: 56px;
    text-align: left;
    font: normal normal medium 15px/25px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
  @media only screen and (min-width: 0px) and (max-width: 1024px) {
    padding-top: 5px;
    margin-bottom: 0px;
    height: max-content;
    .summary_message {
      // display:none;
    }
  }
  // @media only screen and (min-width : 0px) and (max-width:500px) {
  //   padding-top:5px;
  //   margin-bottom:0px;
  //   height:max-content;
  //   .summary_message{
  //     display:none;
  //   }
  // }
  &:hover {
    background-color: rgb(255, 255, 255, 0.53);
  }
`;
const SummaryIcon = styled.div`
  // min-width: 57px;
  // min-height: 57px;
  // max-width: 57px;
  // max-height: 57px;
  // border-radius: 50%;
  background: url(${(props) => props.imageURL});
  background-color: white;
  background-size: cover;
  background-position: center center;
  width: 91px;
  height: 90px;
  box-shadow: 0px 15px 30px #00000029;
  border-radius: 16px;
  opacity: 1;
  // background: transparent url(${(props) =>
    props.imageURL}) 0% 0% no-repeat padding-box;
  // box-shadow: 8px 8px 6px #00000029;
  // .noti {
  //   width: 10px;
  //   height: 10px;
  //   background-color: #ff0000;
  //   border-radius: 50%;
  // }
  // // @media only screen and (min-width : 0px) and (max-width:500px) {
  // //   min-width:35px;
  // //   min-height:35px;
  // //   max-width:35px;
  // //   max-height:35px;
  // // }
`;
// new Design sytled components
const Title = styled.div`
  margin: auto;
  width: 78px;
  height: 36px;
  text-align: center;
  font: normal normal 700 30px/36px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;
const SearchBar = styled.div`
  margin-top: 19px;
  margin: auto;
  min-width: 500px;
  width: 100%;
  max-width: 957px;
  height: 63px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 10px #00000029;
  border: 1px solid #c4c4c44b;
  border-radius: 20px;
  opacity: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  span {
    text-align: left;
    font: normal normal bold 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }
  input {
    min-width: 300px;
    width: 100%;
    max-width: 642px;
    height: 31px;
    background: #e9e9e9 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
  }
  button {
    min-width: 100px;
    width: 100%;
    max-width: 150px;
    height: 31px;
    background: #ff0000 0% 0% no-repeat padding-box;
    opacity: 1;
    span {
      width: 52px;
      height: 18px;
      text-align: center;
      font: normal normal bold 15px/18px Pretendard;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
`;
const Peers = styled.div`
  overflow-y: auto;
  max-height: 500px;
`;

const Peer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 58px;
  opacity: ${(props) => (props.isSelect === true ? 1 : 0.5)};

  img {
    background: url(${(props) => props.thumbnail || noImage});
    background-color: white;
    background-size: cover;
    background-position: center center;
    width: 91px;
    height: 90px;
    box-shadow: 0px 15px 30px #00000029;
    border-radius: 16px;
    opacity: 1;
  }
  .nick {
    height: 25px;
    text-align: left;
    font: normal normal 500 21px/25px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
  .date {
    width: 112px;
    height: 24px;
    text-align: left;
    font: normal normal 500 20px/24px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
  .recent {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 150px;
    width: 100%;
    max-width: 223px;
    height: 56px;
    text-align: left;
    font: normal normal 700 15px/25px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
`;
const DetailWrapper = styled.div`
  margin-left: 27px;
  min-width: 500px;
  width: 100%;
  max-width: 1306px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 5px #0000001a;
  border: 0.25px solid #b7b7b7;
  border-radius: 20px;
  opacity: 1;
  textarea {
    border: none;
    margin-left: 10px;
    margin-right: 20px;
    padding: 5px;
    resize: none;
    width: 100%;
    max-width: 1136px;
    height: 60px;
    background: #e9e9e9 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
  }
  button {
    margin-right: 10px;
    width: 100px;
    height: 50px;
    border: 1px solid #ff0000;
    opacity: 1;
    span {
      width: 38px;
      height: 18px;
      text-align: center;
      font: normal normal 700 15px/18px Pretendard;
      letter-spacing: 0px;
      color: #ff0000;
      opacity: 1;
    }
  }
  @media only screen and (max-width: 500px) {
    margin-left: 0px;
  }
`;
function SummaryItem(props) {
  return (
    <SummaryItemBox isSelect={props.opacityON}>
      <SummaryIcon imageURL={props.s_img}>
        {props.noti ? <div className="noti" /> : undefined}
      </SummaryIcon>
      <div className="summary_box">
        <div className="summary_Name">{props.friend_name}</div>
        {props.message && props.message.indexOf("<img") != -1 ? (
          <div className="summary_message">
            <Icon className="picture" size="large" />
            사진첨부
          </div>
        ) : (
          <div
            className="summary_message"
            dangerouslySetInnerHTML={{
              __html:
                props.message && props.message.indexOf("<img") != -1
                  ? `<Icon className="picture" size="mini"/>사진첨부`
                  : props.message.replace(/<br\/>/g, ""),
            }}
          />
        )}
        {/* <div className="summary_message" 
        dangerouslySetInnerHTML={{ __html: props.message && props.message.indexOf("<img")!=-1? `<Icon className="picture" size="mini"/>사진첨부`: props.message.replace(/<br\/>/g, "") }}/> */}
      </div>
    </SummaryItemBox>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 85px;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      w: window.innerWidth > 1920 ? 1920 : window.innerWidth,
      // msgValue: '',
      msgId: -1,
      selectId: null,
      selectName: null,
      openMember: false,
      showSearch: false,
      friendList: [],
      render: true,
      memberSearch: false,
    };
    // this.handleChangeMsgValue = this.handleChangeMsgValue.bind(this);
    // this.initMsgValue = this.initMsgValue.bind(this);
    this.handleClickSend = this.handleClickSend.bind(this);
    this.handleSelectMsgSummary = this.handleSelectMsgSummary.bind(this);
    this.handleOpenMember = this.handleOpenMember.bind(this);
    this.handleClickSearchMemberItem =
      this.handleClickSearchMemberItem.bind(this);
    this.handleCloseMember = this.handleCloseMember.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.getValue = this.getValue.bind(this);
  }
  async componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    await this.props.GetMyMsgListRequest(this.props.token).then(async (res) => {
      if (res.MsgList && res.MsgList.length > 0) {
        let arr = [];
        arr = res.MsgList.map((list) => {
          return list.friend_id;
        });
        await this.setState({
          friendList: arr,
        });
      }
    });
    if (this.props.id && this.props.name) {
      let id = parseInt(this.props.id, 10);
      this.selectMember({
        email: null,
        nick_name: this.props.name,
        uid: id,
      });
      try {
        Socket.on("reload_msglist", () => {
          this.setState({ render: true });
        });
      } catch (err) {
        console.error(err);
      }
    }
    if (this.props.id && this.props.name) {
      this.setMsgId(-1, this.props.id, this.props.name);
    }
    if (this.props.ChatRooms && this.props.ChatRooms.length > 0) {
      for (let i = 0; i < this.props.ChatRooms.length; i++) {
        if (this.props.ChatRooms[i].count != null) {
          this.setMsgId(
            this.props.ChatRooms[i].uid,
            this.props.ChatRooms[i].friend_id,
            this.props.ChatRooms[i].friend_name
          );
          break;
        }
      }
    }
    document.getElementById("sendMsgBox") &&
      document.getElementById("sendMsgBox").focus();
  }
  shouldComponentUpdate(nextProps) {
    setTimeout(() => {}, 100);
    if (JSON.stringify(this.props.id) !== JSON.stringify(nextProps.id)) {
      if (nextProps.id && nextProps.name) {
        let id = parseInt(nextProps.id, 10);
        this.selectMember({
          email: null,
          nick_name: nextProps.name,
          uid: id,
        });
      }
    }
    return true;
  }
  getValue = (value) => {
    this.setState({
      openMember: true,
    });
    if (!value) {
      this.setState({
        openMember: false,
      });
      return;
    }
    this.props.SearchMemberRequest(null, { key: value }, this.props.token);
  };
  selectMember = async (data) => {
    await this.setState({
      render: false,
    });
    const index = this.state.friendList.indexOf(data.uid);
    console.log(this.state, this.props.MessageList, index);
    if (index === -1) {
      this.setState({
        selectId: data.uid,
        selectName: data.nick_name,
        openMember: false,
        msgId: -1,
        render: true,
      });
    } else {
      this.setState({
        selectId: data.uid,
        selectName: data.nick_name,
        openMember: false,
        msgId: this.props.MessageList[index].uid,
        render: true,
      });
    }
    // console.log("1111111111" + this.state.selectId);
  };
  setMsgId = async (group_id, user_id, user_name) => {
    await this.setState({
      msgId: group_id,
      selectId: user_id,
      selectName: user_name,
      openMember: false,
      render: false,
    });
    this.setState({ render: true });
    await this.handleCloseMember();
    (await document.getElementById("sendMsgBox")) &&
      (await document.getElementById("sendMsgBox").focus());
  };
  onSubmitForm = async (data) => {
    if (this.state.selectId === null) {
      await alert("받는 사람을 지정해주세요.", "확인");
      return;
    }
    // let msg = ``;
    // const innerHtmlValue = document.getElementById("sendMsgBox").innerHTML;
    const innerHtmlValue = document.getElementById("sendMsgBox").value;
    console.log(innerHtmlValue, document.getElementById("sendMsgBox"));

    if (innerHtmlValue === "") {
      await alert("텍스트를 입력해주세요.", "확인");
      return;
    }

    this.props
      .SendMessageRequest(
        this.props.token,
        { message: innerHtmlValue },
        this.state.selectId
      )
      .then(async (res) => {
        if (res.data && res.data.success === true) {
          await this.props.GetMyMsgListRequest(this.props.token);
          await this.setState({ msgId: res.data.groupId, render: false });
        }
        this.setState({ render: true });
        this.props.history.replace("/message");
      });

    // document.getElementById("sendMsgBox").innerHTML = "";
    document.getElementById("sendMsgBox").value = "";
    // this.initMsgValue();
  };
  // handleChangeMsgValue(event) {
  //   this.setState({ msgValue: event.target.value })
  // }
  // initMsgValue() {
  //   this.setState({ msgValue: "" })
  // }
  handleClickSend() {
    console.log(this.props);
  }
  handleSelectMsgSummary(select_id, select_name, msgID) {
    this.setState((state) => ({
      selectId: select_id,
      selectName: select_name,
      msgId: msgID,
    }));
  }
  handleOpenMember() {
    this.setState({ showSearch: !this.state.showSearch });
  }
  async handleClickSearchMemberItem(id, name, event) {
    // this.setMsgId(-2, id, name);
    alert(id);
    let room_id = -2;
    (await this.props.ChatRooms) &&
      this.props.ChatRooms.length > 0 &&
      this.props.ChatRooms.map((chat) => {
        if (chat.friend_id == id && chat.friend_name == name) {
          room_id = chat.uid;
        }
      });
    (await this.props.userInfo) &&
      (await this.props.GetMyChatRoomsListRequest(this.props.token));
    await this.setMsgId(room_id, id, name);
    this.setState({ memberSearch: false });
  }
  handleCloseMember() {
    this.setState({ showSearch: false });
  }
  handleResize() {
    const w = window.innerWidth > 1920 ? 1920 : window.innerWidth;
    this.setState({ w: w });
  }

  // member search(+) button
  searchRef = React.createRef();
  checkClickOutSideMemberSearch = (event) => {
    console.log(event, this.searchRef.current, event.target);

    if (this.searchRef.current === null) return;
    if (!this.searchRef.current.contains(event.target)) {
      document.removeEventListener(
        "mousedown",
        this.checkClickOutSideMemberSearch
      );
      this.setState({ memberSearch: false });
    }
  };
  openMemberSearch = (event) => {
    document.addEventListener("mousedown", this.checkClickOutSideMemberSearch);
    this.setState({ memberSearch: true });
  };

  render() {
    // const { w } = this.state;

    const maxH = 869 + 25 + 48 + 8 + 55;
    const H = window.innerHeight < maxH ? window.innerHeight - 200 : 869;
    const { ChatRooms } = this.props;
    console.log({ ChatRooms });

    return (
      <React.Fragment>
        <Title>메세지</Title>
        <SearchBar>
          <div>
            <span>닉네임/경험</span>
          </div>
          <div>
            {/* <input placeholder="대화상대 찾기" /> */}
            <SearchMemberBox ref={this.searchRef}>
              <SearchMemberContainer
                // inputWidth={100}
                marginLeft={0}
                id="searchRect"
                addMemberItem={this.handleClickSearchMemberItem}
              />
            </SearchMemberBox>
          </div>
          <div>
            <button>
              <span>찾아보기</span>
            </button>
          </div>
        </SearchBar>

        <Container>
          <Wrapper>
            <Peers>
              {ChatRooms?.length > 0 &&
                ChatRooms.map((chat) => (
                  // { count :  null
                  //   friend_id : 1950
                  //   friend_name : "유저"
                  //   from_user_id :  1949
                  //   recent :  "dkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdk"
                  //   thumbnail : "https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/place/thumbnails/1692151683315-x200.png"
                  //   to_user_id :  1950
                  //   uid : 327
                  //   update_time : "2023-08-21T15:34:16.000Z"}
                  <Peer
                    key={chat.uid}
                    isSelect={this.state.selectId === chat.friend_id}
                    onClick={async () => {
                      (await this.props.userInfo) &&
                        (await this.props.GetMyChatRoomsListRequest(
                          this.props.token
                        ));
                      await this.setMsgId(
                        chat.uid,
                        chat.friend_id,
                        chat.friend_name
                      );
                    }}
                  >
                    <div>
                      <img src={chat.thumbnail} />
                    </div>
                    <div style={{ marginLeft: "15px", width: "225px" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <span className="nick">{chat.friend_name}</span>
                        <span className="date">
                          {chat.update_time?.split("T")[0].replaceAll("-", ".")}
                        </span>
                      </div>
                      <div className="recent">{chat.recent}</div>
                    </div>
                  </Peer>
                ))}
            </Peers>
          </Wrapper>

          <DetailWrapper>
            <div
              style={{
                margin: "auto",
                width: "max-content",
                height: "36px",
                textAlign: "center",
                font: "normal normal 700 30px/36px Pretendard",
                letterSpacing: "0px",
                color: "#000000",
                opacity: "1",
              }}
            >
              {/* title */}
              {this.state.selectName}
            </div>
            <hr />
            <div
              style={{
                width: "100%",
                // height: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0px 2%",
              }}
            >
              {this.state.render && (
                <MessageDetailContainer
                  height={500}//H > 1000 ? 1000 : H}
                  // height={H - (196)}
                  repaint={this.state.render}
                  id={this.state.msgId}
                />
              )}
            </div>
            {this.state.selectName && (
              <>
                <hr />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                    justifyContent: "center",
                    paddingBottom: "5px",
                  }}
                >
                  {/* <textarea /> */}
                  <textarea contentEditable="true" id="sendMsgBox" />
                  <button onClick={this.onSubmitForm}>
                    <span>보내기</span>
                  </button>
                </div>
              </>
            )}
          </DetailWrapper>
        </Container>
      </React.Fragment>
    );
  }
}

export default Messages;

// <MainBox>
// <div className="mainContent flexBox justifyContent">
//   <div className="wrapper">
//     <RoomListBox isSelectMsg={this.state.msgId === -1 ? false : true}>
//       <div className="roomList">
//         <SummaryList id="searchRect">
//           {this.props.ChatRooms &&
//             this.props.ChatRooms.length > 0 &&
//             this.props.ChatRooms.map((chat) =>
//               chat.recent != null ? (
//                 <div
//                   key={chat.uid}
//                   onClick={async () => {
//                     (await this.props.userInfo) &&
//                       (await this.props.GetMyChatRoomsListRequest(
//                         this.props.token
//                       ));
//                     await this.setMsgId(
//                       chat.uid,
//                       chat.friend_id,
//                       chat.friend_name
//                     );
//                   }}
//                 >
//                   <SummaryItem
//                     noti={chat.count && chat.count > 0}
//                     opacityON={this.state.selectId === chat.friend_id}
//                     s_img={chat.thumbnail || noImage}
//                     friend_name={chat.friend_name}
//                     message={chat.recent}
//                   />
//                 </div>
//               ) : null
//             )}
//         </SummaryList>
//       </div>
//     </RoomListBox>
//     <WhiteBox />
//     <ChatBox isSelectMsg={this.state.msgId == -1 ? false : true}>
//       <div className="header">
//         <div className="fitBox font_big font_bold">
//         </div>
//       </div>
//       <div className="wrapper">
//         <div className="content">

//         </div>
//         <div className="send">
//           <div className="sendBox">

//           </div>
//           <div className="sendButton_wrap">
//             <div className="sendButton" onClick={this.onSubmitForm} />
//           </div>
//           {/* <div className="sendButton"/> */}
//           {/* <SendButton className="cursor_pointer" onClick={this.onSubmitForm}>
//             <div className="sendButton_label">전송하기</div></SendButton> */}
//         </div>
//       </div>
//     </ChatBox>
//   </div>
// </div>
// </MainBox>
