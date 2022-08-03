import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchForm from "components_mobile/Commons/Search/SearchForm";
import profile from 'resources/Profile.svg';
import DateFormat from "modules/DateFormat";
import { Fade } from "react-reveal";
import { FileUploadRequest } from "actions/Uploads";

const Wrapper = styled.div`
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
       display: none;
    }
    margin: auto;
    .blanker {
        height: 44px;
    }
    .gradient {
        width: 100%;
        height: 100px;
        background: linear-gradient(69deg, #501B1B, #655FFA, #D30E0E);
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
    }
`;
const MessageWrapper = styled.div`
    margin: auto;
    width: calc(100% - 10px);
    min-height: 481px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 2px 2px 5px #00000029;
    border: 0.5px solid #E9E9E9;
    border-radius: 10px;

    .message_header {
        box-sizing: border-box;
        // padding: 14px 10px 16px 10px;

        height: 49px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border-radius: 10px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .title {
            width: max-content;
            height: 16px;
            text-align: center;
            font: normal normal bold 13px/16px Noto Sans KR;
            letter-spacing: 0px;
            color: #000000;
        }
    }
    .thumbnail {
        width: 49px;
        height: 49px;
        background: #E9E9E9 0% 0% no-repeat padding-box;
        border-radius: 100%;
        background-image: url(${props => props.url});
        background-size: cover;
        background-position: center center;
    }
    .led {
        margin-left: 9px;
        width: 10px;
        height: 10px;
        ${props => props.online
        ? `background: #07FF07 0% 0% no-repeat padding-box;`
        : `background: #707070 0% 0% no-repeat padding-box;`}
        border-radius: 100%;
    }

    .chats {
        // margin-top: 19px;
        height: 341px;
        overflow: auto;

        ::-webkit-scrollbar-track {
            border-radius: 4px;
            background-color: #EEEEEE;
        }
        ::-webkit-scrollbar {
            width: 7px;
            background-color: #EEEEEE;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color:  #707070;
        }
    }
    .tools {
        box-sizing: border-box;
        padding: 3px 0px;
        button {
            border: none;
            outline: none;
            width: 28px;
            height: 29px;
            background: #E9E9E9 0% 0% no-repeat padding-box;
            margin-right: 9px;
            :first-child {
                margin-left: 5px;
            }
            :last-child {
                margin-right: 0px;
            }
        }
    }

    .send-wrapper {
        padding: 0px 5px;
        // height: 91px;
        margin-top: 4px;
        margin-bottom: 18px;

        input {
            box-sizing: border-box; 
            border: none;
            outline: none;
            min-width: 231px;
            width: 231px;
            height: 30px;
            background: #E9E9E9 0% 0% no-repeat padding-box;
            border-radius: 10px;
            padding-left: 10px;
            margin-right: 5px;
        }
        button {
            border: none;
            outline: none;
            min-width: 74px;
            width: 74px;
            height: 30px;
            background: #FF3838 0% 0% no-repeat padding-box;
            border-radius: 20px;
  
            .text {
                width: 100%;
                height: 16px;
                text-align: center;
                font: normal normal bold 13px/16px Noto Sans KR;
                letter-spacing: 0px;
                color: #FFFFFF;
            }
            :disabled {
                background: #E9E9E9 0% 0% no-repeat padding-box;
                color: #000000;
            }
        }
    }
`;
const ChatDiv = styled.div`
    box-sizing: border-box;
    padding: 0px 10px;

    .text {
        box-sizing: border-box;
        padding: 0px 20px;
        width: max-content;
        max-width: 250px;
        min-height: 30px;
        border-radius: 22px;
        // text-align: center;
        display: flex;
        // justify-content: center;
        align-items: center;
        letter-spacing: 0px;
        font: normal normal normal 15px/18px Pretendard;
        text-align: center;

        ${props => props.me
        ? `
        text-align: right;
        justify-content: end;
        margin-left: auto; color: #FFFFFF;
        background: #707070 0% 0% no-repeat padding-box;`
        : `
        text-align: left;
        justify-content: start;
        margin-right: auto; color: #000000;
        background: #E9E9E9 0% 0% no-repeat padding-box;`}
    }
    .date {
        margin-top: 5px;
        margin-bottom: 11px;
        width: max-content;
        height: 16px;
        text-align: right;
        font: normal normal normal 13px/16px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        ${props => props.me
        ? `margin-left: auto; margin-right: 15px;`
        : `margin-right: auto; margin-left: 15px;`}
    }
`;
const Chat = function ({ me, message, create_at }) {
    return (<ChatDiv me={me}>
        {message.file}
        <div className="text">{message}</div>
        <div className="date">{DateFormat(create_at)}</div>
    </ChatDiv>);
}

class CounselingMessageDetail extends React.Component {
    constructor(props) {
        super(props);
        this.per = 10;
        this.state = {
            page: 0,
            nowlist: [],
            more: (this.props.chats && this.props.chats.length > this.per)
                ? false : true,
            text: "",
            file: null,
        };
        this.setText = this.setText.bind(this);
    }
    setText = text => this.setState({ text: text });
    setFile = file => this.setState({ file: file });
    CheckEnter = (e) => {
        if (e.key === "Enter") {
            if (
                e.nativeEvent.isComposing === false &&
                this.state.previousKey !== "Shift"
            ) {
                e.preventDefault();
                document.getElementById('msg-send-btn').click();
            }
        }
    }
    SendAndEmpty = () => {
        this.props.send({ text: this.state.text, file: this.state.file });
        this.setText('');
        this.setFile(null);
    }
    componentDidUpdate(props) {
        if (props.chats.length === 0 && this.props.chats && this.props.chats.length !== 0) {
            const list = [...this.state.nowlist];
            this.props.chats && this.props.chats.forEach(item => list.unshift(item));
            this.setState({ nowlist: list });
        }
        if (props.newchat !== this.props.newchat) {
            const { text: message, gid: message_group_id, uid: user_id, create_at } = this.props.newchat;
            const date = new Date(create_at).toUTCString();
            const list = [...this.state.nowlist];
            list.push({ message, message_group_id, user_id, create_at: date })
            this.setState({ nowlist: list });
            setTimeout(() => {
                const chats = document.getElementById('chats');
                chats.scrollTop = chats.scrollHeight;
            }, 500);
        }
        if (this.props.group_id != props.group_id && props.group_id === null) {
            this.props.getMore(0);
            const chats = document.getElementById('chats');
            setTimeout(() => {
                if (chats && chats.clientHeight >= 100) {
                    chats.scrollTop = chats.scrollHeight;
                }
            }, 1000);
            chats && chats.addEventListener('scroll', async (e) => {
                if (this.state.more && e.target.scrollTop === 0) {
                    chats.scrollTo({ top: 5, behavior: "smooth" });
                    this.props.getMore(this.state.page + 1);
                    await this.setState({ page: this.state.page + 1 });
                }
            });
        }
    }
    openFileExplorer = () => {
        const dom = document.getElementById('message-file');
        dom.click();
    }
    onFileSelected = async (e) => {
        const bConfirm = window.confirm("선택하신 파일을 전송하시겠습니까?");
        if (!bConfirm) {
            return;
        }
        /* 
            const fileurl = await FileUploadRequest(files);
            if(fileurl && fileurl.success){
                this.setFile({file:fileurl}); 
            } else {
                alert('파일전송에 실패하였습니다.');
            }
        */
        const fileurl = "https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/dev/uploads/e6126d7ff264cab0f25484f1d9f1588d";
        this.setFile({ file: fileurl }, () => {
            this.SendAndEmpty(null);
        });
    }

    render() {
        const { header, online, user_id, title } = this.props;
        const { text, nowlist } = this.state;

        return (<Wrapper>

            <MessageWrapper url={(header && header.url) || profile} online={online}>
                <div className="message_header">
                    <div className="title">자문/상담{title ? `(${title})` : ``}</div>
                    <div className="led"></div>
                </div>

                <div className="chats" id="chats">
                    {nowlist
                        .map((item, index) =>
                            <Fade key={index}>
                                <Chat {...item}
                                    me={item.user_id === user_id} />
                            </Fade>
                        )}
                </div>

                <div className="tools">
                    <button onClick={this.openFileExplorer}>
                        <form hidden>
                            <input
                                onChange={this.onFileSelected}
                                type='file'
                                id='message-file' />
                        </form>
                    </button>


                    <button onClick={() => {
                        alert("video conferencing");
                    }}>

                    </button>
                    화상회의
                </div>

                <div className="send-wrapper">
                    <input
                        value={text || ""}
                        onKeyDown={this.CheckEnter}
                        onChange={(e) => this.setText(e.target.value)} />

                    <button
                        id="msg-send-btn"
                        disabled={text.trim().length === 0}
                        onClick={this.SendAndEmpty}>
                        <div className="text">보내기</div>
                    </button>
                </div>

            </MessageWrapper>
        </Wrapper>);
    }
};

export default CounselingMessageDetail;