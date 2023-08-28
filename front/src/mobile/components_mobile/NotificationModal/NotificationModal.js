import React from "react";
import styled from "styled-components";
import iconClose from "resources/mobiles/close.svg";
import iconNoti from "resources/mobiles/notification.png";
import iconRead from "resources/mobiles/read-icon.webp";
import { Modal } from "semantic-ui-react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { common } from "@mui/material/colors";

const Wrapper = styled(Modal)`
    width: 280px;
    height: 462px;
    max-width: 280px;
    // position: fixed;
    z-index: 999;
    background-color: #0D0D0D;
    border-radius: 32px;

    margin: auto;
    // left: 0;
    // right: 0;
    // top: 0;
    // bottom: 0;
    text-align: center;
    // transform: translate(0, -50px);

    .top {
        height: 85px;
        display: flex;
    }
    .noti {
        width: max-content;
        margin: auto;
    }
    .list {
        width: 280px;
        height: ${53 * 5 + 20 * 4}px;
        overflow: auto;
        padding: 0;
        margin: 0;
        .read {
            opacity: 0.7;
        }
        .element {
            box-sizing:border-box;
            position: relative;
            // border: 1px solid green;
            margin: auto;
            width: 247px;
            height: 53px;
            background-color: #CDCDCD;
            border-radius: 32px;
            margin-bottom: 20px;
            :last-child {
                margin-bottom: 0px;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;
            .title {
                // width: 200px;
                inline-size: 190px; 
                overflow: hidden;
                height: 40px;
                // border: 1px solid red;
                text-align: center;
                font-family: Pretendard;
                font-weight: 500;
                font-size: 17px;
                line-height: 40px;
                color: #000000;
            }
        }
    }
    .icon-button {
        border: none;
        border-bottom: 1px solid #BBBBBB;
        border-right: 1px solid #BBBBBB;
        background: none;
        width: max-content;
        height: 20px
        cursor: pointer;
        background: #CDCDCD;
        position: absolute;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        top: 14px;
        left: 7px;
        outline: none;
        img {
            width: 20px;
            height: 20px;
        }
        :hover {
            background: #EEE;
        }
    }

    .row {
        display: flex;
        flex-direction: row;
    }
`;
const CloseButton = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  background-color: #f00;
  border-radius: 100%;

  .cross {
    margin: auto;
    width: 10.56px;
    height: 10.56px;
  }
`;

class NotificationModal extends React.Component {
  handleClose = () => {
    this.props.close();
  };
  handleClicked = (id) => {
    this.props.clicked(id);
  };
  render() {
    const { open, list, close } = this.props;

    return (
      <Wrapper open={open} onClose={close}>
        <div className="top">
          <div className="noti">
          <NotificationsIcon fontSize="large" color={common.black} />
          </div>
          <CloseButton onClick={this.handleClose}>
            <img className="cross" src={iconClose} />
          </CloseButton>
        </div>

        <ul className="list">
          {list?.length > 0 &&
            list.map((item) => (
              <li
                key={item.uid}
                className={`${item.read === 1 && "read"} element row`}
              >
                <div onClick={(e) => e.stopPropagation()} className="title">
                  {item.title}
                </div>
                {item.read === 0 && (
                  <button
                    onClick={() => this.handleClicked(item.uid)}
                    className="icon-button"
                  >
                    <img src={iconRead} />
                  </button>
                )}
              </li>
            ))}
        </ul>
      </Wrapper>
    );
  }
}

export default NotificationModal;
