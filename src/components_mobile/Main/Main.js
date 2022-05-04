import React, { Component } from 'react';
import host from "config";
import Search from 'components_mobile/Search';
import Slide from 'components_mobile/Slide';
import styled from 'styled-components';

const Wrapper = styled.div`
  // margin-top: 5px;
  width: 100%;
`;
// search-bar
// top-item
// item-list
// menu
const GradationCard = styled.div`
  width: 100%;
  height: 220px;
  background-size: 200% 200%;
  background-position: top right;
  background-image:
    linear-gradient(${prop => prop.angle}deg, #501B1B, #655FFA, #D30E0E);
`;
const ContentWrapper = styled.div`
  transform: translate(0px, -175px);
`;

class Main extends Component {
  componentDidMount() {
    console.log(host, process.env);
    fetch(host)
      .then(res => res.json())
      .then(d => console.log(d))
      .catch(e => console.error(e));
  }
  render() {
    return (
      <Wrapper>
        <GradationCard angle={30} />
        <ContentWrapper>

          <Search />

          <Slide slidelist={[]} />

          <div>top item list</div>
        </ContentWrapper>
      </Wrapper>
    )
  }
}

export default Main;
