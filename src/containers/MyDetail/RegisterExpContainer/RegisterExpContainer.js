import React, { Component } from 'react';
import ScrollList from "components_mobile/Commons/ScrollList"
import { connect } from "react-redux";
import { getUserRegisterExpRequest } from "actions/User/MyDetail"
import Item from 'components_mobile/Commons/Item';
const dummy = [
  {
    type: "item", title: "스파게티 코드를 작성하자!", score: 4.3,
    tags: ["tag1", "tag2", "tag3"],
    url: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
  },
  {
    type: "item", title: "멍때리며 놀자ㅡ!", score: 3.1,
    tags: ["tag1", "tag2", "tag3"],
    url: "https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc"
  },
  {
    type: "item", title: "결혼은 이렇게!", score: 4.0,
    tags: ["tag1", "tag2", "tag3"],
    url: "https://i.picsum.photos/id/1065/3744/5616.jpg?hmac=V64psST3xnjnVwmIogHI8krnL3edsh_sy4HNc3dJ_xY"
  },
  {
    type: "item", title: "앞 사람만 노 젖게 시키기", score: 3.5,
    tags: ["tag1", "tag2",],
    url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
  }
]
class RegisterExpContainer extends Component {
  constructor(props){
    super(props);
    // this.getList = this.getList.bind(this);
  }
  componentWillMount() {
    console.log(this.props.userInfo)
    this.getList(0);
  }
  getList = (page) => {

    return new Promise((resolve)=>resolve(this.props.getUserRegisterExpRequest&&this.props.getUserRegisterExpRequest(this.props.userInfo.uid, page)));
  }
  render() {
    console.log(this.props)
    return (
    <React.Fragment>
      <ScrollList list={this.props.list} list_added={this.props.list_added} getList={(value)=>this.getList(value)} ListComponent={Item} />
    </React.Fragment>)
  }
}
{/* <ScrollList list={this.props.list} list_added={this.props.list_added} getList={this.getList} ListComponent={Item} /> */ }

const mapStateToProps = (state) => ({
  userInfo: state.Authentication.status.userInfo,
  list: state.MyDetail.status.register_list,
  list_added: state.MyDetail.status.register_list_added,
});

const mapDispatchToProps = (dispatch) => ({
  getUserRegisterExpRequest: (user_id, page) => { dispatch(getUserRegisterExpRequest(user_id, page)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterExpContainer);
