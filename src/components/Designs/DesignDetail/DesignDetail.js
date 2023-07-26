import React, { Component } from "react";
import DesignInfo from "components/Designs/DesignInfo";
import DesignDetailStepContainer from "containers/ExpItem/DesignDetailStepContainer";
import Loading from "components/Commons/Loading";
import DesignDetailViewContainer from "containers/ExpItem/DesignDetailViewContainer";

import {
  CATEs,
  TYPEs,
  EXP_TYPE_LECT,
  EXP_TYPE_MEET,
  EXP_TYPE_CONS,
} from "constant";
import { alert } from "components/Commons/Alert/Alert";
import { confirm } from "components/Commons/Confirm/Confirm";
import { goto } from "navigator";
import Design from "components/Designs/Design";
import {
  DenyForkDesignRequest,
  AcceptForkDesignRequest,
  KickOutForkDesignReques,
} from "redux/modules/expitem";
import { DESIGN_NOT_FOUND } from "redux/modules/expitem/design";
import GroupNoticeContainer from "containers/Groups/GroupNoticeContainer";
import host from "config";
import {
  RateExpDiv,
  RateDiv,
  Rate,
  RateReview,
  RateStarIcon,
  RateNumRate,
  RateIcon,
  RateBar,
  Wrapper,
  ExpInfoDiv,
  ExpInfoText,
  ExpInnerDiv,
  ExpName,
  ExpImg,
} from "./styles";

const NumRate = ({ rate = 0, count = 0, freq = [40, 30, 20, 10, 0] }) => {
  return (
    <RateExpDiv>
      <RateDiv>
        <Rate>{rate}</Rate>
        <RateReview>리뷰 {count}개</RateReview>
      </RateDiv>
      <RateStarIcon />
      {/* <NumRate /> */}
      <RateNumRate>
        <RateNumRate2>
          5<RateIcon />
          <RateBar per={freq[0]} />
        </RateNumRate2>
        <RateNumRate2>
          4<RateIcon />
          <RateBar per={freq[1]} />
        </RateNumRate2>
        <RateNumRate2>
          3<RateIcon />
          <RateBar per={freq[2]} />
        </RateNumRate2>
        <RateNumRate2>
          2<RateIcon />
          <RateBar per={freq[3]} />
        </RateNumRate2>
        <RateNumRate2>
          1<RateIcon />
          <RateBar per={freq[4]} />
        </RateNumRate2>
      </RateNumRate>
    </RateExpDiv>
  );
};

class DesignDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMyDesign: false,
      editor: false,
      manage: false,
      applied: null,
    };
  }
  componentDidMount() {
    this.props
      .GetDesignDetailRequest(this.props.id, this.props.token)
      .then(async () => {
        if (this.props.status === DESIGN_NOT_FOUND) {
          await alert("잘못된 접근입니다.");
          window.history.go(-1);
        }
        this.CheckYouAlreadyApplied();
        if (this.props.userInfo === null) this.setState({ isMyDesign: false });
        else if (this.props.userInfo.uid === this.props.DesignDetail.user_id) {
          this.props.DesignWaitingListRequest(this.props.id, this.props.token);
          this.props.GetCountDesignCommentRequest(this.props.id);
          this.setState({ isMyDesign: true });
          this.props.ForkDesignListRequest(
            this.props.DesignDetail.uid,
            // this.props.userInfo.uid,
            this.props.token
          );
        } else {
          this.setState({ isMyDesign: false });
        }

        // await this.setState({ editor: this.checkEditorPermission() });
      }); // 디자인에 대한 정보
    this.props
      .UpdateDesignViewRequest(this.props.id)
      .then(this.props.GetDesignCountRequest(this.props.id)); // 디자인 조회수 업데이트 후 카운트 정보 가져옴
    if (this.props.token) {
      this.props.GetLikeDesignRequest(this.props.id, this.props.token);
    } // 로그인 한 경우 좋아요 했는지 여부 가져오기
  }

  // checkEditorPermission = () => {
  //   const { userInfo, DesignDetail } = this.props;
  //   return userInfo &&
  //     DesignDetail &&
  //     DesignDetail.member &&
  //     DesignDetail.member.find((peer) => peer.user_id === userInfo.uid)
  //     ? true
  //     : false;
  // };
  onClickBuy = async (event) => {
    const { userInfo, DesignDetail, token } = this.props;
    // // joinMember = async () => {
    // if (!userInfo || !token) {
    //   await alert("로그인 해주세요.", "확인");
    // } else if (DesignDetail.waitingStatus === 1) {
    //   await alert("가입 대기중인 디자인입니다.", "확인");
    // } else {
    //   const data = [{ uid: userInfo.uid }];
    //   if (await confirm("강의 신청하시겠습니까?", "예", "아니오")) {
    //     goto("CREATE-ITEM", DesignDetail.uid);
    //     // this.props
    //     //   .JoinDesignRequest(this.props.id, data, 0, token)
    //     //   .then((res) => {
    //     //     if (res && res.data && res.data.success) {
    //     //       // alert("가입 신청이 완료되었습니다.");
    //     //       this.props.GetDesignDetailRequest(this.props.id, token);
    //     //     } else {
    //     //       alert("다시 시도해주세요");
    //     //     }
    //     //   });
    //   }
    // }
    // // };
    if (await confirm("신청하시겠습니까?", "예", "아니오")) {
      this.props
        .ForkDesignRequest(DesignDetail.uid, userInfo.uid, token)
        .then((res) => {
          // {type: , new_design_id: 5464}
          if (res.type === "FORK_DESIGN_SUCCESS") {
            this.props.history.push("/expModify/" + res.new_design_id);
          }
        });
    }
  };
  onClickForkDesignAccept = (id) => {
    AcceptForkDesignRequest(id, this.props.token)
      .then(console.log)
      .then(() =>
        this.props.ForkDesignListRequest(
          this.props.DesignDetail.uid,
          this.props.token
        )
      );
  };
  onClickForkDesignKickOut = (id) => {
    KickOutForkDesignReques(id, this.props.token)
      .then(console.log)
      .then(() =>
        this.props.ForkDesignListRequest(
          this.props.DesignDetail.uid,
          this.props.token
        )
      );
  };
  onClickForkDesignDeny = (id) => {
    DenyForkDesignRequest(id, this.props.token)
      .then(console.log)
      .then(() =>
        this.props.ForkDesignListRequest(
          this.props.DesignDetail.uid,
          this.props.token
        )
      );
  };
  onClickModify = () => {
    window.location.href = `/expModify/${this.props.DesignDetail.uid}`;
  };
  request = () => {
    return new Promise(async (resolve, reject) => {
      fetch(
        `${host}/design/checkapply/${this.props.DesignDetail.uid}/${this.props.userInfo.uid}`,
        {
          header: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*",
            // "x-access-token": this.props.token,
          },
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  };
  CheckYouAlreadyApplied = async () => {
    // console.clear();
    // alert(this.props.DesignDetail.uid);
    // alert(this.props.token);
    // alert(this.props.userInfo.uid);
    // console.log("check you are already applied");
    const { userInfo, DesignDetail } = this.props;
    if (userInfo && DesignDetail) {
      await this.request().then((data) => {
        if (data?.success) {
          this.setState({ applied: data?.detail[0]?.cnt > 0 ? true : false });
        }
      });
    }
  };

  render() {
    const { DesignDetail, userInfo, forkDesignList } = this.props;
    const { manage } = this.state;
    // const { isMyDesign } = this.state;

    if (DesignDetail == null)
      return (
        <Wrapper>
          <Loading />
        </Wrapper>
      );

    console.clear();
    console.log(this.props, this.state);
    const isGroupExp =
      [1, 2, 3].includes(DesignDetail.design_type) &&
      DesignDetail.is_parent &&
      DesignDetail.parent_design === null; // this.props.DesignDetail?.design_type)
    const isGroupMember =
      [1, 2, 3].includes(DesignDetail.design_type) &&
      // DesignDetail.d_flag === 1 &&
      DesignDetail.parent_design !== null;
    console.log(isGroupExp);

    return (
      <Wrapper>
        {/* -head- */}
        <React.Fragment>
          <ExpInfoText>경험정보</ExpInfoText>
          <ExpInfoDiv>
            <ExpImg url={DesignDetail?.img?.l_img} />

            <ExpInnerDiv>
              <NameAndTagsDiv>
                <div>
                  <ExpName>{DesignDetail?.title}</ExpName>
                  <CateType>
                    (
                    {
                      CATEs.filter(
                        (cate) => cate.value === DesignDetail.category_level1
                      )[0]?.name
                    }
                    ) x (
                    {
                      TYPEs.filter(
                        (type) => type.value === DesignDetail.design_type
                      )[0]?.name
                    }
                    )
                  </CateType>
                </div>
                {DesignDetail.taglist &&
                  DesignDetail.taglist.length > 0 &&
                  DesignDetail.taglist.split("|").map((tag, index) => (
                    <TagButton key={index}>
                      <TagButtonText>{tag}</TagButtonText>
                    </TagButton>
                  ))}
              </NameAndTagsDiv>

              <Price>
                {/* {DesignDetail.price > 0
                      ? new Intl.NumberFormat("ko-KR", {
                          style: "currency",
                          currency: "KRW",
                        }).format(DesignDetail.price) + "원"
                      : "무료"} */}
              </Price>
              <NumRate />
            </ExpInnerDiv>

            <StarIcon liked={DesignDetail.isLike !== 0} />

            <div
              style={{
                marginRight: "15px",
                marginBottom: "15px",
                position: "absolute",
                width: "max-content",
                right: "0%",
                bottom: "0%",
                display: "flex",
              }}
            >
              {/* {this.props.token &&
                  DesignDetail.user_id !== this.props.userInfo?.uid && (
                    <PurchaseButton onClick={this.onClickBuy}>
                      <span>구매하기</span>
                    </PurchaseButton>
                  )} */}

              {DesignDetail.user_id !== this.props.userInfo?.uid && (
                <LikeButton onClick={this.onClickLike}>
                  {/* {DesignDetail.isLike} */}
                  {/* bgColor={this.state.like === true ? "red" : "#dd5035"} text= */}
                  <span>{DesignDetail.isLike !== 0 ? "❤️" : ""}좋아요</span>
                </LikeButton>
              )}

              {this.props.token &&
                isGroupExp &&
                this.state.applied === false &&
                DesignDetail.user_id !== this.props.userInfo?.uid && (
                  <PurchaseButton onClick={this.onClickBuy}>
                    <span>강의신청하기</span>
                  </PurchaseButton>
                )}

              {DesignDetail && (
                <GroupNoticeContainer
                  owner_id={DesignDetail.user_id}
                  id={DesignDetail.uid}
                  token={this.props.token}
                  user_id={userInfo?.uid}
                />
              )}

              {this.props.token &&
                forkDesignList?.length > 0 &&
                DesignDetail.is_parent && (
                  <ManageButton
                    onClick={() =>
                      this.setState({ manage: !this.state.manage })
                    }
                  >
                    <span>관리모드</span>
                  </ManageButton>
                )}

              {this.props.token &&
                DesignDetail.user_id === this.props.userInfo?.uid && (
                  <LikeButton onClick={this.onClickModify}>
                    <span>수정하기</span>
                  </LikeButton>
                )}
            </div>
          </ExpInfoDiv>

          {/* detail */}
          {/*  */}
          {/* <ReviewText>게시판</ReviewText> */}
        </React.Fragment>

        {/* -body- */}
        <React.Fragment>
          {isGroupExp ? (
            <>
              {manage && (
                <>
                  <ExpInfoText>그룹관리</ExpInfoText>
                  {forkDesignList &&
                    forkDesignList.filter((item) => item.d_flag === 0)
                      .length === 0 && <h3>가입신청내역없음</h3>}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    {forkDesignList &&
                      forkDesignList
                        .filter((item) => item.d_flag === 0)
                        .map((item) => (
                          <div key={item.uid}>
                            <button
                              style={{
                                backgroundColor: "red",
                                color: "white",
                                fontSize: "1.5rem",
                                padding: "5px 10px",
                                borderRadius: "15%",
                              }}
                              onClick={() =>
                                this.onClickForkDesignAccept(item.uid)
                              }
                            >
                              수락
                            </button>
                            <button
                              style={{
                                backgroundColor: "black",
                                color: "white",
                                fontSize: "1.5rem",
                                padding: "5px 10px",
                                borderRadius: "15%",
                              }}
                              onClick={() =>
                                this.onClickForkDesignDeny(item.uid)
                              }
                            >
                              거절
                            </button>
                            <Design {...item} />
                          </div>
                        ))}
                  </div>
                </>
              )}
              {this.props.token &&
                forkDesignList?.length > 0 &&
                DesignDetail.is_parent && (
                  <>
                    {/* <ExpInfoText>가입목록</ExpInfoText> */}

                    <div
                      style={{
                        marginTop: "25px",
                        display: "flex",
                        flexWrap: "wrap",
                        width: "100%",
                      }}
                    >
                      {forkDesignList
                        .filter((item) => item.d_flag !== 0)
                        .map((item) => (
                          <div key={item.uid}>
                            <Design
                              {...item}
                              onClick={() => goto("EXP", item.uid)}
                            />
                            <button
                              style={{
                                backgroundColor: "black",
                                color: "white",
                                fontSize: "1.5rem",
                                padding: "5px 10px",
                                borderRadius: "15%",
                              }}
                              onClick={() =>
                                this.onClickForkDesignKickOut(item.uid)
                              }
                            >
                              퇴출
                            </button>
                          </div>
                        ))}
                    </div>
                  </>
                )}
            </>
          ) : (
            <></>
          )}

          {isGroupMember && DesignDetail.d_flag === 0 ? (
            <>
              {" "}
              <p
                style={{
                  fontSize: "2rem",
                  padding: "50px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                가입신청 중입니다.
              </p>
            </>
          ) : (
            <>
              {/* design detail */}
              <ExpInfoText>상세정보</ExpInfoText>

              {DesignDetail && DesignDetail.is_project === 1 ? (
                <DesignDetailStepContainer
                  design={DesignDetail}
                  {...this.state}
                />
              ) : (
                <div className="marginLeft">
                  <DesignDetailViewContainer
                    id={this.props.id}
                    {...this.state}
                    history={this.props.history}
                  />
                </div>
              )}
            </>
          )}
          {!isGroupMember && (
            <>
              {/*  */}
              <ReviewText>리뷰</ReviewText>
              <div className="reviewWrap">
                {/* <ReviewContainer
                write={this.state.write}
                onCloseWriteModal={() => this.setState({ write: false })}
              /> */}
              </div>
            </>
          )}
        </React.Fragment>
      </Wrapper>
    );
  }
}

export default DesignDetail;
// DesignDetail.is_parent === false &&
// isMyDesign &&
// DesignDetail.d_flag === 0 ? (
//   <React.Fragment>
//     <div
//       style={{
//         width: "100wh",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         // verticalAlign: "center",
//         textAlign: "center",
//         flexDirection: "column",
//       }}
//     >
//       <h1>가입승낙 대기중입니다.</h1>
//       <br />
//       <button
//         style={{ padding: "25px", color: "red", fontWeight: "bold" }}
//         onClick={() => window.history.go(-1)}
//       >
//         뒤로가기
//       </button>
//     </div>
//   </React.Fragment>
// ) : (
