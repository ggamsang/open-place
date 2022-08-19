import React from 'react';
import { connect } from "react-redux";
import ExpItemList from 'components/Exp/ExpItemList';
import {getExpListRequest} from "actions/Exp/ExpList"

const dummy = [
  {
    type: "item", title: "결혼은 이렇게!", score: 4.0,
    tags: ["tag1", "tag2", "tag3"],
    url: "https://i.picsum.photos/id/1065/3744/5616.jpg?hmac=V64psST3xnjnVwmIogHI8krnL3edsh_sy4HNc3dJ_xY"
  },
]
class MakeExpListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: dummy }
  }
  render() {
    return (<React.Fragment>
      <ExpItemList type="make" {...this.props} />
    </React.Fragment>)
  }
}

const mapStateToProps = (state) => ({
  list : state.ExpList.status.exp_list,
  list_added : state.ExpList.status.exp_list_added,
  token: state.Authentication.status.token,
});

const mapDispatchToProps = (dispatch) => ({
  getExpListRequest:(page,category,sort,keyword)=>dispatch(getExpListRequest(page,category,sort,keyword)),
});


export default connect(mapStateToProps, mapDispatchToProps)(MakeExpListContainer);