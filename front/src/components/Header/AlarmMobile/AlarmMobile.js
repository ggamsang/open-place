import React from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import TextFormat from 'modules/TextFormat';
import { geturl } from "config";
import new_logo_notifications from "source/new_logo_notifications.svg"
import ClientTemplate from "templates/ClientTemplate";
import { isMobile, isOpen } from "constant";
import Socket from "modules/Socket";
import HeaderMobile from "components/Header/Header_mobile";

const AlarmIcon = styled.div`
    margin: auto;
    width: 44px;
    height: 44px;
    background: url(${new_logo_notifications}); 
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
`;
const AlarmList = styled.div`
    margin: auto;
    width: ${window.innerWidth - 20}px;
    height: ${window.innerHeight - 100}px;
    padding: 10px;
    pointer-events: auto;
    background-color: #FFFFFF;
    box-shadow: 8px 8px 8px #0000002B;
    font-family: Noto Sans KR;
    .list{
       overflow-y: scroll;
       width: 100%; 
       height: ${window.innerHeight - 200}px;
    // scroll
    ::-webkit-scrollbar {  width: 4px; background-color: transparent; }
    ::-webkit-scrollbar-track { background-color: transparent; }
    ::-webkit-scrollbar-thumb { background: red; border-right: 2px white solid; border-radius: 0px; background-clip: padding-box; }
    }
`;
const NewListItem = styled.div`
    border-bottom: 1px solid black;
    width: 100%;
    opacity: ${props => props.confirm ? 0.5 : 1};
    display: flex;

    :hover { background-color: rgba(0,0,0,0.125); }

    .row {
        margin-top: 20px;
        margin-bottom: 10px;
        width: 100%;
    }
    .alarm_header {
        width: 100%;
        height: 19px;
        font-size: 12px;
        font-family: Spoqa Han Sans Neo;
        *{
            font-size:12px;
        }
        font-weight:300;
    }
    .alarm_text {
        width: 100%;
        line-height: 22px;
        font-family: Spoqa Han Sans Neo, Light;
        font-size: 15px;
        font-weight:500;
    }
`;
const ListItem = styled.div`
    display: flex;
    padding-left: 15px;
    flex-direction: column;
    opacity: ${props => props.confirm ? 0.5 : 1};
    width: 380px;
    height: 118px;
    display: flex;
    border-bottom: 1px solid #B7B7B7;
    &:hover {
        background-color: #EFEFEF;
        opacity: 0.95;
    }
`;
let alarmlist = [];

class AlarmMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { alarm: null }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.userInfo == null && this.props.userInfo) {
            console.log("componentdidupdate", isOpen(Socket), this.props.userInfo);
            if (isOpen(Socket) && this.props.userInfo) {
                try {
                    if (isOpen(Socket)) {
                        Socket.emit("INIT", this.props.userInfo.uid);
                    }
                    Socket.on("getNoti", alarm => {
                        this.setState({ alarm: alarm })
                        console.log(alarm)
                        if (alarm.count) {
                        }
                    });
                    Socket.on("disconnect", () => { });
                } catch (err) {
                    console.error(err);
                }
            }
        }
    };
    alarmConfirm = (userID, alarmID) => {
        this.props.handleAlarmConfirm(userID, alarmID)
    };
    allAlarmConfirm = async () => {
        if (this.state.alarm && this.state.alarm.count) {
            await alert('초대받은 경험 및 그룹에 대한 알림을 제외한 모든 알림을 읽음으로 표시합니다.', "확인");
            this.props.handleAllAlarmConfirm(this.props.uid);
        }
    };
    getLink = item => {
        let link = ``;
        if (item.type === "MESSAGE") {
            link = `/message/${item.from_user_id}/${item.fromUser}`
        } else if (item.type === "DESIGN") {
            link = `/exp/${item.content_id}`
            if (item.kinds === "INVITE") {
                link = `/myPage/join/invited`
            }
        } else if (item.type === "GROUP") {
            link = `/groupDetail/${item.content_id}`
        }
        //console.log("link", link);
        return link
    };
    getMessageText = item => {
        let msg = ""
        const from = item.from;
        const to = item.to;
        const title = item.title && item.title.length > 32 ? item.title.slice(0, 32) + "..." : item.title;
        if (item.type === "DESIGN") {
            if (item.kinds === "INVITE") {
                msg = `${item.title}경험 멤버로 초대되었습니다.`;
            } else if (item.kinds === "REQUEST") {
                msg = `${from}님이 멤버 가입 신청을 하였습니다.`
            } else if (item.kinds === "INVITE_TRUE") {
                msg = `${from}님이 ${to}님의 초대를 수락했습니다.`
            } else if (item.kinds === "REQUEST_TRUE") {
                msg = `${to}님이 아래 경험의 멤버가 되었습니다.`
            } else if (item.kinds === "GETOUT") {
                msg = `${title}에서 탈퇴되셨습니다.`;
            } else if (item.kinds === "REFUSE") {
                msg = `${from}님이 멤버 가입 신청을 거절하였습니다.`;
            } else if (item.kinds === "INVITE_REJECT") {
                msg = `${from}님이 초대를 거절하였습니다.`;
            } else if (item.kinds === "LIKE") {
                if (item.count > 1) msg = `${from}님외 ${item.count - 1}명이 경험을 좋아합니다.`;
                else msg = `${from}님이 경험을 좋아합니다.`;
            } else if (item.kinds === "COMMENT") {
                msg = `${from}님이 경험에 댓글을 달았습니다.`;
            } else if (item.kinds === "CARD_COMMENT") {
                msg = `${from}님이 경험 카드에 댓글을 달았습니다.`;
            } else if (item.kinds === "COMMENT_COMMENT") {
                msg = `${to}님의 경험 댓글에 답변이 달렸습니다.`;
            } else if (item.kinds === "LIVE_CHAT") {
                // const date = new Date();
                msg = `${from}님이 회의를 개설하였습니다.`
            }

        } else if (item.type === "GROUP") {
            if (item.kinds === "JOIN") {
                msg = `${from}님이 그룹 가입 신청을 하였습니다.`;
            } else if (item.kinds === "JOIN_withDESIGN") {
                msg = `${from}님이 그룹 가입 신청을 하였습니다.`;
            } else if (item.kinds === "JOIN_withGROUP") {
                msg = `${from}님이 그룹 가입 신청을 하였습니다.`;
            } else if (item.kinds === "JOINSUCCESS") {
                msg = `${to}님이 그룹에 가입되었습니다.`;
            } else if (item.kinds === "JOINREFUSE") {
                msg = `${to}님의 그룹 가입 신청이 거절되었습니다.`;
            } else if (item.kinds === "GROUP_JOINREFUSE") {
                msg = `그룹 가입신청이 거절되었습니다.`;
            } else if (item.kinds === "GROUP_GETOUT") {
                msg = `${title}그룹에서 그룹이 삭제되었습니다.`;
            } else if (item.kinds === "LIKE") {
                if (item.count > 1) msg = `${from}님외 ${item.count - 1}명이 그룹을 좋아합니다.`;
                else msg = `${from}님이 그룹을 좋아합니다.`;
            } else if (item.kinds === "GROUP_DESIGN_OUT") {
                msg = `${title}그룹에서 경험이 삭제되었습니다.`;
            } else if (item.kinds === "GROUP_GROUP_OUT") {
                msg = `${title}그룹에서 그룹이 삭제되었습니다.`;
            }
        } else if (item.type === "DESIGNER") {
            if (item.kinds === "LIKE") {
                if (item.count > 1) msg = `${from}님외 ${item.count - 1}명이 ${to}님을 좋아합니다.`;
                else msg = `${from}님이 ${to}님을 좋아합니다.`;
            }
        }
        return msg;
    };
    showButton = (item) => {
        const type = item.type, kinds = item.kinds, confirm = item.confirm
        if (confirm === 1) return false
        return (type === "DESIGN" && (kinds === "INVITE" || kinds === "REQUEST")) || (type === "GROUP" && (kinds === "JOIN_withDESIGN" || kinds === "JOIN_withGROUP" || kinds === "JOIN"))
    };
    accept = async (e, item) => {
        // let isconfirm = false;
        e && e.stopPropagation();
        if (item.type === "DESIGN") {
            if (item.kinds === "REQUEST" || item.kinds === "INVITE") {
                // isconfirm = await confirm(item.kinds === "REQUEST" ? "가입을 승인하시겠습니까?" : "초대를 수락하시겠습니까?","예","아니오");
                // if (isconfirm) {
                this.props.AcceptDesignRequest(item.content_id, item.kinds === "REQUEST" ? item.from_user_id : item.user_id, this.props.token)
                    .then(async (res) => {
                        if (res.data && res.data.success) {
                            await alert(item.kinds === "REQUEST" ? "승인되었습니다." : "초대를 수락하였습니다.", "확인");
                            this.alarmConfirm(item.user_id, item.uid)
                        } else {
                            await alert("다시 시도해주세요.", "확인");
                        }
                    })
                    .catch((err) => alert(err + '와 같은 이유로 승인하는데 실패하였습니다. 관리자에게 문의하시기 바랍니다.'))
                // }
            }
        }
        else if (item.type === "GROUP") {
            if (item.kinds === "JOIN_withDESIGN") {
                let answer = window.confirm("가입을 승인하시겠습니까?", "예", "아니오")
                if (answer) {
                    // if (await confirm("가입을 승인하시겠습니까?", "예", "아니오")) {
                    this.props.UpdateDesignInGroupRequest(item.content_id, item.sub_content_id)
                        .then(async res => {
                            this.setState({ path: await this.getLink(item), text: "승인되었습니다.", to: "해당페이지" });
                        }).catch((err) => alert(err + '와 같은 이유로 승인하는데 실패하였습니다. 관리자에게 문의하시기 바랍니다.'))
                }
            } else if (item.kinds === "JOIN_withGROUP") {
                let answer = window.confirm("가입을 승인하시겠습니까?", "예", "아니오");
                if (answer) {
                    this.props.UpdateGroupInGroupRequest(item.content_id, item.sub_content_id)
                        .then(async res => {
                            this.setState({ path: await this.getLink(item), text: "승인되었습니다.", to: "해당페이지" });
                        }).catch((err) => alert(err + '와 같은 이유로 승인하는데 실패하였습니다. 관리자에게 문의하시기 바랍니다.'))
                }
            }
        }
        // window.location.reload()
    };
    reject = async (e, item) => {
        e.stopPropagation()
        if (item.type === "DESIGN") {
            if (item.kinds === "REQUEST" || item.kinds === "INVITE") {
                let answer = window.confirm(item.kinds === "REQUEST" ? "멤버 가입 신청을 거절하시겠습니까?" : "멤버 초대를 거절하시겠습니까?", "예", "아니오");
                if (answer) {
                    // if (await confirm(item.kinds === "REQUEST" ? "멤버 가입 신청을 거절하시겠습니까?" : "멤버 초대를 거절하시겠습니까?", "예", "아니오")) {
                    this.props.GetoutDesignRequest(item.content_id, item.kinds === "REQUEST" ? item.from_user_id : item.user_id, this.props.token,
                        item.kinds === "REQUEST" ? "DesignRefuse" : "DesignInviteReject")
                        .then(res => {
                            // if (res.data && res.data.success) {
                            // alert(item.kinds === "REQUEST" ? "요청을 거절하였습니다." : "초대를 거절하였습니다.");
                            this.alarmConfirm(item.user_id, item.uid)
                            //           } else {
                            //               alert("다시 시도해주세요.");
                            //           }
                        })
                        .catch((err) => alert(err + `와 같은 이유로 거절하는데 실패하였습니다. 관리자에게 문의하시기 바랍니다.`))
                }
            }
        } else if (item.type === "GROUP") {
            if (item.kinds === "JOIN_withDESIGN") {
                let answer = window.confirm("그룹 가입 신청을 거절하시겠습니까?", "예", "아니오");
                if (answer) {

                    this.props.DeleteDesignInGroupRequest(item.content_id, item.sub_content_id)
                        .then(res => {
                            //           if (res.data && res.data.success) {
                            this.alarmConfirm(item.user_id, item.uid)
                            // alert(`거절하셨습니다.`)
                            //            } else {
                            //               alert(`다시 시도해주세요.`)
                            //           }
                        })
                        .catch((err) => alert(err + `와 같은 이유로 거절하는 데 실패하였습니다. 관리자에게 문의하시기 바랍니다.`))
                }
            } else if (item.kinds === "JOIN_withGROUP") {
                let answer = window.confirm("그룹 가입 신청을 거절하시겠습니까?", "예", "아니오");
                if (answer) {
                    this.props.DeleteGroupInGroupRequest(item.content_id, item.sub_content_id)
                        .then(res => {
                            //         if (res.data && res.data.success) {
                            this.alarmConfirm(item.user_id, item.uid)
                            // alert(`거절하셨습니다.`)
                            //           } else {
                            //               alert(`다시 시도해주세요.`)
                            //           }
                        })
                        .catch((err) => alert(err + `와 같은 이유로 거절하는 데 실패하였습니다. 관리자에게 문의하시기 바랍니다.`))
                }
            }
        }
        window.location.reload()
    };
    frequency = (arr) => {
        if (arr == null || arr.length === 0) return null;
        if (arr[0]) arr[0].count = 1;
        var a = [arr[0]], prev = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].content_id !== prev.content_id) {
                arr[i].count = 1;
                a.push(arr[i]);
            } else {
                a[a.length - 1].count++;
            }
            prev = arr[i];
        }
        return a;
    };
    combine = (alarms) => {
        if (alarms == null || alarms.length === 0) return null;
        let list = [];
        let rst = [];
        //get like design
        list = alarms.filter(alarm => { return alarm.type === "DESIGN" && alarm.kinds === "LIKE" });
        list = list && list.length > 0 && list.sort((a, b) => (a.content_id > b.content_id) ? 1 : -1);
        list = this.frequency(list);
        rst = [...list];
        //get like group
        list = alarms.filter(alarm => { return alarm.type === "GROUP" && alarm.kinds === "LIKE" });
        list = list && list.length > 0 && list.sort((a, b) => (a.content_id > b.content_id) ? 1 : -1);
        list = this.frequency(list);
        rst = [...rst, ...list];
        //get like designer
        list = alarms.filter(alarm => { return alarm.type === "DESIGNER" && alarm.kinds === "LIKE" });
        list = list && list.length > 0 && list.sort((a, b) => (a.content_id > b.content_id) ? 1 : -1);
        list = this.frequency(list);
        rst = [...rst, ...list];
        //add normal alarm
        list = alarms.filter(alarm => { return alarm.kinds !== "LIKE" });
        rst = [...rst, ...list];
        //sort by create_time
        rst.sort((a, b) => (a.confirm > b.confirm) ? 1 : (a.create_time < b.create_time) ? 1 : - 1);
        return rst;
    };
    checkedAlarm = (event) => {
        if (!event.target.value) return;
        if (event.target.checked) {
            alarmlist.push(event.target.value);
        } else {
            alarmlist.splice(alarmlist.indexOf(event.target.value), 1);
        }
    };
    acceptChecked = () => {
        if (!alarmlist.length) {
            // alert("승인하고자하는 알람의 체크박스를 선택해주세요."); 
            return;
        }
        alarmlist.map(alarm => {
            const item = this.state.alarm.list.filter(e => e.uid === parseInt(alarm, 10))[0];
            this.accept(null, item);
            return item;
        });
        alarmlist = [];
    };
    gotoVChat = (item) => {
        const url = `${geturl()}/vchat/${item.content_id}`;
        const options = `toolbar=no,status=no,menubar=no,resizable=0,location=no,top=100,left=100,width=1280,height=1000,scrollbars=no`;
        this.vchatwindow = window.open(url, "vchat", options);
        this.alarmConfirm(item.user_id, item.uid);
    };
    getAlarmItem = (item) => {
        const MAXLENGTH = 32;

        if (item.type === "DESIGN" && item.kinds === "COMMENT") {
            return <React.Fragment>
                <div style={{ display: "flex", flexDirection: "row", fontSize: "10px", fontFamily: "Spoqa Han Sans Neo, Light" }}>
                    &nbsp;&nbsp;<TextFormat txt={item.reply_preview} chars={MAXLENGTH - 15} />
                </div>
            </React.Fragment>
        }
        else if (item.type === "DESIGN" && item.kinds === "LIVE_CHAT") {
            const date = new Date();
            return <React.Fragment>
                <div style={{ display: "flex", flexDirection: "column", fontSize: "10px", fontFamily: "Spoqa Han Sans Neo, Light" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <TextFormat txt={item.title} chars={MAXLENGTH - 15} />
                        <div style={{ fontSize: "9px" }}>
                            {`${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`}
                        </div>
                    </div>
                    <div style={{ width: "max-content", display: "flex", alignItems: "flex-end" }}>
                        {item.confirm === 0 ?
                            <div style={{ width: "max-content", display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                                <div onClick={() => this.gotoVChat(item)} style={{ cursor: "pointer", marginLeft: "auto", color: "#FF0000", fontSize: "15px" }}>참여</div>
                                <div onClick={() => this.alarmConfirm(item.user_id, item.uid)} style={{ cursor: "pointer", marginLeft: "15px", color: "#707070", fontSize: "15px" }}>거절</div>
                            </div>
                            : null}
                    </div>
                </div>
            </React.Fragment>
        }
        else if ((item.type === "GROUP" && item.kinds === "JOIN_withDESIGN") || (item.type === "GROUP" && item.kinds === "JOIN_withGROUP")) {
            return <div style={{ display: "flex", flexDirection: "row", fontSize: "10px", fontFamily: "Spoqa Han Sans Neo, Light" }}>
                <TextFormat txt={item.title} chars={MAXLENGTH - 15} />
            </div>
        }
        else if (item.type === "DESIGN" && item.kinds === "GETOUT") {
            return <div style={{ display: "flex", flexDirection: "row", fontSize: "10px", fontFamily: "Spoqa Han Sans Neo, Light" }}>
                <TextFormat txt={item.title} chars={MAXLENGTH - 15} />
            </div>
        }
        else if ((item.type === "GROUP" && item.kinds === "GROUP_DESIGN_OUT") || (item.type === "GROUP" && item.kinds === "GROUP_GROUP_OUT")) {
            return <div style={{ display: "flex", flexDirection: "row", fontSize: "10px", fontFamily: "Spoqa Han Sans Neo, Light" }}>
                <TextFormat txt={item.title} chars={MAXLENGTH - 15} />
            </div>
        }
        else if (item.type === "DESIGN" && item.kinds === "INVITE") {
            return <React.Fragment>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "row", fontSize: "10px", fontFamily: "Spoqa Han Sans Neo, Light" }}>
                        <TextFormat txt={item.title} chars={MAXLENGTH - 15} />
                    </div>
                    <div style={{ width: "max-content", display: "flex", alignItems: "flex-end" }}>
                        {item.confirm === 0 ?
                            <div style={{ width: "max-content", height: "max-content", display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                                <div onClick={e => this.accept(e, item)} style={{ cursor: "pointer", marginLeft: "auto", color: "#FF0000", fontSize: "15px" }}>승인</div>
                                <div onClick={e => this.reject(e, item)} style={{ cursor: "pointer", marginLeft: "15px", color: "#707070", fontSize: "15px" }}>거절</div>
                            </div>
                            : null}
                    </div>
                </div>
            </React.Fragment>
        }
        else {
            return <div style={{ display: "flex", flexDirection: "row", fontSize: "10px", fontFamily: "Spoqa Han Sans Neo, Light" }}>
                <TextFormat txt={item.title} chars={MAXLENGTH - 15} />
            </div>
        }
    };

    render() {
        const alarms = this.state.alarm && this.state.alarm.list;
        alarms &&
            alarms.length > 0 &&
            alarms.sort((a, b) => (a.confirm > b.confirm)
                ? 1 : (a.create_time < b.create_time)
                    ? 1 : -1);

        console.log({ alarms });

        return (<ClientTemplate hideheader={isMobile()}>

            <HeaderMobile {...this.props} />

            <div style={{
                backgroundColor: "rgba(128, 128, 128, 0.75)",
                // height: "95vh",
                width: "100wh",
                padding: "10px",
            }}>

                <AlarmList>
                    <AlarmIcon />

                    <div style={{
                        display: "flex", lineHeight: "25px", marginBottom: "11.5px", fontSize: "17px",
                        color: "#707070", fontWeight: "300"
                    }}>
                        {this.state.alarm && this.state.alarm.count ?
                            <div onClick={this.allAlarmConfirm}
                                style={{
                                    fontSize: "15px", fontFamily: "Spoqa Han Sans Neo",
                                    cursor: "pointer", width: "max-content", borderRadius: "0 25px 0 0",
                                    backgroundColor: "#FFFFFF", marginLeft: "auto", marginRight: "10px"
                                }}>모두 읽음으로 처리</div>
                            : null}
                    </div>

                    <div className="list">
                        {alarms && alarms.length > 0
                            ? alarms.map((item, index) => {
                                if (item == null) {
                                    return (<div key={"undefined" + index}></div>);
                                }
                                let msg = this.getMessageText(item);

                                return (<NewListItem key={item.uid} confirm={item.confirm}
                                    onClick={() => (item.confirm || item.kinds === "INVITE") ? null : this.alarmConfirm(item.user_id, item.uid)}>
                                    <div className="row">
                                        <div className="alarm_header">{this.getAlarmItem(item)}</div>
                                        <div className="alarm_text"><TextFormat txt={msg} /></div>
                                    </div>
                                </NewListItem>)
                            })
                            : <div style={{ fontWeight: "500", fontSize: "15px", textAlign: "center" }}>
                                최근 알림이 없습니다.</div>}
                    </div>
                </AlarmList>
            </div>
        </ClientTemplate>)
    }
}



export default connect(
    (state) =>
    ({
        token: state.Authentication.status.token,
        userInfo: state.Authentication.status.userInfo,
    }),
    null)
    (AlarmMobile);
