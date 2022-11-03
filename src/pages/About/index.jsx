import React from 'react';
import * as styled from './styles';
import Header from '../../components/desktop/ListPage-Header';
import Navbar from '../../components/desktop/ListPage-Navbar';
import Footer from '../../components/desktop/Footer';


const About = () => {
    return(
        <styled.Container>
            <Header />
            <Navbar />
            <styled.Wrapper>
                <styled.Menu>
                    <div>사이트 소개</div>
                    <styled.HorizonLine />
                    <div>이용약관</div>
                    <styled.HorizonLine />
                    <div>개인정보 보호정책</div>
                </styled.Menu>
                <styled.PostBox>
                    <div>Lorem Ipsum</div>
                    <div></div>
                    <div>Lorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                    </div>
                </styled.PostBox>
            </styled.Wrapper>
            <Footer />
        </styled.Container>
    )
}


export default About;