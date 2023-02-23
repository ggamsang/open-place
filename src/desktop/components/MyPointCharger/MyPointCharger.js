import React from "react";
import { InputPrice } from "desktop/components/Commons/Input";
import * as styled from "./styles";

const ChargeTypeCash = 1;
const ChargeTypeCredit = 2;
const ChargeTypeSimple = 3;

class MyPointCharger extends React.Component {
  componentDidMount() {
    this.props.token && this.props.GetCurrentMyPointRequest(this.props.token);
  }
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
          alert("포인트가 충전되었습니다.");
          this.setState({ point: 0, type: 0, active: false }, () =>
            this.props.GetCurrentMyPointRequest(this.props.token)
          );
          this.props.onCharged && this.props.onCharged();
        }
      });
  render() {
    return (
      <styled.Wrapper
        url={(this.props.userInfo && this.props.userInfo.l_img) || null}
      >
        <styled.CurrentPoint>
          <div className="label">보유 포인트</div>
          <input
            disabled
            value={Number(this.props.current_point).toLocaleString()}
          />
          <span className="unit">point</span>
        </styled.CurrentPoint>

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
          <styled.ButtonWrapper>
            <button
              onClick={this.handleCharge}
              disabled={!this.state.active}
              className={this.state.active ? "active bw100" : "bw100"}
            >
              <div className="text ">결제하기</div>
            </button>
          </styled.ButtonWrapper>
        </div>
      </styled.Wrapper>
    );
  }
}
export default MyPointCharger;
