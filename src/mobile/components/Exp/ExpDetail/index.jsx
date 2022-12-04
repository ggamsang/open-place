import React from "react";
import styled from "styled-components";
import SearchForm from "../../../components/Commons/Search/SearchForm";
import { resolution } from "../../../commons/resolution";
import star from "src/imgs/Iconly-Bold-Star-red.svg";
import heart from "src/imgs/Iconly-Bold-Heart-white.svg";
import { ButtonNormal } from "../../../components/Commons/Button";
import { InputFile } from "../../../components/Commons/Input";
import { Fade } from "react-reveal";
import ReviewContainer from "../../../containers/ReviewContainer";
import { Dimmer, Loader } from "semantic-ui-react";
import { goto } from "src/utils/navigator";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 100px;
  // height: max-content;
  // min-height: 100vh;
  background: linear-gradient(205deg, #bf1d39, #8448b6);
  .reviewWrap {
    width: 100%;
    box-sizing: border-box;
    padding: 0px 20px;
  }
  .header {
    width: 100%;
    height: ${resolution(324)}px;
  }
  .searchbox {
    width: 100%;
    padding-top: 50px;
    display: flex;
    align-items: center;
  }
  .img_arrow {
    width: ${resolution(27)}px;
    height: ${resolution(19)}px;
  }

  .top_margin30 {
    margin-top: 30px;
  }

  .content {
    box-sizing: border-box;
    width: 100%;
    padding: 0px ${resolution(20)}px;
    .title {
      width: 100%;
      height: ${resolution(62)}px;
      display: flex;
      align-items: center;
      justify-content: center;
      font: normal normal bold 20px/20px Pretendard;
      color: white;
      display: flex;
      justify-content: space-between;
    }
    .img {
      width: 100%;
      height: ${resolution(275)}px;
      object-fit: cover;
      border-radius: 20px;
    }
    .img2 {
      height: ${resolution(145)}px;
    }
    .summary {
      box-sizing: border-box;
      padding: ${resolution(15)}px ${resolution(20)}px;
      width: 100%;
      height: ${resolution(90)}px;
      .label {
        font: normal normal bold 16px/19px Pretendard;
        color: white;
      }
      .detail {
        display: flex;
        align-items: center;
        .score {
          font: normal normal normal 11px Metropolis;
          color: red;
        }
        .writer {
          font: normal normal normal 12px/20px Pretendard;
          color: white;
        }
        .tags {
          font: normal normal normal 12px/20px Pretendard;
          color: white;
        }
        .price {
          font: normal normal bold 16px/19px Pretendard;
          color: white;
        }
        .like {
          font: normal normal bold 12px/15px Pretendard;
          color: white;
        }
      }
    }
    .exp {
      .row {
        width: 100%;
        border-radius: 20px;
        border: 1px solid white;
        box-sizing: border-box;
        padding: 20px;
        .editorText {
          filter: invert(100%);
        }
      }
    }
    .buttonWrap {
      display: flex;
      align-items: center;
    }
    .buttonWrap2 {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

class ExpDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      write: false,
      main: true,
      detail: false,
      like: false,
      sub: false,
    };
    this.onClickMain = this.onClickMain.bind(this);
    this.onClickDetail = this.onClickDetail.bind(this);
    this.onClickLike = this.onClickLike.bind(this);
    this.onClickModify = this.onClickModify.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (this.props.expDetail) {
      if (
        JSON.stringify(prevProps.expDetail) !==
        JSON.stringify(this.props.expDetail)
      ) {
        this.setState({ like: this.props.expDetail.isLike });
      }
    }
  }

  onClickMain = (event) => {
    this.setState({ sub: false });
    setTimeout(() => {
      this.setState({ main: true });
    }, 1000);
  };
  onClickDetail = (event) => {
    this.setState({ main: false });
    setTimeout(() => {
      this.setState({ sub: true });
    }, 1000);
  };
  onClickLike = async (event) => {
    await this.setState({ like: !this.state.like }, () => {
      const data = {
        type: "exp",
        like_id: this.props.item_id,
        user_id: this.props.userInfo.uid,
        isLike: this.state.like,
      };
      this.props.likeExpRequest(this.props.token, data);
    });
  };
  onClickBuy = (event) => {
    this.setState({ loading: true });
    goto("BUY", this.props.expDetail.uid);
    this.setState({ loading: false });
  };
  onClickModify = (event) => {
    window.location.href = `/ModifyExp/${this.props.expDetail.uid}`;
  };
  tagSprintToAry = (taglist) => {
    taglist = taglist && taglist.replace("[", "");
    taglist = taglist && taglist.replace("]", "");
    taglist = taglist && taglist.split(",").join(" | ");
    return taglist;
  };

  render() {
    console.log(this.props);
    const { expDetail } = this.props;
    let taglist = expDetail && this.tagSprintToAry(expDetail.taglist);
    const exp_files =
      expDetail && expDetail.exp_files && JSON.parse(expDetail.exp_files);

    return expDetail ? (
      <Wrapper>
        <div className="searchbox">
          <SearchForm />
        </div>
        <Fade opposite when={this.state.main}>
          <section
            style={{
              display: `${this.state.main === true ? "block" : "none"}`,
            }}
          >
            <div className="content">
              <div className="title">
                <div />
                경험정보
                <div />
              </div>
              <img
                alt="thumbnail"
                src={expDetail && expDetail.thumbnail}
                className="img"
              />
              <div className="summary">
                <div className="label">
                  {(expDetail && expDetail.title) || "dummy"}
                </div>
                <div className="detail">
                  <img
                    alt=""
                    src={star}
                    style={{
                      width: "14px",
                      height: "14px",
                      marginRight: "5px",
                    }}
                  />
                  <span className="score">4.9</span>
                  <span style={{ marginLeft: "13px" }} className="writer">
                    {(expDetail && expDetail.nick_name) || "dummy"}
                  </span>
                  <span style={{ color: "red", margin: "0px 5px" }}>·</span>
                  <span className="tags">{(taglist && taglist) || ""}</span>
                </div>
                <div className="detail">
                  <span style={{ marginRight: "14px" }} className="price">
                    ₩ {(expDetail && expDetail.price) || "dummy"}
                  </span>
                  <img
                    style={{
                      width: "14px",
                      height: "14px",
                      marginRight: "5px",
                    }}
                    src={heart}
                  />
                  <span className="like">99</span>
                </div>
              </div>
              <div className="buttonWrap">
                {this.props.isLoggedIn ? (
                  <ButtonNormal
                    onClickEvent={this.onClickLike}
                    width={155}
                    height={35}
                    radius={10}
                    fontSize={15}
                    bgColor={this.state.like === true ? "red" : "#dd5035"}
                    text={this.state.like === true ? "♥ 좋아요" : "♡ 좋아요"}
                    style={{ marginRight: "25px" }}
                  />
                ) : (
                  <div style={{ width: "155px", marginRight: "25px" }} />
                )}

                <ButtonNormal
                  onClickEvent={this.onClickDetail}
                  width={155}
                  height={35}
                  radius={10}
                  fontSize={15}
                  bgColor={"white"}
                  color={"black"}
                  text="상세정보"
                />
              </div>
              {this.props.isLoggedIn ? (
                <div className="buttonWrap" style={{ marginTop: "10px" }}>
                  <ButtonNormal
                    onClickEvent={this.onClickBuy}
                    width={155}
                    height={35}
                    radius={10}
                    fontSize={15}
                    bgColor={"#707070"}
                    text={"구매하기"}
                    style={{ marginRight: "25px" }}
                  />
                  <ButtonNormal
                    onClickEvent={() => this.setState({ write: true })}
                    width={155}
                    height={35}
                    radius={10}
                    fontSize={15}
                    bgColor={"#707070"}
                    text={"리뷰 등록하기"}
                    style={{}}
                  />
                </div>
              ) : null}
            </div>
          </section>
        </Fade>

        <Fade opposite when={this.state.sub}>
          <section
            style={{ display: `${this.state.sub === true ? "block" : "none"}` }}
          >
            <div className="content">
              <div className="title">
                <div onClick={this.onClickMain}>〈</div>
                상세정보
                <div />
              </div>

              <img
                src={expDetail && expDetail.thumbnail}
                className="img img2"
              />
              <div className="exp" style={{ marginTop: "10px" }}>
                <div className="row">
                  <div
                    className="editorText"
                    dangerouslySetInnerHTML={{
                      __html: expDetail && expDetail.content,
                    }}
                  />
                </div>
              </div>
              {exp_files != null && <InputFile files={exp_files} />}

              <div className="buttonWrap2">
                {this.props.token && (
                  <ButtonNormal
                    onClickEvent={this.onClickModify}
                    width={155}
                    height={35}
                    radius={10}
                    fontSize={15}
                    bgColor={"#707070"}
                    text="수정하기"
                  />
                )}
              </div>
            </div>
          </section>
        </Fade>
        <div className="reviewWrap">
          <ReviewContainer
            write={this.state.write}
            onCloseWriteModal={() => this.setState({ write: false })}
          />
        </div>
        {/* <Fade>
          <ReviewContainer />
        </Fade> */}
      </Wrapper>
    ) : (
      <Dimmer>
        <Loader />
      </Dimmer>
    );
  }
}

export default ExpDetail;
