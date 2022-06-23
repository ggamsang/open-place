import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonNormal from 'components_mobile/Commons/Button/\bButtonNormal';


class ModifyUser extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //data set
  /**
   * password thumbnail update_time
   * phone certification
   */
  onSubmit = () => {
    let data = {
      password: "q1w2e3",
      update_time: new Date(),
      phone: "0103033733",
      certification: 0,
      files: [],
    }
    this.props.updateUserRequest(this.props.userInfo.uid, data, this.props.token)
  }

  render() {

    return (
      <div style={{ height: "100px" }}>
        {/* <ButtonNormal width={194} height={30} borderRadius={10} text="유저 업데이트 테스트" onClickEvent={this.onSubmit}/> */}
        user update 디자인 구현 x 작업중인 페이지입니다.
        <br />
        <br />
        <h2>
          <a onClick={() => window.history.go(-1)}>뒤로가기</a>
        </h2>
      </div>
    );
  }
}

export default ModifyUser;
