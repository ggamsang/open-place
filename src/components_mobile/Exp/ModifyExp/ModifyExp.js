import React from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';
import SearchForm from 'components_mobile/Commons/Search/SearchForm';
import ButtonNormal from 'components_mobile/Commons/Button/\bButtonNormal';
import { InputTag } from 'components_mobile/Commons/Input';
import InputNormal from 'components_mobile/Commons/Input/InputNormal';
import DropDownNormal from 'components_mobile/Commons/DropDown/DropDownNormal';
import TextAreaNormal from 'components_mobile/Commons/TextArea/TextAreaNormal';
import { InputPrice } from 'components_mobile/Commons/Input';
import AddContent from 'components_mobile/Commons/AddContent/AddContent';
import { goto } from 'navigator';
import { InputFile } from 'components_mobile/Commons/Input';
import { Editor } from 'commons/Editor/Editor';
import Jodit from 'commons/Jodit';

const Wrapper = styled.div`
    *{
      box-sizing:border-box;
    }
    width:100%;
    box-sizing:border-box;
    padding-bottom:30px;
    background: linear-gradient(205deg,#bf1d39,#8448b6);
    .header{
      width:100%;
    }
    .searchbox{
      width:100%;
      padding-top:50px;
      display:flex;
      align-items:center;
    }
    // .arrow_box{width:${resolution(53)}px;display:flex;justify-content:center;}
    .img_arrow{width:${resolution(27)}px;height:${resolution(19)}px;}

    .title{
      width:100%;
      height:${resolution(60)}px;
      display:flex;align-items:center;justify-content:center;
      font: normal normal bold 20px/20px Pretendard;color:white;
    }
    .content{
      padding:0px 20px;
      width:100%;
      .whitebox{
        border-radius:10px;
        padding:10px;
        width:100%;
        background-color:white;
        display:flex;
        align-items:center;
        box-shadow: 2px 2px 5px #00000029;

        .img_{border:none;background-color:#E9E9E9;width:${resolution(100)}px;height:${resolution(100)}px;border-radius:${resolution(10)}px;object-fit:cover;}
        .wrap{display:flex;flex-direction:column;justify-content:center;box-sizing:border-box;margin-left:13px;}
        .label{font: normal normal medium 15px/18px Noto Sans KR;}
        .text{font: normal normal bold 15px/18px Noto Sans KR;}

      }
      .row{
        display:flex;
        margin-top:20px;
        .label{
          padding-left:10px;
          width:${resolution(80)}px;height:${resolution(30)}px;
          font: normal normal bold 15px/18px Pretendard;color:white;
          display:flex;align-items:center;
        }
      }
      .buttonWrap{
        width:100%;
        display:flex;
        justify-content:space-between;
        margin-top:20px;
      }

    }
    }
`
const config = {
  readonly: false,
  height: 275,
  uploader: {
    insertImageAsBase64URI: true
  },
  allowResizeX: false,
  allowResizeY: false,
  enableDragAndDropFileToEditor: true,

  tabIndex: 0,
  language: 'ko',
  i18n: 'ko',
  useSplitMode: false,
  showXPathInStatusbar: false,
  direction: 'ltr',
  resize: false,
  toolbarButtonSize: 'small',
}
class ModifyExp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tag: null,
      thumbnail: null, thumbnail_name: null, title: null, type: 0, info: null, price: 0, exp_files: [],
      content: null,
    }
    this.onChangeThumbnail = this.onChangeThumbnail.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeInfo = this.onChangeInfo.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onClickOK = this.onClickOK.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onFileChange = this.onFileChange.bind(this);

  }
  async componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.expDetail) != JSON.stringify(this.props.expDetail)) {
      console.log(this.props);
      await this.setState({
        thumbnail: this.props.expDetail && this.props.expDetail.thumbnail,
        title: this.props.expDetail && this.props.expDetail.title,
        tag: [],
        type: this.props.expDetail && this.props.expDetail.category,
        info: this.props.expDetail && this.props.expDetail.info,
        price: this.props.expDetail && this.props.expDetail.price,
        content: this.props.expDetail && this.props.expDetail.content,
        exp_files: this.props.expDetail && JSON.parse(this.props.expDetail.exp_files),
      }, () => {
        let taglist = this.props.expDetail && this.props.expDetail.taglist;
        taglist = taglist && taglist.replace("[", "");
        taglist = taglist && taglist.replace("]", "");
        taglist = taglist && taglist.replace("\"", "");
        taglist = taglist && taglist.split(",") && taglist.split(",");
        console.log(taglist);
        this.setState({
          tag: [].concat(taglist)
        })
      })
      this.props.expDetail&&await this.setState({
        exp_files:this.props.expDetail==null?[]:JSON.parse(this.props.expDetail.exp_files)
      },()=>{console.log(this.state)})
    }
  }

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value })
  }
  onChangeContent = async(value) => {
    await this.setState({ content: value });
  }

  handleAddTag = (tag) => {
    this.setState({
      tag: tag.slice(),
    });
  }
  onChangePrice = (price) => {
    this.setState({
      price: price,
    })
  }
  onChangeType = (event) => {
    this.setState({ type: event.target.value });
  }
  onChangeInfo = (event) => {
    this.setState({ info: event.target.value })
  }
  onFileChange = async (files) => {
    this.setState({
      exp_files: [].concat(files),
    })
  }
  onChangeThumbnail = async (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    const regExp = /.(jpe?g|png|bmp)$/i;
    if (regExp && !regExp.test(file.name)) {
      await alert('파일의 확장자가 올바른지 확인해주세요.', "확인");
      return;
    }
    reader.onload = () => {
      var image = new Image();
      image.src = reader.result;
      image.onload = () => {
        this.setState({ is_rectangle: false, ratio: image.width / image.height, cropper: image.width / image.height !== 1.0 });
      }
    }
    reader.onloadend = () => {
      this.setState({ thumbnail: reader.result, thumbnail_name: file.name })
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(file);
    }
  };
  onClickOK = async (event) => {
    const { thumbnail, thumbnail_name, title, tag, info, price, type, exp_files, content } = this.state;
    let data = {
      user_id: this.props.userInfo.uid,
      item_id: this.props.item_id,
      title: title, taglist: tag, info: info, price: price, type: type, content:content,
      files: [], exp_files: JSON.stringify(exp_files)
    }
    // if (this.state.thumbnail != null || this.state.thumbnail !== "") {
    //   data.files.push(file);
    // }
    // if (data.files.length <= 0 || data.files[0].value === (this.props.MakerDetail && this.props.MakerDetail.image)) {
    //   delete data.files;
    // }
    let file = { value: this.state.thumbnail, name: this.state.thumbnail_name, key: 0 };

    console.log(data);
    if (thumbnail_name != null) { await data.files.push(file); } // thumbnail 썸네일이 있을 경우에만 
    if (data.files.length <= 0 || data.files[0].value === (this.props.expDetail && this.props.expDetail.image)) {
      delete data.files;
    }
    // if (title == null || title == "") return alert("제목을 입력하세요");
    // if (info == null || info == "") return alert("내용을 입력하세요");

    this.props.updateExpRequest(this.props.item_id, data, this.props.token)
    window.history.go(-1);
  }
  render() {
    return (
      <Wrapper>
        <div className='header'>
          <div className='searchbox'><SearchForm /></div>
          <div className='title'>경험등록하기</div>
        </div>
        <div className='content'>
          <div className='whitebox'>
            {
              this.state.thumbnail == null ?
                <div className='img_' /> :
                <img src={this.state.thumbnail} className="img_" alt="profile" />
            }            <div className='wrap'>
              {/* <div style={{ marginBottom: "9px" }}><span className="label">제목</span><sup style={{ color: "red" }}>*</sup><span className="text">{this.state.title}</span></div> */}
              <label className="findThumbnailText" htmlFor="file">
                <ButtonNormal
                  width={194}
                  height={30}
                  radius={10}
                  fontSize={15}
                  color={"red"}
                  bgColor={"white"}
                  border={"2px solid red"}
                  text="썸네일 등록" />
              </label>
            </div>
            <input hidden onChange={this.onChangeThumbnail} id="file" type="file" accept="image/png, image/bmp, image/jpeg, image/jpg" />
          </div>
          <div className='row'>
            <div className='label'>제목<sup style={{ color: "red" }}>*</sup></div>
            <InputNormal onChangeValue={this.onChangeTitle}
              value={this.state.title} placeholder={"제목을 입력하세요"} radius={10}
              width={245} height={31} fontSize={14} color={"#E9E9E9"} />
          </div>
          <div className='row'>
            <div className='label'>태그<sup style={{ color: "red" }}>*</sup></div>
            <div><InputTag taglist={this.state.tag} getValue={this.handleAddTag} width={"245"} /></div>
          </div>
          <div className='row'>
            <div className='label'>경험 유형<sup style={{ color: "red" }}>*</sup></div>
            <DropDownNormal
              value={this.state.type-1}
              onChangeValue={this.onChangeType}
              width={150} height={31} radius={10}
              options={this.props.category} />
          </div>
          <div className='row'>
            <div className='label'>설명</div>
            <TextAreaNormal
              value={this.state.info}
              onChangeValue={this.onChangeInfo}
              width={245} height={100}
              color={"#E9E9E9"} fontSize={15} radius={10}
              placeholder
              ="설명을 입력하세요"
            />
          </div>
          <div className='row'>
            <div className='label'>가격</div>
            <div>
              <InputPrice price={this.state.price} onChangeValue={this.onChangePrice} name="price" />
            </div>
          </div>
          <div className='row' style={{ flexDirection: "column" }}>
            <div className='label'>경험 컨텐츠</div>
            <div style={{ backgroundColor: "white" }}>
              <Jodit value={this.state.content} config={config} onChange={(value) => this.onChangeContent(value)} />
            </div>
          </div>
          <div className=''>
            {
              this.state.exp_files&&
              <InputFile files={this.state.exp_files} display={true} getValue={this.onFileChange} accept="" />
            }
          </div>
          <div className='buttonWrap'>
            <ButtonNormal
              onClickEvent={() => goto("BACK")}
              width={165}
              height={35}
              radius={10}
              fontSize={15}
              bgColor={"#707070"}
              text="취소하기"
              style={{ marginRight: "25px" }}
            />
            <ButtonNormal
              onClickEvent={this.onClickOK}
              width={165}
              height={35}
              radius={10}
              fontSize={15}
              bgColor={"red"}
              text="등록하기"
            />
          </div>
        </div>
      </Wrapper>);
  }
}
export default ModifyExp; 