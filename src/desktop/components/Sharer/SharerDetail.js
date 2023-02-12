import React from 'react';
import styled from 'styled-components';
import { resolution } from 'desktop/commons/resolution';
import SearchForm from 'desktop/components/Commons/Search/SearchForm';
import Heart from "resources/Iconly-heart-white.svg"
import Heart_red from "resources/Iconly-heart-red.svg"
import ButtonNormal from 'desktop/components/Commons/Button/ButtonNormal';
import SharerItemListContainer from 'desktop/containers/ListContainer/SellItemListContainer';
import { WIDTH } from 'constant';

const Wrapper = styled.div`
  width:100%;
  // width: ${WIDTH}px;
  height: 100%; // 130vh;
  .header{
    width:100%;
    height:${resolution(290)}px;
    background: linear-gradient(205deg,#bf1d39,#8448b6);
  }
  .searchbox{
    width:100%;
    padding-top:50px;
    display:flex;
    align-items:center;
  }
  .profile{
    margin-top:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    .thumbnailWrap{
        box-sizing:border-box;
        padding:0px 20px;
        width:100%;
        display:flex;
        justify-content:space-between;
        .text_{width:100px;font-family:Pretendard;font-size:${resolution(20)}px;font-weight:bold;color:white;}
    }
    .thumbnail{
      width:${resolution(100)}px;
      height:${resolution(100)}px;
      border-radius:50%;
      background-color:#efefef;
      background-image: url(${prop => prop.url});
      background-size:cover;
    }
    .textWrap{
      box-sizing:border-box;
      width:100%;
      display:flex;
      flex-direction:column;    
      align-items:center;
      margin-top:16px;
      .userName{
        color:white;
        font: normal normal bold 20px/20px Montserrat;
      }
      .likeWrap{
        box-sizing:border-box;
        margin-top:9px;
        display:flex;
        .count{font: normal normal bold 12px/15px Pretendard;color:white;margin-right:6px;}
        .icon{width:18px;height:16px;color:white;}
      }
    }
  }
`
const Detail = styled.div`
  box-sizing:border-box;
  padding:20px;
  .shadowBorderBox{
    box-sizing:border-box;
    width:100%;
    box-shadow: 2px 2px 5px #00000029;
    border-radius:10px;
    border:1px solid #E9E9E9;
    padding:13px;
    .title{
      width:100%;
      font-size:18px;
      font-family:Pretendard;
      text-align:center;
      color:#4A4B4D;
    }
    .row{width:100%;display:flex;}
    .label{
      padding-top:7px;
      width:${resolution(72)}px;
      min-width:${resolution(72)}px;
      font: normal normal medium 15px/18px Noto Sans KR;
      font-size:${resolution(15)}px;
    }
    .textBox{
        box-sizing:border-box;
        padding:8px 10px;
        border-radius:10px;
        background-color:#E9E9E9;
        color:#707070;
    }
  }
`

const Sell = styled.div`
    box-sizing:border-box;
    // padding:0px 20px;
    .title{
        width:100%;
        font-size:18px;
        font-family:Pretendard;
        text-align:center;
        color:#4A4B4D;
    }
`

class SharerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
    }
    this.onClickLike = this.onClickLike.bind(this);
  }
  componentWillMount() {
    this.getList(this.props.user_id);
  }
  componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props.isLike) !== JSON.stringify(prevProps.isLike)) {
      console.log("like?", this.props.isLike)
      this.setState({ like: this.props.isLike === true ? true : false })
    }
  }
  getList = (page) => {
    return new Promise((resolve) => resolve(this.props.getUserSellExpRequest && this.props.getUserSellExpRequest(this.props.userInfo.uid, page)));
  }
  onClickLike = async () => {
    const Data = {
      user_id: this.props.userInfo.uid,
      like_id: this.props.sharer.user_id,
      type: "sharer",
      isLike: !this.state.like,
    }
    this.props.likeSharerRequest(this.props.token, Data)
      .then(() => this.setState({ like: !this.state.like }), () => {
        this.props.getIsMyLikeRequest(this.props.userInfo.uid, this.props.sharer.uid, "sharer")
      })
      .then(() => this.props.getSharerRequest(this.props.user_id))
  }
  render() {
    const updateTime = new Date(this.props.sharer && this.props.sharer.update_time);


    return (
      <React.Fragment>
        <Wrapper url={this.props.sharer?.url || null}>
          <div className="header">
            <div className='searchbox'><SearchForm /></div>
            <div className='profile'>
              <div className="thumbnailWrap">
                <div className='text_'>{updateTime.getFullYear() + "." + updateTime.getMonth() + "." + updateTime.getDay()}</div>
                <div className='thumbnail' />
                <div className='text_' style={{ textAlign: "right" }}>#분야</div>
              </div>
              <div className='textWrap'>
                <div className='userName'>{this.props.sharer?.nick_name || "국민대학교 CRC"}</div>
                <div className='likeWrap'>
                  <div className='count'>{this.props.sharer?.like_count}</div>
                  {
                    this.props.token === null ?
                      <img alt="icon" className='icon' src={Heart} />
                      :
                      <img alt="icon" onClick={this.onClickLike} className='icon' src={`${this.state.like === true ? Heart_red : Heart}`} />
                  }
                </div>
              </div>
            </div>
          </div>
          <Detail>
            <div className='shadowBorderBox'>
              <div className='title'>상세정보</div>
              <div className='row' style={{ marginTop: "11px" }}>
                <div className='label'>설명</div>
                <div className='textBox' style={{ width: "100%" }}>
                  {this.props.sharer && this.props.sharer.about_me}
                </div>
              </div>
              <div className='row' style={{ marginTop: "11px" }}>
                <div className='label'>위치</div>
                <div className='textBox' style={{ width: "114px", marginRight: "14px" }}>대한민국</div>
                <div className='textBox' style={{ width: "114px" }}>{this.props.location && this.props.location.length > 0 && this.props.location[this.props.sharer.location_id || 0].name}</div>
              </div>
            </div>
            {
              this.props.token &&
              <ButtonNormal
                onClickEvent={() => window.location.href = "/modifySharer"}
                width={335}
                height={35}
                radius={10}
                bgColor={"#707070"}
                text="수정"
                style={{ marginTop: "16px" }}
              />
            }

          </Detail>
          <Sell>
            <div className='title' style={{ marginBottom: "11px" }}>판매경험</div>
            <SharerItemListContainer user_id={this.props.user_id} />
          </Sell>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default SharerDetail;
