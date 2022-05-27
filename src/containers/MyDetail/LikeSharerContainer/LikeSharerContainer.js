import React, { Component } from 'react';
import ScrollList from "components_mobile/Commons/ScrollList"
import { connect } from "react-redux";

const dummy = [
  {
    type: "sharer", user: "관심 공유자1", message:"256", like:"512",cal:"8 Nov",
    face:"https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
    url: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
  },
  {
    type: "sharer", user: "관심 공유자2", message:"321", like:"442",cal:"8 Nov",
    face: "https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc",
    url: "https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc"
  },
  {
    type: "sharer", user: "관심 공유자3", message:"1023", like:"45",cal:"8 Nov",
    face: "https://i.picsum.photos/id/1013/4256/2832.jpg?hmac=UmYgZfqY_sNtHdug0Gd73bHFyf1VvzFWzPXSr5VTnDA",
    url: "https://i.picsum.photos/id/1013/4256/2832.jpg?hmac=UmYgZfqY_sNtHdug0Gd73bHFyf1VvzFWzPXSr5VTnDA"
  },
  {
    type: "sharer", user: "관심 공유자4", message:"67", like:"512",cal:"8 Nov",
    face: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
    url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
  },
]
class LikeSharerContainer extends Component {
  render() {
   return (<React.Fragment>
      <ScrollList type="sharer" list={dummy} />
    </React.Fragment>)
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeSharerContainer);
