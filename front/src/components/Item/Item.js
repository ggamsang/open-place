import React from "react";
import styled from "styled-components";
import TextFormat from "modules/TextFormat";
import DateFormat from "modules/DateFormat";
import NumberFormat from "modules/NumberFormat";

import IconView from "source/IconView";
import iThumbUp from "source/thumbup_icon_white.png";
import forked from "source/forked.svg"

const DesignElement_empty = styled.div`
  width: 330px;
  height: 330px;
  border-radius: 15px;
`;
const DesignElement = styled.div`
  * {
    cursor: pointer;
  }
  cursor: pointer;
  position: relative;
  z-index: 700;
  min-width: 330px;
  min-height: 330px;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.img});
  color: white;
  font-size: 20px;
  font-family: "Noto Sans KR";
  // cursor: default;
  .cover {
    // cursor: default;
    z-index: 701;
    position: absolute;
    border-radius: 15px;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 60%,
      rgba(32, 32, 32, 0.7) 100%
    );
    width: 330px;
    height: 330px;
  }
  .forked {
    position: absolute;
    margin-left: 276px;
    margin-top: 0px;
    width: 32.63px;
    height: 67px;
    background-image: url(${forked});
    background-size: cover;
  }
  .categoryName {
    z-index: 703;
    position: absolute;
    margin-left: 170px;
    margin-top: 285px;
    width: 140px;
    height: 40px;
    color: #ff0000;
    font-size: 20px;
    font-weight: 400;
    text-align: right;
    text-shadow: 2px 2px 6px rgb(80, 80, 80, 1);
    // cursor: default;
  }
  .innerbox {
    z-index: 703;
    position: absolute;
    width: 274.08px;
    color: #ffffff;
    line-height: 40px;
    height: 35px;
    font-family: Noto Sans KR;
    margin-left: 25px;
    margin-top: 201px;
    .design-title {
      font-size: 20px;
      font-weight: 700;
      text-shadow: 2px 2px 4px #707070;
    }
    .update-time {
      margin-top: 5px;
      font-weight: 300;
      border: 1px solid red;
      width: max-content;
      height: 25px;
      font-size: 17px;
      font-family: Noto Sans KR;
      line-height: 25px;
      text-align: right;
      text-shadow: 2px 2px 6px gray;
      // cursor: default;
    }
    .user-name {
      font-size: 20px;
      font-weight: 300;
      text-shadow: 2px 2px 6px gray;
      // cursor: default;
    }
    .user-update-wrapper {
      width: 285px;
      display: flex;
      justify-content: space-between;
    }
  }

  .counter {
    z-index: 703;
    position: absolute;
    left: 24.92px;
    top: 286px;
    display: flex;
    justify-content: space-start;
    width: 291px;
    height: 22px;
    text-align: left;
    line-height: 40px;
    font-size: 15px;
    font-weight: 500;
    align-items: center;
    text-shadow: 2px 2px 6px gray;
  }
  .view {
    z-index: 703;
    margin-right: 4.25px;
  }
  .view-count {
    z-index: 703;
    margin-right: 6px;
    // cursor: default;
  }
  .like {
    z-index: 703;
    margin-right: 4px;
    img {
      width: 13px;
      height: 13px;
    }
  }
  .like-count {
    z-index: 703;
    margin-right: 6px;
    // cursor: default;
  }
  .fork {
    z-index: 703;
    margin-right: 4px;
    img {
      width: 22px;
      height: 11px;
    }
  }
  .fork-count {
    z-index: 703;
    margin-right: 0px;
    // cursor: default;
  }
  :hover {
    // border-right: 1px solid #707070;
    // border-bottom: 1px solid #707070;
    box-shadow: 2px 1px 5px rgba(112, 112, 112, 0.35);
  }
  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const DesignEmpty = {
  title: "타이틀",
  userName: "개설자",
  categoryName: "분야",
  like_count: 0,
  children_count: 0,
  view_count: 0,
  thumbnailUrl: { m_img: null },
};


class Design extends React.Component {
  gotoDetailPage = () => {
    // window.location.href = geturl() + "/exp/" + this.props.data.uid
    window.location.href = `/exp/${this.props.data.uid}`;
  };
  state = { data: this.props.data || DesignEmpty };
  shouldComponentUpdate(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({ data: nextProps.data });
    }
    return true;
  }
  onClick = (e) => {};
  render() {
    const isForked = this.props.forked || this.props.parent_design;
    console.log(this.props);
    const {
      uid,
      img,
      m_img,
      p_m_img,
      title,
      keyindex,
      userName,
      nick_name,
      kickout,
      thumbnailUrl,
      update_time,
      view_count,
      like_count,
    } = this.props;

    // card_count: 1
    // categoryName: "놀기"
    // category_level1: 1
    // category_level2: null
    // category_level3: null
    // children_count: 1
    // create_time: "2023-07-19T10:38:04.000Z"
    // design_type: 2
    // is_project: 1
    // is_public: 1
    // like_count: 2
    // member_count: 1
    // nick_name: "ggam2"
    // parent_design: null
    // test: null
    // thumbnail: 15054
    // thumbnailUrl: {s_img: 'https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/place/thumbnails/1689730684713-x50.png', m_img: 'https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/place/thumbnails/1689730684713-x200.png', l_img: 'https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/place/thumbnails/1689730684713-x600.png'}
    // title: "osdosd"
    // uid: 5482
    // update_time: "2023-08-30T10:51:28.000Z"
    // userName: "ggam2"
    // user_id: 1949
    // view_count: 379
    return (
      <React.Fragment>
        {this.props.empty == null ? (
          <DesignElement
            key={keyindex}
            onClick={() => (window.location.href = `/exp/${uid}`)}
            // onClick={this.props.onClick || this.onClick}
            // onClick={this.gotoDetailPage}
            img={thumbnailUrl?.m_img || img?.m_img || m_img || p_m_img}
          >
            {/* <div className="cover" /> */}
            {isForked && <div className="forked" />}
            {/* <div className="categoryName">{data.categoryName}</div> */}
            <div className="innerbox">
              <div className="design-title">
                {/* {data.title} */}
                <TextFormat tip width="100%" txt={title} single />
              </div>
              <div className="user-update-wrapper">
                <div
                  style={{
                    textShadow: "1px 1px 2px #707070",
                    fontWeight: "500",
                    fontSize: "1.25rem",
                    width: "200px",
                  }}
                >
                  <TextFormat tip txt={userName || nick_name} width="100%" />
                </div>
                <div
                  style={{
                    textShadow: "2px 2px 6px gray",
                    fontSize: "1.15rem",
                    width: "max-content",
                  }}
                >
                  {DateFormat(update_time)}
                </div>
              </div>
            </div>
            <div className="counter">
              <div className="view">
                <IconView width="22px" height="11px" fill="white" />
              </div>
              <div className="view-count">{NumberFormat(view_count)}</div>
              <div className="like">
                <img alt="icon" src={iThumbUp} />
              </div>
              <div className="like-count">{NumberFormat(like_count)}</div>
              {/* <div className="fork">
                <img alt="icon" src={iForked} />
              </div> */}
              {/* <div className="fork-count">
                {NumberFormat(data.children_count) || 0}
              </div> */}
            </div>
          </DesignElement>
        ) : (
          <DesignElement_empty />
        )}
      </React.Fragment>
    );
  }
}


export default Design;
