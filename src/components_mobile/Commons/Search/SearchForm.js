import React, { Component } from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';

import Search from 'components_mobile/Search';
import back_arrow from 'source/Iconly-Bold-left-arrow.svg';
import alarm from 'source/Iconly-alarm-white.svg'
import { useNavigate } from 'react-router';
import AlarmContainer from 'containers/AlarmContainer';

const SearchBox = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
  .alarm_box{box-sizing:border-box;width:${resolution(34)}px;display:flex;justify-content:center;margin-left:10px;}
  .img_arrow{width:${resolution(27)}px;height:${resolution(19)}px;}

`

class SearchForm extends Component {
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

  render() {

    return (
      <React.Fragment>
        <SearchBox>
          {this.props.isMain == null
            && <div onClick={this.onClickBack} className='arrow_box'>
              <img className='img_arrow' src={back_arrow} />
            </div>}

          <Search
            width={302}
            keyword={this.props.keyword}
            placehoder={this.props.placehoder}
            disabled_filter={this.props.disabled_filter} />

          {this.props.isMain != null
            && <AlarmContainer />}

        </SearchBox>
      </React.Fragment>
    )
  }
}

export default SearchForm;
