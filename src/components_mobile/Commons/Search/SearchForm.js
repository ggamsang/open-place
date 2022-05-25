import React, { Component } from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';

import Search from 'components_mobile/Search';
import back_arrow from 'source/Iconly-Bold-left-arrow.svg';
import { useNavigate } from 'react-router';
// const navigate = useNavigate();

const SearchBox = styled.div`
    width:100%;
    // padding-top:50px;
    display:flex;
    align-items:center;
  .arrow_box{width:${resolution(53)}px;display:flex;justify-content:center;}
  .img_arrow{width:${resolution(27)}px;height:${resolution(19)}px;}
`

class SearchForm extends Component {
  constructor(props){
      super(props);
      this.onClickEvent = this.onClickEvent.bind(this);
      this.onClickBack = this.onClickBack.bind(this);
  }

  onClickEvent = () =>{
    this.props.onClickEvent();
  }
  onClickBack=()=>{
    window.history.go(-1);
  }

  render() {
    
    return (
    <React.Fragment>
        <SearchBox>
            <div onClick={this.onClickBack} className='arrow_box'><img className='img_arrow' src={back_arrow}/></div><Search width={302}/>
        </SearchBox>
    </React.Fragment>
    )
  }
}

export default SearchForm;
