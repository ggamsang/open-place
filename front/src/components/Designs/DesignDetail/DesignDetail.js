import React, { Component } from "react";
import Loading from "components/Commons/Loading";
import { Rating, Box } from "@mui/material";

import { alert } from "components/Commons/Alert/Alert";
import { confirm } from "components/Commons/Confirm/Confirm";
import {
  DenyForkDesignRequest,
  AcceptForkDesignRequest,
  KickIOutForkDesignRequest,
  IWantToOutForkDesignRequest,
} from "redux/modules/expitem";
import { DESIGN_NOT_FOUND } from "redux/modules/expitem/design";
import host from "config";
import {
  Wrapper,
  ExpInfoDiv,
  ExpInfoText,
  ExpInnerDiv,
  ExpName,
  ExpImg,
  ExpInnerButtonBox,
  NameAndTagsDiv,
  CateType,
  Tags,
  Price,
  StarIcon,
  LikeButton,
  PurchaseButton,
  ManageButton,
  ReviewText,
  RejectButton,
  AcceptButton,
  KickoutButton,
  MyDesignLabel,
} from "./styles";
import NumRate from "./NumRate";
import {
  CATEs,
  TYPEs,
  EXP_TYPE_CONS,
  EXP_TYPE_GAME,
  EXP_TYPE_LECT,
  EXP_TYPE_MEET,
  EXP_TYPE_NORM,
} from "constant";
import Design from "components/Designs/Design";

import DesignDetailStepContainer from "containers/ExpItem/DesignDetailStepContainer";
import DesignDetailViewContainer from "containers/ExpItem/DesignDetailViewContainer";
import GroupNoticeContainer from "containers/Groups/GroupNoticeContainer";

import { goto } from "navigator";
function BasicRating(props) {
  const [value, setValue] = React.useState(props.rate || 2);

  return (
    <Box
      sx={{
        "& > legend": { mt: 20 },
      }}
    >
      {/* <Typography component="legend">Controlled</Typography> */}
      {/* <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      <Rating
        name="read-only"
        value={value}
        readOnly
        defaultValue={2}
        size="large"
        style={{ fontSize: "1rem" }}
      />
      {/* <Typography component="legend">Disabled</Typography> */}
      {/* <Rating name="disabled" value={value} disabled /> */}
      {/* <Typography component="legend">No rating given</Typography> */}
      {/* <Rating name="no-value" value={null} /> */}
    </Box>
  );
}

const NumRateNew = ({
  rate = 5,
  cntReview = 0,
  freq = [40, 30, 20, 10, 0],
}) => (
  <div
    style={{
      width: "max-content",
      // margin: "left",
      display: "flex",
      flexDirection: "row",
      // border: "1px solid red",
      justifyContent: "center",
    }}
  >
    {/* <div style={{ display: "flex" }}> */}
    <span
      style={{
        padding: 0,
        marginLeft: "5px",
        marginBottom: "1rem",
        fontSize: "1rem",
        fontFamily: "Noto Sans KR",
        textAlign: "center",
        alignItems: "center",
        lineHeight: "1rem",
      }}
    >
      평점:{parseInt(rate).toFixed(1)}
    </span>
    <BasicRating rate={rate} />
    <p>{"(리뷰:0개)"}</p>
    {/* </div> */}
    {/* <p
      style={{
        margin: "auto",
        border: "1px solid gray",
        padding: "5px 7px",
        width: "max-content",
        borderRadius: "5px",
        fontSize: "1rem",
      }}
    >
      리뷰: 0개
    </p> */}
  </div>
);
class DesignDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMyDesign: false,
      editor: false,
      manage: false,
      applied: null,
      fold: true,
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
        this.props.ForkDesignListRequest(
          this.props.DesignDetail.parent_design || this.props.DesignDetail.uid,
          // this.props.userInfo.uid,
          this.props.token
        );
        if (this.props.userInfo === null) this.setState({ isMyDesign: false });
        else if (this.props.userInfo.uid === this.props.DesignDetail.user_id) {
          this.props.DesignWaitingListRequest(this.props.id, this.props.token);
          this.props.GetCountDesignCommentRequest(this.props.id);
          this.setState({ isMyDesign: true });
        } else {
          this.setState({ isMyDesign: false });
        }

        // await this.setState({ editor: this.checkEditorPermission() });
      }); // 경험에 대한 정보
    this.props
      .UpdateDesignViewRequest(this.props.id)
      .then(this.props.GetDesignCountRequest(this.props.id)); // 경험 조회수 업데이트 후 카운트 정보 가져옴
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
  onClickChat = async (event) => {
    const { DesignDetail } = this.props;
    const options = `toolbar=no,status=no,menubar=no,resizable=no,location=no,top=100,left=100,width=496,height=600,scrollbars=no`;
    this.chatwindow = window.open(
      `/chat/${DesignDetail.parent_design || DesignDetail.uid}`,
      "chat",
      options
    );
  };
  onClickVChat = async (event) => {
    // const url = `${process.env.REACT_APP_VCHAT_URL}?auth=${this.props.token}&room=${this.props.DesignDetail.uid}`;
    const REACT_APP_VCHAT_URL =
      "https://s3.ap-northeast-2.amazonaws.com/depot.opensrcdesign.com/meet/index.html";
    const options = `toolbar=no,status=no,menubar=no,resizable=0,location=no,scrollbars=no,\
        top=0,left=0,width=${window.screen.width},height=${
      window.screen.height - 100
    }`;
    const url = `${REACT_APP_VCHAT_URL}?auth=${this.props.token}&room=${
      this.props.DesignDetail.parent_design || this.props.DesignDetail.uid
    }`;
    console.log(url, options);
    // return;
    this.vchatwindow = window.open(url, "vchat", options);
  };
  onClickBuy = async (event) => {
    const { userInfo, DesignDetail, token } = this.props;
    // // joinMember = async () => {
    if (!userInfo || !token) {
      await alert("로그인 해주세요.", "확인");
      return;
    }
    //else if (DesignDetail.waitingStatus === 1) {
    //   await alert("가입 대기중인 경험입니다.", "확인");
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
  onClickIWannaOutHere = async (item) => {
    if (await confirm("이 그룹에서 탈퇴하시겠습니까?", "예", "아니오")) {
      // await alert("백엔드 개발중");
      IWantToOutForkDesignRequest(item, this.props.token)
        // .then(console.log)
        .then(() => this.props.ForkDesignListRequest(item, this.props.token));
    }
  };
  onClickForkDesignKickOut = async (id) => {
    if (await confirm("선택하신 경험을 삭제하시겠습니까?", "예", "아니오")) {
      KickIOutForkDesignRequest(id, this.props.token)
        .then(console.log)
        .then(() =>
          this.props.ForkDesignListRequest(
            this.props.DesignDetail.uid,
            this.props.token
          )
        );
    }
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
  onClickLike = async () => {
    const { userInfo, DesignDetail, token } = this.props;
    if (!userInfo || !token) {
      await alert("로그인 해주세요.", "확인");
      return;
    }
    this.props
      .LikeDesignRequest(DesignDetail.uid, token)
      .then(
        (rst) =>
          rst?.success &&
          this.props.GetLikeDesignRequest(DesignDetail.uid, token)
      );
  };
  onClickManage = () => this.setState({ manage: !this.state.manage });
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
    const { userInfo, DesignDetail } = this.props;
    if (userInfo && DesignDetail) {
      await this.request().then((data) => {
        if (data?.success) {
          this.setState({ applied: data?.detail[0]?.cnt > 0 ? true : false });
        }
      });
    }
  };
  setFold = () => {
    this.setState({ fold: !this.state.fold });
  };

  render() {
    const { DesignDetail, token, userInfo, forkDesignList } = this.props;
    const { manage, fold } = this.state;
    console.log(this.props);
    if (DesignDetail == null)
      return (
        <Wrapper>
          <Loading />
        </Wrapper>
      );

    const isGroupExp =
      [1, 2, 3].includes(DesignDetail.design_type) &&
      DesignDetail.parent_design === null &&
      DesignDetail.d_flag === 0;
    const isGroupMember =
      [1, 2, 3].includes(DesignDetail.design_type) &&
      forkDesignList?.filter(
        (design) => design.user_id === userInfo?.uid && design.d_flag === 1
      )?.length > 0;
    const cateName = CATEs.filter(
      (cate) => cate.value === DesignDetail.category_level1
    )[0]?.name;
    const typeName = TYPEs.filter(
      (type) => type.value === DesignDetail.design_type
    )[0]?.name;
    // [놀기, 배우기, 만들기] x [모임, 강의, 상담, 일반, 게임]

    // 그룹인가? 개설자인가? 신청인가?
    // 폈는가? 펴지 않았는가?
    const isGroup = "모임강의상담".includes(typeName) && "그룹";
    console.log(DesignDetail);
    return (
      <Wrapper>
        {isGroupMember}
        <ExpInfoText>경험정보</ExpInfoText>
        {/* head */}
        <ExpInfoDiv>
          {/* <StarIcon like={this.props.like} /> */}

          <ExpImg url={DesignDetail?.img?.l_img} />
          <ExpInnerDiv>
            <NameAndTagsDiv>
              <div>
                <ExpName>{DesignDetail?.title}</ExpName>
                <div style={{ display: "flex" }}>
                  <CateType>
                    ({cateName}) x ({typeName})
                  </CateType>
                  <Tags style={{ display: "flex" }}>
                    {/* {DesignDetail.tag?.length > 0 && "태그"} */}
                    <div className="fold">
                      {DesignDetail.tag?.slice(0, 5).map((tag) => (
                        <span
                          key={tag.uid}
                          style={{
                            padding: "5px 10px",
                            backgroundColor: "gray",
                            color: "white",
                            marginLeft: "5px",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          &nbsp;&nbsp;{tag.tag}
                        </span>
                      ))}
                    </div>
                    <div className="box">
                      {DesignDetail.tag?.length > 0 && (
                        <select>
                          {DesignDetail.tag?.slice(0, 5).map((tag) => (
                            <option
                              key={tag.uid}
                              style={{
                                padding: "5px 10px",
                                backgroundColor: "gray",
                                color: "white",
                                marginLeft: "5px",
                                borderRadius: "5px",
                                cursor: "pointer",
                              }}
                            >
                              &nbsp;&nbsp;{tag.tag}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  </Tags>
                </div>
              </div>
            </NameAndTagsDiv>

            {DesignDetail?.explanation && (
              <Price
                font="normal normal 400 1.5rem/1.5rem Pretendard"
                color="#707070"
              >
                설명: {DesignDetail?.explanation}
              </Price>
            )}

            <Price>
              {this.state.isMyDesign ? (
                <>내 경험아이템</>
              ) : (
                <>작성자: {DesignDetail.userName}</>
              )}
            </Price>
            <NumRateNew />
            {/* <NumRate /> */}
          </ExpInnerDiv>
          <ExpInnerButtonBox>
            {/* like */}
            {DesignDetail.user_id !== userInfo?.uid && (
              <LikeButton onClick={this.onClickLike}>
                <span>{DesignDetail.isLike !== 0 ? "❤️" : ""}좋아요</span>
              </LikeButton>
            )}
            {token &&
              isGroupExp &&
              this.props.forkDesignList
                ?.filter((item) => item.nick_name === userInfo?.nickName)
                ?.map((item) => (
                  <div key={item.uid} style={{ display: "flex" }}>
                    <ManageButton
                      onClick={() => this.onClickIWannaOutHere(item.uid)}
                    >
                      <span>그룹탈퇴</span>
                    </ManageButton>
                  </div>
                ))}
            {/* chat & vchat */}
            {token &&
              isGroupExp &&
              (DesignDetail.user_id === userInfo?.uid ||
                this.props.forkDesignList?.filter(
                  (item) => item.nick_name === userInfo?.nickName
                ).length > 0) && (
                // group creator or group member
                <div style={{ display: "flex" }}>
                  <ManageButton onClick={this.onClickChat}>
                    <span>채팅</span>
                  </ManageButton>
                  <ManageButton onClick={this.onClickVChat}>
                    <span>화상회의</span>
                  </ManageButton>
                </div>
              )}
            {/* apply */}
            {isGroupExp &&
              this.state.applied === false &&
              DesignDetail.user_id !== userInfo?.uid && (
                <PurchaseButton onClick={this.onClickBuy}>
                  {/* <span>{typeName}신청하기</span> */}
                  <span>신청하기</span>
                </PurchaseButton>
              )}
            {/* group notice / board */}
            {isGroupExp &&
              DesignDetail.parent_design == null &&
              // DesignDetail.user_id === userInfo?.uid && 
                (
                <GroupNoticeContainer
                  ButtonStyled={LikeButton}
                  user_id={userInfo?.uid}
                  owner_id={DesignDetail.user_id}
                  id={
                    isGroupMember
                      ? DesignDetail.parent_design
                      : DesignDetail.uid
                  }
                  token={this.props.token}
                />
              )}
            {/* goto parent design */}
            {DesignDetail.parent_design && (
              <PurchaseButton
                onClick={() => goto("EXP", DesignDetail.parent_design)}
              >
                <span>그룹페이지</span>
              </PurchaseButton>
            )}
            {/* group manage */}
            {token && isGroupExp && DesignDetail.user_id === userInfo?.uid && (
              <ManageButton onClick={this.onClickManage}>
                <span>관리모드</span>
                {forkDesignList?.filter((item) => item.d_flag === 0).length >
                  0 && <b style={{ color: "red" }}>new!!</b>}
              </ManageButton>
            )}
            {/* edit */}
            {token && DesignDetail.user_id === userInfo?.uid && (
              <LikeButton onClick={this.onClickModify}>
                <span>수정하기</span>
              </LikeButton>
            )}
          </ExpInnerButtonBox>
        </ExpInfoDiv>
        {/* body - group */}
        {manage && (
          <>
            <ExpInfoText>그룹관리</ExpInfoText>
            {forkDesignList &&
              forkDesignList.filter((item) => item.d_flag === 0).length ===
                0 && <h3>가입신청내역없음</h3>}
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
                    <div key={item.uid} style={{ position: "relative" }}>
                      <AcceptButton
                        onClick={() => this.onClickForkDesignAccept(item.uid)}
                      >
                        수락
                      </AcceptButton>
                      <RejectButton
                        onClick={() => this.onClickForkDesignDeny(item.uid)}
                      >
                        거절
                      </RejectButton>
                      <Design {...item} />
                    </div>
                  ))}
            </div>
          </>
        )}
        {/* body - group and creator content */}
        {/* list or content toggle with fold */}
        {isGroup &&
          DesignDetail.parent_design == null &&
          (fold ? (
            <>
              <div
                style={{
                  marginTop: "25px",
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                  gap: "10px",
                }}
              >
                <div style={{ width: "330px" }}>
                  <Design {...DesignDetail} onClick={this.setFold} />
                </div>
                {forkDesignList?.length > 0 && (
                  // DesignDetail.is_parent &&
                  <>
                    {forkDesignList
                      .filter((item) => item.d_flag !== 0)
                      .filter((item) =>
                        DesignDetail.user_id !== userInfo?.uid &&
                        DesignDetail.design_type === EXP_TYPE_CONS.value
                          ? item.user_id === userInfo?.uid
                          : item
                      )
                      .map((item) => (
                        <div key={item.uid} style={{ position: "relative" }}>
                          {DesignDetail.user_id === userInfo?.uid && manage && (
                            <KickoutButton
                              onClick={() =>
                                this.onClickForkDesignKickOut(DesignDetail.uid)
                              }
                            >
                              퇴출
                            </KickoutButton>
                          )}
                          {item.user_id === userInfo?.uid && (
                            <MyDesignLabel>내 경험</MyDesignLabel>
                          )}
                          <Design
                            kickout={this.onClickForkDesignKickOut}
                            {...item}
                            onClick={() => goto("EXP", item.uid)}
                          />
                        </div>
                      ))}
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <div style={{ marginTop: "10px" }}>
                <ManageButton onClick={this.setFold}>
                  <span>목록으로</span>
                </ManageButton>
                <ExpInfoText>상세정보</ExpInfoText>
                {DesignDetail.is_project === 1 ? (
                  <DesignDetailStepContainer
                    editor={DesignDetail.user_id === userInfo?.uid}
                    design={DesignDetail}
                    // {...this.state}
                  />
                ) : (
                  <div className="marginLeft">
                    {DesignDetail.uid && (
                      <DesignDetailViewContainer
                        editor={DesignDetail.user_id === userInfo?.uid}
                        id={DesignDetail.uid}
                        // {...this.state}
                        history={this.props.history}
                      />
                    )}
                  </div>
                )}
              </div>
            </>
          ))}
        {/* body - group but not creator */}
        {isGroup && DesignDetail.parent_design && (
          <>
            <>
              {DesignDetail.is_project === 1 ? (
                <DesignDetailStepContainer
                  editor={DesignDetail.user_id === userInfo?.uid}
                  design={DesignDetail}
                  // {...this.state}
                />
              ) : (
                <div className="marginLeft">
                  <DesignDetailViewContainer
                    editor={DesignDetail.user_id === userInfo?.uid}
                    id={DesignDetail.uid}
                    // {...this.state}
                    history={this.props.history}
                  />
                </div>
              )}
            </>
          </>
        )}
        {/* body - not group, just display content */}
        {!isGroup && (
          <>
            {DesignDetail.is_project === 1 ? (
              <DesignDetailStepContainer
                editor={DesignDetail.user_id === userInfo?.uid}
                design={DesignDetail}
                // {...this.state}
              />
            ) : (
              <div className="marginLeft">
                {DesignDetail.uid && (
                  <DesignDetailViewContainer
                    editor={DesignDetail.user_id === userInfo?.uid}
                    id={DesignDetail.uid}
                    // {...this.state}
                    history={this.props.history}
                  />
                )}
              </div>
            )}
          </>
        )}
      </Wrapper>
    );
  }
}

export default DesignDetail;
