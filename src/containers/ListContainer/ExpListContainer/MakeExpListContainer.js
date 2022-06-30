import React, { Component } from 'react';
import { connect } from "react-redux";
import ExpItemList from 'components_mobile/Exp/ExpItemList';
import { GET } from 'constant';
import host from 'config';
import {getExpListRequest} from "actions/Exp/ExpList"

const dummy = [
  {
    type: "item", title: "결혼은 이렇게!", score: 4.0,
    tags: ["tag1", "tag2", "tag3"],
    url: "https://i.picsum.photos/id/1065/3744/5616.jpg?hmac=V64psST3xnjnVwmIogHI8krnL3edsh_sy4HNc3dJ_xY"
  },
  // {
  //   type: "item", title: "앞 사람만 노 젖게 시키기", score: 3.5,
  //   tags: ["tag1", "tag2",],
  //   url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
  // },
  // {
  //   type: "item", title: "스파게티 코드를 작성하자!", score: 4.3,
  //   tags: ["tag1", "tag2", "tag3"],
  //   url: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
  // },
  // {
  //   type: "item", title: "멍때리며 놀자ㅡ!", score: 3.1,
  //   tags: ["tag1", "tag2", "tag3"],
  //   url: "https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc"
  // },
]
class MakeExpListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: dummy }
  }
  componentDidMount() {
    const url = `${host}/item/make`;
    fetch(url, GET)
      .then(res => res.json())
      .then(data => this.setState({ list: data.detail.map(item => item) }))
      .catch(err => console.error(err))
  }
  render() {
    const { list } = this.state;
    return (<React.Fragment>
      <ExpItemList type="make" {...this.props} />
    </React.Fragment>)
  }
}

const mapStateToProps = (state) => ({
  list : state.ExpList.status.exp_list,
  list_added : state.ExpList.status.exp_list_added,
});

const mapDispatchToProps = (dispatch) => ({
  getExpListRequest:(page,category,sort,keyword)=>dispatch(getExpListRequest(page,category,sort,keyword)),
});


export default connect(mapStateToProps, mapDispatchToProps)(MakeExpListContainer);