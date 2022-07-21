import React from 'react';
import styled from 'styled-components';
import SearchForm from 'components_mobile/Commons/Search/SearchForm';
import { resolution } from 'commons/resolution';
import blackHeart from "source/Iconly-Bold-Heart.svg";
import ReviewContainer from "containers/ReviewContainer";
import StarRating from "commons/StarRating";
import CounselingMessageDetailContainer from 'containers/CounselingMessageDetailContainer';
import { ExpTypes } from 'constant';
import PlayGameContainer from 'containers/PlayGameContainer/PlayGameContainer';
import ContactContainer from 'containers/ContactContainer';

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 100px;
  padding-bottom: 125px;
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
  width: calc(100% - 40px);
  height: 366px;
  background-color: #FFF;
  border-radius: 21px;
// *{border: 1px solid red;}
  
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
`;
const Counseling = styled.div`
  width: calc(100% - 40px);
  margin: auto;
  margin-top: 15px;
`;
const Gaming = styled.div`
  margin: auto;
  width: 335px;
  height: 200px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 2px 2px 5px #00000029;
  border: 0.5px solid #E9E9E9;
  border-radius: 24px;
  display: flex;
  align-items: center;

  margin-top: 15px;

  .text { // temp
    margin: auto;
    width: max-content;
    height: 22px;
    text-align: center;
    font: normal normal normal 18px/22px Noto Sans KR;
    letter-spacing: 0px;
    color: #000000;
  }
`;
const Normal = styled.div`
  margin: auto;
  width: 335px;
  height: 200px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 2px 2px 5px #00000029;
  border: 0.5px solid #E9E9E9;
  border-radius: 24px;
  display: flex;
  align-items: center;

  margin-top: 15px;

  .text { // temp
    margin: auto;
    width: max-content;
    height: 22px;
    text-align: center;
    font: normal normal normal 18px/22px Noto Sans KR;
    letter-spacing: 0px;
    color: #000000;
  }
`;
const ButtonBox = styled.div`
    margin: auto;
    margin-top: 15px;
    width: calc(100% - 40px);
    height: 130px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 2px 2px 5px #00000029;
    border: 0.5px solid #E9E9E9;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;

    button {
        border: none;
        outline: none;
        width: 100%;
        height: 30px;
        background: #F7F7F7 0% 0% no-repeat padding-box;
        &.red {
            background: #FF0000 0% 0% no-repeat padding-box;
        }
        border-radius: 10px;
        .text {
            height: 19px;
            text-align: center;
            font: normal normal bold 15px/18px Noto Sans KR;
            letter-spacing: 0px;
            color: #FF3838;
        }
        margin-bottom: 9px;
        :last-child {
            margin-bottom: 0px;
        }
    }
`;
class BoughtExpDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        console.log("FOO", this.props);

        const { detail, userInfo } = this.props;
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
                    {/* tag absolute */}
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

            {detail.type === ExpTypes.COUNSELING
                && (detail.user_id !== userInfo.uid) // tricky, 
                && <Counseling>
                    <CounselingMessageDetailContainer opponent_id={detail.user_id} />
                </Counseling>}

            {detail.type === ExpTypes.GAMING
                && <Gaming>
                    <PlayGameContainer exp_id={detail.uid} />
                </Gaming>}

            {detail.type === ExpTypes.NORMAL
                && <Normal>
                    <div className='text'>일반</div>
                </Normal>}

            <ButtonBox>
                <button onClick={this.ShowReview}>
                    <div className='text'>리뷰 목록</div>
                </button>

                <button onClick={this.ShowContact}>
                    <div className='text'>문의 목록</div>
                </button>

            </ButtonBox>

            {review
                && <ReviewContainer ExpDetail={detail} />}

            {contact
                && <ContactContainer ExpDetail={detail} />}


        </Wrapper>);
    }
};

export default BoughtExpDetail;
