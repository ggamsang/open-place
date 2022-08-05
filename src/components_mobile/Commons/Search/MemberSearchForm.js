import React, { Component } from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';

import { MemberSearch as Search } from 'components_mobile/Search';
import back_arrow from 'source/Iconly-Bold-left-arrow.svg';
// import alarm from 'source/Iconly-alarm-white.svg'
// import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
// import NotificationContainer from 'containers/NotificationContainer';

const SearchBox = styled.div`
  *{
    border-box:box-sizing;
  }
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
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

class MemberSearchForm extends Component {
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
    if (this.props.active && (props.active!== this.props.active)) {
      return true;
    }
  }

  render() {
    const { isLoggedIn: active, token } = this.props;
    return (
      <React.Fragment>
        <SearchBox>
          {this.props.isMain === null
            && <div onClick={this.onClickBack} className='arrow_box'>
              <img className='img_arrow' src={back_arrow} />
            </div>}
          <div className='searchWrap'>
            <Search
              token={token}
              width={291}
              keyword={this.props.keyword}
              placeholder={this.props.placeholder}
              disabled_filter={this.props.disabled_filter} />
          </div>
        </SearchBox>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.Authentication.status.isLoggedIn,
    token: state.Authentication.status.token,
  }
};
const mapDispatchToProps = () => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(MemberSearchForm);
