import React from "react";
import ScrollList from "mobile/components_mobile/Commons/ScrollList";
import { connect } from "react-redux";
// import { getTopExpListRequest } from "../../../actions/Exp/TopList.js";
import { GetTopExpItemListRequest } from "redux/modules/expitem";

class TopItemListContainer extends React.Component {
  async componentDidMount() {
    await this.props.GetTopExpItemListRequest(0).then(async () => {
      console.log(this.props);
    });
  }
  render() {
    return (
      <React.Fragment>
        <ScrollList list_added={this.props.dataListAdded} />
        {/* <ScrollList list_added={this.props.top_exp} /> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  // top_exp: state.TopExp.status.top_exp,
  dataList: state.DesignList.status.TopList,
  dataListAdded: state.DesignList.status.TopListAdded,
});

const mapDispatchToProps = (dispatch) => ({
  GetTopExpItemListRequest: (page) => dispatch(GetTopExpItemListRequest(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopItemListContainer);
