import React from "react";
import { connect } from "react-redux";
import ExpItemList from "mobile/components_mobile/Exp/ExpItemList";
import {
  GetDesignListRequest,
  // GetDesignListCountRequest,
} from "redux/modules/expitem";

const dummy = [
  {
    type: "item",
    title: "스파게티 코드를 작성하자!",
    score: 4.3,
    tags: ["tag1", "tag2", "tag3"],
    url: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
  },
];
class LearnExpListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: dummy };
  }
  render() {
    return (
      <ExpItemList
        cate1={2}
        list_added={this.props.DesignListAdded}
        list={this.props.DesignList}
        {...this.props}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  userInfo: state.Authentication.status.userInfo,
  DesignList: state.DesignList.status.DesignList,
  DesignListAdded: state.DesignList.status.DesignListAdded,
  token: state.Authentication.status.token,
});

const mapDispatchToProps = (dispatch) => ({
  GetDesignListRequest: (page, sort, cate1, keyword) => {
    return dispatch(GetDesignListRequest(page, sort, cate1, keyword));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LearnExpListContainer);
