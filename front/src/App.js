import React, { Component } from "react";
import CacheBuster from "react-cache-buster";
import Loading from "components/Commons/Loading";
import { version } from "../package.json";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "pages/MainPage";
import SignUpPage from "pages/SignUpPage";
import InsertUserDetailPage from "pages/InsertUserDetailPage";
import SignInPage from "pages/SignInPage";
import FindPWPage from "pages/FindPWPage";
import MyDetailPage from "pages/MyDetailPage";
import MyDetailModifyPage from "pages/MyDetailModifyPage";
import SearchPage from "pages/SearchPage";
import MessagePage from "pages/MessagePage";
import { DesignDetailPage } from "pages/DesignPage";
import CreateDesignPage from "pages/CreateDesignPage";
import ModifyDesignPage from "pages/ModifyDesignPage";
import GroupListPage, { GroupDetailPage } from "pages/GroupPage";
import CreateGroupPage from "pages/CreateGroupPage";
import ModifyGroupPage from "pages/ModifyGroupPage";
import DesignerListPage, { DesignerDetailPage } from "pages/DesignerPage";
import CreateDesigner from "containers/Designer/CreateDesignerContainer/CreateDesignerContainer";

import RequiresAuth from "containers/Commons/RequiresAuth";
import NotFoundPage from "pages/NotFoundPage";
import CheckAuth from "containers/Commons/CheckAuth";
import VChatDesignPage from "pages/VChat2Page";
import VChatGroupPage from "pages/VChatGroupPage";
import ChatDesignPage from "pages/ChatPage";
import ChatGroupPage from "pages/ChatGroupPage";
import CodeViewPage from "pages/CodeViewPage";
import PdfViewPage from "pages/PdfViewPage";
import PrivacyPolicyPage from "pages/PrivacyPolicyPage";
import TermsOfUsePage from "pages/TermsOfUsePage";
import IntroPage from "pages/IntroPage";

import AlarmPage from "pages/AlarmPage";

import PlayExpListPage from "pages/PlayExpListPage";
import LearnExpListPage from "pages/LearnExpListPage";
import MakeExpListPage from "pages/MakeExpListPage";

class App extends Component {
  render() {
    const isProduction = process.env.NODE_ENV === "production";
    return (
      <CacheBuster
        currentVersion={version}
        isEnabled={isProduction}
        isVerboseMode={false}
        loadingComponent={<Loading />}
      >
        <BrowserRouter>
          {/* <Notice /> */}
          <Switch>
            {/* rewrite */}
            <Route exact path="/" component={MainPage} />
            <Route path="/play" component={PlayExpListPage} />
            <Route path="/learn" component={LearnExpListPage} />
            <Route path="/make" component={MakeExpListPage} />
            <Route
              path="/createexp/:id?"
              component={RequiresAuth(CreateDesignPage)}
            />
            <Route path="/search" component={SearchPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/myPage" component={RequiresAuth(MyDetailPage)} />

            {/* not finished yet */}
            <Route path="/exp/:id" component={DesignDetailPage} />

            {/* GROUP A - main */}
            <Route path="/findpw" component={FindPWPage} />
            <Route
              path="/insertUserDetail"
              component={RequiresAuth(InsertUserDetailPage)}
            />
            <Route
              path="/myPage/:type?/:type2?"
              component={RequiresAuth(MyDetailPage)}
            />
            <Route
              path="/myModify"
              component={RequiresAuth(MyDetailModifyPage)}
            />
            <Route
              path="/message/:id?/:name?"
              component={RequiresAuth(MessagePage)}
            />
            {/* GROUP B - design */}

            <Route
              path="/expModify/:id"
              component={RequiresAuth(ModifyDesignPage)}
            />
            {/* GROUP C - group */}
            <Route path="/group/:sorting?" component={GroupListPage} />
            <Route path="/groupDetail/:id/" component={GroupDetailPage} />
            <Route
              path="/createGroup"
              component={RequiresAuth(CreateGroupPage)}
            />
            <Route
              path="/modifygroup/:id"
              component={RequiresAuth(ModifyGroupPage)}
            />
            {/* GROUP D - designer */}
            <Route path="/designerDetail/:id" component={DesignerDetailPage} />
            <Route
              path="/designer/:sorting?/:cate1?/:cate2?/:cate3?"
              component={DesignerListPage}
            />
            <Route
              path="/createdesigner"
              component={RequiresAuth(CreateDesigner)}
            />

            {/* About */}
            <Route path="/aboutPrivacyPolicy" component={PrivacyPolicyPage} />
            <Route path="/aboutTermsOfUse" component={TermsOfUsePage} />
            <Route path="/aboutIntro" component={IntroPage} />
            {/* no client template */}
            <Route path="/chat/:id" component={CheckAuth(ChatDesignPage)} />
            <Route path="/chatg/:id" component={CheckAuth(ChatGroupPage)} />
            {/* <Route path="/vchat2/:id" component={CheckAuth(VChatDesignPage)} /> */}
            {/* <Route path="/vchat2" component={VChatDesignPage} /> */}
            <Route path="/vchatg/:id" component={CheckAuth(VChatGroupPage)} />
            <Route path="/codeview" component={CheckAuth(CodeViewPage)} />
            <Route path="/pdfview/:uri" component={CheckAuth(PdfViewPage)} />
            {/* only Mobile */}
            <Route component={AlarmPage} path="/alarm" />

            {/* 404 [!] 이 라우터 밑으로 추가하지 말고, 위로 .*/}
            <Route component={NotFoundPage} />
            <Route path="/notfound" component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </CacheBuster>
    );
  }
}

export default App;
