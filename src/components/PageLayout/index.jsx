import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Navbar from "../Navbar";
// import SendDm from "../ListPage-DM";
import { useParams } from "react-router-dom";
import * as styled from "./styles";

function PageLayout({ children }) {
  const params = useParams();
  const { keyword } = params;
  // auth
  return (
    <styled.Wrapper>
      <Header keyword={keyword} />
      <Navbar />
      {children && React.cloneElement(children)}
      {/* <SendDm /> */}
      <Footer />
    </styled.Wrapper>
  );
}
export default PageLayout;
