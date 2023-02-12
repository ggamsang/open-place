import React from 'react';
import styled from 'styled-components';
import notification from 'resources/Iconly-alarm-white.svg'
import { resolution } from 'mobile/commons/resolution';
import NotificationModal from 'mobile/components_mobile/NotificationModal';
import { connect } from "react-redux";
import host from 'config';
import { goto } from 'navigator';
import { authGET } from 'constant';

const NotificationBox = styled.div`
    box-sizing:border-box;
    margin-left:5px;
    width:${resolution(34)}px;
    display:flex;
    justify-content:center;
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
            fetch(url, authGET(this.props.token))
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
            this.setState({ active: true });
        }
        else {
            alert('로그인해주세요.');
            goto("LOGIN");
        }

        // TODO: dimmer 활성 및 main페이지 비활성
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
                <img alt="icon" className='img_notification' src={notification} />
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