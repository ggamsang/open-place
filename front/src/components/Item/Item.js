import React from "react";
import styled from "styled-components";
// // import star from "resources/place/star.svg";
// // // import profileimg from "resources/place/profileimg.jpg";
// // import Diversity3Icon from "@mui/icons-material/Diversity3";

// // const Profile = styled.div`
// //   display: inline-block;
// //   position: relative;
// //   align-items: center;
// //   max-width: 248px;
// //   max-height: 248px;
// // `;

// // const ProfileImg = styled.img`
// //   // background-image: url(${(props) => props.src});
// //   background-repeat: no-repeat;
// //   background-size: contains;
// //   background-position: center center;
// //   width: 248px;
// //   height: 248px;
// //   object-fit: cover;
// //   margin-bottom: 23px;
// //   justify-content: center;
// //   border-radius: 16px;
// // `;

// // const ProfileImgStar = styled.img.attrs({
// //   src: star,
// // })`
// //   // border-radius: 100%;
// //   // box-shadow: 5px 5px 5px yellow;
// //   width: 25px;
// //   height: 25px;
// //   position: absolute;
// //   right: 16.09px;
// //   top: 13.6px;
// // `;

// // const TopLists = styled.a`
// //   background: #ffffff;
// //   box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
// //   border-radius: 30px;
// //   padding: 14px;
// //   width: 280px; // max-content;
// //   height: 444px;
// //   display: inline-block;
// // `;

// // const Name = styled.div`
// //   font: normal normal 600 18px/14px Pretendard;
// //   letter-spacing: 0px;
// //   color: #000000;
// //   opacity: 1;
// //   margin-bottom: 5px;
// //   width: max-content;
// //   max-width: 100%;
// //   height: 25px;
// //   display: inline-block;
// //   vertical-align: middle;
// //   text-align: center;
// // `;

// // const Category = styled.div`
// //   font: normal normal 400 12px/14px Pretendard;
// //   letter-spacing: 0px;
// //   color: #000000;
// //   opacity: 0.6;
// //   margin-bottom: 8px;
// //   height: 16px;
// // `;

// // const Price = styled.div`
// //   font: normal normal 400 16px/14px Pretendard;
// //   // font-size: 40px;
// //   letter-spacing: 0px;
// //   color: #4136f1;
// //   opacity: 1;
// //   margin-bottom: 12px;
// // `;

// // const ExpDiv = styled.div`
// //   display: flex;
// //   align-items: center;
// //   margin-left: 21.57px;
// // `;

// // const RateDiv = styled.div`
// //   align-items: center;
// // `;

// // const Rate = styled.div`
// //   font: normal normal 600 40px/48px Pretendard;
// //   font-size: 40px;
// //   color: #000000;
// //   opacity: 1;
// // `;

// // const Review = styled.div`
// //   font: normal normal 400 12px/14px Pretendard;
// //   letter-spacing: 0px;
// //   color: #000000;
// //   opacity: 0.6;
// // `;

// // const StarIcon = styled.img.attrs({
// //   src: star,
// // })`
// //   width: 13.87px;
// //   height: 13px;
// //   margin-top: 4px;
// //   margin-right: 6px;
// //   margin-bottom: 20px;
// //   margin-left: 6px;
// // `;

// // const NumRate = styled.div`
// //   align-items: left;
// //   display: block;
// //   margin-left: 10px;
// //   font: normal normal 400 11px/14px Pretendard;
// //   letter-spacing: 0px;
// //   color: #000000;
// //   opacity: 0.9;
// // `;

// // const NumRate2 = styled.div`
// //   display: flex;
// //   width: 150px;
// //   height: 16px;
// //   margin-top: 0px;
// //   margin-bottom: 2px;
// //   font: normal normal 400 11px/14px Pretendard;
// //   letter-spacing: 0px;
// //   color: #000000;
// //   opacity: 0.9;
// //   vertical-align: middle;
// // `;

// // const RateIcon = styled.img.attrs({
// //   src: star,
// // })`
// //   width: 7px;
// //   height: 7px;
// //   margin-top: 3px;
// //   margin-right: 6px;
// //   margin-left: 2px;
// //   display: flex;
// //   vertical-align: bottom;
// //   justify-content: space-between;
// // `;

// // const RateBar = styled.div`
// //   background-color: rgb(255, 101, 101);
// //   width: ${(props) => (props.percent || 0) * 90}px;
// //   height: 5px;
// //   z-index: 1;
// //   border-radius: 50px;
// //   position: absolute;
// // `;
// // const WrapperRateBar = styled.div`
// //   position: relative;
// //   background-color: rgb(191, 191, 191);
// //   width: 90px;
// //   height: 5px;
// //   z-index: 1;
// //   margin-top: 4px;
// //   border-radius: 50px;
// // `;

// // const ReviewWrapper = ({
// //   score,
// //   rates = [
// //     { rate: 5, percent: 0.5 },
// //     { rate: 4, percent: 0.2 },
// //     { rate: 3, percent: 0.2 },
// //     { rate: 2, percent: 0.1 },
// //     { rate: 1, percent: 0.0 },
// //   ],
// // }) => (
// //   <ExpDiv>
// //     <RateDiv>
// //       <Rate>{score}</Rate>
// //       <Review>리뷰 {0}개</Review>
// //     </RateDiv>
// //     <StarIcon />
// //     {/* <NumRate>
// //       {rates.map(({ rate, percent }) => (
// //         <NumRate2 key={rate}>
// //           {rate}
// //           <RateIcon />
// //           <WrapperRateBar>
// //             <RateBar percent={percent} />
// //           </WrapperRateBar>
// //         </NumRate2>
// //       ))}
// //     </NumRate> */}
// //   </ExpDiv>
// // );

// // const ProfileCard = ({ ...props }) => {
// //   // console.log(props);
// //   const {
// //     uid,
// //     title,
// //     design_type: type,
// //     category_level1: category,
// //     rate: score,
// //   } = props;
// //   const url = props?.thumbnailUrl?.m_img;
// //   return (
// //     <React.Fragment>
// //       <TopLists onClick={() => (window.location.href = `/exp/${uid}`)}>
// //         <Profile>
// //           <ProfileImg src={url} />
// //           {[1, 2, 3].includes(type) && (
// //             <div
// //               style={{
// //                 position: "absolute",
// //                 left: "-5",
// //                 top: "0",
// //                 padding: "5px",
// //                 borderRadius: "100%",
// //                 backgroundColor: "white",
// //                 boxShadow: "0px 0px 5px 0px #ABABAB",
// //               }}
// //             >
// //               <Diversity3Icon />
// //             </div>
// //           )}
// //           {/* <ProfileImgStar /> */}
// //         </Profile>
// //         <Name>{title || "경험이름"}</Name>
// //         <Category>
// //           {category === 1
// //             ? "놀기"
// //             : category === 2
// //             ? "배우기"
// //             : category === 3
// //             ? "만들기"
// //             : "카테고리"}
// //         </Category>
// //         {/* <Price>
// //           {price > 0
// //             ? new Intl.NumberFormat("ko-KR", {
// //                 style: "currency",
// //                 currency: "KRW",
// //               }).format(price) + "원"
// //             : "무료"}
// //         </Price> */}
// //         <ReviewWrapper score={score} />
// //         {/* <NumRate /> */}
// //       </TopLists>
// //     </React.Fragment>
// //   );
// // };

// // export default ProfileCard;

// import React, { Component } from "react";
// import styled from "styled-components";
// import star from "resources/place/star.svg";
// // import profileimg from "resources/place/profileimg.jpg";
// import Diversity3Icon from "@mui/icons-material/Diversity3";
// import { Rating, Box } from "@mui/material";

// import forked from "source/forked.svg";
// // import iForked from "source/forked_icon_white.png";
// import iThumbUp from "source/thumbup_icon_white.png";
// import IconView from "source/IconView";
// // import noimg from "source/noimg.png";

// import DateFormat from "modules/DateFormat";
// import TextFormat from "modules/TextFormat";
// import NumberFormat from "modules/NumberFormat";
// // import { geturl } from "config";

// // CSS
// const DesignElement_empty = styled.div`
//   width: 330px;
//   height: 330px;
//   border-radius: 15px;
// `;
// const DesignElement = styled.div`
//   * {
//     cursor: pointer;
//   }
//   cursor: pointer;
//   position: relative;
//   z-index: 700;
//   min-width: 330px;
//   min-height: 330px;
//   border-radius: 15px;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center center;
//   background-image: url(${(props) => props.img});
//   color: white;
//   font-size: 1.5rem;
//   font-family: "Noto Sans KR";
//   background-color: lisnear-gradient(to bottom, transparent 0%, black 100%);
//   border: 1px solid rgba(128,128,128,0.5);

//   .cover {
//     z-index: 701;
//     position: absolute;
//     border-radius: 15px;
//     background-image: linear-gradient(
//       180deg,
//       rgba(255, 255, 255, 0) 60%,
//       rgba(32, 32, 32, 0.7) 100%
//     );
//     width: 330px;
//     height: 330px;
//   }
//   .forked {
//     position: absolute;
//     margin-left: 276px;
//     margin-top: 0px;
//     width: 32.63px;
//     height: 67px;
//     background-image: url(${forked});
//     background-size: cover;
//   }
//   .categoryName {
//     z-index: 703;
//     position: absolute;
//     margin-left: 170px;
//     margin-top: 285px;
//     width: 140px;
//     height: 40px;
//     color: #ff0000;
//     font-size: 20px;
//     font-weight: 400;
//     text-align: right;
//     text-shadow: 2px 2px 6px rgb(80, 80, 80, 1);
//     // cursor: default;
//   }
//   .innerbox {
//     z-index: 703;
//     position: absolute;
//     width: 274.08px;
//     color: #ffffff;
//     line-height: 40px;
//     height: 35px;
//     font-family: Noto Sans KR;
//     margin-left: 25px;
//     margin-top: 201px;
//     .design-title {
//       font-size: 20px;
//       font-weight: 700;
//       text-shadow: 2px 2px 4px #707070;
//     }
//     .update-time {
//       margin-top: 5px;
//       font-weight: 300;
//       border: 1px solid red;
//       width: max-content;
//       height: 25px;
//       font-size: 17px;
//       font-family: Noto Sans KR;
//       line-height: 25px;
//       text-align: right;
//       text-shadow: 2px 2px 6px gray;
//       // cursor: default;
//     }
//     .user-name {
//       font-size: 20px;
//       font-weight: 300;
//       text-shadow: 2px 2px 6px gray;
//       // cursor: default;
//     }
//     .user-update-wrapper {
//       width: 285px;
//       display: flex;
//       justify-content: space-between;
//     }
//   }

//   .counter {
//     z-index: 703;
//     position: absolute;
//     left: 24.92px;
//     top: 286px;
//     display: flex;
//     justify-content: space-start;
//     width: 291px;
//     max-width: max-content;
//     height: 22px;
//     text-align: left;
//     line-height: 40px;
//     font-size: 15px;
//     font-weight: 500;
//     align-items: center;
//     text-shadow: 2px 2px 6px gray;
//     // background-color: rgba(128, 128, 128, 0.15);
//   }
//   .view {
//     z-index: 703;
//     margin-right: 4.25px;
//   }
//   .view-count {
//     z-index: 703;
//     margin-right: 6px;
//     // cursor: default;
//   }
//   .like {
//     z-index: 703;
//     margin-right: 4px;
//     img {
//       width: 13px;
//       height: 13px;
//     }
//   }
//   .like-count {
//     z-index: 703;
//     margin-right: 6px;
//     // cursor: default;
//   }
//   .fork {
//     z-index: 703;
//     margin-right: 4px;
//     img {
//       width: 22px;
//       height: 11px;
//     }
//   }
//   .fork-count {
//     z-index: 703;
//     margin-right: 0px;
//     // cursor: default;
//   }
//   :hover {
//     // border-right: 1px solid #707070;
//     // border-bottom: 1px solid #707070;
//     box-shadow: 2px 1px 5px rgba(112, 112, 112, 0.35);
//   }
//   animation: fadein 2s;
//   -moz-animation: fadein 2s; /* Firefox */
//   -webkit-animation: fadein 2s; /* Safari and Chrome */
//   -o-animation: fadein 2s; /* Opera */
//   @keyframes fadein {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
//   @-moz-keyframes fadein {
//     /* Firefox */
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
//   @-webkit-keyframes fadein {
//     /* Safari and Chrome */
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
//   @-o-keyframes fadein {
//     /* Opera */
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
// `;

// const ProfileImgStar = styled.img.attrs({
//   src: star,
// })`
//   // border-radius: 100%;
//   // box-shadow: 5px 5px 5px yellow;
//   width: 25px;
//   height: 25px;
//   position: absolute;
//   right: 16.09px;
//   top: 13.6px;
// `;

// const TopLists = styled.a`
//   background: #ffffff;
//   box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
//   border-radius: 30px;
//   padding: 14px;
//   width: 280px; // max-content;
//   height: 444px;
//   display: inline-block;
// `;

// const Name = styled.div`
//   font: normal normal 600 18px/14px Pretendard;
//   letter-spacing: 0px;
//   color: #000000;
//   opacity: 1;
//   margin-bottom: 5px;
//   width: max-content;
//   max-width: 100%;
//   height: 25px;
//   display: inline-block;
//   vertical-align: middle;
//   text-align: center;
// `;

// const Category = styled.div`
//   font: normal normal 400 12px/14px Pretendard;
//   letter-spacing: 0px;
//   color: #000000;
//   opacity: 0.6;
//   margin-bottom: 8px;
//   height: 16px;
// `;

// const Price = styled.div`
//   font: normal normal 400 16px/14px Pretendard;
//   // font-size: 40px;
//   letter-spacing: 0px;
//   color: #4136f1;
//   opacity: 1;
//   margin-bottom: 12px;
// `;

// const ExpDiv = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: 21.57px;
// `;

// const RateDiv = styled.div`
//   align-items: center;
// `;

// const Rate = styled.div`
//   font: normal normal 600 40px/48px Pretendard;
//   font-size: 40px;
//   color: #000000;
//   opacity: 1;
// `;

// const Review = styled.div`
//   font: normal normal 400 12px/14px Pretendard;
//   letter-spacing: 0px;
//   color: #000000;
//   opacity: 0.6;
// `;

// const StarIcon = styled.img.attrs({
//   src: star,
// })`
//   width: 13.87px;
//   height: 13px;
//   margin-top: 4px;
//   margin-right: 6px;
//   margin-bottom: 20px;
//   margin-left: 6px;
// `;

// const NumRate = styled.div`
//   align-items: left;
//   display: block;
//   margin-left: 10px;
//   font: normal normal 400 11px/14px Pretendard;
//   letter-spacing: 0px;
//   color: #000000;
//   opacity: 0.9;
// `;

// const NumRate2 = styled.div`
//   display: flex;
//   width: 150px;
//   height: 16px;
//   margin-top: 0px;
//   margin-bottom: 2px;
//   font: normal normal 400 11px/14px Pretendard;
//   letter-spacing: 0px;
//   color: #000000;
//   opacity: 0.9;
//   vertical-align: middle;
// `;

// const RateIcon = styled.img.attrs({
//   src: star,
// })`
//   width: 7px;
//   height: 7px;
//   margin-top: 3px;
//   margin-right: 6px;
//   margin-left: 2px;
//   display: flex;
//   vertical-align: bottom;
//   justify-content: space-between;
// `;

// const RateBar = styled.div`
//   background-color: rgb(255, 101, 101);
//   width: ${(props) => (props.percent || 0) * 90}px;
//   height: 5px;
//   z-index: 1;
//   border-radius: 50px;
//   position: absolute;
// `;
// const WrapperRateBar = styled.div`
//   position: relative;
//   background-color: rgb(191, 191, 191);
//   width: 90px;
//   height: 5px;
//   z-index: 1;
//   margin-top: 4px;
//   border-radius: 50px;
// `;
// function BasicRating(props) {
//   const [value, setValue] = React.useState(props.rate || 2);

//   return (
//     <Box
//       sx={{
//         "& > legend": { mt: 20 },
//       }}
//     >
//       {/* <Typography component="legend">Controlled</Typography> */}
//       {/* <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       /> */}
//       <Rating
//         name="read-only"
//         value={value}
//         readOnly
//         defaultValue={2}
//         size="large"
//         style={{ fontSize: "1rem" }}
//       />
//       {/* <Typography component="legend">Disabled</Typography> */}
//       {/* <Rating name="disabled" value={value} disabled /> */}
//       {/* <Typography component="legend">No rating given</Typography> */}
//       {/* <Rating name="no-value" value={null} /> */}
//     </Box>
//   );
// }

// const NumRateNew = ({
//   rate = 5,
//   cntReview = 0,
//   freq = [40, 30, 20, 10, 0],
// }) => (
//   <div
//     style={{
//       margin: "auto",
//       display: "flex",
//       flexDirection: "column",
//       // border: "1px solid red",
//       justifyContent: "center",
//     }}
//   >
//     {/* <div style={{ display: "flex" }}> */}
//     <span
//       style={{
//         padding: 0,
//         marginLeft: "5px",
//         marginBottom: "1rem",
//         fontSize: "1rem",
//         fontFamily: "Noto Sans KR",
//         textAlign: "center",
//         alignItems: "center",
//         lineHeight: "1rem",
//       }}
//     >
//       {parseInt(rate).toFixed(1)}
//     </span>
//     <BasicRating rate={rate} />
//     {/* </div> */}
//     <p
//       style={{
//         margin: "auto",
//         border: "1px solid gray",
//         padding: "5px 7px",
//         width: "max-content",
//         borderRadius: "5px",
//         fontSize: "1rem",
//       }}
//     >
//       리뷰: 0개
//     </p>
//   </div>
// );
// const ReviewWrapper = ({
//   score,
//   rates = [
//     { rate: 5, percent: 0.5 },
//     { rate: 4, percent: 0.2 },
//     { rate: 3, percent: 0.2 },
//     { rate: 2, percent: 0.1 },
//     { rate: 1, percent: 0.0 },
//   ],
// }) => (
//   <ExpDiv>
//     {/* <RateDiv>
//       <Rate>{score}</Rate>
//       <Review>리뷰 {0}개</Review>
//     </RateDiv>
//     <StarIcon /> */}
//     {/* <NumRate>
//       {rates.map(({ rate, percent }) => (
//         <NumRate2 key={rate}>
//           {rate}
//           <RateIcon />
//           <WrapperRateBar>
//             <RateBar percent={percent} />
//           </WrapperRateBar>
//         </NumRate2>
//       ))}
//     </NumRate> */}
//   </ExpDiv>
// );
// const ProfileCard = ({ ...props }) => {
//   // console.log(props);
//   const {
//     uid,
//     title,
//     design_type: type,
//     category_level1: category,
//     rate: score,
//   } = props;
//   const url = props?.thumbnailUrl?.m_img;
//   return (
//     <React.Fragment>
//       <TopLists onClick={() => (window.location.href = `/exp/${uid}`)}>
//         <Profile>
//           <ProfileImg src={url} />
//           {[1, 2, 3].includes(type) && (
//             <div
//               style={{
//                 position: "absolute",
//                 left: "-5",
//                 top: "0",
//                 padding: "5px",
//                 borderRadius: "100%",
//                 backgroundColor: "white",
//                 boxShadow: "0px 0px 5px 0px #ABABAB",
//               }}
//             >
//               <Diversity3Icon />
//             </div>
//           )}
//           {/* <ProfileImgStar /> */}
//         </Profile>
//         <Name>{title || "경험이름"}</Name>
//         <Category>
//           {category === 1
//             ? "놀기"
//             : category === 2
//             ? "배우기"
//             : category === 3
//             ? "만들기"
//             : "카테고리"}
//         </Category>
//         {/* <Price>
//           {price > 0
//             ? new Intl.NumberFormat("ko-KR", {
//                 style: "currency",
//                 currency: "KRW",
//               }).format(price) + "원"
//             : "무료"}
//         </Price> */}
//         {/* <ReviewWrapper score={score} /> */}
//         {/* <NumRate /> */}
//         <NumRateNew />
//       </TopLists>
//     </React.Fragment>
//   );
// };

// class Design extends React.Component {
//   gotoDetailPage = () => {
//     // window.location.href = geturl() + "/exp/" + this.props.data.uid
//     window.location.href = `/exp/${this.props.data.uid}`;
//   };
//   state = { data: this.props.data || DesignEmpty };
//   shouldComponentUpdate(nextProps) {
//     if (this.props.data !== nextProps.data) {
//       this.setState({ data: nextProps.data });
//     }
//     return true;
//   }
//   onClick = (e) => {};
//   render() {
//     const isForked = this.props.forked || this.props.parent_design;
//     console.log(this.props);
//     const {
//       uid,
//       img,
//       m_img,
//       p_m_img,
//       title,
//       keyindex,
//       userName,
//       nick_name,
//       kickout,
//       thumbnailUrl,
//       update_time,
//       view_count,
//       like_count,
//     } = this.props;

//     // card_count: 1
//     // categoryName: "놀기"
//     // category_level1: 1
//     // category_level2: null
//     // category_level3: null
//     // children_count: 1
//     // create_time: "2023-07-19T10:38:04.000Z"
//     // design_type: 2
//     // is_project: 1
//     // is_public: 1
//     // like_count: 2
//     // member_count: 1
//     // nick_name: "ggam2"
//     // parent_design: null
//     // test: null
//     // thumbnail: 15054
//     // thumbnailUrl: {s_img: 'https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/place/thumbnails/1689730684713-x50.png', m_img: 'https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/place/thumbnails/1689730684713-x200.png', l_img: 'https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/place/thumbnails/1689730684713-x600.png'}
//     // title: "osdosd"
//     // uid: 5482
//     // update_time: "2023-08-30T10:51:28.000Z"
//     // userName: "ggam2"
//     // user_id: 1949
//     // view_count: 379
//     return (
//       <React.Fragment>
//         {this.props.empty == null ? (
//           <DesignElement
//             key={keyindex}
//             onClick={() => (window.location.href = `/exp/${uid}`)}
//             // onClick={this.props.onClick || this.onClick}
//             // onClick={this.gotoDetailPage}
//             img={thumbnailUrl?.m_img || img?.m_img || m_img || p_m_img}
//           >
//             {/* <div className="cover" /> */}
//             {isForked && <div className="forked" />}
//             {/* <div className="categoryName">{data.categoryName}</div> */}
//             <div className="innerbox">
//               <div className="design-title">
//                 {/* {data.title} */}
//                 <TextFormat tip width="100%" txt={title} single />
//               </div>
//               <div className="user-update-wrapper">
//                 <div
//                   style={{
//                     textShadow: "1px 1px 2px #707070",
//                     fontWeight: "500",
//                     fontSize: "1.25rem",
//                     width: "200px",
//                   }}
//                 >
//                   <TextFormat tip txt={userName || nick_name} width="100%" />
//                 </div>
//                 <div
//                   style={{
//                     textShadow: "2px 2px 6px gray",
//                     fontSize: "1.15rem",
//                     width: "max-content",
//                   }}
//                 >
//                   {DateFormat(update_time)}
//                 </div>
//               </div>
//             </div>
//             <div className="counter">
//               <div className="view">
//                 <IconView width="22px" height="11px" fill="white" />
//               </div>
//               <div className="view-count">{NumberFormat(view_count)}</div>
//               <div className="like">
//                 <img alt="icon" src={iThumbUp} />
//               </div>
//               <div className="like-count">{NumberFormat(like_count)}</div>
//               {/* <div className="fork">
//                 <img alt="icon" src={iForked} />
//               </div> */}
//               {/* <div className="fork-count">
//                 {NumberFormat(data.children_count) || 0}
//               </div> */}
//             </div>
//           </DesignElement>
//         ) : (
//           <DesignElement_empty />
//         )}
//       </React.Fragment>
//     );
//   }
// }

// // export default Design;
// import React from "react";
function Design() {
  return <></>;
}
export default Design;
