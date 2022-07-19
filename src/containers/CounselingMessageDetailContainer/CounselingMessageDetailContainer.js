import React from 'react';
import { connect } from 'react-redux';
import {
    GetMessageDetailRequest,
    GetMessageOpponentInfoRequest,
    GetCounselingMessageGroupRequest,
} from "actions/Message";
import Socket from 'modules/socket';
import CounselingMessageDetail from 'components_mobile/CounselingMessageDetail';

class CounselingMessageDetailContainer extends React.Component {

    constructor(props) {
        super(props);
        this.socket = null; // 검증 후 개체 생성 // new Socket('counseling');
        this.state = { online: false, more: true };
    }

    connectAndSetupSocketServer = (detail) => {
        this.socket = new Socket("counseling");
        if (this.socket) {
            this.socket.emit("alive", {
                gid: detail.group_id,
                uid: this.props.userInfo.uid,
            });
            this.socket.on("hello", () => {
                this.setState({ online: true });
            });
            this.socket.on("bye", () => {
                this.setState({ online: false });
            });
            this.socket.on("chat", chat => {
                this.setState({
                    newchat: chat
                });
            });
        }
    }
    componentDidMount() {
        this.props.GetCounselingMessageGroupRequest(this.props.token, this.props.opponent_id);
    }
    componentDidUpdate(props) {
        if (this.props.detail != props.detail && props.detail == null) {
            alert('');
            this.connectAndSetupSocketServer(props.detail);
        }
        // const { token, opponent_id, userInfo } = this.props;
        // console.log("!!!!!", JSON.stringify(userInfo).length, this.props);
        // if (token != null && JSON.stringify(userInfo).length != 0 && this.socket == null) {
        //     
        // }
    }

    componentWillUnmount() {
        this.socket = null;
    }

    GetDetail = (page) => {
        const { token, group_id } = this.props;
        if (token) {
            this.props.GetMessageDetailRequest(token, page, group_id);
        }
    }

    Send = async ({ text, file }) =>
        this.socket && this.socket.emit("chat", {
            gid: this.props.group_id,
            uid: this.props.userInfo.uid,
            text: text,
            file: file,
            create_at: new Date().getTime(),
        });

    render() {
        const { online, newchat } = this.state;
        const { chats, opponent, userInfo, group_id } = this.props;

        return (<>
            <CounselingMessageDetail
                group_id={group_id}
                title={null}
                getMore={this.GetDetail}
                send={this.Send}
                header={opponent}
                user_id={userInfo && userInfo.uid}
                chats={chats}
                online={online}
                newchat={newchat}
            />
        </>);
    }
}

const mapStateToProps = state => ({
    token: state.Authentication.status.token,
    userInfo: state.Authentication.status.userInfo,
    chats: state.Message.status.detail,
    opponent: state.Message.status.opponent,
    group_id: state.Message.status.group_id,
});
const mapDispatchToProps = dispatch => ({
    GetMessageDetailRequest: (token, page, group_id) =>
        dispatch(GetMessageDetailRequest(token, page, group_id)),
    GetMessageOpponentInfoRequest: (token, group_id) =>
        dispatch(GetMessageOpponentInfoRequest(token, group_id)),
    GetCounselingMessageGroupRequest: (token, opponent_id) =>
        dispatch(GetCounselingMessageGroupRequest(token, opponent_id)),
});
export default
    connect(mapStateToProps, mapDispatchToProps)
        (CounselingMessageDetailContainer);