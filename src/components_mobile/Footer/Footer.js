import React from 'react';
import styled from 'styled-components';
import { goto } from 'navigator';

const Wrapper = styled.div`
    height: 80px;
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    padding-right: 14px;
    padding-left: 13px;
    padding-bottom: 14px;
    
    .sub-wrapper {
        margin-top: 5px;
    }
    .text-main {
      font-family: Montserrat;
      font-weight: 500;
      font-style: italic;
      font-size: 16px;
      text-align: left;
      line-height: 19px;
      height: 19px;
      width: max-content;
      color: #2F2651;
    }
    .text-sub {
        font-family: Pretendard;
        font-weight: 300;
        font-size: 14px;
        text-align: left;
        line-height: 17px;
        height: 17px;
        width: max-content;
        color: #A19DAF;
    }
`;
const strOpenPlace = "OPEN Place";
const strUsePolicy = "이용약관";
const strSecurity = "보안";
const strPlatform = "Platform";
const strWeb = "웹";
const strAndroid = "Android";
const strAbout = "About";
const strCommunity = "Community";
const strCompany = "Company";

class Footer extends React.Component {

    render() {
        return (<Wrapper>
            <div>
                <div className='text-main'>{strOpenPlace}</div>
                <div className='sub-wrapper'>
                    <div className="text-sub" onClick={() => goto("TERMS")}>{strUsePolicy}</div>
                    <div className="text-sub" onClick={() => goto("PRIVACY")}>{strSecurity}</div>
                </div>
            </div>
            <div>
                <div className='text-main'>{strPlatform}</div>
                <div className='sub-wrapper'>
                    <div className="text-sub">{strWeb}</div>
                    <div className="text-sub">{strAndroid}</div>
                </div>
            </div>
            <div>
                <div className='text-main'>{strAbout}</div>
                <div className='sub-wrapper'>
                    <div className="text-sub">{strCommunity}</div>
                    <div className="text-sub" onClick={() => goto("INTRO")}>{strCompany}</div>
                </div>
            </div>
        </Wrapper>)
    }
}
export default Footer;