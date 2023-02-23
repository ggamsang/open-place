import React from "react";
import { connect } from "react-redux";
import PointLogList from "desktop/components/PointLogList";
import {
  GetPointListRequest,
  GetTotalPointCountRequest,
} from "actions/MyPoint";

class PointLogContainer extends React.Component {
  GetList = (page) =>
    // this.props.token &&
    this.props.GetPointListRequest(page, this.props.token);

  GetTotalCount = () =>
    // this.props.token &&
    this.props.GetTotalPointCountRequest(this.props.token);

  componentDidUpdate(props) {
    if (props.charged !== this.props.charged) {
      this.onCharged();
    }
  }
  onCharged = () => {
    this.GetList(0, this.props.token);
    this.props.GetTotalPointCountRequest(this.props.token);
  };

  render() {
    return (
      <React.Fragment>
        <PointLogList
          {...this.props}
          GetTotalCount={this.GetTotalCount}
          GetList={this.GetList}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.Authentication.status.token,
  pointlog: state.MyPoint.status.pointlog,
  total: state.MyPoint.status.total,
});
const mapDispatchToProps = (dispatch) => ({
  GetPointListRequest: (page, token) =>
    dispatch(GetPointListRequest(page, token)),
  GetTotalPointCountRequest: (token) =>
    dispatch(GetTotalPointCountRequest(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PointLogContainer);
