/*
 container component 는 컴포넌트 구조 설계가 끝난 뒤에 생성할 것.
*/
import ClientTemplate from "clientTemplate/ClientTemplate";
import styled from "styled-components";
import SearchForm from 'components_mobile/Commons/Search/SearchForm';
import { goto } from "smallfuncs";

const Peer = styled.div`
    box-sizing: border-box;
    // width: 355px;
    width: 100%;
    height: 79px;
    background: #F8F8F8 0% 0% no-repeat padding-box;
    border-radius: 10px;
    padding: 15px 13px 15px 10px;
    margin-bottom: 15px;
    
    .thumbnail {
        background-image: url(${props => props.url});
        width: 49px;
        height: 49px;
        border-radius: 100%;
        background: #E9E9E9 0% 0% no-repeat padding-box;
        position: relative;
        .led {
            position: absolute;
            right: 5px;
            bottom: 5px;
            width: 15px;
            height: 15px;
            border-radius: 100%;
            background: #FF0000 0% 0% no-repeat padding-box;
            font: normal normal 500 13px/16px Pretendard;
            color: #FFFFFF;
            text-align: center;
        }
    }
    &.row {
        display: flex;
        flex-direction: row;
    }
    .col {
        display: flex;
        flex-direction: column;
    }
    .date {
        margin-left: auto;
        height: 16px;
        text-align: left;
        font: normal normal 300 13px/16px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        width: max-content;
    }
    .text-wrapper {
        margin-left: 10px;
    }
    .nick {
        height: 18px;
        text-align: left;
        font: normal normal bold 15px/18px Pretendard;
        letter-spacing: 0px;
        color: #000000;
    }
    .recent {
        height: 18px;
        text-align: left;
        font: normal normal normal 15px/18px Pretendard;
        letter-spacing: 0px;
        color: #000000;
    }
`;
const dummy = [
    { unread: 3, url: '', uid: 1, nick: '회원닉네임', recent: '최근대화메시지', date: '1달 전' },
    { unread: 1, url: '', uid: 2, nick: '회원닉네임', recent: '최근대화메시지', date: '1달 전' },
    { unread: 99, url: '', uid: 3, nick: '회원닉네임', recent: '최근대화메시지', date: '1달 전' },
    { unread: 2, url: '', uid: 4, nick: '회원닉네임', recent: '최근대화메시지', date: '1달 전' },
    { unread: 0, url: '', uid: 5, nick: '회원닉네임', recent: '최근대화메시지', date: '1달 전' },
    { unread: 0, url: '', uid: 6, nick: '회원닉네임', recent: '최근대화메시지', date: '1달 전' },
]
const PeerElement = function ({ unread, url, uid, nick, recent, date }) {
    return (<Peer onClick={() => goto("MESSAGE", uid)} url={url} className="row">
        <div className="thumbnail">{unread !== 0 && <div className="led">{unread}</div>}</div>
        <div className="col text-wrapper">
            <div className="nick">{nick}</div>
            <div className="recent">{recent}</div>
        </div>
        <div className="date">{date}</div>
    </Peer>);
}
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
export default function MessageListPage() {
    return (<ClientTemplate>
        <Wrapper>
            <div className='gradient'>
                <div className='blanker'>&nbsp;</div>
                <SearchForm placeholder={"대화상대 찾아보기"} disabled_filter keyword={null} />
            </div>
            {dummy.map((item, index) =>
                <PeerElement key={index} {...item} />
            )}
        </Wrapper>
    </ClientTemplate>)
}