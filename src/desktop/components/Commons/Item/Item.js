// import React from "react";
// import styled from "styled-components";
// import noimage from "resources/sample-image-01.png";
// import StarRating from "desktop/commons/StarRating";
// import Tags from "desktop/commons/Tags";
// import { resolution } from "desktop/commons/resolution";
// import heart from "resources/Iconly-heart-red.svg";

// const Wrapper = styled.div`
//   box-sizing: border-box;
//   * {
//     box-sizing: border-box;
//   }
//   position: relative;
//   height: ${resolution(165)}px;
//   background-image: url(${(prop) => prop.bg});
//   background-position: center center;
//   background-size: cover;
//   padding: 16px 21px;
//   display: flex;
//   align-items: flex-end;
//   * {
//     z-index: 1;
//   }
//   .summary_wrap {
//     width: 100%;
//   }
//   .gradient-cover {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: ${resolution(103)}px;
//     background: transparent linear-gradient(180deg, #00000000 0%, #000000 100%)
//       0% 0% no-repeat padding-box;
//     opacity: 0.78;
//     z-index: 0;
//   }
//   .row {
//     width: 100%;
//     display: flex;
//   }
//   .space-between {
//     justify-content: space-between;
//   }
//   .item-title {
//     width: ${resolution(132)}px;
//     font: normal normal bold 16px/19px Pretendard;
//     color: white;
//     font-weight: bold;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//   }
//   .imgheart {
//     width: 23px;
//     height: 23px;
//   }
//   .price {
//     margin-left: 20px;
//     width: ${resolution(80)}px;
//     font: normal normal bold 16px/19px Pretendard;
//     color: white;
//     font-weight: bold;
//   }
//   .like {
//     width: 22px;
//     text-align: center;
//     font: normal normal bold 12px/15px Pretendard;
//     color: white;
//     font-weight: bold;
//   }
//   .rate-and-tags {
//     display: flex;
//   }
// `;

// class Item extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onClickItem = this.onClickItem.bind(this);
//   }
//   onClickItem = (event) => {
//     if (this.props.onClick) {
//       this.props.onClick(this.props.sid);
//     } else {
//       window.location.href = `/exp/${this.props.uid}`;
//     }
//   };
//   render() {
//     const { url, title, score, tags, taglist, price, like_count, like_id } =
//       this.props;
//     return (
//       <Wrapper bg={url || noimage} onClick={this.onClickItem}>
//         <div className="summary_wrap">
//           <div className="row space-between">
//             <div className="row">
//               <div className="item-title">{title || "title"}</div>
//               <div className="price">₩{price || "58000"}</div>
//             </div>
//             <img alt="icon" className="imgheart" src={heart} />
//           </div>
//           <div className="row space-between">
//             <div className="rate-and-tags">
//               <StarRating score={score || 0} />
//               <Tags
//                 prestyle={{ marginLeft: "16px" }}
//                 tags={tags || taglist || ["tag1", "tag2", "tag3"]}
//               />
//             </div>
//             <div className="like">{like_id == null ? 0 : like_count}</div>
//           </div>
//         </div>
//         <div className="gradient-cover">&nbsp;</div>
//       </Wrapper>
//     );
//   }
// }
// export default Item;
import React from "react";
import styled from "styled-components";
import star from "resources/star.svg";
import profileimg from "resources/profileimg.jpg";

const Profile = styled.div`
  display: inline-block;
  position: relative;
  align-items: center;
  max-width: 248px;
  max-height: 248px;
`;

const ProfileImg = styled.img`
  background-image: url(${(props) => props.src});
  width: 248px;
  height: 248px;
  object-fit: cover;
  margin-bottom: 23px;
  justify-content: center;
  border-radius: 16px;
`;

const ProfileImgStar = styled.img.attrs({
  src: star,
})`
  // border-radius: 100%;
  // box-shadow: 5px 5px 5px yellow;
  width: 25px;
  height: 25px;
  position: absolute;
  right: 16.09px;
  top: 13.6px;
`;

const TopLists = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 14px;
  width: 248px;
  height: 444px;
  display: inline-block;
`;

const Name = styled.div`
  font: normal normal 600 18px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-bottom: 5px;
  width: max-content;
  max-width: 100%;
  height: 25px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`;

const Category = styled.div`
  font: normal normal 400 12px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.6;
  margin-bottom: 8px;
  height: 16px;
`;

const Price = styled.div`
  font: normal normal 400 16px/14px Pretendard;
  // font-size: 40px;
  letter-spacing: 0px;
  color: #4136f1;
  opacity: 1;
  margin-bottom: 12px;
`;

const ExpDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 21.57px;
`;

const RateDiv = styled.div`
  align-items: center;
`;

const Rate = styled.div`
  font: normal normal 600 40px/48px Pretendard;
  font-size: 40px;
  color: #000000;
  opacity: 1;
`;

const Review = styled.div`
  font: normal normal 400 12px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.6;
`;

const StarIcon = styled.img.attrs({
  src: star,
})`
  width: 13.87px;
  height: 13px;
  margin-top: 4px;
  margin-right: 6px;
  margin-bottom: 20px;
  margin-left: 6px;
`;

const NumRate = styled.div`
  align-items: left;
  display: block;
  margin-left: 10px;
  font: normal normal 400 11px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.9;
`;

const NumRate2 = styled.div`
  display: flex;
  width: 150px;
  height: 16px;
  margin-top: 0px;
  margin-bottom: 2px;
  font: normal normal 400 11px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.9;
  vertical-align: middle;
`;

const RateIcon = styled.img.attrs({
  src: star,
})`
  width: 7px;
  height: 7px;
  margin-top: 3px;
  margin-right: 6px;
  margin-left: 2px;
  display: flex;
  vertical-align: bottom;
  justify-content: space-between;
`;

const RateBar = styled.div`
  background-color: rgb(255, 101, 101);
  width: ${(props) => (props.percent || 0) * 90}px;
  height: 5px;
  z-index: 1;
  border-radius: 50px;
  position: absolute;
`;
const WrapperRateBar = styled.div`
  position: relative;
  background-color: rgb(191, 191, 191);
  width: 90px;
  height: 5px;
  z-index: 1;
  margin-top: 4px;
  border-radius: 50px;
`;

const ReviewWrapper = ({
  score,
  rates = [
    { rate: 5, percent: 0.5 },
    { rate: 4, percent: 0.2 },
    { rate: 3, percent: 0.2 },
    { rate: 2, percent: 0.1 },
    { rate: 1, percent: 0.0 },
  ],
}) => (
  <ExpDiv>
    <RateDiv>
      <Rate>{score}</Rate>
      <Review>리뷰 {0}개</Review>
    </RateDiv>
    <StarIcon />
    <NumRate>
      {rates.map(({ rate, percent }) => (
        <NumRate2 key={rate}>
          {rate}
          <RateIcon />
          <WrapperRateBar>
            <RateBar percent={percent} />
          </WrapperRateBar>
        </NumRate2>
      ))}
    </NumRate>
  </ExpDiv>
);

const ProfileCard = ({ uid, title, category, price, score, url }) => {
  //   category: 2;
  //   content: null;
  //   create_time: "2022-06-23T10:51:58.000Z";
  //   exp_files: "null";
  //   info: '콜라주(영어: collage)는 시각 예술에서 주로 쓰이며 질(質)이 다른 여러 가지 헝겊, 비닐, 타일, 나뭇조각, 종이, 상표 등을 붙여 화면을 구성하는 기법이다. 어원은 "to glue(접착하다)"는 의미의 프랑스어 coller에서 파생되었다.';
  //   is_sold_out: 0;
  //   nick_name: "카네이션핑크";
  //   order: 1;
  //   price: 500;
  //   score: 4.5;
  //   taglist: "[콜라주,포토샵,만들기,재미,놀이]";
  //   thumbnail_id: 32;
  //   title: "포토샵으로 콜라주";
  //   type: "item";
  //   type_detail: null;
  //   uid: 57;
  //   update_time: "2022-06-23T10:51:58.000Z";
  //   url: "https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/dev/thumbnails/1655948262044-x600.jpg";
  //   user_id: 11;

  return (
    <>
      <TopLists onClick={() => (window.location.href = `/exp/${uid}`)}>
        <Profile>
          <ProfileImg src={url} />
          <ProfileImgStar />
        </Profile>
        <Name>{title || "경험이름"}</Name>
        <Category>
          {category === 1
            ? "놀기"
            : category === 2
            ? "배우기"
            : category === 3
            ? "만들기"
            : "카테고리"}
        </Category>
        <Price>
          {price > 0
            ? new Intl.NumberFormat("ko-KR", {
                style: "currency",
                currency: "KRW",
              }).format(price) + "원"
            : "무료"}
        </Price>
        <ReviewWrapper score={score} />
        {/* <NumRate /> */}
      </TopLists>
    </>
  );
};

export default ProfileCard;
