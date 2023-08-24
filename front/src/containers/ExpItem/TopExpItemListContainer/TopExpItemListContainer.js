import React, { Component } from "react";
import { connect } from "react-redux";
import { GetTopExpItemListRequest } from "redux/modules/expitem";
import ScrollList from "components/Commons/ScrollListNew/ScrollListAgainNew";
import Loading from "components/Commons/Loading";
import Item from "components/Item/Item";
import opendesign_style from "opendesign_style";
import styled from "styled-components";

const TopListText = styled.div`
  margin-top: 18px;
  margin-bottom: 9.05px;
  width: 100%;

  text-align: center;
  font: normal normal 900 44px/52px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;
class TopExpItemListContainer extends Component {
  componentDidMount() {
    this.props.GetTopExpItemListRequest(0);
  }
  getList = async (page) => {
    return this.props.GetTopExpItemListRequest(page);
  };

  render() {
    // const { Head, width } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <TopListText>인기아이템</TopListText>
        {this.props.status === "INIT" ? (
          <Loading />
        ) : (
          <ScrollList
            ListComponent={Item}
            type="design"
            height={"max-content"}
            dataList={this.props.dataList}
            dataListAdded={this.props.dataListAdded}
            getList={this.getList}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataList: state.DesignList.status.TopList,
    dataListAdded: state.DesignList.status.TopListAdded,
    status: state.DesignList.TopList.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetTopExpItemListRequest: (page) => {
      return dispatch(GetTopExpItemListRequest(page));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopExpItemListContainer);
