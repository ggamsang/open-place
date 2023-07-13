import React from "react";
import * as styled from "./styles";
import { InputTag } from "desktop/components/Commons/Input";
import InputNormal from "desktop/components/Commons/Input/InputNormal";
import DropDownNormal from "desktop/components/Commons/DropDown/DropDownNormal";
import { goto } from "navigator";
import { CATEs, FILE, TYPEs } from "constant";
import ContentMaker from "desktop/components/ContentMaker/ContentMaker";

import { resolution } from "desktop/commons/resolution";
import SearchForm from "desktop/components/Commons/Search/SearchForm";
import ButtonNormal from "desktop/components/Commons/Button/ButtonNormal";
import TextAreaNormal from "desktop/components/Commons/TextArea/TextAreaNormal";
import { InputPrice } from "desktop/components/Commons/Input";
import AddContent from "desktop/components/Commons/AddContent/AddContent";
import { Editor } from "desktop/commons/Editor/Editor";
import { InputGameFile } from "desktop/components/Commons/Input";
import ExpType from "../Common/ExpType";
import ImageGame from "resources/gamemeet.avif";
import ImageReading from "resources/readingmeet.avif";
import { FileUploadRequest } from "actions/Uploads";

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
      category: 0,
      info: null,
      exp_files: [],
      meet_type: null,
      //
      contents: [],
      loading: false,
    };
    this.onChangeThumbnail = this.onChangeThumbnail.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeInfo = this.onChangeInfo.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onClickOK = this.onClickOK.bind(this);
    this.onChangeMeetType = this.onChangeMeetType.bind(this);
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
    if (parseInt(event.target.value, 10) === 0) {
      // alert("카테고리를 선택해주세요.");
      return;
    }
    this.setState({
      category: parseInt(event.target.value, 10),
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
    if (parseInt(event.target.value, 10) === 0) {
      return;
    }
    this.setState({
      exp_type: parseInt(event.target.value, 10),
    });
    // console.log(typeof this.state.exp_type, this.state.exp_type);
  };
  onChangeMeetType = (type) => {
    console.clear();
    console.log(type);
    this.setState({ meet_type: type });
  };
  onClickOK = async (event) => {
    await this.setState({ loading: true });
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
      contents,
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
      contents: contents || [],
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
    if (title === null || title === "") {
      return alert("제목을 입력하세요");
    }
    if (thumbnail === null) {
      return alert("섬네일을 선택해주세요.");
    }
    if (category === null || category === 0) {
      return alert("카테고리를 선택해주세요.");
    }
    if (exp_type === null || exp_type === 0) {
      return alert("경험유형을 선택주세요.");
    }
    // if (info === null || info === "") {
    //   return alert("내용을 입력하세요");
    // }
    // console.log({ data });
    // return;

    console.clear();
    console.log(this.state);

    // modal message "파일을 업로드 및 업로드url 요청중입니다."
    // uid, user_id, parent_id, content, type, data_type, extension, order, file_name, create_time, update_time, option, thumbnail, title
    // content, type, data_type, extension, order, file_name, create_time, update_time, option, thumbnail, title
    const newContents = await contents.map(async (item) => {
      let newitem = {
        type: item.type,
        order: item.order,
        content: item.content,
      };
      if (item.type === FILE) {
        const url = await FileUploadRequest(item.file);
        newitem.content = url.success ? url.path : "";
        newitem.file_name = item.file[0].name;
        newitem.option = item.option;
        newitem.data_type = item.file[0].type;
      }
      return newitem;
    });
    data.contents = await Promise.all(newContents);

    this.props.createExpRequest(data, this.props.token).then(async (result) => {
      console.log({ result });
      alert("등록되었습니다. 해당페이지로 이동합니다.");
      await this.setState({ loading: false });

      goto("EXP", result.data.id);
      // goto("PLAY");
    });
    await this.setState({ loading: false });
  };

  handleGotData = async (data) => {
    console.log("handle got data:", data);
    await this.setState({ contents: data });
  };

  render() {
    console.log(this.state, this.props);

    return (
      <styled.Main>
        <styled.AddExpText>경험 등록</styled.AddExpText>

        <styled.Wrapper>
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
                  height={45}
                  fontSize={20}
                  color={"#E9E9E9"}
                />
              </styled.TitleDiv>

              <styled.CategoryDiv>
                <div>경험유형</div>
                <DropDownNormal
                  value={this.state.exp_type}
                  onChangeValue={this.onChangeExpType}
                  width={250}
                  height={50}
                  radius={10}
                  color={"#CCC"}
                  options={TYPEs}
                  // options={this.props.exp_type}
                />
              </styled.CategoryDiv>

              <styled.CategoryDiv>
                <div>카테고리</div>
                <DropDownNormal
                  value={this.state.category}
                  onChangeValue={this.onChangeCategory}
                  width={250}
                  height={51}
                  radius={10}
                  color={"#E9E9E9"}
                  options={CATEs}
                  // options={this.props.category.slice(0, 3)}
                />
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
            </styled.InfoBox>
          </styled.Wrapper>
        </styled.Wrapper>
        <styled.Wrapper>
          <styled.ExpDetailBox>
            <span>경험 상세</span>
            <ContentMaker origin={[]} getcontents={this.handleGotData} />
            {/* <ExpType
              meet_type={this.state.meet_type}
              type={this.state.exp_type}
              getContent={this.onChangeContent}
              getFiles={this.onFileChange}
              return={(value) => this.setState({ exp_type_detail: value })}
            /> */}
          </styled.ExpDetailBox>
        </styled.Wrapper>
        {/* <styled.AddFile></styled.AddFile> */}
        <styled.Wrapper>
          <styled.AddButton
            onClick={() => this.state.loading == false && this.onClickOK()}
          >
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
