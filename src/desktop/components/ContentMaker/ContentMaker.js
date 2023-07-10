import React from "react";
import { FaRedo, FaTrash } from "react-icons/fa";
import styled from "styled-components";

const ControllerWrap = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  border: 1px solid #707070;
  padding: 25px;
  margin-bottom: 30px;
  .innerBox {
    display: flex;
    justify-content: space-between;
  }
  & .initWrap {
    & > ul {
      display: flex;
      // box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.1);
    }
    & > span {
      color: #878d91;
    }
  }
  &:hover {
    background-color: #fafafa;
    & .initWrap {
      & > ul {
        display: flex;
      }
      & > span {
        color: #878d91;
      }
    }
  }
`;
export default class ContentMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
      is_project: false,
    };
  }
  onClickedReset = (e) => {
    this.setState({ contents: [], is_project: false });
  };
  render() {
    const { contents, is_project } = this.state;

    return (
      <>
        <div
          onClick={this.onClickedReset}
          style={{
            width: "max-content",
            marginLeft: "auto",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          <FaRedo size="1.5rem" /> 작업취소
        </div>
        <div>
          {is_project ? (
            <></>
          ) : (
            <>
              {contents.map((item) => (
                <ControllerWrap key={item.order}>
                  <div className="contentWrap">
                    <FaTrash size="1.5rem" />
                    {/* <DelBtn
                    type="button"
                    className="editBtn"
                    onClick={() => this.onDelete(item.order)}
                  >
                    <i className="trash alternate icon large" />
                  </DelBtn> */}
                  </div>
                </ControllerWrap>
              ))}
            </>
          )}
        </div>
      </>
    );
  }
}
