import React from 'react';
import styled from 'styled-components';
import SearchForm from 'components_mobile/Commons/Search/SearchForm';
import { resolution } from 'commons/resolution';
import star from "source/Iconly-Bold-Star-red.svg";
import heart from "source/Iconly-Bold-Heart-white.svg";
import ButtonNormal from 'components_mobile/Commons/Button/\bButtonNormal';
import { InputFile } from 'components_mobile/Commons/Input';
import { Fade } from 'react-reveal';
import ReviewContainer from "containers/ReviewContainer";
import { Dimmer, Loader } from 'semantic-ui-react';
import { goto } from 'navigator';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 100px;
  // height: max-content;
  // min-height: 100vh;
  background: linear-gradient(205deg, #bf1d39, #8448b6);
  .header {
    width: 100%;
    height: ${resolution(324)}px;
  }
  .searchbox{
    width:100%;
    padding-top:50px;
    display:flex;
    align-items:center;
  }
  .img_arrow{width:${resolution(27)}px;height:${resolution(19)}px;}

  .top_margin30 {
    margin-top: 30px;
  }

  .content{
      box-sizing:border-box;
      width:100%;
      padding:0px ${resolution(20)}px;
      .title{
        width:100%;
        height:${resolution(62)}px;
        display:flex;align-items:center;justify-content:center;
        font: normal normal bold 20px/20px Pretendard;
        color:white;
        display:flex;
        justify-content:space-between;
    }
      .img{
          width:100%;
          height:${resolution(275)}px;
          object-fit:cover;
          border-radius:20px;
      }
      .img2{height:${resolution(145)}px;}
      .summary{
        box-sizing:border-box;
        padding:${resolution(15)}px ${resolution((20))}px;
        width:100%;
        height:${resolution(90)}px;
        .label{font: normal normal bold 16px/19px Pretendard;color:white;}
        .detail{
            display:flex;align-items:center;
            .score{font: normal normal normal 11px Metropolis;color:red;}
            .writer{font: normal normal normal 12px/20px Pretendard;color:white;}
            .tags{font: normal normal normal 12px/20px Pretendard;color:white;}
            .price{font: normal normal bold 16px/19px Pretendard;color:white;}
            .like{font: normal normal bold 12px/15px Pretendard;color:white;}
        }
      }
      .exp{
        .row{
          width:100%;
          border-radius:20px;
          border:1px solid white;
          box-sizing:border-box;
          padding:20px;
          .editorText{
            filter: invert(100%);
          }
        }
      }
    .buttonWrap{
        display:flex;align-items:center;
    }
    .buttonWrap2{
        margin-top:30px;
        display:flex;
        align-items:center;
        justify-content:center;
    }
  }
`;

class ExpDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      main: true,
      detail: false,
      like: false,
      sub: false,
    }
    this.onClickMain = this.onClickMain.bind(this);
    this.onClickDetail = this.onClickDetail.bind(this);
    this.onClickLike = this.onClickLike.bind(this);
    this.onClickModify = this.onClickModify.bind(this);
  }

  onClickMain = (event) => {
    this.setState({ sub: false });
    setTimeout(() => {
      this.setState({ main: true })
    }, 1000);
  }
  onClickDetail = (event) => {
    this.setState({ main: false });
    setTimeout(() => {
      this.setState({ sub: true })
    }, 1000);
  }
  onClickLike = (event) => {
    this.setState({ like: !this.state.like });
  }
  onClickBuy = (event) => {
    this.setState({ loading: true });
    this.props.buy(this.props.token, this.props.expDetail.uid)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          alert('결제가 완료되었습니다. 구매한 상품페이지로 이동합니다.');
          goto("MY-ITEM-BOUGHT", data.payment_id);
        } else {
          alert('결제를 하지 못하였습니다.' + data.detail);
        }
      })
      .catch(e => {
        alert('결제실패' + e);
      });
    this.setState({ loading: false });
  }
  onClickModify = (event) => {
    window.location.href = `/ModifyExp/${this.props.expDetail.uid}`
  }
  tagSprintToAry = (taglist) => {
    taglist = taglist && taglist.replace("[", "");
    taglist = taglist && taglist.replace("]", "");
    taglist = taglist && taglist.split(",").join(" | ");
    return taglist;
  }

  render() {
    const { expDetail } = this.props;
    let taglist = expDetail && this.tagSprintToAry(expDetail.taglist);
    const exp_files = expDetail && expDetail.exp_files && JSON.parse(expDetail.exp_files)

    return (expDetail
      ? <Wrapper>
        <div className='searchbox'>
          <SearchForm />
        </div>
        <Fade opposite when={this.state.main}>
          <section style={{ display: `${this.state.main == true ? "block" : "none"}` }}>
            <div className='content'>
              <div className='title'>
                <div />경험정보<div />
              </div>
              <img src={expDetail && expDetail.thumbnail} className="img" />
              <div className='summary'>
                <div className='label'>{expDetail && expDetail.title || "dummy"}</div>
                <div className='detail'>
                  <img src={star} style={{ width: "14px", height: "14px", marginRight: "5px" }} />
                  <span className='score'>4.9</span>
                  <span style={{ marginLeft: "13px" }} className='writer'>
                    {expDetail && expDetail.nick_name || "dummy"}
                  </span>
                  <span style={{ color: "red", margin: "0px 5px" }}>·</span>
                  <span className='tags'>
                    {taglist && taglist || ""}
                  </span>
                </div>
                <div className='detail'>
                  <span style={{ marginRight: "14px" }} className='price'>
                    ₩ {expDetail && expDetail.price || "dummy"}
                  </span>
                  <img style={{ width: "14px", height: "14px", marginRight: "5px" }} src={heart} />
                  <span className='like'>99</span>
                </div>
              </div>
              <div className='buttonWrap'>
                <ButtonNormal
                  onClickEvent={this.onClickLike}
                  width={155}
                  height={35}
                  radius={10}
                  fontSize={15}
                  bgColor={this.state.like == true ? "red" : "#dd5035"}
                  text={this.state.like == true ? "♥ 좋아요" : "♡ 좋아요"}
                  style={{ marginRight: "25px" }}
                />
                <ButtonNormal
                  onClickEvent={this.onClickDetail}
                  width={155}
                  height={35}
                  radius={10}
                  fontSize={15}
                  bgColor={"#707070"}
                  text="상세정보"
                />
              </div>

              <div className='buttonWrap'>
                <ButtonNormal
                  onClickEvent={this.onClickBuy}
                  width={155}
                  height={35}
                  radius={10}
                  fontSize={15}
                  bgColor={"red"}
                  text={"구매하기"}
                  style={{ marginRight: "25px" }}
                />
              </div>
            </div>
          </section>
        </Fade>

        <Fade opposite when={this.state.sub}>
          <section style={{ display: `${this.state.sub == true ? "block" : "none"}` }}>
            <div className='content'>
              <div className='title'>
                <div onClick={this.onClickMain}>〈</div>
                상세정보<div />
              </div>

              <img src={expDetail && expDetail.thumbnail} className="img img2" />
              <div className='exp'>
                <div className='row'>
                  <div className='editorText' dangerouslySetInnerHTML={{ __html: expDetail && expDetail.content }} />
                </div>
              </div>
              {
                exp_files != null && <InputFile files={exp_files} />
              }
              <div className='buttonWrap2'>
                <ButtonNormal
                  onClickEvent={this.onClickModify}
                  width={155}
                  height={35}
                  radius={10}
                  fontSize={15}
                  bgColor={"#707070"}
                  text="수정하기"
                />
              </div>
            </div>
          </section>
        </Fade>

        <Fade>
          <ReviewContainer />
        </Fade>

      </Wrapper>
      : <Dimmer>
        <Loader />
      </Dimmer>
    );
  }
}

export default ExpDetail;