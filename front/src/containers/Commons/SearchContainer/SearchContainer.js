import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import DesignListContainer from "containers/ExpItem/DesignListContainer";

// import SearchListRe from "components/Commons/SearchListRe";
// import SearchListRe_mobile from "components/Commons/SearchListRe_mobile";
// import { isMobile } from "constant";
// // import { GetDesignListCountRequest } from "redux/modules/expitem";
// // import { GetCategoryAllRequest } from "redux/modules/category"
// // import SearchForm from "desktop/components/Commons/Search/SearchForm";
// // import ScrollList from "desktop/components/Commons/ScrollList";
// // import SortButton from "desktop/components/Commons/SortButton/SortButton";
// // import CategoryButton from "desktop/components/Commons/CategoryButton/CategoryButton";
// // import { goto } from "navigator";
// // import { GetCATEGORY, GetSORTYPE } from "desktop/components/Commons/Define";
// // import Item from "desktop/components/Commons/Item";

const Wrapper = styled.div`
  .search-list-wrapper {
    width: 100%;
    box-sizing: border-box;
    padding: 0px 20px;
  }
`;

// const Button = styled.button`
//   border: none;
//   outline: none;
//   background: transparent;

//   .text {
//     margin: auto;
//     width: max-content;
//     height: 18px;
//     text-align: center;
//     font: normal normal 700 15px/18px Pretendard;
//     letter-spacing: 0px;
//     color: #ffffff;
//     opacity: 1;
//   }
// `;
// const Categories = styled.div`
//   margin: auto;
//   margin-bottom: 30px;
//   width: max-content;
//   height: 59px;
//   background: #ffffff 0% 0% no-repeat padding-box;
//   box-shadow: 3px 3px 5px #0000001a;
//   border: 0.25px solid #b7b7b7;
//   border-radius: 20px;
//   opacity: 1;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   gap: 25px;
//   box-sizing: border-box;
//   padding: 15px 50px;
// `;
// const PlayButton = styled(Button)`
//   width: 150px;
//   height: 30px;
//   background: #f59118 0% 0% no-repeat padding-box;
// `;
// const LearnButton = styled(Button)`
//   width: 150px;
//   height: 30px;
//   background: #9614fc 0% 0% no-repeat padding-box;
// `;
// const MakeButton = styled(Button)`
//   width: 150px;
//   height: 30px;
//   background: #2a71fc 0% 0% no-repeat padding-box;
// `;

// const Sorts = styled.div`
//   width: max-content;
//   margin-left: auto;
//   margin-right: 70px;
//   margin-bottom: 30px;
// `;
// const SortButtonW = styled(Button)`
//   .text-sort {
//     height: 30px;
//     text-align: left;
//     font: normal normal 500 25px/30px Pretendard;
//     letter-spacing: 0px;
//     color: ${(prop) => (prop.selected ? "#FF0000" : "#000000")};
//     opacity: 1;
//   }
// `;

class SearchList extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       keyword: this.props.keyword,
  //       sortType: this.props.sort,
  //       categoryType: this.props.category,
  //       category: this.props.category || "play",
  //     };
  //   }
  //   componentDidMount() {
  //     this.getList(0);
  //   }
  //   getList = (page) => {
  //     console.log(page, this.state.categoryType);
  //     const { category } = this.state;
  //     return this.props.getExpListRequest(
  //       page,
  //       category,
  //       // GetCATEGORY(this.state.categoryType),
  //       GetSORTYPE(this.state.sortType),
  //       this.state.keyword
  //     );
  //   };
  //   onClickCategory = (category) => {
  //     // setSearchParams && setSearchParams({ category: category, sort: sort });
  //     // setCategory(category);
  //     // goto(
  //     //   "SEARCH",
  //     //   `category=${category}&sort=${this.state.sortType}&keyword=${this.props.keyword}`
  //     // );
  //     this.setState({ category: category }, () => {
  //       this.getList(0);
  //     });
  //   };
  render() {
    //     console.log(
    //       GetCATEGORY(this.state.categoryType),
    //       this.state.categoryType,
    //       GetSORTYPE(this.state.sortType),
    //       this.state.sortType,
    //       this.props.keyword
    //     );
    //     const { list_added } = this.props;
    console.log(this.props);
    const { keyword = null } = this.props;
    return (
      <Wrapper>
        <DesignListContainer selector cate1={null} keyword={keyword} />
      </Wrapper>
    );
  }
}

class SearchContainer extends Component {
  render() {
    return <SearchList {...this.props} />;

    // return isMobile() ? (
    //   // <SearchListRe_mobile {...this.props} />
    // ) : (
    //   // <SearchListRe {...this.props} />
    // );
  }
}

const mapStateToProps = (state) => ({
  //   category1: state.Category.status.category1,
  //   category2: state.Category.status.category2,
  //   category3: state.Category.status.category3,
  //   groups: state.GroupList.status.GroupListAdded,
  //   designs: state.DesignList.status.DesignListAdded,
  //   designers: state.DesignerList.status.DesignerListAdded,
  //   group_status: state.GroupList.GroupList.status,
  //   design_status: state.DesignList.DesignList.status,
  //   designer_status: state.DesignerList.DesignerList.status,
});
const mapDispatchToProps = (dispatch) => ({
  //   GetCategoryAllRequest: () => dispatch(GetCategoryAllRequest()),
  //   GetDesignListCountRequest: (cate1, cate2) => dispatch(GetDesignListCountRequest(cate1, cate2))
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
