import React, { Component } from "react";
// import new_logo_mail from "source/new_logo_mail.svg";
// import styled from "styled-components";

// const MsgIcon = styled.div`
//   width: 44px;
//   height: 44px;
//   background: url(${new_logo_mail});
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center center;
// `;
class Message extends Component {
  gotoMessagePage() {
    window.location.href = "/message";
  }

  render() {
    return (
      <div
        style={{
          width: "50px",
          height: "50px",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={this.gotoMessagePage}
      >
        {this.props.noti && this.props.noti.countMsg > 0 && (
          <div
            style={{
              position: "absolute",
              zIndex: "998",
              right: "0%",
              top: "0%",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF0000",
            }}
          />
        )}
        <i
          style={{
            color: "#848484",
            zIndex: "997",
            opacity: ".9",
            fontSize: "48px",
          }}
          className="material-icons"
        >
          mail
        </i>
        {/* <MsgIcon/> */}
      </div>
    );
  }
}

export default Message;
