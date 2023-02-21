import React from "react";
import { connect } from "react-redux";
import {
  GetMessageDetailRequest,
  GetMessageOpponentInfoRequest,
} from "actions/Message";
import MessageDetail from "desktop/components/MessageDetail";
import Socket from "modules/socket";

class MessageDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.socket = new Socket("message");
    this.state = { online: false, more: true, newchat: null };
    this.send = this.send.bind(this);
  }

  componentDidUpdate(props) {
    if (props.group_id != this.props.group_id) {
      const { token, userInfo, group_id } = this.props;
      console.log(
        props.group_id != this.props.group_id,
        props.group_id,
        this.props.group_id,
        token,
        userInfo,
        group_id
      );
      if (userInfo && token != null) {
        this.GetDetail(0);
        this.props.GetMessageOpponentInfoRequest(token, group_id);
      }
      return;
    }
    const { token, userInfo, group_id } = this.props;
    if (userInfo && token != null && props.token === null) {
      this.GetDetail(0);
      this.props.GetMessageOpponentInfoRequest(token, group_id);
    }
    if (userInfo != null && props.userInfo === null) {
      this.socket.emit("alive", {
        gid: this.props.group_id,
        uid: userInfo.uid,
      });
      this.socket.on("hello", () => {
        this.setState({ online: true });
      });
      this.socket.on("bye", () => {
        this.setState({ online: false });
      });
      this.socket.on("chat", (chat) => {
        this.setState({
          newchat: chat,
        });
      });
      return true;
    }
  }
  componentWillUnmount() {
    this.socket = null;
  }
  GetDetail = (page) => {
    console.log("GETDETAIL");
    const { token, group_id } = this.props;
    if (token) {
      this.props.GetMessageDetailRequest(token, page, group_id);
    }
  };

  send = (text) =>
    this.socket.emit("chat", {
      gid: this.props.group_id,
      uid: this.props.userInfo.uid,
      text: text,
      create_at: new Date().getTime(),
    });

  render() {
    const { online, newchat } = this.state;
    const { detail, opponent, userInfo } = this.props;

    return (
      <>
        {/* {(detail && detail.length > 0) */}
        {/*  ?  */}
        <MessageDetail
          getMore={this.GetDetail}
          send={this.send}
          header={opponent}
          user_id={userInfo && userInfo.uid}
          chats={detail}
          online={online}
          newchat={newchat}
        />
        {/* : null} */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.Authentication.status.token,
  userInfo: state.Authentication.status.userInfo,
  detail: state.Message.status.detail,
  opponent: state.Message.status.opponent,
});
const mapDispatchToProps = (dispatch) => ({
  GetMessageDetailRequest: (token, page, group_id) =>
    dispatch(GetMessageDetailRequest(token, page, group_id)),
  GetMessageOpponentInfoRequest: (token, group_id) =>
    dispatch(GetMessageOpponentInfoRequest(token, group_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageDetailContainer);
