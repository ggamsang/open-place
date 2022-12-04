import React from "react";
import styled from "styled-components";
import { resolution } from "../../commons/resolution";
import { InputPrice } from "../../../components/Commons/Input";
// import { WIDTH } from "../../../constants";
// import SearchForm from "../Commons/Search/SearchForm";
// import heart from "source/Iconly-heart-red.svg";
// import { goto } from "../../../utils/navigator";

const ChargeTypeCash = 1;
const ChargeTypeCredit = 2;
const ChargeTypeSimple = 3;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 100vh;
  .header {
    width: 100%;
    margin-bottom: 30px;
  }
  .searchbox {
    width: 100%;
    padding-top: 50px;
    display: flex;
    align-items: center;
  }
  .img_arrow {
    width: ${resolution(27)}px;
    height: ${resolution(19)}px;
  }

  .profile {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .thumbnail {
      width: ${resolution(100)}px;
      height: ${resolution(100)}px;
      border-radius: 50%;
      background-color: #efefef;
      background-image: url(${(prop) => prop.url});
      background-size: cover;
    }
    .user_name {
      margin-top: 10px;
      width: 100%;
      font-size: ${resolution(20)}px;
      text-align: center;
      color: white;
      font-family: Montserrat;
      font-weight: Bold;
    }
    .like {
      margin-top: 10px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      .count {
        height: 15px;
        text-align: right;
        font: normal normal bold 12px/15px Pretendard;
        letter-spacing: 0px;
        color: #ffffff;
      }
      .imgheart {
        margin-left: 5px;
        width: 24px;
        height: 24px;
      }
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding-left: 13px;
    margin-top: 10px;
  }
  .label {
    width: 100px;
    height: 18px;
    text-align: left;
    font: normal normal bold 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #000;
    box-sizing: border-box;
    margin-right: 10px;
  }
  .method-buttons {
    width: 205px;
    button {
      &.active {
        background: #fe1400 0% 0% no-repeat padding-box;
        .text {
          text-align: center;
          font: normal normal bold 15px/18px Pretendard;
          letter-spacing: 0px;
          color: #ffffff;
        }
      }
      margin-bottom: 10px;
      :last-child {
        margin-bottom: 25px;
      }
      border: none;
      outline: none;
      width: 205px;
      height: 35px;
      background: #e9e9e9 0% 0% no-repeat padding-box;
      border-radius: 20px;
      .text {
        height: 18px;
        text-align: center;
        font: normal normal normal 15px/18px Pretendard;
        letter-spacing: 0px;
        color: #000000;
      }
    }
  }
`;
const ButtonWrapper = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 12px;

  button {
    &.active {
      background: #fe1400 0% 0% no-repeat padding-box;
    }
    &.stepback {
      margin-left: 8px;
    }
    border: none;
    outline: none;
    height: 35px;
    background: #707070 0% 0% no-repeat padding-box;
    box-shadow: 2px 2px 3px #00000019;
    border-radius: 10px;
    .text {
      margin: auto;
      width: max-content;
      height: 18px;
      text-align: center;
      font: normal normal 500 15px/18px Pretendard;
      letter-spacing: 0px;
      color: #ffffff;
    }
    &.bw100 {
      width: 100%;
    }
    &.bw50 {
      width: 50%;
    }
  }
`;
const CurrentPoint = styled.div`
  margin: auto;
  box-sizing: border-box;
  padding: 10px 12px;
  width: 100%;
  height: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 2px 2px 5px #00000029;
  border: 0.5px solid #e9e9e9;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  .label {
    width: max-content;
    height: 18px;
    text-align: left;
    font: normal normal 500 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #707070;
    margin-right: 13px;
  }
  input {
    border: none;
    width: 150px;
    height: 31px;
    background: #e9e9e9 0% 0% no-repeat padding-box;
    border-radius: 10px;

    text-align: center;
    font: normal normal normal 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    margin-right: 8px;
  }
  .unit {
    width: max-content;
    height: 18px;
    text-align: center;
    font: normal normal normal 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #000000;
  }
`;

class MyPointCharger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      point: 0,
      type: 0,
      active: false,
    };
  }
  onChangePrice = (point) =>
    this.setState({ point: point }, () => {
      this.setState({ active: this.state.point > 0 && this.state.type != 0 });
    });
  SelectChargeType = (type) =>
    this.setState({ type: type }, () => {
      this.setState({ active: this.state.point > 0 && this.state.type != 0 });
    });
  handleCharge = () =>
    this.props.token &&
    this.props
      .ChargeMyPointRequest(this.props.token, this.state.point, this.state.type)
      .then((res) => {
        if (res) {
          alert("success");
          this.setState({ point: 0, type: 0, active: false }, () =>
            this.props.GetCurrentMyPointRequest(this.props.token)
          );
        }
      });
  render() {
    return (
      <Wrapper url={(this.props.userInfo && this.props.userInfo.l_img) || null}>
        {/* <div className="header">
                <div className='searchbox'>
                    <SearchForm />
                </div>
                <div className='profile'>
                    <div className='thumbnail' />
                    <div className='user_name'>
                        {this.props.userInfo.nick_name || "닉네임"}
                    </div>
                    <div className='like'>
                        <span className='count'>
                            {this.props.userInfo.like || 0}
                        </span>
                        <img alt="icon" className='imgheart' src={heart} />
                    </div>
                </div>
            </div> */}

        {/* <ButtonWrapper>
                    <button className='active bw50'>
                        <div className='text'>포인트충전</div>
                    </button>
                    <button onClick={this.props.onTabSwitch} className='stepback bw50'>
                        <div className='text'>충전 내역</div>
                    </button>
                </ButtonWrapper> */}

        <CurrentPoint>
          <div className="label">보유 포인트</div>
          <input
            disabled
            value={Number(this.props.current_point).toLocaleString()}
          />
          <span className="unit">point</span>
        </CurrentPoint>

        <div className="row">
          <div className="label">구입비용</div>
          <InputPrice
            disabled
            color={"#000"}
            price={this.state.point}
            onChangeValue={this.onChangePrice}
            name="price"
          />
        </div>

        <div className="row">
          <div className="label">결제 수단</div>
          <div className="method-buttons">
            <button
              onClick={() => this.SelectChargeType(ChargeTypeCash)}
              className={this.state.type === ChargeTypeCash ? "active" : ""}
            >
              <div className="text">현금 충전</div>
            </button>
            <button
              onClick={() => this.SelectChargeType(ChargeTypeCredit)}
              className={this.state.type === ChargeTypeCredit ? "active" : ""}
            >
              <div className="text">신용카드</div>
            </button>
            <button
              onClick={() => this.SelectChargeType(ChargeTypeSimple)}
              className={this.state.type === ChargeTypeSimple ? "active" : ""}
            >
              <div className="text">간편결제</div>
            </button>
          </div>
        </div>

        <div className="">
          <ButtonWrapper>
            <button
              onClick={this.handleCharge}
              disabled={!this.state.active}
              className={this.state.active ? "active bw100" : "bw100"}
            >
              <div className="text ">결제하기</div>
            </button>
          </ButtonWrapper>
        </div>
      </Wrapper>
    );
  }
}
export default MyPointCharger;
