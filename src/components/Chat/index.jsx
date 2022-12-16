import React from 'react';
import * as styled from './styles';

const UserChat = () => {
    return(
        <styled.UserChat>
            <styled.UserImg />
            <styled.UserInfo>
                <styled.UserNameAndDate>
                    <span>닉네임</span>
                    <span>2022.09.25</span>
                </styled.UserNameAndDate>
                <styled.UserNotification>
                    알림내용알림내용알림내용알림내용알림내용알림내용알림내용알림내용
                </styled.UserNotification>
            </styled.UserInfo>
        </styled.UserChat>
    )
    
}

export default UserChat;