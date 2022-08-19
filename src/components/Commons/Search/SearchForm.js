import React, { Component } from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';

import Search from 'components/Search';
import back_arrow from 'source/Iconly-Bold-left-arrow.svg';
import alarm from 'source/Iconly-alarm-white.svg'
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import NotificationContainer from 'containers/NotificationContainer';

const SearchBox = styled.div`
  *{
    border-box:box-sizing;
  }
  width: 351px;
  height: 43px;
  background: transparent linear-gradient(90deg, #FFFFFF 0%, #424242 100%) 0% 0% no-repeat padding-box;
  border-radius: 0px 22px 22px 0px;
  opacity: 1;
    // // width:100%;
    // display:flex;
    // align-items:center;
    // justify-content:center;
  .arrow_box{width:${resolution(27)}px;display:flex;justify-content:center;margin-right:10px;}
  .alarm_box{box-sizing:border-box;width:${resolution(34)}px;display:flex;justify-content:center;margin-left:10px;}
  .img_arrow{width:${resolution(27)}px;height:${resolution(19)}px;}

  .searchWrap{
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

`

class SearchForms extends Component {
  constructor(props) {
    super(props);
    this.onClickEvent = this.onClickEvent.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
  }

  onClickEvent = () => {
    this.props.onClickEvent();
  }
  onClickBack = () => {
    window.history.go(-1);
  }
  componentDidUpdate(props) {
    if (this.props.active && (props.active !== this.props.active)) {
      return true;
    }
  }

  render() {
    const { isLoggedIn: active } = this.props;
    return (
      <React.Fragment>
        <SearchBox>
          {/* {window.location.pathname !== `/` &&
            <div onClick={this.onClickBack} className='arrow_box'>
              <img className='img_arrow' src={back_arrow} />
            </div>} */}

          {/* <div className='searchWrap'> */}
          <Search
            width={291}
            keyword={this.props.keyword}
            placeholder={this.props.placeholder}
            disabled_filter={this.props.disabled_filter} />

          {/* {this.props.isMain != null
            && <NotificationContainer active={active} />} */}
          {/* </div> */}
        </SearchBox>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.Authentication.status.isLoggedIn,
  }
};
const mapDispatchToProps = () => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(SearchForms);
