import React from 'react';
import styled from 'styled-components';
import SearchForm from 'components_mobile/Commons/Search/SearchForm';
import { resolution } from 'commons/resolution';
import star from "source/Iconly-Bold-Star-red.svg";
import heart from "source/Iconly-Bold-Heart-white.svg";
import ButtonNormal from 'components_mobile/Commons/Button/\bButtonNormal';
import { Fade } from 'react-reveal';

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

const Wrapper = styled.div`
  // width:100%;
  width: 100%;
  height:max-content;
  min-height:100vh;
  background: linear-gradient(205deg,#bf1d39,#8448b6);
  .header{
    width:100%;
    height:${resolution(324)}px;
  }
  .searchbox{
    width:100%;
    padding-top:50px;
    display:flex;
    align-items:center;
  }
  .arrow_box{width:${resolution(53)}px;display:flex;justify-content:center;}
  .img_arrow{width:${resolution(27)}px;height:${resolution(19)}px;}


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


  `

class ExpDetail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            main:true,detail:false,like:false,
        }
        this.onClickMain = this.onClickMain.bind(this);
        this.onClickDetail = this.onClickDetail.bind(this);
        this.onClickLike = this.onClickLike.bind(this);
        this.onClickModify = this.onClickModify.bind(this);
    }

    onClickMain = (event)=>{
        this.setState({sub:false});
        setTimeout(()=>{
          this.setState({main:true})
        },1000)
    }
    onClickDetail = (event)=>{
        this.setState({main:false});
        setTimeout(()=>{
          this.setState({sub:true})
        },1000)
    }
    onClickLike = (event)=>{
        this.setState({like:!this.state.like});
    }
    onClickModify = (event) =>{
      window.location.href = "/ModifyExp/1"
    }

    render() {
        return (
        <Wrapper>
            <div className='searchbox'><SearchForm/></div>
            <Fade opposite when={this.state.main}>
            <section style={{display:`${this.state.main==true?"block":"none"}`}}>
                <div className='content'>
                    <div className='title'><div/>경험정보<div/></div>
                    <img src={dummy[2].url} className="img"/>
                    <div className='summary'>
                        <div className='label'>경험 제목</div>
                        <div className='detail'>
                            <img src={star} style={{width:"14px",height:"14px",marginRight:"5px"}}/><span className='score'>4.9</span>
                            <span style={{marginLeft:"13px"}} className='writer'>작성자</span>
                            <span style={{color:"red",margin:"0px 5px"}}>·</span>
                            <span className='tags'>태그1 태그2 태그3 태그4</span>
                        </div>
                        <div className='detail'>
                            <span style={{marginRight:"14px"}} className='price'>58000</span>
                            <img style={{width:"14px",height:"14px",marginRight:"5px"}} src={heart}/>
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
                            bgColor={this.state.like==true?"red":"#dd5035"}
                            text={this.state.like==true?"♥ 좋아요":"♡ 좋아요"}
                            style={{marginRight:"25px"}}
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
                </div>
            </section>
            </Fade>

            <Fade opposite when={this.state.sub}>
            <section style={{display:`${this.state.sub==true?"block":"none"}`}}>
                <div className='content'>
                <div className='title'><div onClick={this.onClickMain}>〈</div>상세정보<div/></div>
                    <img src={dummy[2].url} className="img img2"/>

                <div style={{color:"white",padding:"100px 40px"}}>
                    상세 내용은 현재 논의중이며 블로그형, 프로젝트형, 그룹형 모두 다릅니다.
                </div>
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
        </Wrapper>);
    }
}
export default ExpDetail;