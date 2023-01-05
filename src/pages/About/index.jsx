import React from "react";
import * as styled from "./styles";
import PageLayout from "../../components/PageLayout";

const About = () => {
  return (
    <styled.Container>
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
          <div>
            Lorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem
            IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem
            IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem
            IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem
            IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem
            Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem
            IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem
            Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem
            IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem
            IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem
            IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem
            IpsumLorem IpsumLorem IpsumLorem Ipsum
          </div>
        </styled.PostBox>
      </styled.Wrapper>
    </styled.Container>
  );
};

export default function AboutPage() {
  return (
    <PageLayout>
      <About />
    </PageLayout>
  );
}
