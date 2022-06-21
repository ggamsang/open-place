import React, { Component } from 'react';
import styled from 'styled-components';

import { resolution } from 'commons/resolution';
import SearchForm from 'components_mobile/Commons/Search/SearchForm';


import notification from 'source/Iconly-Bold-Notification.svg';

import { Fade } from 'react-reveal';
import { goto } from 'navigator';
import { WIDTH } from 'constant';
import NotificationContainer from 'containers/NotificationContainer';


const Wrapper = styled.div`
  width:100%;
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


class MyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main_menu: true, sub_menu1: false, sub_menu2: false,
    }
    this.onClickPointMenu = this.onClickPointMenu.bind(this);
    this.onClickLikeMenu = this.onClickLikeMenu.bind(this);
    this.onClickHome = this.onClickHome.bind(this);
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

  render() {

    return (<Wrapper>
      <div className="header">
        <div className='searchbox'>
          <SearchForm />
        </div>
        <div className='profile'>
          <div className='thumbnail' />
          <div className='user_name'>국민대학교 CRC</div>
          <div className='button_wrap'>
            <div className='button borderRight'
              onClick={() => goto("CREATE-SHARER")}>
              공유자<br />
              등록수정
            </div>
            <div className='button borderRight'
              onClick={() => goto("MODIFY-SHARER")} >
              프로필<br />
              편집
            </div>
            <div className='button'>
              <NotificationContainer active={this.props.active} />
            </div>

          </div>
        </div>
      </div>
      <this.props.Outlet />
    </Wrapper>);
  }
}

export default MyDetail;
