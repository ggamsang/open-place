import React, { Component } from 'react';
import styled from 'styled-components';

import { resolution } from 'commons/resolution';
import SearchForm from 'components_mobile/Commons/Search/SearchForm';



import notification from 'source/Iconly-Bold-Notification.svg';
import buy from 'source/Iconly-Bold-buy.svg';
import heart from 'source/Iconly-Bold-Heart.svg';
import star from 'source/Iconly-Bold-Star.svg';
import work from 'source/Iconly-Bold-Work.svg';
import plus from 'source/Iconly-Bold-Plus.svg';

import { Fade } from 'react-reveal';

import BuyExpContainer from 'containers/MyDetail/BuyExpContainer';
import SellExpContainer from 'containers/MyDetail/SellExpContainer';
import RegisterExpContainer from 'containers/MyDetail/RegisterExpContainer';
import LikeExpContainer from 'containers/MyDetail/LikeExpContainer';
import LikeSharerContainer from 'containers/MyDetail/LikeSharerContainer';
import { WIDTH } from 'constant';

const Wrapper = styled.div`
  width:100vw;
  // width: ${WIDTH}px;
  height:130vh;
  .header{
    width:100%;
    height:${resolution(324)}px;
    background: linear-gradient(205deg,#bf1d39,#8448b6);
  }
  .searchbox{
    width:100%;
    padding-top:50px;
    display:flex;
    align-items:center;
  }
  .arrow_box{width:${resolution(53)}px;display:flex;justify-content:center;}
  .img_arrow{width:${resolution(27)}px;height:${resolution(19)}px;}

  .profile{
    margin-top:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    .thumbnail{
      width:${resolution(100)}px;
      height:${resolution(100)}px;
      border-radius:50%;
      background-color:#efefef;
    }
    .user_name{
      margin-top:10px;
      width:100%;
      font-size:${resolution(20)}px;
      text-align:center;
      color:white;
      font-family:Montserrat;
      font-weight:Bold;
    }
    .button_wrap{
      margin-top:20px;
      font-family:Pretendard;
      font-weight:Bold;
      font-size:${resolution(15)}px;
      display:flex;
      .button{text-align:center;width:${resolution(113)}px;height:${resolution(44)}px;display:flex;justify-content:center;align-items:center;white-space: pre-wrap;color:white;}
      .notify{width:${resolution(25)}px;height:${resolution(25)}px;}
      .borderRight{border-right:1px solid white;}
    }
  }
`

const Menu = styled.div`
  width:100%;
  .menu_wrap{
    padding:16px 27px;
    box-sizing:border-box;
    width:100%;
    display:flex;
    flex-direction:column;
    .label{
      width:100%;
      font-family:Pretendard;
      font-weight:Regular;
      font-size:${resolution(14)}px;
      color:#c1c1c1;
      margin-bottom:8px;

    }
    .menu_button{
      box-sizing:border-box;
      width:100%;
      height:${resolution(50)}px;
      display:flex;
      align-items:center;
      box-shadow:0px 0px 10px #efefef;
      padding:13px 17px;

      img{
        width:${resolution(20)}px;
        height:${resolution(20)}px;
        margin-right:30px;
      }
      .text{
        font-family:Pretendard;
        font-weight:Regular;
        font-size:${resolution(14)}px;
        color:black;
      }
    }
    .hrline{width:100%;border:1px solid #FAFAFA;}
    .menu_bottom{
      box-shadow:0px 0px 10px #efefef;
      padding:11px 68px 0px 68px;
      .text{
        font-family:Pretendard;
        font-weight:Regular;
        font-size:${resolution(12)}px;
        color:black;
        margin-bottom:11px;
      }
    }
  }
`


const SubMenu = styled.div`
  width:100%;
  .menu_wrap{
    padding:16px 27px;
    box-sizing:border-box;
    width:100%;
    display:flex;
    flex-direction:column;
    .label{
      width:100%;
      font-family:Pretendard;
      font-weight:Regular;
      font-size:${resolution(14)}px;
      color:#c1c1c1;
      margin-bottom:8px;

    }
    .menu_button{
      box-sizing:border-box;
      width:100%;
      height:${resolution(50)}px;
      display:flex;
      align-items:center;
      box-shadow:0px 0px 10px #efefef;
      padding:13px 17px;

      img{
        width:${resolution(20)}px;
        height:${resolution(20)}px;
        margin-right:30px;
      }
      .text{
        font-family:Pretendard;
        font-weight:Regular;
        font-size:${resolution(14)}px;
        color:black;
      }
    }
    .hrline{width:100%;border:1px solid #FAFAFA;}
    .menu_bottom{
      box-shadow:0px 0px 10px #efefef;
      padding:11px 68px 0px 68px;
      .text{
        font-family:Pretendard;
        font-weight:Regular;
        font-size:${resolution(12)}px;
        color:black;
        margin-bottom:11px;
      }
    }
  }
`

const SubWrap = styled.div`
  box-sizing:border-box;
  // padding-bottom:50px;
  .subTitle{
    width:100%;
    height:41px;
    display:flex;
    justify-content:center;
    align-items:center;
    font: normal normal medium 18px/21px Pretendard;
    color:#4A4B4D;  
  }
`

class MyDetailChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main_menu: true, sub_menu1: false, sub_menu2: false, subMenu: "none",
    }
    this.onClickPointMenu = this.onClickPointMenu.bind(this);
    this.onClickLikeMenu = this.onClickLikeMenu.bind(this);
    this.onClickHome = this.onClickHome.bind(this);
    this.onClickSubMenu = this.onClickSubMenu.bind(this);
  }

  onClickPointMenu = (event) => {
    this.setState({ main_menu: false });
    setTimeout(() => {
      this.setState({ sub_menu1: true, sub_menu2: false })
    }, 1000)
  }
  onClickLikeMenu = (event) => {
    this.setState({ main_menu: false })
    setTimeout(() => {
      this.setState({ sub_menu1: false, sub_menu2: true })
    }, 1000)
  }
  onClickHome = (event) => {
    this.setState({ sub_menu1: false, sub_menu2: false });
    setTimeout(() => {
      this.setState({ main_menu: true })
    }, 1000)
  }

  onClickSubMenu = (sub) => {
    this.setState({ subMenu: sub })
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.subMenu == "none" &&
          <Wrapper>
            <Fade opposite when={this.state.main_menu}>
              <Menu style={{ display: `${this.state.main_menu == true ? "block" : "none"}` }}>
                <div className='menu_wrap'>
                  <div className='label'>내정보</div>
                  <div onClick={this.onClickPointMenu} className="menu_button" ><img src={star} /><div className='text'>포인트</div></div>  <div className='hrline' />
                  <div onClick={() => this.onClickSubMenu("regExp")} className="menu_button" ><img src={plus} /><div className='text'>등록 경험</div></div> <div className='hrline' />
                  <div onClick={() => this.onClickSubMenu("sellExp")} className="menu_button" ><img src={work} /><div className='text'>판매 경험</div></div> <div className='hrline' />
                  <div onClick={() => this.onClickSubMenu("buyExp")} className="menu_button" ><img src={buy} /><div className='text'>구매 경험</div></div>  <div className='hrline' />
                  <div onClick={this.onClickLikeMenu} className="menu_button"><img src={heart} /><div className='text'>관심</div></div>

                </div>
              </Menu>
            </Fade>

            <Fade opposite when={this.state.sub_menu1 == true || this.state.sub_menu2}>
              <SubMenu >
                <div className='menu_wrap' style={{ display: `${this.state.sub_menu1 == true ? "flex" : "none"}` }}>
                  <div onClick={this.onClickHome} className='label'> {"<"} 포인트</div>
                  <div onClick={() => this.onClickSubMenu("point")} className="menu_button" ><img src={plus} /><div className='text'>포인트 충전</div></div>  <div className='hrline' />
                  <div onClick={() => this.onClickSubMenu("payment")} className="menu_button" ><img src={plus} /><div className='text'>결제내역</div></div>  <div className='hrline' />
                </div>
                <div className='menu_wrap' style={{ display: `${this.state.sub_menu2 == true ? "flex" : "none"}` }}>
                  <div onClick={this.onClickHome} className='label'> {"<"} 관심</div>
                  <div onClick={() => this.onClickSubMenu("likeSharer")} className="menu_button"><img src={plus} /><div className='text'>관심 공유자</div></div>  <div className='hrline' />
                  <div onClick={() => this.onClickSubMenu("likeExp")} className="menu_button"><img src={plus} /><div className='text'>관심 경험</div></div>  <div className='hrline' />
                </div>
              </SubMenu>
            </Fade>
          </Wrapper>
        }
        <SubWrap>
          {this.state.subMenu == "point" && <React.Fragment><div className='subTitle'>포인트 충전</div>디자인 필요</React.Fragment>}
          {this.state.subMenu == "payment" && <React.Fragment><div className='subTitle'>충전 내역</div>디자인 필요</React.Fragment>}
          {this.state.subMenu == "regExp" && <React.Fragment><div className='subTitle'>등록 경험</div><RegisterExpContainer /></React.Fragment>}
          {this.state.subMenu == "sellExp" && <React.Fragment><div className='subTitle'>판매 경험</div><SellExpContainer /></React.Fragment>}
          {this.state.subMenu == "buyExp" && <React.Fragment><div className='subTitle'>구매 경험</div><BuyExpContainer /></React.Fragment>}
          {this.state.subMenu == "likeSharer" && <React.Fragment><div className='subTitle'>관심 공유자</div><LikeSharerContainer /></React.Fragment>}
          {this.state.subMenu == "likeExp" && <React.Fragment><div className='subTitle'>관심 경험</div><LikeExpContainer /></React.Fragment>}
        </SubWrap>
      </React.Fragment>
    );
  }
}

export default MyDetailChild;
