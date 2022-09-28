import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Navbar from "../Navbar";
import SendDm from "../ListPage-DM";

function ClientTemplate({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      {children && React.cloneElement(children)}
      <SendDm />
      <Footer />
    </>
  );
}
export default ClientTemplate;
