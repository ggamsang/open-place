import React from "react";
import styled from "styled-components";
import noimage from "resources/mobiles/sample-image-01.png";
// import StarRating from "mobile/commons/StarRating";
// import Tags from "mobile/commons/Tags";
import { resolution } from "mobile/commons/resolution";
import heart from "resources/mobiles/Iconly-heart-red.svg";
import { TYPEs } from "constant";
import GradeIcon from "@mui/icons-material/Grade";
import { red } from "@mui/material/colors";

const Wrapper = styled.div`
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  position: relative;
  height: ${resolution(165)}px;
  background-image: url(${(prop) => prop.bg});
  background-position: center center;
  background-size: cover;
  padding: 16px 21px;
  display: flex;
  align-items: flex-end;
  * {
    z-index: 1;
  }
  .summary_wrap {
    width: 100%;
  }
  .gradient-cover {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${resolution(103)}px;
    background: transparent linear-gradient(180deg, #00000000 0%, #000000 100%)
      0% 0% no-repeat padding-box;
    opacity: 0.78;
    z-index: 0;
  }
  .row {
    width: 100%;
    display: flex;
  }
  .space-between {
    justify-content: space-between;
  }
  .item-title {
    width: ${resolution(132)}px;
    font: normal normal bold 16px/19px Pretendard;
    color: white;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .imgheart {
    width: 23px;
    height: 23px;
  }
  .price {
    margin-left: 20px;
    width: ${resolution(80)}px;
    font: normal normal bold 16px/19px Pretendard;
    color: white;
    font-weight: bold;
  }
  .like {
    width: 22px;
    text-align: center;
    font: normal normal bold 12px/15px Pretendard;
    color: white;
    font-weight: bold;
  }
  .rate-and-tags {
    display: flex;
  }
`;

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
      thumbnailUrl: url,
      title,
        score,
      //   tags,
      //   taglist,
      //   price,
      like_count,
      like_id,
      categoryName,
      design_type,
    } = this.props;

    return (
      <Wrapper bg={url?.m_img || noimage} onClick={this.onClickItem}>
        <div className="summary_wrap">
          <div className="row space-between">
            <div className="row">
              <div className="item-title">{title || "title"}</div>
              {/* <div className="price">₩{price || "58000"}</div> */}
            </div>
            <img alt="icon" className="imgheart" src={heart} />
          </div>
          <div className="row space-between">
            <div className="rate-and-tags">
              <div style={{ color: "white" }}>
                <GradeIcon fontSize="3rem" sx={{ color: red[500] }} />
                {score || 0.0}
              </div>
              {/* <StarRating score={score || 0} /> */}
              {/* <Tags
                prestyle={{ marginLeft: "16px" }}
                tags={tags || taglist || ["tag1", "tag2", "tag3"]}
              /> */}
              <div style={{ color: "#FFFFFF", marginLeft: "5px" }}>
                ( {categoryName} x {TYPEs[design_type || 0].name} )
              </div>
            </div>
            <div className="like">{like_id == null ? 0 : like_count}</div>
          </div>
        </div>
        <div className="gradient-cover">&nbsp;</div>
      </Wrapper>
    );
  }
}
export default Item;
