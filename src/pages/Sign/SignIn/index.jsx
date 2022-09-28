import React, { useState } from "react";
import Logo from "../../../components/Commons/Logo/Logo";

import { Wrapper, Warning } from "./styles";
const Login = { ready: "READY", failed: "FAILED", success: "SUCCESS" };

function SignInPage() {
  const [login, ] = useState();
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

      <Warning warning={login === Login.failed}>
        {login === Login.failed && (
          <Fade>
            <div>{"아이디 혹은 비밀번호가 틀립니다."}</div>
          </Fade>
        )}
      </Warning>

      {/* TODo  - not finished yet. */}
    </Wrapper>
  );
}

export default SignInPage;
