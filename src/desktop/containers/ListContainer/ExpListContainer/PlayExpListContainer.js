import React from "react";
import { connect } from "react-redux";
import ExpItemList from "desktop/components/Exp/ExpItemList";
import {
  setEmptyExpListRequest,
  getExpListRequest,
  getExpTagListRequest,
} from "actions/Exp/ExpList";
import { dummydata } from "constant";
import { CATEGORY } from "desktop/components/Commons/Define";

class PlayExpListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: dummydata };
  }
  componentDidMount() {
    this.props.getExpTagListRequest(CATEGORY.PLAY);
  }

  getList = (page) => this.props.getExpListRequest(page);

  render() {
    console.log(this.props);

    return (
      <React.Fragment>
        <ExpItemList getList={this.getList} type="play" {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.ExpList.status.exp_list,
  tag_list: state.ExpList.status.exp_tag_list,
  list_added: state.ExpList.status.exp_list_added,
  userInfo: state.Authentication.status.userInfo,
  token: state.Authentication.status.token,
});

const mapDispatchToProps = (dispatch) => ({
  getExpListRequest: (page, category, sort, keyword) =>
    dispatch(getExpListRequest(page, category, sort, keyword)),
  getExpTagListRequest: (category) => dispatch(getExpTagListRequest(category)),
  setEmptyExpListRequest: () => dispatch(setEmptyExpListRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayExpListContainer);
