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
    title: "앞 사람만 노 젖게 시키기",
    score: 3.5,
    tags: ["tag1", "tag2"],
    url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
  },
  {
    type: "item",
    title: "스파게티 코드를 작성하자!",
    score: 4.3,
    tags: ["tag1", "tag2", "tag3"],
    url: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
  },
  {
    type: "item",
    title: "멍때리며 놀자ㅡ!",
    score: 3.1,
    tags: ["tag1", "tag2", "tag3"],
    url: "https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc",
  },
  {
    type: "item",
    title: "결혼은 이렇게!",
    score: 4.0,
    tags: ["tag1", "tag2", "tag3"],
    url: "https://i.picsum.photos/id/1065/3744/5616.jpg?hmac=V64psST3xnjnVwmIogHI8krnL3edsh_sy4HNc3dJ_xY",
  },
];
class PlayExpListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: dummy };
  }
  render() {
    return (
      <ExpItemList
        cate1={1}
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
)(PlayExpListContainer);
