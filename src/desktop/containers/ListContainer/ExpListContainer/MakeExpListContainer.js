import React from "react";
import { connect } from "react-redux";
import ExpItemList from "desktop/components/Exp/ExpItemList";
import { getExpListRequest, setEmptyExpListRequest } from "actions/Exp/ExpList";
import { dummydata } from "constant";

class MakeExpListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: dummydata };
  }
  render() {
    return (
      <React.Fragment>
        <ExpItemList type="make" {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.ExpList.status.exp_list,
  list_added: state.ExpList.status.exp_list_added,
  token: state.Authentication.status.token,
});

const mapDispatchToProps = (dispatch) => ({
  getExpListRequest: (page, category, sort, keyword) =>
    dispatch(getExpListRequest(page, category, sort, keyword)),
  setEmptyExpListRequest: () => dispatch(setEmptyExpListRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeExpListContainer);
