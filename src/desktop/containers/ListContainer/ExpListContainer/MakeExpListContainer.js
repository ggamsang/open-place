import React from "react";
import { connect } from "react-redux";
import ExpItemList from "desktop/components/Exp/ExpItemList";
import {
  getExpListRequest,
  setEmptyExpListRequest,
  getExpTagListRequest,
} from "actions/Exp/ExpList";
import { dummydata } from "constant";
import { CATEGORY } from "desktop/components/Commons/Define";

class MakeExpListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: dummydata };
  }
  componentDidMount() {
    this.props.getExpTagListRequest(CATEGORY.MAKE);
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
  tag_list: state.ExpList.status.exp_tag_list,
  list_added: state.ExpList.status.exp_list_added,
  token: state.Authentication.status.token,
});

const mapDispatchToProps = (dispatch) => ({
  getExpListRequest: (page, category, sort, keyword) =>
    dispatch(getExpListRequest(page, category, sort, keyword)),
  setEmptyExpListRequest: () => dispatch(setEmptyExpListRequest()),
  getExpTagListRequest: (category) => dispatch(getExpTagListRequest(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeExpListContainer);
