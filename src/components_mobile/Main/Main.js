import React, { Component } from 'react';
import host from "config";
import Search from 'components_mobile/Search';
import Slide from 'components_mobile/Slide';
import TopItemList from 'components_mobile/TopItemList';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;
const GradationCard = styled.div`
  width: 100%;
  height: 220px;
  background-size: 200% 200%;
  background-position: top right;
  background-image: linear-gradient(${prop => prop.angle}deg, #501B1B, #655FFA, #D30E0E);
`;
const ContentWrapper = styled.div`
  transform: translate(0px, -170px);
`;

class Main extends Component {
  componentDidMount() {
    fetch(host)
      .then(res => res.json())
      .then(d => console.log({d}))
      .catch(e => console.error(e));
  }
  render() {
    return (
      <Wrapper>
        <GradationCard angle={30} />
        <ContentWrapper>

          <Search />

          <Slide />

          <TopItemList />

        </ContentWrapper>
      </Wrapper>
    )
  }
}

export default Main;
