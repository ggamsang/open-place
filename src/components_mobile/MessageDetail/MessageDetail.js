import React, { useEffect, useState } from "react";
import styled from "styled-components";
// // import { Button } from "commons/Button/Button";
import SearchForm from "components_mobile/Commons/Search/SearchForm";
import profile from 'resources/Profile.svg';
import DateFormat from "modules/DateFormat";
import { Fade } from "react-reveal";

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

        margin-bottom: 20px;
    }
`;
const MessageWrapper = styled.div`
    margin: auto;
    width: calc(100% - 10px);
    min-height: 451px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 2px 2px 5px #00000029;
    border: 0.5px solid #E9E9E9;
    border-radius: 10px;

    margin-bottom: 100px;

    .header {
        box-sizing: border-box;
        padding: 14px 10px 16px 10px;

        height: 79px;
        background: #F8F8F8 0% 0% no-repeat padding-box;
        border-radius: 10px;

        display: flex;
        flex-direction: row;
        align-items: center;
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
    .nick {
        margin-left: 10px;
        height: 18px;
        text-align: left;
        font: normal normal bold 15px/18px Pretendard;
        letter-spacing: 0px;
        color: #000000;
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
        margin-top: 19px;
        height: 275px;
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

    .send-wrapper {
        padding: 0px 10px;
        margin-top: 27px;
        input {
            border: none;
            outline: none;
            min-width: 267px;
            height: 31px;
            background: #E9E9E9 0% 0% no-repeat padding-box;
            border-radius: 10px;
            margin-right: 10px;
            padding-left: 10px;
            box-sizing: border-box; 
        }
        button {
            border: none;
            outline: none;
            width: 58px;
            height: 31px;
            background: #FF3838 0% 0% no-repeat padding-box;
            border-radius: 20px;

            text-align: center;
            font: normal normal bold 15px/18px Pretendard;
            letter-spacing: 0px;
            color: #FFFFFF;
            :disabled {
                background: #E9E9E9 0% 0% no-repeat padding-box;
                color: #000000;
                font: normal normal normal 15px/18px Pretendard;
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
        <div className="text">{message}</div>
        <div className="date">{DateFormat(create_at)}</div>
    </ChatDiv>);
}

class MessageDetail extends React.Component {
    constructor(props) {
        super(props);
        this.per = 10;
        this.state = {
            page: 0,
            nowlist: [],
            more: (this.props.chats && this.props.chats.length > this.per)
                ? false : true,
            text: '',
        };
        this.setText = this.setText.bind(this);
    }
    setText = text => this.setState({ text: text });

    SendAndEmpty = () => {
        this.props.send(this.state.text);
        this.setText('');
    }
    componentDidUpdate(props) {
        if (props.chats.length === 0 && this.props.chats && this.props.chats.length !== 0) {
            const list = [...this.state.nowlist];
            this.props.chats && this.props.chats.forEach(item => list.unshift(item));
            this.setState({ nowlist: list });
            // this.setState({ nowlist: 
            //   this.props.chats.reverse().concat(this.state.nowlist) });
        }
        if (props.newchat !== this.props.newchat) {
            const { text: message, gid: message_group_id, uid: user_id, create_at } = this.props.newchat;
            // create_at: 1656401838183
            // gid: "4"
            // text: "asdl;f"
            // uid: 10
            const date = new Date(create_at).toUTCString();
            const list = [...this.state.nowlist];
            list.push({ message, message_group_id, user_id, create_at: date })
            // this.props.newchat && list.push({})
            // create_at: "2022-06-27T16:07:46.000Z"
            // message: "비번1234맞지?비번1234맞지?비번1234맞지?비번1234맞지?비번1234맞지?비번1234맞지?비번1234맞지?비번1234맞지?"
            // message_group_id: 4
            // read_at: null
            // uid: 34
            // user_id: 14
            this.setState({ nowlist: list });
            setTimeout(() => {
                const chats = document.getElementById('chats');
                chats.scrollTop = chats.scrollHeight;
            }, 500);
            console.log(this.props.newchat, list);
        }
    }
    componentDidMount() {
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

    render() {
        const { header, online, user_id } = this.props;
        const { text, nowlist } = this.state;

        return (<Wrapper>
            <div className='gradient'>
                <div className='blanker'>&nbsp;</div>
                <SearchForm
                    placeholder={"대화상대 찾아보기"} disabled_filter keyword={null} />
            </div>

            <MessageWrapper url={(header && header.url) || profile} online={online}>
                <div className="header">
                    <div className="thumbnail"></div>
                    <div className="nick">
                        {(header && header.nick_name) || "닉네임"}
                    </div>
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

                <div className="send-wrapper">
                    <div>
                        <input
                            onKeyDown={(e) => {
                                e.key === "Enter" && this.SendAndEmpty()
                            }}
                            value={text || ""}
                            onChange={(e) => this.setText(e.target.value)}
                        />
                        <button
                            disabled={text.trim().length === 0}
                            onClick={() => this.SendAndEmpty()}>
                            전송
                        </button>
                    </div>
                </div>
            </MessageWrapper>
        </Wrapper>);
    }
};

export default MessageDetail;
