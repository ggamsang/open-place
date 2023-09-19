import React, { Component } from "react";
import { connect } from "react-redux";
import {
  GetDesignListRequest,
  GetDesignListCountRequest,
} from "redux/modules/expitem";
import { GetCategoryAllRequest } from "redux/modules/category";
import Category from "components/Commons/Category";
import OrderOption2 from "components/Commons/OrderOption/OrderOption2";
import ScrollList from "components/Commons/ScrollListNew/ScrollListAgainNew";
import Loading from "components/Commons/Loading";
import styled from "styled-components";
import opendesign_style from "opendesign_style";
import Item from "components/Item/Item";
import CheckBoxNormal from "components/Commons/CheckBox/CheckBoxNormal";

const Wrapper = styled.div`
  // margin-left:100px;
  // margin-top:90px;
  .category_wrapper {
    width: 100%;
    align-items: center;
    // padding-left: 41px;
    // padding-top: 19px;
  }
  .content {
    // padding-left: 41px;
    width: 100%;
  }
  .scroll_wrapper {
    margin-top: 21px;
    margin-bottom: 100px;
  }
  .header_box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 13px;
    padding-right: 39px;
    .category_title {
      min-width: 200px;
      height: 32px;
      font-family: Spoqa Han Sans Neo;
      font-weight: Medium;
      font-size: 24px;
      color: #1262ab;
      display: flex;
      align-items: center;
    }
  }
`;
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-right: 30px;
  position: relative;
  button {
    background-color: gray;
    // border: 1px solid black;
    position: absolute;
    bottom: -35px;
    color: white;
    font-size: 1.5rem;
    padding: 5px 10px;
    border-radius: 15px;
  }
  .category {
  }
  .main_category {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .sub_category {
    width: 100%;
    max-width: max-content;
    margin-top: 9px;
    display: flex;
    flex-wrap: wrap;
    min-height: 41px;
    height: max-content;
    padding: 6px 26px 7px 26px;
    border: 1px solid #eaeaea;
    background-color: white;
    box-shadow: 8px 8px 8px #4141411a;
    margin-right: 30px;
  }
  .selected {
    color: red;
  }

  .button {
    min-width: 174px;
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    font-family: Spoqa Han Sans Neo;
    font-weight: medium;
    box-shadow: 8px 8px 8px #0000002b;
    cursor: pointer;
    margin-right: 51px;
  }
  .blue {
    background-color: #1262ab;
  }
  .purple {
    background-color: #7e1e9b;
  }
  .green {
    background-color: #1e9b79;
  }
`;
const MainElement = styled.div`
  min-width: max-content;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: Spoqa Han Sans Neo;
  font-weight: Medium;
  cursor: pointer;
  margin-right: 26px;
`;
class DesignListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reload: false,
      screenWidth: window.innerWidth,
      this_order: this.props.sort || "update",
      this_category: { text: null, value: null },
      main_category: { text: null, value: null },
      sub_category: { text: null, value: null },
      third_category: { text: null, value: null },
      category2: [],
      tags: [],
      tags_fold: true,
    };
    this.handleReload = this.handleReload.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeSubCategory = this.handleChangeSubCategory.bind(this);
    this.handleChangeThirdCategory = this.handleChangeThirdCategory.bind(this);
    this.handleChangeOrderOps = this.handleChangeOrderOps.bind(this);
    this.getList = this.getList.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }
  async componentDidMount() {
    // await this.props.GetDesignListRequest(
    //   0,
    //   "update",
    //   this.props.cate1,
    //   this.props.keyword
    // );
    await this.getList(0);
    window.addEventListener("resize", this.handleResize, false);
    this.GetDesignTagListRequest();
  }
  GetDesignTagListRequest = () => {
    const url = `https://place.opensrcdesign.com/api/design/tags/design/${this.props.cate1}`;
    fetch(url, {
      header: { "Content-Type": "application/json" },
      method: "GET",
    })
      .then((r) => r.json())
      // .then(console.log)
      .then((r) => this.setState({ tags: r.detail || [] }))
      .catch(console.error);
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize, false);
  }
  componentWillUpdate(nextProps) {
    if (this.props.category1 !== nextProps.category1) {
      let main_category = { text: "", value: "" };
      nextProps.category1.map((item, index) => {
        if (this.props.cate1 == item.value) {
          main_category.text = item.text;
          main_category.value = item.value;
        }
      });
      this.setState({
        main_category: main_category,
        this_category: main_category,
      });
    }
    if (this.props.category2 !== nextProps.category2) {
      let sub_category = { text: null, value: null };
      let nCount = 0;
      let nParent = -1;
      this.props.cate1 &&
        nextProps.category1.map((item, index) => {
          if (this.props.cate1 == item.value) {
            nParent = nCount;
          }
          nCount++;
        });
      nParent != -1 &&
        nextProps.category2[nParent].map((item, index) => {
          if (this.props.cate2 == item.value) {
            sub_category.text = item.text;
            sub_category.value = item.value;
            sub_category.parent = nParent;
          }
        });
      this.setState({
        sub_category: sub_category,
        category2: nextProps.category2[nParent],
      });
      if (this.props.cate2 !== null) {
        this.setState({ this_category: sub_category });
      }
    }

    if (this.props.category3 !== nextProps.category3) {
      let third_category = { text: null, value: null };
      let nCount = 0;
      let nParent;
      for (let i in nextProps.category2) {
        nextProps.category2 &&
          nextProps.category2[i] &&
          nextProps.category2[i].map((item, index) => {
            if (this.props.cate2 == item.value) {
              nParent = nCount;
            }
            nCount++;
          });
      }
      nParent != -1 &&
        nextProps.category3[nParent] &&
        nextProps.category3[nParent].map((item, index) => {
          if (this.props.cate3 == item.value) {
            third_category.text = item.text;
            third_category.value = item.value;
            third_category.parent = nParent;
          }
        });
      this.setState({
        third_category: third_category,
        category3: nextProps.category3[nParent],
      });
      if (this.props.cate3 !== null) {
        this.setState({ this_category: third_category });
      }
    }
  }
  handleResize() {
    this.setState({ screenWidth: window.innerWidth });
  }
  handleReload() {
    this.setState({ reload: !this.state.reload });
  }
  async handleChangeCategory(category) {
    await this.setState({
      main_category: category,
      this_category: category,
      sub_category: { text: null, value: null },
    });
    this.props.GetDesignListCountRequest(category.value, null, null);
    this.handleReload();
    this.getList(0);
    const orderkeyword =
      this.props.sort == null ? "update" : `${this.props.sort}`;

    window.location.href =
      "/design" + `/${orderkeyword}` + "/" + category.value;
  }
  async handleChangeSubCategory(parent, category) {
    console.log("handleChangeSubCategory:::::", category);
    await this.setState({
      main_category: parent,
      this_category: category,
      sub_category: category,
    });
    this.props.GetDesignListCountRequest(
      this.state.main_category.value,
      category.value,
      null
    );
    this.handleReload();
    this.getList(0);
    const orderkeyword =
      this.props.sort == null ? "update" : `${this.props.sort}`;

    window.location.href =
      "/design" +
      `/${orderkeyword}` +
      "/" +
      parent.value +
      "/" +
      category.value;
  }
  async handleChangeThirdCategory(old_parent, parent, category) {
    console.log(old_parent, parent, category.value);
    await this.setState({
      main_category: old_parent,
      this_category: category,
      sub_category: parent,
      third_category: category,
    });
    this.props.GetDesignListCountRequest(
      this.state.main_category.value,
      this.state.sub_category.value,
      category.value
    );
    this.handleReload();
    this.getList(0);
    const orderkeyword =
      this.props.sort == null ? "update" : `${this.props.sort}`;
    window.location.href =
      "/design" +
      `/${orderkeyword}` +
      "/" +
      old_parent.value +
      "/" +
      parent.value +
      "/" +
      category.value;
  }
  async handleChangeOrderOps(order) {
    await this.setState({ this_order: order });
    this.getList(0);
  }
  async getList(page) {
    const { main_category, sub_category, third_category, keyword, this_order } =
      this.state;
    console.log("get list ::", page);
    this.props.GetDesignListRequest(
      page,
      this_order || "update",
      this.props.cate1,
      this.props.keyword
      // page,
      // main_category.value || null,
      // sub_category.value || null,
      // third_category.value || null,
      // keyword || null
    );
  }
  changeCategory(category) {
    if (this.state.this_category === category) {
      return;
    }
    this.handleChangeCategory(category);
  }
  ToggleFoldTagList = () => {
    this.setState({ tags_fold: !this.state.tags_fold });
  };
  removeDuplicates = (arr) => {
    let unique = [];
    arr.forEach((element) => {
      if (!unique.includes(element)) {
        unique.push(element);
      }
    });
    return unique;
  };
  render() {
    const {
      main_category,
      this_category,
      sub_category,
      third_category,
      reload,
      this_order,
      tags,
      tags_fold,
    } = this.state;
    const { category1, category2, category3, Count, status } = this.props;
    console.log(this.props, tags);
    return (
      <Wrapper>
        <div className="category_wrapper">
          {tags.length > 0 && (
            <TagsContainer>
              {[...new Set(tags.map((item) => item.tag))]
                ?.slice(0, tags_fold ? 10 : undefined)
                .map((item, index) => (
                  <MainElement key={index}>{item}</MainElement>
                ))}
              {/* <button onClick={this.ToggleFoldTagList}> */}
              {/* {tags_fold ? "펼쳐보기" : "접기"} */}
              {/* </button> */}
            </TagsContainer>
          )}
          {/* 
            // thirdcategory_clicked={this.handleChangeThirdCategory}
            // subcategory_clicked={this.handleChangeSubCategory}
            // category_clicked={this.handleChangeCategory}
            // category1={category1}
            // category2={this.state.category2}
            // category3={this.state.category3}
            // main_selected={main_category}
            // sub_selected={sub_category}
            // third_selected={third_category} 
          * /} */}
        </div>

        <div className="content">
          <div className="header_box">
            <div style={{ display: "flex", marginLeft: "25px" }}>
              {/* <CheckBoxNormal
                width={18}
                height={18}
                style={{ marginRight: "5px" }}
                text="놀기"
                value={this.state.selector_play}
                onClickEvent={this.onClickSelectorPlay}
              />
              <CheckBoxNormal
                width={18}
                height={18}
                style={{ marginRight: "5px" }}
                text="배우기"
                value={this.state.selector_play}
                onClickEvent={this.onClickSelectorPlay}
              />
              <CheckBoxNormal
                width={18}
                height={18}
                style={{ marginRight: "5px" }}
                text="만들기"
                value={this.state.selector_play}
                onClickEvent={this.onClickSelectorPlay}
              /> */}
              {/* {(this_category && this_category.text === "전체"
                ? "경험"
                : this_category.text) || "경험"}
              &nbsp;({Count}) */}
            </div>
            <OrderOption2
              onChange={this.handleChangeOrderOps}
              selected={this_order}
            />
          </div>
          <div className="scroll_wrapper">
            {status === "INIT" ? (
              <Loading />
            ) : (
              <ScrollList
                ListComponent={Item}
                type="design"
                height={"max-content"}
                dataList={this.props.DesignList}
                dataListAdded={this.props.DesignListAdded}
                getList={this.getList}
              />
            )}
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    DesignList: state.DesignList.status.DesignList,
    DesignListAdded: state.DesignList.status.DesignListAdded,
    userInfo: state.Authentication.status.userInfo,
    category1: state.Category.status.category1,
    category2: state.Category.status.category2,
    category3: state.Category.status.category3,
    Count: state.DesignList.status.Count,
    status: state.DesignList.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetDesignListRequest: (
      page,
      sort,
      categoryLevel1,
      keyword
      // categoryLevel2,
      // categoryLevel3
    ) => {
      return dispatch(
        GetDesignListRequest(
          page,
          sort,
          categoryLevel1,
          keyword
          // categoryLevel2,
          // categoryLevel3
        )
      );
    },
    GetDesignListCountRequest: (category1, category2, category3) => {
      return dispatch(
        GetDesignListCountRequest(category1, category2, category3)
      );
    },
    GetCategoryAllRequest: () => {
      return dispatch(GetCategoryAllRequest());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DesignListContainer);

// return (<React.Fragment>
//   <Wrapper>

//     <Category thirdcategory_clicked={this.handleChangeThirdCategory} subcategory_clicked={this.handleChangeSubCategory} category_clicked={this.handleChangeCategory}
//       category1={category1} category2={this.state.category2} category3={this.state.category3} main_selected={main_category} sub_selected={sub_category} third_selected={third_category} />
//     <WrapperSub>

//     <JoinDesignContainer>
//     </JoinDesignContainer>
//     <TextWrapper centerPos={this.state.screenWidth} onClick={() => this.changeCategory(main_category)}>
//       <div className="title"> {(this_category && this_category.text === "전체" ? "경험" : this_category.text) || "경험"}&nbsp;({Count})</div>
//     </TextWrapper>
//     <div className="orderBox">
//       <OrderOption order_clicked={this.handleChangeOrderOps} selected={this_order} />
//     </div>
//     </WrapperSub>

//     <ScrollListContainer>
//       {status === "INIT"
//         ? <Loading />
//         : <ScrollList {...opendesign_style.design_margin} reload={reload} handleReload={this.handleReload}
//           type="design" dataList={this.props.DesignList} dataListAdded={this.props.DesignListAdded} getListRequest={this.getList} />}
//     </ScrollListContainer>
//     <BlankDiv />
//   </Wrapper>
// </React.Fragment>)

// const Wrapper = styled.div`
// position:relative;
// .orderBox{
//   width:max-content;
//   height:max-content;
// }
// // margin-top:100px;
// // @media only screen and (max-width : 900px) {
// // margin-top:150px;
// // }
// `
// const TextWrapper = styled.div`
// width:100%;
// display:flex;
// justify-content:center;
// align-items:center;
// top: 25px;
// font-size: 25px;
// font-family: Noto Sans KR;
// font-weight: 700;
// color: red;
// cursor: pointer;
// // margin-top:100px;
// @media only screen and (max-width : 900px) {
// // margin-top:150px;
// }
// .title{
// width:300px;
// text-align:center;
// }
// `;
// const WrapperSub = styled.div`
//     display:flex;
//     padding-left:36px;
//     padding-right:45px;
// `
// const JoinDesignContainer = styled.div`
// width:200px;
// display:flex;
// align-items:center;
// .joinDesign{
//     background: #707070 0% 0% no-repeat padding-box;
//     border-radius: 18px;
//     width:max-content;
//     height:29px;
//     text-align: left;
//     font-size: 20px;
//     cursor: pointer;
//     font-family: Noto Sans KR;
//     font-weight:500;
//     color: white;
//     padding:4px 16px;
// }

// `;
// const ScrollListContainer = styled.div`
//     padding-top: 30px;
//     padding-bottom: 68px;

//     padding-left:20px;
// `;
// const BlankDiv = styled.div`
//     padding-top: 50px;
// `;
