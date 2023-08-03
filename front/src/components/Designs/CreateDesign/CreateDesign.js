import React from "react";
import * as styled from "./styles";
import { InputTag } from "components/Commons/Input";
import InputNormal from "components/Commons/Input/InputNormal";
import DropDownNormal from "components/Commons/DropDown/DropDownNormal";
import { goto } from "navigator";
import { CATEs, FILE, TYPEs } from "constant";
import { FileUploadRequest } from "actions/Uploader/Uploader";
import update from "react-addons-update";
import noimg from "source/noimg.png";
import noface from "source/thumbnail.png";
import Cross from "components/Commons/Cross";
import CheckBox2 from "components/Commons/CheckBox";
import { Dropdown, Modal } from "semantic-ui-react";
import Loading from "components/Commons/Loading";

import templateImgDesign from "source/template-image-design.png";
import templateImgSofware from "source/template-image-software.png";
import templateImgEngineering from "source/template-image-engineering.png";
import templateImgEmpty from "source/template-image-empty.png";
import TemplateGridEditor from "components/Designs/CreateDesign/TemplateGridEditor";

import FileController from "../CardSourceDetail/FileController";
import TextController from "../CardSourceDetail/TextControllerPlus";
import LinkController from "../CardSourceDetail/LinkController";

class AddContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: null, content: "", order: null };
  }
  addContent = async (type) => {
    if (type === "FILE") {
      await this.setState({
        type,
        order: this.props.order,
        content: "",
        initClick: true,
      });
      setTimeout(() => {
        this.setState({ initClick: false });
      }, 100);
    } else {
      await this.setState({ type, order: this.props.order, content: "" });
      this.returnData();
    }
  };
  changeType = () => {
    this.props.change && this.props.change();
  };
  returnData = async (data) => {
    if (data) {
      await this.setState({
        type: null,
        order: this.props.order,
        content: "",
        initClick: false,
      });
      this.props.getValue(data);
    } else {
      if (this.props.getValue) this.props.getValue(this.state);
    }
  };
  render() {
    return (
      <styled.ControllerWrap>
        <div className="innerBox">
          <styled.NewController
            className="first txt"
            onClick={() => this.addContent("FILE")}
            width="max-content"
            minWidth="116px"
            height="29px"
          >
            파일 등록하기
          </styled.NewController>
          <styled.NewController
            className="txt"
            onClick={() => this.addContent("TEXT")}
            width="max-content"
            minWidth="134px"
            height="29px"
          >
            텍스트 입력하기
          </styled.NewController>
          {/* <styled.NewController
            onClick={() => this.addContent("LINK")}
            width="max-content"
            minWidth="134px"
            height="29px"
          >
            하이퍼링크 등록하기
          </styled.NewController> */}

          {this.props.order === 0 ? (
            <styled.NewController
              className="txt complecated"
              width="max-content"
              height="29px"
            >
              <div onClick={this.changeType} className="txt">
                {/* 템플릿 선택하기 */}
                단계추가로 시작하기
              </div>
              {/* <Tip>
                <sup>&nbsp;?</sup>
                <div className="wrapper">
                  <div className="tip-txt">
                    <font style={{ color: "pink" }}>*&nbsp;</font>...</div>
                </div>
              </Tip> */}
            </styled.NewController>
          ) : null}
        </div>
        {this.state.type === "FILE" && (
          <FileController item={this.state} getValue={this.returnData} />
        )}
      </styled.ControllerWrap>
    );
  }
}
const template = [
  { type: "empty", text: "빈 템플릿", img: templateImgEmpty },
  { type: "fashion", text: "일반경험아이템 템플릿", img: templateImgDesign },
  {
    type: "engineering",
    text: "공학경험아이템 템플릿",
    img: templateImgEngineering,
  },
  {
    type: "software",
    text: "소프트웨어경험아이템 템플릿",
    img: templateImgSofware,
  },
];
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
      // contents: [],
      // loading: false,

      is_project: 0,
      info_dialog: false,
      contents: [],
      crop: { unit: "%", width: 50, aspect: 1 },
      loading: false,
      designId: null,
      isMyDesign: false,
      editor: false,
      basic: false,
      additional: false,
      content: false,
      step: 0,
      showSearch: false,
      title: "",
      thumbnail: noimg,
      thumbnail_name: "",
      cropper: false,
      is_rectangle: false,
      // categoryLevel1: this.props.userInfo.category1 || null,
      categoryLevel1: null,
      categoryLevel2: null,
      categoryLevel3: null,
      alone: true,
      members: [],
      addmem: [],
      delmem: [],
      license1: true,
      license2: true,
      license3: false,
      type: null,
      template: null,
      is_problem: false,
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

  onChangeValue = async (data, order) => {
    this.setState({
      contents: update(this.state.contents, {
        [order]: { content: { $set: data.content } },
      }),
    });
  };
  handBlur = async (order) => {
    // const content = this.state.contents[order];
    // delete content.initClick;
    this.setState({
      contents: update(this.state.contents, {
        [order]: { initClick: { $set: null } },
      }),
    });
  };
  onClickCancel = async (event) => {
    goto("BACK");
  };
  onClickOK = async (event) => {
    let designId = null;
    await this.setState({ loading: true });

    try {
      const {
        contents,
        exp_type,
        category,
        title,
        is_project,
        thumbnail,
        thumbnail_name,
      } = this.state;
      console.clear();
      console.log(this.state);
      if (
        title === "" ||
        exp_type === 0 ||
        category === 0 ||
        thumbnail_name === ""
      ) {
        alert("필수항목을 완성해주세요.");
        this.setState({ loading: false });
        return;
      }
      // return;
      // uid, user_id, title, explanation, thumbnail,
      // category_level1, design_type, category_level2,
      // category_level3, is_commercial, is_public,
      // is_modify, is_display_creater, is_problem,
      // parent_design, create_time, update_time, is_project,
      // is_members, d_flag

      contents &&
        contents.map((content) => {
          delete content.initClick;
          return content;
        });
      // return;
      let data = {
        title: title,
        // uid: this.props.userInfo.uid,
        is_project: is_project,
        contents: contents, // [*]
        category_level1: category,
        design_type: exp_type,
        files: [{ key: "thumbnail[]", value: thumbnail, name: thumbnail_name }],
        // is_commercial: license1 ? 1 : 0,
        // is_display_creater: license2 ? 1 : 0,
        // is_modify: license3 ? 1 : 0,
        //  is_problem: is_problem ? 1 : 0,
        // members: {
        //   add: this.state.addmem,
        //   del: this.state.delmem,
        // },

        // added
        type: this.state.type,
        steps: this.state.steps,
      };

      this.props
        .CreateDesignRequest(data, this.props.token)
        .then(async (res) => {
          if (res.success) {
            designId = res.design_id;
            window.location.href = `/exp/${designId}`;
          }
          await this.setState({ loading: false });
        });
    } catch (e) {
      alert(e + "와 같은 이유로 다음 단계로 진행할 수 없습니다.");
      await this.setState({ loading: false });
    } finally {
    }
    // await this.setState({ loading: true });
    // const {
    //   thumbnail,
    //   title,
    //   tag,
    //   info,
    //   price,
    //   category,
    //   content,
    //   exp_files,
    //   exp_type,
    //   exp_type_detail,
    //   contents,
    // } = this.state;

    // const data = {
    //   user_id: this.props.userInfo.uid,
    //   type: exp_type,
    //   type_detail: exp_type_detail,
    //   title: title,
    //   taglist: tag,
    //   info: info,
    //   price: price,
    //   category: category,
    //   content: content,
    //   files: [],
    //   exp_files: JSON.stringify(exp_files),
    //   contents: contents || [],
    // };

    // console.log(data);
    // let file = {
    //   value: this.state.thumbnail,
    //   name: this.state.thumbnail_name,
    //   key: 0,
    // };
    // if (thumbnail != null) {
    //   await data.files.push(file);
    // } // thumbnail 썸네일이 있을 경우에만
    // if (title === null || title === "") {
    //   return alert("제목을 입력하세요");
    // }
    // if (thumbnail === null) {
    //   return alert("섬네일을 선택해주세요.");
    // }
    // if (category === null || category === 0) {
    //   return alert("카테고리를 선택해주세요.");
    // }
    // if (exp_type === null || exp_type === 0) {
    //   return alert("경험유형을 선택주세요.");
    // }
    // // if (info === null || info === "") {
    // //   return alert("내용을 입력하세요");
    // // }
    // // console.log({ data });
    // // return;

    // console.clear();
    // console.log(this.state);

    // // modal message "파일을 업로드 및 업로드url 요청중입니다."
    // // uid, user_id, parent_id, content, type, data_type, extension, order, file_name, create_time, update_time, option, thumbnail, title
    // // content, type, data_type, extension, order, file_name, create_time, update_time, option, thumbnail, title
    // const newContents = await contents.map(async (item) => {
    //   let newitem = {
    //     type: item.type,
    //     order: item.order,
    //     content: item.content,
    //   };
    //   if (item.type === FILE) {
    //     const url = await FileUploadRequest(item.file);
    //     newitem.content = url.success ? url.path : "";
    //     newitem.file_name = item.file[0].name;
    //     newitem.option = item.option;
    //     newitem.data_type = item.file[0].type;
    //   }
    //   return newitem;
    // });
    // data.contents = await Promise.all(newContents);

    // this.props.createExpRequest(data, this.props.token).then(async (result) => {
    //   console.log({ result });
    //   alert("등록되었습니다. 해당페이지로 이동합니다.");
    //   await this.setState({ loading: false });

    //   goto("EXP", result.data.id);
    //   // goto("PLAY");
    // });
    // await this.setState({ loading: false });
  };

  handleGotData = async (data) => {
    console.log("handle got data:", data);
    await this.setState({ contents: data });
  };

  onAddValue = async (data) => {
    let copyContent = [...this.state.contents];
    let copyData = { ...data };

    copyData.initClick = true;
    for (let item of copyContent) {
      if (
        item.type === "FILE" &&
        item.fileUrl == null &&
        item.type === "FILE" &&
        item.content === ""
      ) {
        await copyContent.splice(item.order, 1, null);
      }
    }
    await copyContent.splice(copyData.order, 0, copyData);
    let newContent = copyContent.filter((item) => {
      return item !== null;
    });
    newContent = await Promise.all(
      newContent.map(async (item, index) => {
        item.order = await index;
        delete item.target;
        if (item.type === "FILE") delete item.initClick;
        if (item.order !== copyData.order) delete item.initClick;
        return item;
      })
    );
    await this.setState({ contents: newContent });
  };

  render() {
    // console.log(this.state, this.props);
    const { step, is_project, contents } = this.state;
    // console.log(this.props.DesignDetail);
    return (
      <styled.Main>
        <styled.AddExpText>경험 등록</styled.AddExpText>
        {this.state.loading && <Loading />}
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
            <styled.AddExpText>경험상세</styled.AddExpText>
            <div className="grid_wrapper">
              <div className="board_grid">
                <styled.ResetButtonWrapper
                  onClick={() =>
                    this.setState({
                      step: 2,
                      type: "normal",
                      is_project: 0,
                      contents: [],
                      steps: [],
                      template: null,
                    })
                  }
                >
                  작업취소하기
                  <i className="undo icon" />
                </styled.ResetButtonWrapper>
              </div>

              {is_project === 0 ? (
                <React.Fragment>
                  {contents && contents.length > 0 ? (
                    <React.Fragment>
                      {contents.map((item) => {
                        return (
                          <styled.ControllerWrap key={item.order}>
                            <div className="contentWrap">
                              {item.type === "FILE" ? (
                                <FileController
                                  item={item}
                                  name="source"
                                  initClick={this.state.click}
                                  getValue={this.onChangeFile}
                                  setController={this.setController}
                                />
                              ) : null}
                              {item.type === "TEXT" ? (
                                item.initClick == true ||
                                this.state.selectOrder == item.order ? (
                                  <TextController
                                    item={item}
                                    name={item.name}
                                    initClick={this.state.click}
                                    onBlurOrder={() => {
                                      this.handBlur(item.order);
                                      this.setState({ selectOrder: -1 });
                                    }}
                                    getValue={(data) =>
                                      this.onChangeValue(data, item.order)
                                    }
                                  />
                                ) : (
                                  <div
                                    style={{ textAlign: "initial" }}
                                    dangerouslySetInnerHTML={{
                                      __html: item.content,
                                    }}
                                    onClick={() =>
                                      this.setState({
                                        selectOrder: item.order,
                                      })
                                    }
                                  />
                                )
                              ) : null}
                              {/* {item.type === "LINK" ? (
                                <LinkController
                                  item={item}
                                  name={item.name}
                                  initClick={this.state.click}
                                  getValue={(data) =>
                                    this.onChangeValue(data, item.order)
                                  }
                                />
                              ) : null} */}
                            </div>
                            <styled.DelBtn
                              type="button"
                              className="editBtn"
                              onClick={() => this.onDelete(item.order)}
                            >
                              <i className="trash alternate icon large" />
                            </styled.DelBtn>
                          </styled.ControllerWrap>
                        );
                      })}
                      <AddContent
                        getValue={this.onAddValue}
                        order={contents.length}
                      />
                    </React.Fragment>
                  ) : (
                    <AddContent
                      getValue={this.onAddValue}
                      order={0}
                      change={async () => {
                        this.setState({ type: "grid", is_project: 1 });
                        await this.setState({ template: "empty" });
                      }}
                    />
                  )}
                </React.Fragment>
              ) : null}
              {/* {this.state.type === "grid" ? (
                <styled.DesignTemplateSelector>
                  <div className="title">
                    템플릿을 선택하시면 보다 편하게 작업을 시작하실 수 있습니다!
                  </div>

                  <div className="template-wrapper">
                    {template &&
                      template.length > 0 &&
                      template.map((item) => (
                        <label
                          className="element"
                          key={item.type}
                          onClick={async () =>
                            await this.setState({ template: item.type })
                          }
                        >
                          {item.text}
                          <styled.DesignElement>
                            <img alt="" src={item.img} />
                          </styled.DesignElement>
                        </label>
                      ))}
                  </div>
                </styled.DesignTemplateSelector>
              ) : null} */}

              {this.state.type === "grid" &&
              this.state.template != null &&
              this.state.template !== "my-design" ? (
                <styled.EditorWrapper>
                  <div className="editor">
                    <TemplateGridEditor
                      selected={(content) =>
                        this.setState({ steps: content, is_project: 1 })
                      }
                      type={this.state.template}
                    />
                  </div>
                  {/* <div className="title">
                    선택하신 템플릿으로 시작하시고 싶으시다면 완성된 경험아이템
                    등록하기 버튼을 클릭해주세요.
                  </div> */}
                </styled.EditorWrapper>
              ) : null}
            </div>
          </styled.ExpDetailBox>
        </styled.Wrapper>

        <styled.Wrapper>
          <styled.AddButton
            disabled={this.state.loading}
            onClick={async (e) => {
              if (this.state.loading) {
                alert("처리중입니다.");
                return;
              }
              await this.onClickOK(e);
              // console.log("job");

              // await this.setState({ loading: false });
              // console.log(4);
            }}
          >
            <span>등록하기</span>
          </styled.AddButton>
          <styled.CancelButton onClick={this.onClickCancel}>
            <span>취소하기</span>
          </styled.CancelButton>
        </styled.Wrapper>
        {/* <styled.Footer /> */}
      </styled.Main>
    );
  }
}
export default CreateExp;
