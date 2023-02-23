import React from "react";
import star from "resources/Iconly-Bold-Star-red.svg";
import heart from "resources/Iconly-Bold-Heart-white.svg";
import ButtonNormal from "desktop/components/Commons/Button/ButtonNormal";
import { InputFile } from "desktop/components/Commons/Input";
import { Fade } from "react-reveal";
import ReviewContainer from "desktop/containers/ReviewContainer";
import { Dimmer, Loader } from "semantic-ui-react";
import { goto } from "navigator";
import * as styled from "./styles";
import NumRate from "desktop/components/Exp/ExpDetail/NumRate";
import host from "config";
import { DELETE, POST } from "constant";

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
  visited = () => {
    const url = `${host}/user/visited/${this.props.expDetail.uid}`;
    console.log(url, this.props.token);
    fetch(
      url, //POST(this.props.token, { test: "test" }))
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Access-Token": this.props.token,
        },
        // JSON.stringify 안하면 400오류
        body: JSON.stringify({ test: "" }),
      }
    )
      .then((r) => r.json())
      .then((detail) => console.log(detail));
  };
  componentDidMount() {
    // this.visited();
  }
  componentDidUpdate(prevProps) {
    if (this.props.expDetail) {
      if (
        JSON.stringify(prevProps.expDetail) !==
        JSON.stringify(this.props.expDetail)
      ) {
        this.props.token && this.visited();
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
    // await this.setState({ like: !this.state.like }, () => {
    //   const data = {
    //     type: "exp",
    //     like_id: this.props.item_id,
    //     user_id: this.props.userInfo.uid,
    //     isLike: this.state.like,
    //   };
    //   console.log(this.props.token, data);
    //   this.props.likeExpRequest(this.props.token, data);
    // });
    const { item_id, expDetail, token } = this.props;
    if (token == null) {
      alert("로그인 후 가능합니다.");
      return;
    }
    if (expDetail.isLike === 0) {
      const url = `${host}/exp/${item_id}/like`;
      return fetch(url, POST(token))
        .then((res) => res.json())
        .then(() => true)
        .catch((err) => false);
    } else {
      const url = `${host}/exp/${item_id}/like`;
      return fetch(url, DELETE(token))
        .then((res) => res.json())
        .then(() => true)
        .catch((err) => false);
    }
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
      <React.Fragment>
        <styled.ExpInfoText>경험정보</styled.ExpInfoText>
        <styled.ExpInfoDiv>
          <styled.ExpImg url={expDetail?.thumbnail} />

          <styled.ExpInnerDiv>
            <styled.NameAndTagsDiv>
              <styled.ExpName>{expDetail?.title}</styled.ExpName>
              {taglist &&
                taglist.length > 0 &&
                taglist.split("|").map((tag, index) => (
                  <styled.TagButton key={index}>
                    <styled.TagButtonText>{tag}</styled.TagButtonText>
                  </styled.TagButton>
                ))}
            </styled.NameAndTagsDiv>

            <styled.Price>
              {expDetail.price > 0
                ? new Intl.NumberFormat("ko-KR", {
                    style: "currency",
                    currency: "KRW",
                  }).format(expDetail.price) + "원"
                : "무료"}
            </styled.Price>
            <NumRate />
          </styled.ExpInnerDiv>

          <styled.StarIcon liked={expDetail.isLike !== 0} />

          {this.props.token &&
            expDetail.user_id === this.props.userInfo?.uid && (
              <styled.LikeButton onClick={this.onClickModify}>
                <span>수정하기</span>
              </styled.LikeButton>
            )}
          {expDetail.user_id !== this.props.userInfo?.uid && (
            <styled.LikeButton onClick={this.onClickLike}>
              {/* {expDetail.isLike} */}
              {/* bgColor={this.state.like === true ? "red" : "#dd5035"}
                  text= */}
              <span>{expDetail.isLike !== 0 ? "❤️" : ""}좋아요</span>
            </styled.LikeButton>
          )}
          {this.props.token &&
            expDetail.user_id !== this.props.userInfo?.uid && (
              <styled.PurchaseButton onClick={this.onClickBuy}>
                <span>구매하기</span>
              </styled.PurchaseButton>
            )}
        </styled.ExpInfoDiv>

        {/* detail */}

        {/*  */}
        {expDetail && expDetail.content && (
          <React.Fragment>
            <styled.ReviewText>상세정보</styled.ReviewText>
            <styled.DetailsDiv>
              <div className="content">
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
              </div>
            </styled.DetailsDiv>
          </React.Fragment>
        )}
        {/*  */}
        <styled.ReviewText>리뷰</styled.ReviewText>
        <div className="reviewWrap">
          <ReviewContainer
            write={this.state.write}
            onCloseWriteModal={() => this.setState({ write: false })}
          />
        </div>
        {/*  */}
        {/* <styled.ReviewText>게시판</styled.ReviewText> */}
      </React.Fragment>
    ) : (
      <Dimmer>
        <Loader />
      </Dimmer>
    );
  }
}

export default ExpDetail;
