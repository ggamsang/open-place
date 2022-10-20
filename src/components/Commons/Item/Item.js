import React from "react";
import styled from "styled-components";
import noimage from "resources/sample-image-01.png";
import MobileItem from "./MobileItem";

const Wrapper = styled.div`
  width: 280px;
  height: 472px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 6px 7px 9px #00000029;
  border-radius: 32px;
  opacity: 1;
  margin: auto;

  .thumbnail {
    width: max-content;
    margin: auto;
    img {
      width: 248px;
      height: 248px;
      background-color: transparent;
      background-image: url(${(props) => props.url});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      box-shadow: 0px 20px 60px #00000026;
      border-radius: 20px;
      opacity: 1;
    }
  }
  .title {
    margin-top: 23px;
    height: 25px;
    text-align: center;
    font: normal normal 600 18px/14px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
  .category {
    margin-top: 7px;
    height: 16px;
    text-align: center;
    font: normal normal normal 12px/14px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 0.6;
  }
  .price {
    margin-top: 8px;
    height: 19px;
    text-align: center;
    font: normal normal normal 16px/14px Pretendard;
    letter-spacing: 0px;
    color: #4136f1;
    opacity: 1;
  }
  .score {
    display: flex;
    flex-direction: row;
  }
`;

const ScoreDetail = ({ score }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>5</div>
      <div>4</div>
      <div>3</div>
      <div>2</div>
      <div>1</div>
    </div>
  );
};
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.onClickItem = this.onClickItem.bind(this);
  }
  onClickItem = (event) => {
    if (this.props.onClick) {
      this.props.onClick(this.props.sid);
    } else {
      window.location.href = `/exp/${this.props.uid}`;
    }
  };
  render() {
    const {
      url,
      title,
      score,
      tags,
      taglist,
      price,
      like_count,
      like_id,
      category,
    } = this.props;
    console.log(this.props);
    return window.innerWidth > 500 ? (
      <Wrapper url={url || noimage} onClick={this.onClickItem}>
        <div className="fav-star">absStar</div>
        <div className="thumbnail">
          <img src={null} />
        </div>
        <div className="title">{title}</div>
        <div className="category">
          {category === 1
            ? "놀기"
            : category === 2
            ? "배우기"
            : category === 3
            ? "만들기"
            : "카테고리"}
        </div>
        <div className="price">{price}원</div>
        <div className="score">
          {score}
          <ScoreDetail score={score} />
        </div>
        {/* <div className='summary_wrap'>
                    <div className='row space-between'>
                        <div className='row'>
                            <div className='item-title'>{title || "title"}</div>
                            <div className='price'>₩{price || "58000"}</div>
                        </div>
                        <img alt="icon" className='imgheart' src={heart} />
                    </div>
                    <div className='row space-between'>
                        <div className='rate-and-tags' >
                            <StarRating score={score || 0} />
                            <Tags prestyle={{ "marginLeft": "16px" }}
                                tags={tags || taglist || ['tag1', 'tag2', 'tag3']} />
                        </div>
                        <div className='like'>{like_id==null?0:like_count}</div>
                    </div>
                </div>
                <div className='gradient-cover'>&nbsp;</div> */}
      </Wrapper>
    ) : (
      <MobileItem {...this.props} onClickItem={this.onClickItem} />
    );
  }
}
export default Item;
