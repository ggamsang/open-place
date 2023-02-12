import React from 'react';
import styled from 'styled-components';
import SearchForm from 'mobile/components_mobile/Commons/Search/SearchForm';
import { resolution } from 'mobile/commons/resolution';
import blackHeart from "resources/Iconly-Bold-Heart.svg";
import ReviewContainer from "mobile/containers/ReviewContainer";
import StarRating from "mobile/commons/StarRating";
import CounselingMessageDetailContainer from 'mobile/containers/CounselingMessageDetailContainer';
import { ExpTypes } from 'constant';
import PlayGameContainer from 'mobile/containers/PlayGameContainer/PlayGameContainer';
import ContactContainer from 'mobile/containers/ContactContainer';
import { goto } from 'navigator';
const ChargeTypeCash = 1;
const ChargeTypeCredit = 2;
const ChargeTypeSimple = 3;

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 100px;
  padding:0px 20px;
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
    .buttonWrap{
        display:flex;align-items:center;
    }
    .buttonWrap2{
        display:flex;
        align-items:center;
        justify-content:center;
    }
  }


`;
const DetailWrapper = styled.div`
  margin: auto;
  margin-top: 15px;
  height: 366px;
  background-color: #FFF;
  border-radius: 21px;
  
  .thumbnail {
    width: 100%;
    height: 275px;
    background-image: url(${props => props.url});
    background-size: cover;
    background-position: center center;
    border-radius: 21px;
  }
  .info {
    position: relative;
    height: 91px;
    box-sizing: border-box;
    padding: 15px 20px;
    
    .title {
        height: 19px;
        text-align: left;
        font: normal normal bold 16px/19px Pretendard;
        letter-spacing: 0px;
        color: #000000;
    }
    .score {
        text-align: left;
        font: normal normal normal 11px/20px Metropolis;
        letter-spacing: 0px;
        color: #E43903;
    }
    .nick {
        height: 15px;
        text-align: left;
        font: normal normal normal 12px/20px Pretendard;
        letter-spacing: 0px;
        color: #000000;
    }
  }
  .taglist {
    position: absolute;
    width: 50%;
    right: 5px;
    top: 10px;

    .inner {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: end;
    }
    .tag {
        box-sizing: border-box;
        padding: 5px 10px;
        width: max-content;
        height: 24px;
        background: #E9E9E96A 0% 0% no-repeat padding-box;
        border-radius: 10px;
        text-align: center;
        display: flex;
        align-items: center;
        font: normal normal normal 11px/24px Noto Sans KR;
        letter-spacing: 0px;
        color: #707070;
        // margin-top: 5px;
        margin-right: 6px;
    }
  }
  .row { 
    display: flex;
    flex-direction: row;
  }
  .center {
    justify-content: center;
    align-items: center;
  }
  .lm10 {margin-left: 10px;}
  .lm20 {margin-left: 20px;}
      .payType{
        border:1px solid white;
        width:100%;
        background-color:white;
        box-shadow: 2px 2px 5px #00000029;
    }
`;
const CurrentPoint = styled.div`
    margin: auto;
    box-sizing: border-box;
    padding: 10px 12px;
    width: 100%;
    height: 50px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 2px 2px 5px #00000029;
    border: 0.5px solid #E9E9E9;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;

    .label {
        width: max-content;
        height: 18px;
        text-align: left;
        font: normal normal 500 15px/18px Pretendard;
        letter-spacing: 0px;
        color: #707070;
        margin-right: 13px;
    }
    input {
        border: none;
        width: 150px;
        height: 31px;
        background: #E9E9E9 0% 0% no-repeat padding-box;
        border-radius: 10px;
        
        text-align: center;
        font: normal normal normal 15px/18px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        margin-right: 8px;
    }
    .unit {
        width: max-content;
        height: 18px;
        text-align: center;
        font: normal normal normal 15px/18px Pretendard;
        letter-spacing: 0px;
        color: #000000;
    }

`;
const PayType = styled.div`
    margin-top:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid white;
    width:100%;
    background-color:white;
    border-radius:10px;
    box-sizing:border-box;
    padding:10px;
    box-shadow: 2px 2px 5px #00000029;
    .label{
        font-size:15px;
        font-family:Pretendard;
    }
    .method-buttons {
        width: 205px;
        button {
            &.active {
                background: #FE1400 0% 0% no-repeat padding-box;
                .text {
                    text-align: center;
                    font: normal normal bold 15px/18px Pretendard;
                    letter-spacing: 0px;
                    color: #FFFFFF;
                }
            }
            margin-top: 10px;
            border: none;
            outline: none;
            width: 205px;
            height: 35px;
            background: #E9E9E9 0% 0% no-repeat padding-box;
            border-radius: 20px;
            .text {
                height: 18px;
                text-align: center;
                font: normal normal normal 15px/18px Pretendard;
                letter-spacing: 0px;
                color: #000000;
            }
        }
    }
`

class Buy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 0,
            main: true,
            detail: false,
            like: false,
            sub: false,
            review: false,
            contact: false,
        }
        this.onClickMain = this.onClickMain.bind(this);
        this.onClickDetail = this.onClickDetail.bind(this);
        this.onClickLike = this.onClickLike.bind(this);
        this.onClickModify = this.onClickModify.bind(this);
        this.onClickBuy = this.onClickBuy.bind(this);
    }
    onClickMain = (event) => {
        this.setState({ sub: false });
        setTimeout(() => {
            this.setState({ main: true })
        }, 1000);
    }
    SelectChargeType = type => this.setState({ type: type }, () => { this.setState({ active: this.state.point > 0 && this.state.type != 0 }) });
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
        window.location.href = `/ModifyExp/${this.props.detail.uid}`
    }
    tagSprintToAry = (taglist) => {
        taglist = taglist && taglist.replace("[", "");
        taglist = taglist && taglist.replace("]", "");
        taglist = taglist && taglist.split(",")
        return taglist;
    }
    ShowReview = () => {
        this.setState({ review: true, contact: false });
    }
    ShowContact = () => {
        this.setState({ contact: true, review: false });
    }
    render() {
        const detail = this.props.expDetail;
        const { review, contact } = this.state;
        let taglist = detail && this.tagSprintToAry(detail.taglist);

        return (<Wrapper>
            <div className='searchbox'>
                <SearchForm />
            </div>

            <DetailWrapper url={detail.thumbnail}>
                <div className='thumbnail' />
                <div className='info'>
                    <div className='title'>{detail.title || "경험제목"}</div>
                    <div className='score row'>
                        <StarRating score={detail.score || 0} />
                        <div className='nick lm10'>{detail.nick_name}</div>
                    </div>
                    <div className='row'>
                        <div>{detail.price} ₩</div>
                        <div className='row center lm20'>
                            <img
                                style={{
                                    width: "14px",
                                    height: "14px",
                                    marginRight: "5px"
                                }}
                                src={blackHeart} />
                            {detail.like || 0}
                        </div>
                    </div>
                    <div className='taglist'>
                        <div className='inner'>
                            {taglist &&
                                taglist.length > 0 &&
                                taglist.map(tag =>
                                    <div className="tag" key={tag}>{tag}</div>)}
                        </div>
                    </div>
                </div>
            </DetailWrapper>

            <CurrentPoint style={{ marginTop: "20px" }}>
                <div className='label'>보유 포인트</div>
                <input
                    disabled
                    value={Number(this.props.current_point).toLocaleString()} />
                <span className='unit'>point</span>
            </CurrentPoint>

            <PayType>
                <div className='label'>결제 수단</div>
                <div className='method-buttons'>
                    <button
                        onClick={() => this.SelectChargeType(ChargeTypeCash)}
                        className={this.state.type === ChargeTypeCash ? 'active' : ''}>
                        <div className='text'>현금 충전</div>
                    </button>
                    <button
                        onClick={() => this.SelectChargeType(ChargeTypeCredit)}
                        className={this.state.type === ChargeTypeCredit ? 'active' : ''}>
                        <div className='text'>신용카드</div>
                    </button>
                    <button
                        onClick={() => this.SelectChargeType(ChargeTypeSimple)}
                        className={this.state.type === ChargeTypeSimple ? 'active' : ''}>
                        <div className='text'>간편결제</div>
                    </button>

                    <button
                        style={{ marginTop: "22px" }}
                        onClick={this.onClickBuy}
                        className={'active'}>
                        <div className='text'>결제하기</div>
                    </button>
                </div>
            </PayType>
        </Wrapper>
        );
    }
};

export default Buy;