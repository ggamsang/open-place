import React from 'react';
import styled from 'styled-components';
import iPlay from "resources/menu-icon-hang.png";
import iLearn from "resources/menu-icon-learn.png";
import iMake from "resources/menu-icon-make.png";
import iChat from "resources/menu-icon-chat.png";
import shapeLogin from "resources/login_button_shape.svg";
import shapeSignup from "resources/signup_button_shape.svg";

const Wrapper = styled.div`
    width: 100%;
    height: 124px;
    position: relative;

    *{border: 1px dashed #999;}

    .top {
        display: flex;
        justify-content: space-between;
        
    }
    .middle { position: absolute;}
    .bottom {
        margin: 0;
        margin-top: 6px;
        padding-right: 13px;
        padding-left: 13px;
        display: flex;
        justify-content: space-between;
        height: 92px;
        
        img {
            width: 22px;
            height: 22px;
            background-size: contain;
            background-repeat: no-repeat;

        }
        .text {
            font-family: Pretendard;
            font-size: 12px;
            font-weight: 500;
            text-align: left;
            line-height: 12px;
            color: #4A4B4D;
        }
        .icon-wrapper {
            width: max-content;
            height: 50px;

            .img {
                width: max-content;
                margin: auto;
            }
            :last-child {
                margin-left: 39px;
            }
        }
        .chunker {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }
`;
const LoginButtonWrapper = styled.div`
    width: 113px;
    height: 26px;
    background-image: url(${shapeLogin});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
        width: max-content;
        font-family: Pretendard;
        font-weight: 800;
        font-size: 11px;
        text-align: center;
        line-height: 11px;
        color: #FFF;
        height: 11px;
    }
`;
const SignupButtonWrapper = styled.div`
    width: 113px;
    height: 26px;
    background-image: url(${shapeSignup});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
        width: max-content;
        height: 11px;
        font-family: Pretendard;
        font-weight: 800;
        font-size: 11px;
        text-align: center;
        line-height: 11px;
        color: #FFF;
    }
`;

class Bottom extends React.Component {
    render() {
        return (
            <Wrapper>

                <div className='top'>
                    {/* 로그인 아닐 때, */}
                    <LoginButtonWrapper>
                        <div></div>
                        <div className="text">
                            로그인하기
                        </div>
                    </LoginButtonWrapper>

                    <SignupButtonWrapper>
                        <div></div>
                        <div className="text">
                            회원가입
                        </div>
                    </SignupButtonWrapper>
                </div>

                <div className='middle'>
                    {/* 나는 아이콘! */}
                </div>

                <div className='bottom'>
                    <div className='chunker'>
                        <div className='icon-wrapper'>
                            <div className='img'>
                                <img alt={"icon"} src={iPlay} />
                            </div>
                            <div>놀기</div>
                        </div>
                        <div className='icon-wrapper'>
                            <div className='img'>
                                <img alt={"icon"} src={iLearn} />
                            </div>
                            <div>배우기</div>
                        </div>
                    </div>

                    <div className='chunker'>
                        <div className='icon-wrapper'>
                            <div className='img'>
                                <img alt={"icon"} src={iMake} />
                            </div>
                            <div>만들기</div>
                        </div>
                        <div className='icon-wrapper'>
                            <div className='img'>
                                <img alt={"icon"} src={iChat} />
                            </div>
                            <div>소통하기</div>
                        </div>
                    </div>

                </div>
            </Wrapper>
        )
    }
}
export default Bottom;