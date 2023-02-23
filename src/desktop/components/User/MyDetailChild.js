import React, { Component } from "react";
import { connect } from "react-redux";
import { Fade } from "react-reveal";
import styled from "styled-components";
import { resolution } from "desktop/commons/resolution";
import buy from "resources/Iconly-Bold-buy.svg";
import heart from "resources/Iconly-Bold-Heart.svg";
import star from "resources/Iconly-Bold-Star.svg";
import work from "resources/Iconly-Bold-Work.svg";
import plus from "resources/Iconly-Bold-Plus.svg";
import BuyExpContainer from "desktop/containers/MyDetail/BuyExpContainer";
import SellExpContainer from "desktop/containers/MyDetail/SellExpContainer";
import RegisterExpContainer from "desktop/containers/MyDetail/RegisterExpContainer";
import LikeExpContainer from "desktop/containers/MyDetail/LikeExpContainer";
import LikeSharerContainer from "desktop/containers/MyDetail/LikeSharerContainer";
import PointLogContainer from "desktop/containers/MyDetail/PointLogContainer";
import MyPointChargeContainer from "desktop/containers/MyDetail/MyPointChargeContainer";
import { WIDTH } from "constant";
import { SignOutRequest } from "actions/Authentication";
import {
  getUserPointRequest,
  setUserPointRequest,
  getUserPointHistoryReqeust,
  getUserRegisterExpRequest,
  getUserSellExpRequest,
  getUserLikeSharerRequest,
  getUserLikeExpRequest,
  getUserBoughtExpRequest,
} from "actions/User/MyDetail";
import { goto } from "navigator";
import {
  getBankCodeListReqeust,
  getLocationListRequest,
} from "actions/Commons/DefaultList";
import { updateSharerProfileRequest } from "actions/Sharer/UpdateSharer";
import { useParams } from "react-router";

const Wrapper = styled.div`
  width: 100%;
  // width: ${WIDTH}px;
  height: 130vh;
  .header {
    width: 100%;
    height: ${resolution(324)}px;
    background: linear-gradient(205deg, #bf1d39, #8448b6);
  }
  .searchbox {
    width: 100%;
    padding-top: 50px;
    display: flex;
    align-items: center;
  }
  // .arrow_box{width:${resolution(53)}px;display:flex;justify-content:center;}
  .img_arrow {
    width: ${resolution(27)}px;
    height: ${resolution(19)}px;
  }

  .profile {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .thumbnail {
      width: ${resolution(100)}px;
      height: ${resolution(100)}px;
      border-radius: 50%;
      background-color: #efefef;
    }
    .user_name {
      margin-top: 10px;
      width: 100%;
      font-size: ${resolution(20)}px;
      text-align: center;
      color: white;
      font-family: Montserrat;
      font-weight: Bold;
    }
    .button_wrap {
      margin-top: 20px;
      font-family: Pretendard;
      font-weight: Bold;
      font-size: ${resolution(15)}px;
      display: flex;
      .button {
        text-align: center;
        width: ${resolution(113)}px;
        height: ${resolution(44)}px;
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: pre-wrap;
        color: white;
      }
      .notify {
        width: ${resolution(25)}px;
        height: ${resolution(25)}px;
      }
      .borderRight {
        border-right: 1px solid white;
      }
    }
  }
`;

const Menu = styled.div`
  width: 100%;
  .menu_wrap {
    padding: 16px 27px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    .label {
      width: 100%;
      font-family: Pretendard;
      font-weight: Regular;
      font-size: ${resolution(14)}px;
      color: #c1c1c1;
      margin-bottom: 8px;
    }
    .menu_button {
      box-sizing: border-box;
      width: 100%;
      height: ${resolution(50)}px;
      display: flex;
      align-items: center;
      box-shadow: 0px 0px 10px #efefef;
      padding: 13px 17px;

      img {
        width: ${resolution(20)}px;
        height: ${resolution(20)}px;
        margin-right: 30px;
      }
      .text {
        font-family: Pretendard;
        font-weight: Regular;
        font-size: ${resolution(14)}px;
        color: black;
      }
    }
    .hrline {
      width: 100%;
      border: 1px solid #fafafa;
    }
    .menu_bottom {
      box-shadow: 0px 0px 10px #efefef;
      padding: 11px 68px 0px 68px;
      .text {
        font-family: Pretendard;
        font-weight: Regular;
        font-size: ${resolution(12)}px;
        color: black;
        margin-bottom: 11px;
      }
    }
  }
`;

const SubMenu = styled.div`
  width: 100%;
  .menu_wrap {
    padding: 16px 27px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    .label {
      width: 100%;
      font-family: Pretendard;
      font-weight: Regular;
      font-size: ${resolution(14)}px;
      color: #c1c1c1;
      margin-bottom: 8px;
    }
    .menu_button {
      box-sizing: border-box;
      width: 100%;
      height: ${resolution(50)}px;
      display: flex;
      align-items: center;
      box-shadow: 0px 0px 10px #efefef;
      padding: 13px 17px;

      img {
        width: ${resolution(20)}px;
        height: ${resolution(20)}px;
        margin-right: 30px;
      }
      .text {
        font-family: Pretendard;
        font-weight: Regular;
        font-size: ${resolution(14)}px;
        color: black;
      }
    }
    .hrline {
      width: 100%;
      border: 1px solid #fafafa;
    }
    .menu_bottom {
      box-shadow: 0px 0px 10px #efefef;
      padding: 11px 68px 0px 68px;
      .text {
        font-family: Pretendard;
        font-weight: Regular;
        font-size: ${resolution(12)}px;
        color: black;
        margin-bottom: 11px;
      }
    }
  }
`;

const SubWrap = styled.div`
  box-sizing: border-box;
  // padding-bottom:50px;
  margin-top: 10px;
  margin-bottom: 10px;
  .subTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    padding: 3px;
    width: 100%;
    text-align: center;
    font-size: 18px;
    letter-spacing: 0px;
    color: #4a4b4d;

    .blank {
      width: 30px;
    }
  }
`;
const DEFAULT_TAB = "point";

function MyDetailChildWrapper(props) {
  const param = useParams();
  return <MyDetailChild subMenu={param.id || DEFAULT_TAB} {...props} />;
}

class MyDetailChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charged: false,
      main_menu: true,
      sub_menu1: false,
      sub_menu2: false,
      subMenu: this.props.subMenu,
    };
    this.onClickPointMenu = this.onClickPointMenu.bind(this);
    this.onClickLikeMenu = this.onClickLikeMenu.bind(this);
    this.onClickHome = this.onClickHome.bind(this);
    this.onClickSubMenu = this.onClickSubMenu.bind(this);
  }

  onClickPointMenu = (event) => {
    this.setState({ main_menu: false });
    setTimeout(() => {
      this.setState({ sub_menu1: true, sub_menu2: false });
    }, 1000);
  };
  onClickLogout = async () => {
    await this.props.SignOutRequest();
    goto("MAIN");
  };
  onClickLikeMenu = (event) => {
    this.setState({ main_menu: false });
    setTimeout(() => {
      this.setState({ subMenu: "none", sub_menu1: false, sub_menu2: true });
    }, 1000);
  };
  onClickHome = (event) => {
    this.setState({ subMenu: "none", sub_menu1: false, sub_menu2: false });

    setTimeout(() => {
      this.setState({ main_menu: true });
    }, 1000);
  };

  onClickSubMenu = (sub) => {
    this.setState({ subMenu: sub });
    //testDeta
    const user_id = this.props.userInfo.uid;
    const { token } = this.props;
    if (sub === "point") {
      this.props.getUserPointRequest(user_id);
    } else if (sub === "payment") {
      this.props.getUserPointHistoryReqeust(user_id, 0);
    } else if (sub === "regExp") {
      // this.props.getUserRegisterExpRequest(user_id, 0);
    } else if (sub === "sellExp") {
      this.props.getUserSellExpRequest(user_id, 0);
    } else if (sub === "buyExp") {
      token && this.props.getUserBoughtExpRequest(token, 0);
    } else if (sub === "likeSharer") {
      this.props.getUserLikeSharerRequest(user_id, 0);
    } else if (sub === "likeExp") {
      this.props.getUserLikeExpRequest(user_id, 0);
    }
  };
  handleCharged = () => {
    this.setState({ charged: !this.state.charged });
  };
  render() {
    const { isLoggedIn, token } = this.props;
    console.log(this.props);
    const { subMenu, charged } = this.state;

    return isLoggedIn && token ? (
      <React.Fragment>
        <SubWrap>
          {subMenu === "point" && (
            <React.Fragment>
              <div className="subTitle">포인트 충전</div>
              <MyPointChargeContainer onCharged={this.handleCharged} />
              <div className="subTitle">충전 내역</div>
              <PointLogContainer charged={charged} />
            </React.Fragment>
          )}

          {this.state.subMenu === "regExp" && (
            <React.Fragment>
              <div className="subTitle">등록 경험</div>
              <RegisterExpContainer />
            </React.Fragment>
          )}
          {this.state.subMenu === "sellExp" && (
            <React.Fragment>
              <div className="subTitle">판매 경험</div>
              <SellExpContainer />
            </React.Fragment>
          )}
          {this.state.subMenu === "buyExp" && (
            <React.Fragment>
              <div className="subTitle">구매한 경험</div>
              <BuyExpContainer />
            </React.Fragment>
          )}
          {this.state.subMenu === "likeSharer" && (
            <React.Fragment>
              <div className="subTitle">관심 공유자</div>
              <LikeSharerContainer />
            </React.Fragment>
          )}
          {this.state.subMenu === "likeExp" && (
            <React.Fragment>
              <div className="subTitle">관심 경험</div>
              <LikeExpContainer />
            </React.Fragment>
          )}
        </SubWrap>
      </React.Fragment>
    ) : null;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SignOutRequest: () => dispatch(SignOutRequest()),
    getUserPointRequest: (user_id) => dispatch(getUserPointRequest(user_id)),
    setUserPointRequest: (user_id, point, token) =>
      dispatch(setUserPointRequest(user_id, point, token)),
    getUserPointHistoryReqeust: (user_id, page) =>
      dispatch(getUserPointHistoryReqeust(user_id, page)),
    getUserRegisterExpRequest: (user_id, page) =>
      dispatch(getUserRegisterExpRequest(user_id, page)),
    getUserSellExpRequest: (user_id, page) =>
      dispatch(getUserSellExpRequest(user_id, page)),
    getUserLikeSharerRequest: (user_id, page) =>
      dispatch(getUserLikeSharerRequest(user_id, page)),
    getUserLikeExpRequest: (user_id, page) =>
      dispatch(getUserLikeExpRequest(user_id, page)),
    getUserBoughtExpRequest: (user_id, page) =>
      dispatch(getUserBoughtExpRequest(user_id, page)),
    getBankCodeListReqeust: () => dispatch(getBankCodeListReqeust()),
    getLocationListRequest: () => dispatch(getLocationListRequest()),
    updateSharerProfileRequest: (user_id, data, token) =>
      dispatch(updateSharerProfileRequest(user_id, data, token)),
  };
};
const mapStateToProps = (state) => {
  return {
    token: state.Authentication.status.token,
    userInfo: state.Authentication.status.userInfo,
    isLoggedIn: state.Authentication.status.isLoggedIn,
    user_point: state.MyDetail.status.user_point,
    point_history: state.MyDetail.status.point_history,
    register_exp: state.MyDetail.status.register_exp,
    sell_exp: state.MyDetail.status.sell_exp,
    like_sharer: state.MyDetail.status.like_sharer,
    like_exp: state.MyDetail.status.like_exp,

    bank_code: state.DefaultList.status.bank_code,
    location: state.DefaultList.status.location,
  };
};

// connect(mapStateToProps, mapDispatchToProps)(MyDetailChild);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyDetailChildWrapper);
