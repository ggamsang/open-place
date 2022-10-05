import React from "react";
import { connect } from "react-redux";
import ExpItemList from "components/Exp/ExpItemList";
import { getExpListRequest } from "actions/Exp/ExpList";

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
      <React.Fragment>
        <ExpItemList type="learn" {...this.props} />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  userInfo: state.Authentication.status.userInfo,
  list: state.ExpList.status.exp_list,
  list_added: state.ExpList.status.exp_list_added,
  token: state.Authentication.status.token,
});

const mapDispatchToProps = (dispatch) => ({
  getExpListRequest: (page, category, sort, keyword) =>
    dispatch(getExpListRequest(page, category, sort, keyword)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LearnExpListContainer);
