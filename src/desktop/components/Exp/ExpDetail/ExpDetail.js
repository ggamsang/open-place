import React from "react";
import star from "resources/Iconly-Bold-Star-red.svg";
import heart from "resources/Iconly-Bold-Heart-white.svg";
import ButtonNormal from "desktop/components/Commons/Button/ButtonNormal";
import { InputFile } from "desktop/components/Commons/Input";
import { Fade } from "react-reveal";
import ReviewContainer from "desktop/containers/ReviewContainer";
import { Dimmer, Loader } from "semantic-ui-react";
import { goto } from "navigator";
import * as styled from "./styles";
import NumRate from "desktop/components/Exp/ExpDetail/NumRate";
import host from "config";
import { DELETE, FILE, PDFVIEWER_VERSION, POST, TEXT } from "constant";
import FileIcon from "resources/FileIcon/FileIcon";
import { Encrypt } from "modules/EncryptDecrypt";
import { PdfViewer } from "modules/PDFviewer";
import { Worker } from "@react-pdf-viewer/core";

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
        {expDetail?.contents?.length > 0 && (
          <React.Fragment>
            <styled.ReviewText>상세정보</styled.ReviewText>
            <styled.DetailsDiv>
              <div className="content">
                <Worker
                  workerUrl={`https://unpkg.com/pdfjs-dist@${PDFVIEWER_VERSION}/build/pdf.worker.min.js`}
                >
                  {/* view mode */}
                  {expDetail.contents.map((item, index) => (
                    <div key={index}>
                      {item.type === TEXT ? (
                        <styled.ViewContent>
                          {/* {this.props.isEdit == false ? */}{" "}
                          {/* <FontZoom> <div className="zoomRgn"> <div style={{ cursor: "default", paddingTop: "3px", lineHeight: "1rem", fontSize: "1rem" }}>폰트<br />크기</div> <div style={{ width: "35px", height: "35px", borderRadius: "100%", background: this.state.fontratio < 3 ? "black" : "#EFEFEF", textAlign: "center", color: "white", cursor: this.state.fontratio < 3 ? "pointer" : "not-allowed", fontSize: "3.5rem", lineHeight: "2rem" }} onClick={() => { this.state.fontratio < 3 && this.setState({ fontratio: this.state.fontratio + fontoffset }) }} >+</div> <div style={{ width: "35px", height: "35px", borderRadius: "100%", background: this.state.fontratio > 1 ? "black" : "#EFEFEF", textAlign: "center", color: "white", cursor: this.state.fontratio > 1 ? "pointer" : "not-allowed", fontSize: "3.5rem", lineHeight: "2rem" }} onClick={() => { this.state.fontratio > 1 && this.setState({ fontratio: this.state.fontratio - fontoffset }) }} >-</div> </div> </FontZoom> */}{" "}
                          {/* : null */} {/* } */}
                          <div
                            style={{
                              minHeight: "50px",
                              fontSize: `${this.state.fontratio}rem`,
                              lineHeight: `${this.state.fontratio * 1.2}rem`,
                            }}
                            dangerouslySetInnerHTML={{
                              __html: `${
                                item.content == null ||
                                item.content.replace(" ", "").length === 0
                                  ? '<center><p style="color:gray">(빈 텍스트)</p></center>'
                                  : item.content
                                      .replace(
                                        /font-size:14px;/g,
                                        `font-size:${
                                          0.875 * this.state.fontratio
                                        }rem;`
                                      )
                                      .replace(
                                        /font-size:18px;/g,
                                        `font-size:${
                                          1.125 * this.state.fontratio
                                        }rem;`
                                      )
                                      .replace(
                                        /font-size:24px;/g,
                                        `font-size:${
                                          1.5 * this.state.fontratio
                                        }rem;`
                                      )
                                      .replace(
                                        /font-size:30px;/g,
                                        `font-size:${
                                          1.875 * this.state.fontratio
                                        }rem;`
                                      )
                                      .replace(
                                        /font-size:36px;/g,
                                        `font-size:${
                                          2.25 * this.state.fontratio
                                        }rem;`
                                      )
                                      .replace(
                                        /font-size:48px;/g,
                                        `font-size:${
                                          3.5 * this.state.fontratio
                                        }rem;`
                                      )
                              }`,
                            }}
                            onClick={() =>
                              this.props.edit &&
                              this.setState({ selectOrder: item.order })
                            }
                          />
                        </styled.ViewContent>
                      ) : item.type === FILE ? (
                        <styled.ViewContent key={index}>
                          {item?.data_type?.includes("image") ? (
                            <div
                              className="imgContent"
                              onClick={() => {
                                const url = item.content;
                                const img =
                                  '<img id="image" src="' + url + '">';
                                const popup = window.open(
                                  "",
                                  "_blank",
                                  "image-view"
                                );
                                popup.document.write(img);
                                const imgnode =
                                  popup.document.getElementById("image");
                                popup.resizeTo(
                                  /* width */ imgnode.naturalWidth >
                                    window.screen.width
                                    ? window.screen.width / 2
                                    : imgnode.naturalWidth * 1.06,
                                  /* height */ imgnode.naturalHeight >
                                    window.screen.height
                                    ? window.screen.height / 2
                                    : imgnode.naturalHeight * 1.06
                                );
                              }}
                            >
                              {/* <Zoom > */}
                              <div
                                style={{
                                  width: "100%",
                                  overflow: "auto",
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: `${
                                    (item.option &&
                                      item.option.split(",")[0]) ||
                                    "center"
                                  }`,
                                }}
                              >
                                {item.option &&
                                item.option.split(",")[1] === "scale" ? (
                                  <img
                                    style={{
                                      width: "100%",
                                      objectFit: "contain",
                                    }}
                                    src={item.content}
                                    alt="이미지"
                                    download={item.file_name}
                                  />
                                ) : (
                                  <img
                                    style={{ objectFit: "contain" }}
                                    src={item.content}
                                    alt="이미지"
                                    download={item.file_name}
                                  />
                                )}
                              </div>
                              {/* <img src={item.content} alt="이미지" /> */}
                              {/* </Zoom> */}
                              {/* <p>이미지를 클릭하시면 원본크기로 보실 수 있습니다.</p> */}
                            </div>
                          ) : item?.data_type?.includes("video") ? (
                            <div
                              style={{
                                width: "100%",
                                overflow: "auto",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: `${
                                  (item.option && item.option.split(",")[0]) ||
                                  "center"
                                }`,
                              }}
                            >
                              <span className="centering">
                                <span className="LinkFileName">
                                  {item.file_name}
                                </span>
                              </span>
                              <video
                                key={item.content}
                                className={`${
                                  item.option &&
                                  item.option.split(",")[0] === "center"
                                    ? "align-center"
                                    : item.option &&
                                      item.option.split(",")[0] === "left"
                                    ? "align-left"
                                    : "align-right"
                                } iconWrap`}
                                width={`${
                                  window.innerWidth > 480
                                    ? "975"
                                    : window.innerWidth - 55
                                }`}
                                height={`${
                                  window.innerWidth > 480
                                    ? "600"
                                    : (window.innerWidth - 55) * 0.55
                                }`}
                                controls="controls"
                              >
                                <source
                                  src={item.content}
                                  type="video/mp4"
                                  download={item.file_name}
                                ></source>
                              </video>
                            </div>
                          ) : item?.data_type?.includes("pdf") ? (
                            <React.Fragment>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "flex-end",
                                }}
                              >
                                <div
                                  style={{
                                    cursor: "pointer",
                                    fontSize: "1.25rem",
                                    color: "#707070",
                                    marginLeft: "auto",
                                    border: "1px solid transparent",
                                    width: "max-content",
                                  }}
                                >
                                  {/* <a
                                    onClick={() =>
                                      window.open(
                                        `/pdfview/${item.content}`,
                                        // `/pdfview/${Encrypt(
                                        //   item.content,
                                        //   "opendesign"
                                        // )}`,
                                        "_blank",
                                        null
                                      )
                                    }
                                  >
                                    <i className="file pdf outline icon large" />
                                    새탭으로열기
                                  </a> */}
                                </div>
                                <div
                                  style={{
                                    fontSize: "1.25rem",
                                    color: "#707070",
                                    marginLeft: "25px",
                                    border: "1px solid transparent",
                                    width: "max-content",
                                  }}
                                >
                                  <a href={item.content}>
                                    <i className="save icon large" />
                                    PDF다운로드
                                  </a>
                                </div>
                              </div>
                              <PdfViewer pdf={item.content} height={true} />
                            </React.Fragment>
                          ) : item.extension !== "pdf" &&
                            item.data_type !== "image" &&
                            item.data_type !== "video" ? (
                            <a
                              className="iconWrap"
                              href={item.content}
                              download={item.file_name}
                            >
                              <FileIcon
                                type={item.data_type}
                                extension={item.extension}
                              />
                              <span className="LinkFileName">
                                {item.file_name}
                              </span>
                            </a>
                          ) : null}
                        </styled.ViewContent>
                      ) : null}
                    </div>
                  ))}
                </Worker>
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
