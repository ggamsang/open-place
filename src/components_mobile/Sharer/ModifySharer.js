import React from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';

import SearchForm from 'components_mobile/Commons/Search/SearchForm';
import SharerForm from './SharerForm';

import ButtonNormal from 'components_mobile/Commons/Button/\bButtonNormal';
import { WIDTH } from 'constant';

const Wrapper = styled.div`
  // witdh: ${WIDTH}px;
  width:100%;
  height:130vh;
  .header{
    width:100%;
    height:${resolution(290)}px;
    background: linear-gradient(205deg,#bf1d39,#8448b6);
  }
  .searchbox{
    width:100%;
    padding-top:50px;
    display:flex;
    align-items:center;
  }
  // .arrow_box{width:${resolution(53)}px;display:flex;justify-content:center;}
  .img_arrow{width:${resolution(27)}px;height:${resolution(19)}px;}

  .profile{
    margin-top:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    .thumbnail{
      width:${resolution(100)}px;
      height:${resolution(100)}px;
      border-radius:50%;
      background-color:#efefef;
    }
    .textWrap{
      width:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      .vrline{height:${resolution(44)}px;border-right:1px solid white;}
      .text{
        width:45%;
        font: normal normal bold 20px/20px Montserrat;
        color:white;
      }
    }
  }
`

const Detail = styled.div`
  width:100%;
  box-sizing:border-box;
  padding:20px;
`


class ModifySharer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "", country: null, city: null, email: "", bank_code: null, bank_number: "",
      thumbnail: null, thumbnail_name: "",
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }
  onSubmit = async () => {
    const { info, country, city, email, bank_code, bank_number, thumbnail, thumbnail_name } = this.state;
    let data = {
      info: info, country: country, city: city, email: email, bank_code: bank_code, bank_number: bank_number,
      // files: [],
    }
    // let file = { value: thumbnail, name: thumbnail_name, key: 0 };
    // if (thumbnail != null) { await data.files.push(file); }
    // console.log(data);
    this.props.updateSharerProfileRequest(1, data, this.props.token);
    window.history.go(-1);

  }
  onCancel = () => {
    window.history.go(-1);
  }
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <div className="header">
            <div className="searchbox"><SearchForm /></div>
            <div className='profile'>
              <div className='thumbnail' />
              <div className='textWrap' style={{ marginTop: "20px" }}>
                <div className='text' style={{ textAlign: "right" }}>닉네임</div>
                <div className='vrline' style={{ marginLeft: "26px", marginRight: "26px" }} />
                <div className='text' style={{ textAlign: "left" }}>#해쉬태그</div>
              </div>
            </div>
          </div>
          <Detail>

            <SharerForm {...this.props}
              onChangeInfo={(value) => this.setState({ info: value })}
              onChangeCountry={(value) => this.setState({ country: value })}
              onChangeCity={(value) => this.setState({ city: value })}
              onChangeEmail={(value) => this.setState({ email: value })}
              onChangeBankCode={(value) => this.setState({ bank_code: value })}
              onChangeBankNumber={(value) => this.setState({ bank_number: value })}
              onChangeThumbnail={(thumbnail, thumbnail_name) => this.setState({ thumbnail: thumbnail, thumbnail_name: thumbnail_name })}
            />
            
            <ButtonNormal
              onClickEvent={this.onSubmit}
              width={335}
              height={35}
              radius={10}
              bgColor={"#707070"}
              text="수정"
              style={{ marginTop: "20px" }}
            />
            <ButtonNormal
              onClickEvent={this.onCancel}
              width={335}
              height={35}
              radius={10}
              bgColor={"#707070"}
              text="뒤로가기"
              style={{ marginTop: "10px" }}
            />
          </Detail>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default ModifySharer;
