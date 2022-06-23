import { useState } from "react";
import styled from "styled-components";
// // import { Button } from "commons/Button/Button";
import SearchForm from "components_mobile/Commons/Search/SearchForm";
import profile from 'resources/Profile.svg';
import DateFormat from "modules/DateFormat";

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
        min-height: 30px;
        border-radius: 22px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 0px;
        font: normal normal normal 15px/18px Pretendard;
        text-align: center;

        ${props => props.me
        ? ` margin-left: auto; color: #FFFFFF;
        background: #707070 0% 0% no-repeat padding-box;`
        : ` margin-right: auto; color: #000000;
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

// const dummy = {
//     header: { url: '', nick: '회원닉네임', online: false, },
//     chats: [
//         { uid: 0, me: true, content: '(나)텍스트내용좌우여백20', date: '2020.7.31(금) 오후 16:19' },
//         { uid: 1, me: false, content: '(너)텍스트내용좌우여백20', date: '2020.7.31(금) 오후 16:19' },
//         { uid: 2, me: true, content: '(나)끝말잇기!! 텍스트!', date: '2020.7.31(금) 오후 16:19' },
//         { uid: 3, me: false, content: '(너)트랙터!', date: '2020.7.31(금) 오후 16:19' },
//         { uid: 4, me: true, content: '(나)터미널.', date: '2020.7.31(금) 오후 16:19' },
//         { uid: 5, me: false, content: '(너)널판지', date: '2020.7.31(금) 오후 16:19' },
//         { uid: 6, me: true, content: '(나)지렁이', date: '2020.7.31(금) 오후 16:19' },
//         { uid: 7, me: false, content: '(너)이삿짐', date: '2020.7.31(금) 오후 16:19' },
//         { uid: 8, me: true, content: '(나)지미집', date: '2020.7.31(금) 오후 16:19' },
//         { uid: 9, me: false, content: '(너)집에가자!!!', date: '2020.7.31(금) 오후 16:19' },
//     ],
//     online: true,
// }

const MessageDetail = ({ send, chats, header, online, user_id }) => {
    const [text, setText] = useState('');

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

            <div className="chats">
                {chats
                    .sort((a, b) => a.create_at < b.create_at)
                    .map((item, index) =>
                        <Chat {...item}
                            key={index}
                            me={item.user_id === user_id}
                        />
                    )}
            </div>

            <div className="send-wrapper">
                <div>
                    <input onChange={(e) => setText(e.target.value)} />
                    <button
                        disabled={text.trim().length === 0}
                        onClick={() => send(text)}>
                        전송
                    </button>
                </div>
            </div>

        </MessageWrapper>
    </Wrapper>);
}

export default MessageDetail;
