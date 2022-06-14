import React from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';

import TextAreaNormal from 'components_mobile/Commons/TextArea/TextAreaNormal';
import DropDownNormal from 'components_mobile/Commons/DropDown/DropDownNormal';
import InputNormal from 'components_mobile/Commons/Input/InputNormal';

const Wrap = styled.div`
  box-sizing:border-box;
  .shadowBorderBox{
    box-sizing:border-box;
    width:100%;
    box-shadow: 2px 2px 5px #00000029;
    border-radius:10px;
    border:1px solid #E9E9E9;
    padding:13px;
    .title{
      width:100%;
      font: normal normal medium 18px/21px Pretendard;
      text-align:center;
      color:#4A4B4D;
    }
    .row{width:100%;display:flex;}
    .label{
      padding-top:7px;
      width:${resolution(72)}px;
      min-width:${resolution(72)}px;
      font: normal normal medium 15px/18px Noto Sans KR;
      font-size:${resolution(15)}px;
    }
  }
`


class SharerForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Wrap>
          <div className='shadowBorderBox'>
            <div className='title'>상세정보</div>
            <div className='row' style={{marginTop:"11px"}}>
              <div className='label'>설명</div>
              <TextAreaNormal
                height={100}
                color={"#E9E9E9"} fontSize={15} radius={10}
                placeholder
                ="설명을 입력하세요"
              />
            </div>

            <div className='row' style={{marginTop:"11px"}}>
              <div className='label'>위치</div>
              <DropDownNormal
                width={114} height={31}
                radius={10}
                disabled={true}
                options={
                  ["대한민국"]
                }
                
              />
              <DropDownNormal
                style={{marginLeft:"12px"}}
                width={114} height={31}
                radius={10}
                placeholder="시/도"
                options={
                  ["서울특별시"
                  ,"대구광역시"
                  ,"부산광역시"]
                }
              />
            </div>

            <div className='row' style={{marginTop:"11px"}}>
              <div className='label'>연락처</div>
              <InputNormal
                fontSize={12}
                height={31}
                color={"#E9E9E9"} radius={10}
                placeholderColor={"#707070"}
                placeholder="메일을 입력하고 [enter] 키를 누르세요."
              />
            </div>


            <div className='row' style={{marginTop:"11px"}}>
              <div className='label'>계좌번호</div>
              <DropDownNormal
                style={{marginRight:"12px"}}
                width={76} height={31}
                radius={10}
                placeholder="은행"
                options={
                  ["국민"
                  ,"신한"
                  ,"우리"]
                }
              />
              <InputNormal
                fontSize={15}
                height={31}
                color={"#E9E9E9"} radius={10}
                placeholderColor={"#707070"}
                placeholder="계좌번호"
              />
            </div>
          </div>
          <div className='shadowBorderBox' style={{marginTop:"19px"}}>
              <div className='title'>공유자 인증하기</div>
              <div style={{height:"90px"}}/>
          </div>
        </Wrap>
    </React.Fragment>
    )
  }
}

export default SharerForm;
