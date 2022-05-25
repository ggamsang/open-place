import React from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';

import back_arrow from 'source/Iconly-Bold-left-arrow.svg';

import SearchForm from 'components_mobile/Commons/Search/SearchForm';
import SharerForm from './SharerForm';

import TextAreaNormal from 'components_mobile/Commons/TextArea/TextAreaNormal';
import DropDownNormal from 'components_mobile/Commons/DropDown/DropDownNormal';
import InputNormal from 'components_mobile/Commons/Input/InputNormal';
import ButtonNormal from 'components_mobile/Commons/Button/\bButtonNormal';

const Wrapper = styled.div`
  width:100vw;
  height:130vh;
  .header{
    width:100%;
    height:${resolution(290)}px;
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
    .textWrap{
      width:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      .vrline{height:${resolution(44)}px;border-right:1px solid white;}
      .text{
        width:45%;
        font: normal normal bold 20px/20px Montserrat;
        color:white;
      }
    }
  }
`

const Detail = styled.div`
  width:100%;
  box-sizing:border-box;
  padding:20px;
`


class ModifySharer extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Wrapper>
        <div className="header">
          <div className="searchbox"><SearchForm/></div>
          <div className='profile'>
            <div className='thumbnail'/>
            <div className='textWrap' style={{marginTop:"20px"}}>
              <div className='text' style={{textAlign:"right"}}>닉네임</div>
              <div className='vrline'style={{marginLeft:"26px",marginRight:"26px"}}/>
              <div className='text'  style={{textAlign:"left"}}>#해쉬태그</div>
            </div>
          </div>
        </div>
        <Detail>
          <SharerForm/>
          <ButtonNormal
            width={335}
            height={35}
            radius={10}
            bgColor={"#707070"}
            text="수정"
            style={{marginTop:"20px"}}
            />
          <ButtonNormal
            width={335}
            height={35}
            radius={10}
            bgColor={"#707070"}
            text="뒤로가기"
            style={{marginTop:"10px"}}
            />
          </Detail>
      </Wrapper>
    </React.Fragment>
    )
  }
}

export default ModifySharer;
