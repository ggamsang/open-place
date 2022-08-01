import React from 'react';
import styled from 'styled-components';
import arrowBelow from 'resources/icons-chevron@2x.png';
import profile from 'resources/Profile.svg';
import { WIDTH } from 'constant';
import DateFormat from 'modules/DateFormat';

const Wrapper = styled.div`
    *{
        box-sizing:border-box;
    }
    font-family: Noto Sans KR;
    // width: ${WIDTH}px;
    margin: auto;
    box-sizing: border-box;
    padding:0px 20px;
    *{
        box-sizing:border-box;
    }
    .line {
        box-sizing: border-box;
        *{box-sizing: border-box;}
        width: 100%;
        height: 186px;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #E9E9E9;
        border-radius: 15px;
        // justify-content: space-between;
        padding: 30px 20px 15px 20px;
        border-bottom: 1px solid #C1C1C1;
        margin-bottom: 20px;
        :last-child {
            margin-bottom: 0px;
        }
        .header {
            text-align: left;
            font-weight: bold;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 0px;
            color: #C1C1C1;
        }
        .title {
            width: 120px;
            height: 19px;
            text-align: left;
            font-weight: medium;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 0px;
            color: #000;

            padding: 0 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .author {
            width: max-content;
            height: 19px;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            text-align: left;
            font-family: Montserrat;
            color: #241332;
        }
        .date {
            height: 15px;
            text-align: left;
            font-weight: normal;
            font-size: 12px;
            line-height: 15px;
            font-family: Montserrat;
            letter-spacing: 0px;
            color: #352641;
            opacity: 0.56;
        }
    }
    .comment-input-form {
        height: 265px;
        border-radius: 15px;
        background-color: #E9E9E9;
        padding: 26px 12px 12px 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .comment-text {
            resize: none;
            outline: none;
            border: 1px solid rgba(128,128,128, 0.2);
            background-color: #E9E9E9;
            text-align: left;
            font-weight: bold;
            font-size: 15px;
            line-height: 18px;
            font-family: Noto Sans KR;
            letter-spacing: 0px;
            color: #000;
            height: 100%;
            ::placeholder {
                text-align: center;
                font-weight: normal;
            }
        }
        margin-bottom: 20px;
    }
    .arrowDown {
        padding: 0px;
        width: max-content;
        img {
            width: 24px;
            height: 24px;
            &.up {
                transform: rotate(-180deg);
            }
        }
    }
    .profile {
        margin-right: 20px;
        img {
            width: 36px;
            height: 36px;
            border-radius: 100%;
            background-color: #E9E9E9;
            background-size: cover;
            background-position: center center;
        }
    }
    .row {
        box-sizing:border-box;
        width:100%;
        display: flex;
        flex-direction: row;
        // justify-content: space-between;
    }
    .hundred {
        // border:1px solid black;
        width: 100%;
    }
    .content {
        width: 100%;
        height: 100%;
        overflow: auto;
        margin-top: 20px;
        text-align: left;
        font-weight: normal;
        font-size: 13px;
        line-height: 22px;
        font-family: Montserrat;
        letter-spacing: 0px;
        color: #817889;
    }
    .comment-list-wrapper {
        box-sizing: border-box;
        position: relative;
    }
    .comment-popup {
        position: absolute;
        left: 80%;
        top: 30%;
        // border: none;
        border-radius: 10px; 
        width: 65px;
        height: 51px;
        background-color: #FFF;
        box-sizing: border-box;
        padding: 5px;
        text-align: left;
        font-weight: medium;
        font-size: 15px;
        line-height: 18px;
        font-family: Pretendard;
        letter-spacing: 0px;
        color: #000;
    }
    .top10 {
        margin-top: 10px;
    }
`;
const Button = styled.button`
  margin: auto;
  width: 155px;
  height: 35px;
  background: ${prop => prop.active ? "#FF0000" : "#707070"};
  box-shadow: 2px 2px 3px #00000019;
  border-radius: 10px;
  border: none;
  outline: none;
  display: flex;
  .text {
    margin: auto;
    width: max-content;
    height: 18px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    font-family: Pretendard;
    letter-spacing: 0px;
    color: #FFFFFF;
  }
`;

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            whichOnePoppedUp: null,
            isReply: null,
        }
    }

    popup = th => {
        this.setState({ whichOnePoppedUp: th });
    }

    write = (parent) => {
        const { userInfo, id, token } = this.props;
        const node = document.getElementById('comment-text');
        if (node) {
            if (node.value !== "") {
                this.props.CreateArticleCommentRequest(token, {
                    user_id: userInfo.uid,
                    comment: node.value,
                    type: 'COMMUNITY',
                    where: id,
                }).then(() => {

                    this.props.GetArticleCommentRequest(this.props.id);
                }).then(() => {
                    node.value = "";
                })
            } else {
                alert('내용을 입력해주세요.');
                node.focus();
            }
        }
    }

    delete = (id) => alert('delete');

    reply = (id) => {
        alert("reply!");
        // this.setState({ isReply: id });
    };

    render() {
        const { userInfo, comment } = this.props;
        const { whichOnePoppedUp, isReply } = this.state;
        const CommentForm = (parent) =>
            <div className='comment-input-form'>
                <textarea
                    placeholder="댓글을 입력해주세요."
                    className='comment-text'
                    id="comment-text"
                />
                <div className='top10'>
                    <Button onClick={() => this.write(parent)}>
                        <div className="text">댓글등록</div>
                    </Button>
                </div>
            </div>

        return (<Wrapper>

            {isReply === null && this.props.token&& (<CommentForm />)}

            {comment.length > 0 ? comment.map((item, idx) =>
                <div key={idx} className="line comment-list-wrapper">

                    {(userInfo && idx === whichOnePoppedUp)
                        && <div className='comment-popup'>
                            <div onClick={() => this.reply(item.uid)}>답글</div>
                            {item.user_id === userInfo.uid
                                && <div onClick={() => this.delete(item.uid)}>삭제하기</div>}
                        </div>}

                    <div className='row hundred'>
                        <div className='row'>
                            <div className='profile'>
                                <img src={item.s_img || profile} />
                            </div>
                            <div>
                                <div className='author'>{item.nick_name}</div>
                                <div className='date'>{DateFormat(item.update_time)}</div>
                            </div>
                        </div>

                        <div className='arrowDown'>
                            <img onClick={() => this.popup(whichOnePoppedUp == null ? idx : null)}
                                className={whichOnePoppedUp == null ? "" : "up"}
                                src={arrowBelow} />
                        </div>

                    </div>

                    <div className='content'>
                        {item.comment}
                    </div>

                    {isReply === item.uid
                        && (<CommentForm parent={item.uid} />)}

                </div>)
                : <div>
                    &nbsp;
                </div>}

        </Wrapper>)
    }
}
export default CommentList;