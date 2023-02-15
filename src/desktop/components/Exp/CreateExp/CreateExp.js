import React from "react";
import * as styled from "./styles";
import { resolution } from "desktop/commons/resolution";
import SearchForm from "desktop/components/Commons/Search/SearchForm";
import ButtonNormal from "desktop/components/Commons/Button/ButtonNormal";
import { InputTag } from "desktop/components/Commons/Input";
import InputNormal from "desktop/components/Commons/Input/InputNormal";
import DropDownNormal from "desktop/components/Commons/DropDown/DropDownNormal";
import TextAreaNormal from "desktop/components/Commons/TextArea/TextAreaNormal";
import { InputPrice } from "desktop/components/Commons/Input";
import AddContent from "desktop/components/Commons/AddContent/AddContent";
import { Editor } from "desktop/commons/Editor/Editor";
import { InputGameFile } from "desktop/components/Commons/Input";
import { goto } from "navigator";
import ExpType from "../Common/ExpType";

const config = {
  readonly: false,
  height: 275,
  uploader: {
    insertImageAsBase64URI: true,
  },
  allowResizeX: false,
  allowResizeY: false,
  enableDragAndDropFileToEditor: true,

  tabIndex: 0,
  language: "ko",
  i18n: "ko",
  useSplitMode: false,
  showXPathInStatusbar: false,
  direction: "ltr",
  resize: false,
  toolbarButtonSize: "small",
};

class CreateExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: null,
      exp_type: 0,
      exp_type_detail: "",
      thumbnail: null,
      thumbnail_name: null,
      title: null,
      category: 1,
      info: null,
      exp_files: [],
    };
    this.onChangeThumbnail = this.onChangeThumbnail.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeInfo = this.onChangeInfo.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onClickOK = this.onClickOK.bind(this);

    this.onChangeContent = this.onChangeContent.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onChangeExpType = this.onChangeExpType.bind(this);
  }

  onChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  onChangeContent = (value) => {
    this.setState({ content: value });
  };
  onFileChange = async (files) => {
    this.setState({
      exp_files: [].concat(files),
    });
  };

  handleAddTag = (tag) => {
    this.setState({
      tag: tag.slice(),
    });
  };
  onChangePrice = (price) => {
    this.setState({
      price: price,
    });
  };

  onChangeCategory = (event) => {
    this.setState({
      category: event.target.value,
    });
  };
  onChangeInfo = (event) => {
    this.setState({
      info: event.target.value,
    });
  };
  onChangeThumbnail = async (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    const regExp = /.(jpe?g|png|bmp)$/i;
    if (regExp && !regExp.test(file.name)) {
      await alert("파일의 확장자가 올바른지 확인해주세요.", "확인");
      return;
    }
    reader.onload = () => {
      var image = new Image();
      image.src = reader.result;
      image.onload = () => {
        this.setState({
          is_rectangle: false,
          ratio: image.width / image.height,
          cropper: image.width / image.height !== 1.0,
        });
      };
    };
    reader.onloadend = () => {
      this.setState({ thumbnail: reader.result, thumbnail_name: file.name });
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(file);
    }
  };

  onChangeExpType = (event) => {
    this.setState({
      exp_type: event.target.value,
    });
  };

  onClickOK = async (event) => {
    const {
      thumbnail,
      title,
      tag,
      info,
      price,
      category,
      content,
      exp_files,
      exp_type,
      exp_type_detail,
    } = this.state;
    const data = {
      user_id: this.props.userInfo.uid,
      type: exp_type,
      type_detail: exp_type_detail,
      title: title,
      taglist: tag,
      info: info,
      price: price,
      category: category,
      content: content,
      files: [],
      exp_files: JSON.stringify(exp_files),
    };

    console.log(data);
    let file = {
      value: this.state.thumbnail,
      name: this.state.thumbnail_name,
      key: 0,
    };

    if (thumbnail != null) {
      await data.files.push(file);
    } // thumbnail 썸네일이 있을 경우에만
    if (title === null || title === "") return alert("제목을 입력하세요");
    if (info === null || info === "") return alert("내용을 입력하세요");

    this.props.createExpRequest(data, this.props.token).then((data) => {
      alert("새로생성된 경험아이템으로 이동합니다.");
      // goto("EXP", data.id);
      goto("PLAY");
    });
  };

  render() {
    console.log(this.state);

    return (
      <styled.Main>
        <styled.AddExpText>경험 등록</styled.AddExpText>
        <styled.Wrapper>
          <styled.AddThumbnail>
            <span>썸네일 이미지 등록</span>
            <div className="wrap">
              <input
                hidden
                onChange={this.onChangeThumbnail}
                id="file"
                type="file"
                accept="image/png, image/bmp, image/jpeg, image/jpg"
              />
              <label htmlFor="file">
                <styled.ThumbnailImg>
                  {this.state.thumbnail === null ? (
                    <span>
                      첨부
                      <br />
                      (여기를 클릭하여 <br />
                      섬네일을 선택해주세요.)
                    </span>
                  ) : (
                    <img alt="thumbnail" src={this.state.thumbnail} />
                  )}
                </styled.ThumbnailImg>
              </label>
            </div>
          </styled.AddThumbnail>

          <styled.InfoBox>
            <styled.TitleDiv>
              <div>제목</div>
              <InputNormal
                onChangeValue={this.onChangeTitle}
                value={this.state.title}
                placeholder={"제목을 입력하세요"}
                radius={10}
                width={350}
                height={31}
                fontSize={20}
                color={"#E9E9E9"}
              />
            </styled.TitleDiv>

            <styled.CategoryDiv>
              <div>카테고리</div>
              <DropDownNormal
                value={this.state.category}
                onChangeValue={this.onChangeCategory}
                width={250}
                height={51}
                radius={10}
                color={"#E9E9E9"}
                options={this.props.category.slice(0, 3)}
              />

              <DropDownNormal
                // value={}
                // margin={"100px"}
                color={"#E9E9E9"}
                onChangeValue={() => alert("개발중입니다.")}
                width={250}
                height={51}
                radius={10}
                options={this.props.category.slice(
                  3,
                  this.props.category.length - 1
                )}
              />
              {/* <styled.CategoryButton1>
                <span>대분류</span>
              </styled.CategoryButton1>
              <styled.CategoryButton2>
                <span>소분류</span>
              </styled.CategoryButton2> */}
            </styled.CategoryDiv>

            <styled.TagDiv>
              <div>태그</div>
              <div>
                <InputTag
                  placeholder={"태그를 입력하세요."}
                  getValue={this.handleAddTag}
                  width={"350"}
                />
              </div>
            </styled.TagDiv>

            <styled.DescriptionDiv>
              <div>설명</div>
              <TextAreaNormal
                onChangeValue={this.onChangeInfo}
                width={245}
                height={100}
                color={"#E9E9E9"}
                fontSize={15}
                radius={10}
                placeholder="설명을 입력하세요"
                value={this.state.info}
              />
            </styled.DescriptionDiv>
            {/* <styled.ExpTypeDiv>
              <div>경험유형</div>
              <styled.InputPriceDiv>
                <span>가격을 입력하세요.</span>
              </styled.InputPriceDiv>
            </styled.ExpTypeDiv> */}
            <styled.PriceDiv>
              <styled.PriceDivText>가격</styled.PriceDivText>
              {/* <styled.PriceBox>10000</styled.PriceBox> */}
              {/* <span>원</span> */}
              {/* <styled.AddPrice>
                <styled.AddPriceButton>+ 1천</styled.AddPriceButton>
                <styled.AddPriceButton>+ 1만</styled.AddPriceButton>
                <styled.AddPriceButton>+ 5만</styled.AddPriceButton>
                <styled.AddPriceButton>+ 10만</styled.AddPriceButton>
                <styled.AddPriceButton>+ 100만</styled.AddPriceButton>
              </styled.AddPrice> */}
              <InputPrice onChangeValue={this.onChangePrice} name="price" />
            </styled.PriceDiv>
          </styled.InfoBox>
        </styled.Wrapper>
        <styled.Wrapper>
          <styled.CategoryBox>
            <p>경험 유형</p>{" "}
            <DropDownNormal
              value={this.state.exp_type}
              onChangeValue={this.onChangeExpType}
              width={250}
              height={50}
              radius={10}
              color={"#CCC"}
              options={this.props.exp_type}
            />
          </styled.CategoryBox>
          <styled.ExpDetailBox>
            <span>경험유형 상세</span>
            <ExpType
              type={this.state.exp_type}
              getContent={this.onChangeContent}
              getFiles={this.onFileChange}
              return={(value) => this.setState({ exp_type_detail: value })}
            />
          </styled.ExpDetailBox>
        </styled.Wrapper>
        {/* <styled.AddFile></styled.AddFile> */}
        <styled.Wrapper>
          <styled.AddButton onClick={this.onClickOK}>
            <span>등록하기</span>
          </styled.AddButton>
          <styled.CancelButton onClick={() => goto("BACK")}>
            <span>취소하기</span>
          </styled.CancelButton>
        </styled.Wrapper>
        {/* <styled.Footer /> */}
      </styled.Main>
    );
  }
}
export default CreateExp;
