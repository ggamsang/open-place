import ButtonNormal from "components_mobile/Commons/Button/\bButtonNormal";
import { WIDTH } from "constant";
import React, { useState } from "react";
import styled from 'styled-components';
import ReviewWriteContainer from "containers/ReviewContainer/ReviewWriteContainer";

const reviewdummy = [
    { uid: -1, user_id: 10, nick_name: "국민대CRC", exp_name: "상품명", option: "옵션", create_at: "2021-04-05", score: 4.9, text: "리뷰내용" },
    {
        uid: -3, nick_name: "국민대CRC", exp_name: "상품명", option: "옵션", create_at: "2021-04-05", score: 4.9, text: "리뷰내용",
        images: [
            { url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk", uid: "wpeoriwpoei" },
            { url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk", uid: "098080" },
            { url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk", uid: "wpeorizx.cmvwpoei" },
            { url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk", uid: "wpeoriwpoewerpi" },
            { url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk", uid: "" }
        ]
    },
    {
        uid: -2, nick_name: "국민대CRC", exp_name: "상품명", option: "옵션", create_at: "2021-04-05", score: 4.9, text: "리뷰내용",
        images: [
            { url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk", uid: "alskjfls" }
        ]
    },
]
const ReviewContainer = styled.div`
    margin: auto;
    width: ${WIDTH - 30}px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
const ReviewWrapper = styled.div`
    box-sizing: border-box;
    padding: 9px;
    margin: auto;
    width: 100%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    // height: 379px;
    border-radius: 10px;
    border: none;
    background: white;
    margin-bottom: 21px;
// *{border: 1px solid red;}

    .review-wrapper-top {
        // height: 60px;
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
    }
    .content {
        height: 153px;
    }
    .x {
        border-radius: 100%;
        background-color: #E9E9E9;
        font-family: Noto Sans KR;
        margin-left: auto;
        line-height: 28px;
        text-align: center;
        width: 28px;
        height: 28px;
    }
    .reviewlist-row { 
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .date {
        min-width: 70px;
        width: max-content;
        height: 16px;
        text-align: right;
        font: normal normal normal 13px/16px Pretendard;
        letter-spacing: 0px;
        color: #707070;
    }
    .nickname {
        padding-left: 5px;
        padding-right: 10px;
        border-right: 2px solid gray;
        height: 18px;
        text-align: left;
        font: normal normal normal 15px/18px Pretendard;
        letter-spacing: 0px;
        color: #000000;
    }
    .expname {
        padding-left: 5px;
        height: 18px;
        text-align: left;
        font: normal normal normal 15px/18px Pretendard;
        letter-spacing: 0px;
        color: #000000;
    }
    .score {
        display: flex;
        align-items: center;
        text-align: left;
        font: normal normal normal 11px/20px Metropolis;
        letter-spacing: 0px;
        color: #E43903;
        span {
            font-size: 20px;
        }
    }
    .review {
        box-sizing: border-box;
        padding: 10px;
        width: 100%;
        height: 153px;
        border-radius: 10px;
        background-color: #E9E9E9;
        font: normal normal normal 15px/18px Pretendard;
        letter-spacing: 0px;
        color: #000000;
    }
    .images {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
        width: 100%;
        overflow: auto;
        margin-top: 11px;
        margin-bottom: 11px;
    }
`;
const ReivewImageElement = styled.li`
    margin-right: 15px;
    min-width: 126px;
    min-height: 126px;
    max-width: 126px;
    max-height: 126px;
    background-color: #E9E9E9;
    text-align: center;
    align-items: center;
    display: flex;
    p {
        margin: auto;
        width: max-content;
        height: 21px;
        font: normal normal normal 18px/22px Noto Sans KR;
        letter-spacing: 0px;
        color: #000000;
    }
    img {
        background-image: url(${props => props.url});
        background-position: center center;
        background-size: cover;
        background-color: #E9E9E9;
        width: 100%;
        height: 100%;
        align-items: center;
        color: #000000;
        text-align: center;
        font-weight: normal;
        font-size: 18px;
        line-height: 126px;
        font-family: Noto Sans KR;
    }
`;
class ReviewList extends React.Component {
    // ({ reviews = reviewdummy, userInfo })
    // const [writeReview = false, setWriteReview] = useState();
    // const openModal = () => {
    //     alert('');
    //     setWriteReview(true);
    // }
    // return ()
    constructor(props) {
        super(props);
        this.state = {
            write: false,
        };
    }

    render() {
        const { reviews = reviewdummy, userInfo } = this.props;
        const { write } = this.state;

        return (<>
            <ButtonNormal
                onClickEvent={() => this.setState({ write: true })}
                width={155}
                height={35}
                radius={10}
                fontSize={15}
                bgColor={"red"}
                text={"리뷰작성하기"}
                style={{
                    marginRight: "20px",
                    marginBottom: "20px",
                    marginTop: "20px",
                    marginLeft: "20px"
                }}
            />

            {write && <ReviewWriteContainer open={write} close={() => this.setState({ write: false })} />}

            <ReviewContainer>
                {reviews &&
                    reviews.map(({ uid, user_id, create_at, text, images, nick_name, exp_name, option, score }) =>
                        <ReviewWrapper key={uid}>
                            <div className="review-wrapper-top">
                                <div className="reviewlist-row">
                                    <div className="nickname">{nick_name}</div>
                                    <div className="expname">{exp_name}-{option}</div>
                                    {user_id != null &&
                                        user_id === (userInfo && userInfo.uid) &&
                                        <div className="x"> + </div>}
                                </div>
                                <div className="reviewlist-row ">
                                    <div className="date">{create_at}</div>
                                    <div className="score">
                                        <span>⭑</span>{score}</div>
                                </div>
                            </div>
                            {images &&
                                <ul className="images reviewlist-row">
                                    {images.map(({ uid, url }) =>
                                        <a onClick={() => alert('clicked')} key={uid}>
                                            <ReivewImageElement key={uid}>
                                                <img alt="이미지" src={url} />
                                            </ReivewImageElement>
                                        </a>)}
                                </ul>}
                            <div className="review">
                                {text}
                            </div>
                        </ReviewWrapper>)}
            </ReviewContainer>

        </>);
    }

}

export default ReviewList;
