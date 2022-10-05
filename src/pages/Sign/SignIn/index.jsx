import React from "react";
import Logo from "../../../components/Commons/Logo/Logo";

import { Wrapper } from "./styles";
const Login = { ready: "READY", failed: "FAILED", success: "SUCCESS" };

function SignInPage() {
  return (
    <Wrapper>
      <div
        className="box alignCenter justifyCenter"
        style={{ paddingTop: "39px" }}
      >
        <Logo
          type="big_image"
          onClickEvent={() => (window.location.href = "/")}
        />
      </div>

      <Warning warning={this.state.login === Login.failed}>
        {this.state.login === Login.failed && (
          <Fade>
            <div>{"아이디 혹은 비밀번호가 틀립니다."}</div>
          </Fade>
        )}
      </Warning>
      
    </Wrapper>
  );
}

export default SignInPage;
