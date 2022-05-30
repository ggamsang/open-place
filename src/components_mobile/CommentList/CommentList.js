import React from 'react';
import styled from 'styled-components';
import arrowBelow from 'resources/icons-chevron@2x.png';
import profile from 'resources/Profile.svg';
import { WIDTH } from 'constant';

const Wrapper = styled.div`
    font-family: Noto Sans KR;
    // *{border:1px solid red;}
    width: ${WIDTH}px;
    margin: auto;
    box-sizing: border-box;
    
    .line {
        box-sizing: border-box;
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
            text-align: left;
            font-weight: bold;
            font-size: 15px;
            line-height: 18px;
            font-family: Noto Sans KR;
            letter-spacing: 0px;
            color: #000;
            height: 100%;
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
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .hundred {
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
const dummy = [
    { uid: 0, author: "댓/////글/////작//////성////////자", thumbnail: null, date: "-댓-글-작-성-일-자-", content: "댓글내용Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { uid: 1, author: "댓/////글/////작//////성////////자", thumbnail: null, date: "-댓-글-작-성-일-자-", content: "댓글내용Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { uid: 2, author: "댓/////글/////작//////성////////자", thumbnail: null, date: "-댓-글-작-성-일-자-", content: "댓글내용Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { uid: 3, author: "댓/////글/////작//////성////////자", thumbnail: null, date: "-댓-글-작-성-일-자-", content: "댓글내용Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
];

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comment: "", whichOnePoppedUp: null }
    }

    gotoDetail = id => {/* goto("READ", id);*/ }

    popup = th => {
        this.setState({ whichOnePoppedUp: th });
    }

    render() {

        const { comments = dummy } = this.props;
        const { comment, whichOnePoppedUp } = this.state;

        return (<Wrapper>

            <div className='comment-input-form'>
                <div className='comment-text'>
                    {comment || "댓글 내용 작성 필드"}
                </div>
                <div className='top10'>
                    <Button>
                        <div className="text">댓글등록</div>
                    </Button>
                </div>
            </div>

            {comments.map((item, idx) =>
                <div key={idx} className="line comment-list-wrapper">

                    {idx === whichOnePoppedUp &&
                        <div className='comment-popup'>
                            <div onClick={() => alert('reply')}>답글</div>
                            <div onClick={() => alert('delete')}>삭제하기</div>
                        </div>}

                    <div className='row hundred'>
                        <div className='row'>
                            <div className='profile'>
                                <img src={item.thumbnail || profile} />
                            </div>
                            <div>
                                <div className='author'>{item.author}</div>
                                <div className='date'>{item.date}</div>
                            </div>
                        </div>

                        <div className='arrowDown'>
                            <img onClick={() => this.popup(whichOnePoppedUp == null ? idx : null)}
                                className={whichOnePoppedUp == null ? "" : "up"}
                                src={arrowBelow} />
                        </div>

                    </div>
                    <div className='content'>
                        {item.content}
                    </div>
                </div>)}

        </Wrapper>)
    }
}
export default CommentList;