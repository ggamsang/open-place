import React from "react";
import styled from "styled-components";
import ReviewWriteContainer from "desktop/containers/ReviewContainer/ReviewWriteContainer";
import ReviewModifyContainer from "desktop/containers/ReviewContainer/ReviewModifyContainer";
import Cross from "desktop/components/Commons/Cross";

const reviewdummy = [
  {
    uid: -1,
    user_id: 10,
    nick_name: "국민대CRC",
    exp_name: "상품명",
    option: "옵션",
    create_at: "2021-04-05",
    score: 4.9,
    text: "리뷰내용",
  },
  {
    uid: -3,
    nick_name: "국민대CRC",
    exp_name: "상품명",
    option: "옵션",
    create_at: "2021-04-05",
    score: 4.9,
    text: "리뷰내용",
    images: [
      {
        url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
        uid: "wpeoriwpoei",
      },
      {
        url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
        uid: "098080",
      },
      {
        url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
        uid: "wpeorizx.cmvwpoei",
      },
      {
        url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
        uid: "wpeoriwpoewerpi",
      },
      {
        url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
        uid: "",
      },
    ],
  },
  {
    uid: -2,
    nick_name: "국민대CRC",
    exp_name: "상품명",
    option: "옵션",
    create_at: "2021-04-05",
    score: 4.9,
    text: "리뷰내용",
    images: [
      {
        url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
        uid: "alskjfls",
      },
    ],
  },
];
const WriteReviewButton = styled.button`
  border: none;
  outline: none;
  background: none;
  margin-top: 15px;

  width: max-content;
  height: 55px;
  background: #ee00001f 0% 0% no-repeat padding-box;
  border: 1px solid #ee0000;
  border-radius: 4px;
  opacity: 1;
  display: flex;
  text-align: center;
  align-items: center;
  padding: 0px 10px;
  > span {
    text-align: center;
    // font: normal normal 500 25px/29px Pretendard;
    font-size: 25px;
    letter-spacing: 2.23px;
    color: #ee0000;
    text-transform: uppercase;
    opacity: 1;
    margin-left: 17px;
  }
`;
const ReviewContainer = styled.div`
  // width: ${window.innerWidth - 310}px;
  width: calc(100% - 100px);
  height: 430px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 6px 7px 9px #00000029;
  border: 1px solid #979797;
  border-radius: 32px;
  opacity: 1;
  display: wrap;
  // flex-direction: column;
  flex-wrap: flex;
  justify-content: space-between;
  overflow: auto;
  align-items: center;
  box-sizing: border-box;
  padding: 0 54px;
  .test {
    width: 322px;
    border: 1px solid red;
  }
  margin: auto;
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
  position: relative;
  
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
    background-color: #e9e9e9;
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
    color: #e43903;
    span {
      font-size: 20px;
    }
  }
  .review {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    min-height: 75px;
    max-height: 153px;
    border-radius: 10px;
    background-color: #e9e9e9;
    font: normal normal normal 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #000000;
  }
  .images {
    list-style: none;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    width: 100%;
    overflow: auto;
    margin-top: 11px;
    margin-bottom: 11px;
  }
`;
const ReivewImageElement = styled.div`
  margin-right: 15px;
  min-width: 126px;
  min-height: 126px;
  max-width: 126px;
  max-height: 126px;
  background-color: #e9e9e9;
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
    background-image: url(${(props) => props.url});
    background-position: center center;
    background-size: cover;
    background-color: #e9e9e9;
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
  constructor(props) {
    super(props);
    this.state = {
      write: false,
      modify: null,
    };
  }

  render() {
    const { reviews = reviewdummy, userInfo } = this.props;
    const { modify, write } = this.state;
    console.log(reviews);

    return (
      <>
        {write && (
          <ReviewWriteContainer
            open={write}
            close={() => this.props.onCloseWriteModal()}
          />
        )}
        {modify != null && (
          <ReviewModifyContainer
            open={modify != null}
            detail={modify}
            close={() => this.setState({ modify: null })}
          />
        )}

        <ReviewContainer>
          {userInfo && (
            <WriteReviewButton onClick={() => this.setState({ write: true })}>
              <span>리뷰 등록하기</span>
            </WriteReviewButton>
          )}
          {reviews &&
            reviews.map(
              ({
                uid,
                user_id,
                create_at,
                text,
                review_image_list: images,
                nick_name,
                exp_name,
                option,
                score,
              }) => (
                <ReviewWrapper key={uid}>
                  <div className="review-wrapper-top">
                    <div className="reviewlist-row">
                      <div className="nickname">{nick_name}</div>
                      <div className="expname">
                        {exp_name}
                        {option ? "-" + option : ""}
                      </div>
                      {user_id != null &&
                        user_id === (userInfo && userInfo.uid) && (
                          <React.Fragment>
                            <button
                              className="+"
                              style={{
                                marginRight: "15px",
                                border: "none",
                                outline: "none",
                                backgroundColor: "transparent",
                              }}
                              onClick={() =>
                                this.setState({
                                  modify: {
                                    uid,
                                    user_id,
                                    create_at,
                                    text,
                                    review_image_list: images,
                                    nick_name,
                                    exp_name,
                                    option,
                                    score,
                                  },
                                })
                              }
                              // onClick={() => this.props.edit(uid)}>
                              // onClick={() => this.edit(uid)}
                            >
                              <Cross
                                angle={0}
                                color={"#A0A0FF"}
                                weight={5}
                                width={20}
                                height={20}
                              />
                            </button>

                            <button
                              className="x"
                              style={{
                                marginRight: "15px",
                                border: "none",
                                outline: "none",
                                backgroundColor: "transparent",
                              }}
                              onClick={() => this.props.delete(uid)}
                            >
                              <Cross
                                angle={45}
                                color={"#FFA0A0"}
                                weight={5}
                                width={20}
                                height={20}
                              />
                            </button>
                          </React.Fragment>
                        )}
                    </div>
                    <div className="reviewlist-row ">
                      <div className="date">{create_at}</div>
                      <div className="score">
                        <span>⭑</span>
                        {score}
                      </div>
                    </div>
                  </div>
                  {images && (
                    <ul className="images reviewlist-row">
                      {images.split(",").map((url, index) => (
                        // onclick="window.open(this.src, '_blank');"
                        <li
                          onClick={() => window.open(url, "_blank")}
                          key={index}
                        >
                          <ReivewImageElement>
                            <img alt="이미지" src={url} />
                          </ReivewImageElement>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="review">{text}</div>
                </ReviewWrapper>
              )
            )}
        </ReviewContainer>
      </>
    );
  }
}

export default ReviewList;
