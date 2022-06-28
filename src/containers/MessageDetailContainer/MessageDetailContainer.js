import React from 'react';
import { connect } from 'react-redux';
import {
    GetMessageDetailRequest,
    GetMessageOpponentInfoRequest
} from "actions/Message";
import MessageDetail from 'components_mobile/MessageDetail';
import Socket from 'modules/socket';

class MessageDetailContainer extends React.Component {

    constructor(props) {
        super(props);
        this.socket = Socket;
        this.state = { online: false, more: true };
        this.send = this.send.bind(this);
    }
    componentDidMount() {
        const { token, group_id } = this.props;
        this.props.GetMessageOpponentInfoRequest(token, group_id);
    }
    componentDidUpdate(props) {
        const { token, userInfo } = this.props;
        if (userInfo && token != null && props.token == null) {
            // console.log(userInfo, token);
            // this.GetDetail(0);
        }
        if (userInfo) {
            Socket.emit("alive", { gid: this.props.group_id, uid: userInfo.uid, });

            Socket.on("alive", (alive) => {
                this.setState({
                    online: alive
                });
            });
            Socket.on("chat", chat => {
                this.setState({
                    chats: [...this.props.detail, chat]
                });
            })
        }
        if (userInfo != null && props.userInfo) {
            return true;
        }
    }
    componentWillUnmount() {
        this.socket = null;
    }
    
    GetDetail = page =>
        this.props.GetMessageDetailRequest(
            this.props.token, page, this.props.group_id);

    send = text =>
        Socket.emit("chat", {
            gid: this.props.group_id,
            uid: this.props.userInfo.uid,
            text: text
        });

    render() {
        const { online } = this.state;
        const { detail, opponent, userInfo } = this.props;

        return (<>
            {/* {(detail && detail.length > 0)
                ?  */}
            <MessageDetail
                getMore={this.GetDetail}
                send={this.send}
                header={opponent}
                user_id={userInfo && userInfo.uid}
                chats={detail}
                online={online}
            />
            {/* : null} */}
        </>);
    }
}

const mapStateToProps = state => ({
    token: state.Authentication.status.token,
    userInfo: state.Authentication.status.userInfo,
    detail: state.Message.status.detail,
    opponent: state.Message.status.opponent,
});
const mapDispatchToProps = dispatch => ({
    GetMessageDetailRequest: (token, page, group_id) =>
        dispatch(GetMessageDetailRequest(token, page, group_id)),
    GetMessageOpponentInfoRequest: (token, group_id) =>
        dispatch(GetMessageOpponentInfoRequest(token, group_id)),
});

export default
    connect(mapStateToProps, mapDispatchToProps)(MessageDetailContainer);