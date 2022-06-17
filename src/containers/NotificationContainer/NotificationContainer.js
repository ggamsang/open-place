import React from 'react';
// import Socket from 'modules/socket';
import styled from 'styled-components';
import notification from 'source/Iconly-alarm-white.svg'
import { resolution } from 'commons/resolution';
import NotificationModal from 'components_mobile/NotificationModal';
import { connect } from "react-redux";
import host from 'config';

/*
사용자가 notification아이콘을 눌렀을 때 요청하는 방식 두 가지로 나뉜다.
오늘은 우선 노티리스트 요청하고 받아오고, 읽음처리 구현한다.
이후엔 백엔드에 추가되었을때, 그리고 실시간으로 알리고,
프론트엔드는 소켓 열어두고, 받았을 때 처리에 따라서 백엔드에 적용시키는
notificaiton-api(:request),socket(:live)
*/


const dummy = [
    { 'title': '같이모여서 공부해요!', 'content': 'notification content' },
    { 'title': '[광고]할인행사!!!', 'content': 'notification content' },
    { 'title': '우리 아이템을 구매해주셔서 감사합니다!', 'content': 'notification content' },
    { 'title': 'notification title', 'content': 'notification content' },
    { 'title': 'notification title', 'content': 'notification content' },
    { 'title': 'notification title', 'content': 'notification content' }
]
const NotificationBox = styled.div`
    box-sizing:border-box;
    width:${resolution(34)}px;
    display:flex;
    justify-content:center;
    margin-right:10px;
    .img_notification{width:${resolution(27)}px;height:${resolution(27)}px;}
`
class NotificationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false, notification: [] };
    }
    NotificationIReadRequest(id) {
        return new Promise((resolve, reject) => {
            const url = `${host}/noti/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': this.props.token,
                },
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    NotificationRequest() {
        return new Promise((resolve, reject) => {
            const url = `${host}/noti`;
            fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': this.props.token,
                },
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    onOpen = () => {
        if (this.props.token) {
            this.NotificationRequest(this.props.token)
                .then(notification => this.setState({ notification: notification }))
                .catch(_ => this.setState({ notification: [] }));
        }
        this.setState({ active: true });
        // const dimmer = document.getElementById('dimmer');
        // dimmer && dimmer.classList.add("dimmer");
        // const main = document.getElementById('main');
        // main && main.classList.add("disabled");
    }
    onClose = () => {
        this.setState({ active: false });
        // const dimmer = document.getElementById('dimmer');
        // dimmer && dimmer.classList.remove("dimmer");
        // const main = document.getElementById('main');
        // main && main.classList.remove("disabled");
    }
    onClicked = id => {
        this.NotificationIReadRequest(id)
            .then(this.onOpen);
    }

    render() {
        console.log(this.state.notification);

        return (<React.Fragment>

            {/* <div id='dimmer'> &nbsp; </div> */}

            <NotificationBox
                onClick={this.onOpen}
                className='notification_box'>
                <img className='img_notification' src={notification} />
            </NotificationBox>

            {this.state.active
                ? <NotificationModal
                    clicked={this.onClicked}
                    close={this.onClose}
                    list={this.state.notification} />
                : null}

        </React.Fragment>)
    }
}

const mapStateToProps = (state) => ({
    token: state.Authentication.status.token,
    userInfo: state.Authentication.status.userInfo,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);