import React from 'react';
import { connect } from 'react-redux';
import { GetCurrentMyPointRequest, ChargeMyPointRequest, } from "actions/MyPoint";
import MyPointCharger from "components/MyPointCharger";
import { Dimmer, Loader } from 'semantic-ui-react';

class MyPointChargeContainer extends React.Component {
  componentDidUpdate(props) {
    if (props.token !== this.props.token && this.props.token != null) {
      this.props.GetCurrentMyPointRequest(this.props.token);
    }
  }

  render() {
    const { token } = this.props;
    return (
      token
        ? <MyPointCharger {...this.props} />
        : <Dimmer>
          <Loader />
        </Dimmer>)
  }
}

const mapStateToProps = (state) => ({
  token: state.Authentication.status.token,
  userInfo: state.Authentication.status.userInfo,
  current_point: state.MyPoint.status.current_point,
});
const mapDispatchToProps = (dispatch) => ({
  GetCurrentMyPointRequest: (token) => dispatch(GetCurrentMyPointRequest(token)),
  ChargeMyPointRequest: (token, point, type) => dispatch(ChargeMyPointRequest(token, point, type)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MyPointChargeContainer);