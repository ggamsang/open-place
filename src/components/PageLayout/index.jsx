import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Navbar from "../Navbar";
// import SendDm from "../ListPage-DM";
import { useParams } from "react-router-dom";
import * as styled from "./styles";
import { GetSession } from "../../mobile/modules";
import { authGET, TokenName } from "../../constants";
import host from "../../config";

function PageLayout({ children }) {
  const params = useParams();
  const { keyword } = params;

  // auth
  const [checking, setChecking] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    GetSession(TokenName)
      .then((token) => {
        if (token) {
          function CheckTokenRequest(token) {
            return fetch(`${host}/user/check`, authGET(token))
              .then((res) => res.json())
              .then((res) => {
                if (res.success) {
                  setLoggedIn(true);
                  setUserInfo(res.info);
                } else {
                  setLoggedIn(false);
                  setUserInfo(null);
                }
              });
          }
          CheckTokenRequest(token);
        }
      })
      .catch((e) => {
        setLoggedIn(false);
        setUserInfo(null);
      })
      .finally(() => setChecking(false));
  }, []);

  return (
    <styled.Wrapper>
      <Header keyword={keyword} loggedIn={loggedIn} userInfo={userInfo} />

      <Navbar />

      {children &&
        checking === false &&
        React.cloneElement(children, {
          loggedIn: loggedIn,
          userInfo: userInfo,
        })}

      {/* <SendDm /> */}

      <Footer />
    </styled.Wrapper>
  );
}

export default PageLayout;
