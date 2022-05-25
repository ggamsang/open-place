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



const Wrapper = styled.div`
  width:100vw;
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

class MyDetail extends Component {
    constructor(props){
      super(props);
      this.state={
        main_menu:true,sub_menu1:false,sub_menu2:false,
      }
      this.onClickPointMenu = this.onClickPointMenu.bind(this);
      this.onClickLikeMenu = this.onClickLikeMenu.bind(this);
      this.onClickHome = this.onClickHome.bind(this);
    }

    onClickPointMenu = (event) =>{
      this.setState({main_menu:false});
      setTimeout(()=>{
        this.setState({sub_menu1:true,sub_menu2:false})
      },1000)
    }
    onClickLikeMenu = (event) =>{
      this.setState({main_menu:false})
      setTimeout(()=>{
        this.setState({sub_menu1:false,sub_menu2:true})
      },1000)
    }
    onClickHome = (event)=>{
      this.setState({sub_menu1:false,sub_menu2:false});
      setTimeout(()=>{
        this.setState({main_menu:true})
      },1000)
    }

    render() {
      return (
          <React.Fragment>
            <Wrapper>
              <div className="header">
                <div className='searchbox'><SearchForm/></div>
                <div className='profile'>
                  <div className='thumbnail'/>
                  <div className='user_name'>국민대학교 CRC</div>
                  <div className='button_wrap'>
                      <div className='button borderRight'>공유자<br/>등록수정</div>
                      <div className='button borderRight'>프로필<br/>편집</div>
                      <div className='button'><img className='notify' src={notification}/></div>
                  </div>
                </div>
              
              </div>
              {/* <Fade opposite when={this.state.main_menu}>
              <Menu style={{display:`${this.state.main_menu==true?"block":"none"}`}}>
                <div className='menu_wrap'>
                  <div className='label'>내정보</div>
                  <div className="menu_button" onClick={this.onClickPointMenu}><img src={star}/><div className='text'>포인트</div></div>  <div className='hrline'/>
                  <div className="menu_button"><img src={plus}/><div className='text'>등록 경험</div></div>  <div className='hrline'/>
                  <div className="menu_button"><img src={work}/><div className='text'>판매 경험</div></div>  <div className='hrline'/>
                  <div className="menu_button"><img src={buy}/><div className='text'>구매 경험</div></div>  <div className='hrline'/>
                  <div className="menu_button" onClick={this.onClickLikeMenu}><img src={heart}/><div className='text'>관심</div></div>

                </div>
              </Menu>
              </Fade>

              <Fade opposite when={this.state.sub_menu1}>
              <SubMenu >
                 <div className='menu_wrap' style={{display:`${this.state.sub_menu1==true?"flex":"none"}`}}>
                    <div onClick={this.onClickHome} className='label'> {"<"} 포인트</div>
                    <div className="menu_button"><img src={plus}/><div className='text'>포인트 충전</div></div>  <div className='hrline'/>
                    <div className="menu_button"><img src={plus}/><div className='text'>결제내역</div></div>  <div className='hrline'/>
                 </div>
                 <div className='menu_wrap' style={{display:`${this.state.sub_menu2==true?"flex":"none"}`}}>
                    <div onClick={this.onClickHome} className='label'> {"<"} 관심</div>
                    <div className="menu_button"><img src={plus}/><div className='text'>관심 공유자</div></div>  <div className='hrline'/>
                    <div className="menu_button"><img src={plus}/><div className='text'>관심 경험</div></div>  <div className='hrline'/>
                 </div>
              </SubMenu>
              </Fade> */}
            <this.props.Outlet/>
            </Wrapper>
          </React.Fragment>
      );
    }
  }
  
export default MyDetail;
