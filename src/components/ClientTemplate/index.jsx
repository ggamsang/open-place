import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Navbar from "../Navbar";
import SendDm from "../ListPage-DM";
import { useParams } from "react-router-dom";

function ClientTemplate({ children }) {
  const params = useParams();
  const { keyword } = params;
  return (
    <>
      <Header keyword={keyword} />
      <Navbar />
      {children && React.cloneElement(children)}
      <SendDm />
      <Footer />
    </>
  );
}
export default ClientTemplate;
