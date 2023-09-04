import React from "react";
import { BrowserRouter, Route, Switch as Routes } from "react-router-dom";
import MainPage from "mobile/pages/MainPage";
import PlayExpListPage from "mobile/pages/ExpPage/PlayExpListPage";
import LearnExpListPage from "mobile/pages/ExpPage/LearnExpListPage";
import MakeExpListPage from "mobile/pages/ExpPage/MakeExpListPage";
import NotFoundPage from "mobile/pages/NotFoundPage";
import TermsOfServicePage from "mobile/pages/TermsOfServicePage";
import PrivacyPolicyPage from "mobile/pages/PrivacyPolicyPage";
import SignInPage from "mobile/pages/RegistrationPage/SignInPage";
import SignUpPage from "mobile/pages/RegistrationPage/SignUpPage";
import ExpDetailPage from "mobile/pages/ExpPage/ExpDetailPage/ExpDetailPage";
import CreateExpPage from "mobile/pages/ExpPage/CreateExpPage/CreateExpPage";
import RequiresAuth from "containers/Commons/RequiresAuth";

class AppMobile extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/*  */}
          <Route exact path="/" component={MainPage} />
          <Route path="/play" component={PlayExpListPage} />
          <Route path="/learn" component={LearnExpListPage} />
          <Route path="/make" component={MakeExpListPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/exp/:id" component={ExpDetailPage} />
          <Route path="/createExp" component={RequiresAuth(CreateExpPage)} />

          {/* 
            <Route path="/search" component={SearchPage}/>
            <Route path="/" component={ModifyDesignPage}/>
            <Route path="/" component={MyDetailPage}/>
            <Route path="/" component={DesignDetailPage}/>
            <Route path="/" component={FindPWPage}/>
            <Route path="/" component={MyDetailModifyPage}/>
            <Route path="/" component={MessagePage}/>
            <Route path="/" component={ChatDesignPage}/>
            <Route path="/" component={ChatGroupPage}/>
            <Route path="/" component={VChatGroupPage}/>
            <Route path="/alarm" component={AlarmPage}/>
          */}

          {/* - */}
          <Route path="/terms" component={TermsOfServicePage} />
          <Route path="/privacy" component={PrivacyPolicyPage} />
          <Route path="*" component={NotFoundPage} />
          {/* - */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppMobile;

            // <Route path="" element={MainPage} />
            // <Route path="community" element={CommunityPage} />
            // <Route path="community/:id" element={CommunityDetailPage} />
            // <Route path="community/write" element={CommunityWritePage} />
            // <Route path="community/modify/:id" element={CommunityModifyPage} />

            // <Route path="notice/:id" element={NoticeDetailPage} />
            // <Route path="intro" element={IntroPage} />
            // <Route path="signin" element={SignInPage} />
            // <Route path="signup" element={SignUpPage} />
            // <Route path="findPW" element={FindPWPage} />

            // <Route path="play/:sort/:keyword" element={PlayExpListPage} />
            // <Route path="make/:sort/:keyword" element={MakeExpListPage} />
            // <Route path="learn/:sort/:keyword" element={LearnExpListPage} />

            // <Route path="myDetail" element={MyDetailPage}>
            //   <Route path=":id" element={MyDetailChild} />
            // </Route>
            // <Route path="paidExp/:id" element={MyPaidExpDetailPage} />
            // <Route path="buy/:id" element={BuyPage} />
            // <Route path="terms" element={TermsOfServicePage} />
            // <Route path="privacy" element={PrivacyPolicyPage} />
            // <Route
            //   path="search/:category/:sort/:keyword"
            //   element={SearchPage}
            // />
            // <Route path="createSharer" element={CreateSharerPage} />
            // <Route path="modifySharer" element={ModifySharerPage} />
            // <Route path="SharerDetail" element={SharerDetailPage}>
            //   <Route path=":id" element={SharerDetailPage} />
            // </Route>
            // <Route path="modifyUser" element={ModifyUserPage} />
            // <Route path="exp/:id" element={ExpDetailPage} />
            // <Route path="createExp" element={CreateExpPage} />
            // <Route path="modifyExp">
            //   <Route path=":id" element={ModifyExpPage} />
            // </Route>
            // <Route path="message" element={MessageListPage} />
            // <Route path="message/:id" element={MessageDetailPage} />
            // <Route path="*" element={<div>NOT FOUND</div>} />
 
