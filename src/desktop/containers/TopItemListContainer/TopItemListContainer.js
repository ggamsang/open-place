import React from "react";
import ScrollList from "desktop/components/Commons/ScrollList/ScrollList.js";
import { connect } from "react-redux";
import { getTopExpListRequest } from "../../../actions/Exp/TopList.js";

class TopItemListContainer extends React.Component {
  async componentDidMount() {
    await this.props.getTopExpListRequest().then(async () => {
      console.log(this.props);
    });
  }
  getList = (page) => this.props.getTopExpListRequest(page);
  render() {
    return (
      <React.Fragment>
        <ScrollList getList={this.getList} list_added={this.props.top_exp} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  top_exp: state.TopExp.status.top_exp,
});

const mapDispatchToProps = (dispatch) => ({
  getTopExpListRequest: () => dispatch(getTopExpListRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopItemListContainer);