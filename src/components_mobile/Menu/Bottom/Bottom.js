import React from 'react';
import styled from 'styled-components';
import shapeRectangle from "resources/Rectangle.svg";
import shapeLogin from "resources/login.svg";
import shapeSignup from "resources/signup.svg";
import logo from "resources/logo_xxxhdpi.png";
import arrow from "resources/Iconly-Bold-light-outline-arrow.svg";
import { WIDTH } from 'constant';

import profile from "resources/Profile.svg";
import { IconPLAY, IconLEARN, IconMAKE, IconCOMMUNITY } from 'resources/iconPack';
import { Fade } from 'react-reveal';
import { goto } from 'smallfuncs';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .absolute { position: absolute;}

   *{
       padding: 0;
       margin: 0;
    }

    .login {
        pading: 0;
        margin: 0;
        width: 113px;
        height: 26px;
        background-image: url(${shapeLogin});
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat; 

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .signup {
        width: 113px;
        height: 26px;
        background-image: url(${shapeSignup});
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat; 

        display: flex;
        justify-content: center;
        align-items: center;
        
        .profile {
            width: 11px;
            height: 13px;
            background-size: cover;
            background-image: url(${profile});
            background-position: center center;
            margin-right: 8.5px;
        }
        
        span {
            width: max-content;
            color: white;
            font-family: Pretendard;
            font-weight: black;
            font-size: 11px;
            text-align: center;
        }
    }
    .background {
        width: ${WIDTH}px;
        height: 55px;
        background-image: url(${shapeRectangle});
        background-position: center center;
        background-repeat: no-repeat; 
        position: relative;
       
    }
    .logo {
        position: absolute;
        width: 75px;
        height: 75px;
        top: -60%;
        left: 40%;
    }
    ul {
        list-style: none;

        li {
            display: flex;
            flex-direction: column;
            margin: auto;
        }
    }
    .row {
        width: ${WIDTH}px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .right-margin42{ margin-right: 40px; }
    .left-margin42{ margin-left: 40px; }
    .right-margin22{ margin-right: 22px; }
    .left-margin22{ margin-left: 22px; }
    .left-margin35{ margin-left: 35px; }
    span {
        font-family: Pretendard;
        font-weight: 700;
        font-size: 11px;
        text-align: center;
        line-height: 14px;
        color: #FFF;
    }
    .topmargin3 {
        margin-top: 3px;
    }
    .bottommargin {
        margin-bottom: 23px;
    }
`;


class Bottom extends React.Component {
    gotoTop = () => {
        const template = document.getElementById('body') || document.documentElement;
        console.log(template, template.scrollHeight)
        template && template.scrollTo({ top: 0, behavior: "smooth" });
    }
    render() {
        return (<Wrapper>

            {this.props.login
                ? <div className='row'>
                    <div className='login' onClick={() => goto("CREATE-ITEM")}>
                        <span> + 경험등록하기 </span>
                    </div>
                    <div className='signup' onClick={() => goto("MYDETAIL")}>
                        <div className='profile' />
                        {/* <img src={profile} /> */}
                        <span>마이페이지</span>
                    </div>
                </div>

                : <div className='row'>
                    <div className='login' onClick={() => goto("LOGIN")}>
                        <span> + 로그인하기</span>
                    </div>
                    <div className='signup' onClick={() => goto("SIGNUP")}>
                        <div className='profile' />
                        {/* <img src={profile} /> */}
                        <span>회원가입</span>
                    </div>
                </div>
            }
            <div className='row background topmargin3'>
                <ul className='row'>
                    <li className='left-margin35'><IconPLAY /></li>
                    <li className='right-margin42'><IconLEARN /></li>
                </ul>

                <Fade>
                    {this.props.up
                        ? <img alt="icon" onClick={() => this.gotoTop()} className="logo" src={arrow} />
                        : <img alt="icon" onClick={() => goto("MAIN")} className="logo" src={logo} />
                    }
                </Fade>

                <ul className='row'>
                    <li className='left-margin42'><IconMAKE /></li>
                    <li className='right-margin22'><IconCOMMUNITY /></li>
                </ul>
            </div>
        </Wrapper>)
    }
}

export default Bottom;