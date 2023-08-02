import React, { Component } from "react";
import Loading from "components/Commons/Loading";

import { alert } from "components/Commons/Alert/Alert";
import { confirm } from "components/Commons/Confirm/Confirm";
import {
  DenyForkDesignRequest,
  AcceptForkDesignRequest,
  KickOutForkDesignReques,
} from "redux/modules/expitem";
import { DESIGN_NOT_FOUND } from "redux/modules/expitem/design";
import host from "config";
import {
  RateExpDiv,
  RateDiv,
  Rate,
  RateReview,
  RateStarIcon,
  RateNumRate,
  RateNumRate2,
  RateIcon,
  RateBar,
  Wrapper,
  ExpInfoDiv,
  ExpInfoText,
  ExpInnerDiv,
  ExpName,
  ExpImg,
  NameAndTagsDiv,
  CateType,
  TagButton,
  TagButtonText,
  Price,
  StarIcon,
  LikeButton,
  PurchaseButton,
  ManageButton,
  ReviewText,
} from "./styles";

import {
  EXP_TYPE_CONS,
  EXP_TYPE_GAME,
  EXP_TYPE_LECT,
  EXP_TYPE_MEET,
  EXP_TYPE_NORM,
} from "constant";

import ExpTypeCons from "./ExpTypeCons";
import ExpTypeGame from "./ExpTypeGame";
import ExpTypeLect from "./ExpTypeLect";
import ExpTypeMeet from "./ExpTypeMeet";
import ExpTypeNorm from "./ExpTypeNorm";

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
  onClickForkDesignKickOut = async (id) => {
    if (await confirm("선택하신 경험을 삭제하시겠습니까?", "예", "아니오")) {
      KickOutForkDesignReques(id, this.props.token)
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
  onClickLike = () => {
    alert("");
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

    // console.clear();
    const isGroupExp = [1, 2, 3].includes(DesignDetail.design_type);
    //  &&
    // DesignDetail.is_parent &&
    // DesignDetail.parent_design === null; // this.props.DesignDetail?.design_type)
    const isGroupMember =
      [1, 2, 3].includes(DesignDetail.design_type) &&
      // DesignDetail.d_flag === 1 &&
      DesignDetail.parent_design !== null;
    console.log(isGroupExp);
    console.log(this.props, this.state);

    return (
      <Wrapper>
        {DesignDetail.design_type === EXP_TYPE_MEET.value && (
          <ExpTypeMeet
            {...this.props}
            {...this.state}
            onClickForkDesignKickOut={this.onClickForkDesignKickOut}
            onClickForkDesignAccept={this.onClickForkDesignAccept}
            onClickForkDesignDeny={this.onClickForkDesignDeny}
            onClickManage={() => this.setState({ manage: !this.state.manage })}
            onClickVChat={this.onClickVChat}
            onClickChat={this.onClickChat}
            onClickLike={this.onClickLike}
            onClickBuy={this.onClickBuy}
            onClickModify={this.onClickModify}
            isGroupExp={isGroupExp}
            isGroupMember={isGroupMember}
          />
        )}

        {DesignDetail.design_type === EXP_TYPE_LECT.value && (
          <ExpTypeLect
            {...this.props}
            {...this.state}
            onClickForkDesignKickOut={this.onClickForkDesignKickOut}
            onClickForkDesignAccept={this.onClickForkDesignAccept}
            onClickForkDesignDeny={this.onClickForkDesignDeny}
            onClickManage={() => this.setState({ manage: !this.state.manage })}
            onClickVChat={this.onClickVChat}
            onClickChat={this.onClickChat}
            onClickLike={this.onClickLike}
            onClickBuy={this.onClickBuy}
            onClickModify={this.onClickModify}
            isGroupExp={isGroupExp}
            isGroupMember={isGroupMember}
          />
        )}

        {DesignDetail.design_type === EXP_TYPE_CONS.value && (
          <ExpTypeCons
            {...this.props}
            {...this.state}
            onClickForkDesignKickOut={this.onClickForkDesignKickOut}
            onClickForkDesignAccept={this.onClickForkDesignAccept}
            onClickForkDesignDeny={this.onClickForkDesignDeny}
            onClickManage={() => this.setState({ manage: !this.state.manage })}
            onClickVChat={this.onClickVChat}
            onClickChat={this.onClickChat}
            onClickLike={this.onClickLike}
            onClickBuy={this.onClickBuy}
            onClickModify={this.onClickModify}
            isGroupExp={isGroupExp}
            isGroupMember={isGroupMember}
          />
        )}

        {DesignDetail.design_type === EXP_TYPE_NORM.value && (
          <ExpTypeNorm
            {...this.props}
            {...this.state}
            onClickLike={this.onClickLike}
            onClickModify={this.onClickModify}
          />
        )}

        {DesignDetail.design_type === EXP_TYPE_GAME.value && (
          <ExpTypeGame
            {...this.props}
            {...this.state}
            onClickLike={this.onClickLike}
            onClickModify={this.onClickModify}
          />
        )}

        {!isGroupMember && (
          <>
            {/*  */}
            {/* <ReviewText>리뷰</ReviewText>
            <div className="reviewWrap">
              <ReviewContainer
                write={this.state.write}
                onCloseWriteModal={() => this.setState({ write: false })}
              />
            </div> */}
          </>
        )}
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
