import React, { useEffect, useState } from "react";
import { goto } from "../../utils/navigator";

const NotFoundPage = () => {
  const [timeout, setTime] = useState(5);
  const countDown = () => {
    setTimeout(() => {
      const countdown = timeout - 1;
      setTime(countdown);
    }, 1000);
  };
  useEffect(() => {
    timeout !== 0 ? countDown() : goto("MAIN");
  }, [timeout]);

  return (
    <div>
      페이지를 찾을 수 없습니다.
      <br />
      {timeout}초 후에 메인페이지로 이동합니다.
    </div>
  );
};

export default NotFoundPage;
