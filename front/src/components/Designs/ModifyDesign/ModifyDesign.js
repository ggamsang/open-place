import React from "react";
import * as styled from "./styles";
import { InputTag } from "components/Commons/Input";
import InputNormal from "components/Commons/Input/InputNormal";
import DropDownNormal from "components/Commons/DropDown/DropDownNormal";
import { goto } from "navigator";
import { CATEs, FILE, TYPEs } from "constant";
import update from "react-addons-update";
import Loading from "components/Commons/Loading";
import { alert } from "components/Commons/Alert/Alert";
import { confirm } from "components/Commons/Confirm/Confirm";

class ModifyExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: null,
      exp_type: this.props.DesignDetail.design_type,
      exp_type_detail: "",
      thumbnail: null,
      thumbnail_name: null,
      title: this.props.DesignDetail.title,
      category: this.props.DesignDetail.category_level1,
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
      // thumbnail: noimg,
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
      explanation: this.props.DesignDetail.explanation,
    };
    this.onChangeThumbnail = this.onChangeThumbnail.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeExplanation = this.onChangeExplanation.bind(this);
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
  onChangeExplanation = (event) => {
    this.setState({
      explanation: event.target.value,
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
    //   submit = () => {
    const { DesignDetail: detail, token } = this.props;

    let data = {
      user_id: detail.user_id,
      category_level1:
        this.state.category !== detail.category_level1
          ? this.state.category
          : detail.category_level1,
      design_type:
        this.state.exp_type !== detail.design_type
          ? this.state.exp_type
          : detail.design_type,
      title: this.state.title || detail.title,
      explanation: this.state.explanation || detail.explanation,
    };
    if (this.state.thumbnail) {
      data.files = [
        {
          value: this.state.thumbnail,
          name: this.state.thumbnail_name,
          key: "thumbnail[]",
        },
      ];
    }
    console.clear();
    console.log(data);
    // return;
    this.setState({ loading: true });
    this.props
      .UpdateDesignInfoRequest(data, detail.uid, token)
      .then(async (data) => {
        console.log(data);
        if (data?.res?.success) {
          await alert(
            "경험 정보 수정이 완료되었습니다. 경험보기 화면으로 이동합니다.",
            "확인"
          );
          goto("exp", detail.uid);
        } else {
          await alert("경험 정보 수정에 실패하였습니다.", "확인");
        }
      });
    this.setState({ loading: false });
  };

  onClickDelete = async () => {
    if (
      await confirm(
        "경험 아이템을 삭제합니다. 계속하시겠습니까?",
        "삭제",
        "취소"
      )
    ) {
      await alert("삭제 기능은 점검 중.");
    } else {
    }
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
    console.log(this.state, this.props);
    const { DesignDetail } = this.props;

    return (
      <styled.Main>
        <styled.AddExpText>경험정보 수정</styled.AddExpText>

        {this.state.loading && <Loading />}

        <styled.Wrapper>
          <styled.AddThumbnail>
            <span>썸네일 이미지 수정</span>
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
                  <img
                    alt="thumbnail"
                    src={this.state.thumbnail || DesignDetail?.img?.l_img}
                  />
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
                placeholder={DesignDetail?.title}
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
                value={this.state.exp_type || DesignDetail?.design_type}
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
                value={this.state.category || DesignDetail?.category_level1}
                onChangeValue={this.onChangeCategory}
                width={250}
                height={51}
                radius={10}
                color={"#E9E9E9"}
                options={CATEs}
                // options={this.props.category.slice(0, 3)}
              />
            </styled.CategoryDiv>

            <styled.CategoryDiv>
              <div>설명</div>
              <styled.InputTextArea
                value={this.state.explanation}
                onChange={this.onChangeExplanation}
                placeholder={DesignDetail?.explanation || "설명을 입력하세요."}
                width={350}
                height={90}
              />
            </styled.CategoryDiv>

            <styled.TagDiv>
              <div>태그</div>
              <div>
                <InputTag
                  value={this.state.tag || DesignDetail?.tag}
                  placeholder={"태그를 입력하세요."}
                  getValue={this.handleAddTag}
                  width={"350"}
                />
              </div>
            </styled.TagDiv>
          </styled.InfoBox>
        </styled.Wrapper>

        <styled.ButtonWrapper>
          <styled.AddButton
            disabled={this.state.loading}
            onClick={async (e) => {
              if (this.state.loading) {
                await alert("처리중입니다.");
                return;
              }
              await this.onClickOK(e);
            }}
          >
            <span>완료</span>
          </styled.AddButton>
          <styled.CancelButton onClick={this.onClickDelete}>
            <span>삭제</span>
          </styled.CancelButton>
        </styled.ButtonWrapper>
      </styled.Main>
    );
  }
}
export default ModifyExp;

// import React, { Component } from "react";
// import GridEditor from "components/Designs/GridEditor";
// import DesignDetailStepContainer from "containers/ExpItem/DesignDetailStepContainer";
// import SearchDesignMemverContainer from "containers/Commons/SearchDesignMemberContainer";
// import styled from "styled-components";
// import { geturl } from "config";
// import noimg from "source/noimg.png";
// import forked from "source/forked.svg";
// import noface from "source/thumbnail.png";
// // import iDelete from "source/deleteItem.png"
// import Cross from "components/Commons/Cross";
// import Loading from "components/Commons/Loading";
// import { Dropdown, Modal } from "semantic-ui-react";
// import Logo from "source/osd_logo.png";
// import CheckBox2 from "components/Commons/CheckBox";
// import DesignDetailViewContainer from "containers/ExpItem/DesignDetailViewContainer";
// import ReactCrop from "react-image-crop";
// // import { confirm } from "components/Commons/Confirm/Confirm";
// import { alert } from "components/Commons/Alert/Alert";
// import { confirm } from "components/Commons/Confirm/Confirm";
// import new_logo_view from "source/new_logo_view.svg";
// import new_logo_favorite from "source/new_logo_favorite.svg";
// import new_logo_share from "source/new_logo_share.svg";
// import new_logo_plus from "source/new_logo_plus.png";
// import osdcss from "opendesign_style";
// import { goto } from "navigator";
// import { CATEs } from "constant";

// const Section = styled.div`
//   display: ${(props) =>
//     props.isNone == true ? (props.isLast == null ? "flex" : "flex") : "none"};
//   @media only screen and (min-width: 500px) and (max-width: 1400px) {
//     display: ${(props) =>
//       props.isNone == true
//         ? props.isLast == null
//           ? "block"
//           : "block"
//         : "none"};
//   }
// `;
// const LoadingBox = styled.div`
//   padding-top: 200px;
//   .IconBox {
//     width: 100px;
//     height: 100px;
//     margin: 0 auto;
//   }
//   .loadingText {
//     margin-top: 20px;
//     width: 100%;
//     font-family: Noto Sans KR;
//     font-size: 20px;
//     text-align: center;
//   }
// `;
// const LoadingIconBox = styled.div`
//   width: 100px;
//   height: 100px;
//   margin: 0 auto;
//   background: ${(props) => `url(${props.imageURL})`};
//   background-position: center center;
//   background-repeat: no-repeat;
//   -webkit-animation: jello-horizontal 0.9s infinite both;
//   animation: jello-horizontal 0.9s infinite both;

//   @-webkit-keyframes jello-horizontal {
//     0% {
//       -webkit-transform: scale3d(1, 1, 1);
//       transform: scale3d(1, 1, 1);
//     }
//     30% {
//       -webkit-transform: scale3d(1.25, 0.75, 1);
//       transform: scale3d(1.25, 0.75, 1);
//     }
//     40% {
//       -webkit-transform: scale3d(0.75, 1.25, 1);
//       transform: scale3d(0.75, 1.25, 1);
//     }
//     50% {
//       -webkit-transform: scale3d(1.15, 0.85, 1);
//       transform: scale3d(1.15, 0.85, 1);
//     }
//     65% {
//       -webkit-transform: scale3d(0.95, 1.05, 1);
//       transform: scale3d(0.95, 1.05, 1);
//     }
//     75% {
//       -webkit-transform: scale3d(1.05, 0.95, 1);
//       transform: scale3d(1.05, 0.95, 1);
//     }
//     100% {
//       -webkit-transform: scale3d(1, 1, 1);
//       transform: scale3d(1, 1, 1);
//     }
//   }
//   @keyframes jello-horizontal {
//     0% {
//       -webkit-transform: scale3d(1, 1, 1);
//       transform: scale3d(1, 1, 1);
//     }
//     30% {
//       -webkit-transform: scale3d(1.25, 0.75, 1);
//       transform: scale3d(1.25, 0.75, 1);
//     }
//     40% {
//       -webkit-transform: scale3d(0.75, 1.25, 1);
//       transform: scale3d(0.75, 1.25, 1);
//     }
//     50% {
//       -webkit-transform: scale3d(1.15, 0.85, 1);
//       transform: scale3d(1.15, 0.85, 1);
//     }
//     65% {
//       -webkit-transform: scale3d(0.95, 1.05, 1);
//       transform: scale3d(0.95, 1.05, 1);
//     }
//     75% {
//       -webkit-transform: scale3d(1.05, 0.95, 1);
//       transform: scale3d(1.05, 0.95, 1);
//     }
//     100% {
//       -webkit-transform: scale3d(1, 1, 1);
//       transform: scale3d(1, 1, 1);
//     }
//   }
// `;
// const CropperDialog = styled(Modal)`
//   max-width: ${(props) => (props.ratio < 1.0 ? 450 : 650)}px;
//   // height: ${(props) => (props.ratio < 1.0 ? 650 : 450)}px;
//   height: max-content;
//   padding: 20px;
//   border-radius: 5px;
//   background-color: #ffffff;
//   box-shadow: 0px 3px 6px #ff0000;
//   .imagebox {
//   }
//   .edit-step-name-button-container {
//     display: flex;
//     width: 576px;
//     margin-left: auto;
//     margin-right: 75px;
//     margin-top: 38px;
//   }
// `;
// const CustomButton = styled.div`
//   cursor: pointer;
//   width: 86px;
//   min-width: 86px;
//   height: 49px;
//   background-color: ${(props) => (props.isComplete ? "#FF0000" : "#8D8D8D")};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-left: 34px;
//   cursor: pointer;
// `;
// const BtnText = styled.p`
//   font-family: Spoqa Han Sans Neo;
//   font-weight: Medium;
//   font-size: 28px;
//   color: white;
// `;
// const PeerBox = styled.div`
//   display: flex;
//   margin-right: 25px;
//   margin-bottom: 10px;
//   .nameLabel {
//     width: max-content;
//     height: 29px;
//     margin-top: 1px;
//     margin-left: 10px;
//     font-size: 20px;
//     font-weight: 500;
//     font-family: Noto Sans KR;
//     color: #707070;
//     text-align: left;
//     line-height: 29px;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
//   .closeButton {
//     margin-top: 7px;
//     margin-left: 14px;
//   }
//   @media only screen and (min-width: 360px) and (max-width: 780px) {
//     margin-right: 15px;
//   }
// `;
// const PeerIcon = styled.div`
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
//   background: ${(props) => `url(${props.imageURL})`};
//   background-size: cover;
//   background-position: center center;
// `;
// const InviteMemberListBox = styled.div`
//   width: 645px;
//   height: 200px;
//   margin-left: 191px;
//   padding-top: 50px;
//   overflow-y: auto;
//   .memberList {
//     display: flex;
//     flex-wrap: wrap;
//     flex-direction: row;
//   }
// `;
// const IsProblemBox = styled.div`
//   margin-top: 50px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-start;
//   font-size: 22px;
//   font-family: Spoqa Han Sans;
//   height: 45px;

//   .textLabel {
//     vertical-align: top;
//     padding-top: 5px;
//     padding-left: 10px;
//   }
// `;
// const Wrapper = styled.div`
//   display: flex;
//   margin-bottom: 150px;
//   // flex-wrap:wrap;
//   .maxFlex {
//     display: flex;
//     width: 100%;
//     align-items: center;
//   }
//   .category_wrapper {
//     display: flex;
//     flex-wrap: wrap;
//     max-width: 1200px;
//     width: 100%;
//   }
//   .flex {
//     max-width: 800px;
//     display: flex;
//     flex-wrap: wrap;
//   }
//   .flex2 {
//     max-width: 1200px;
//     width: 100%;
//   }
//   .navi_menu {
//     // min-width: 264px;
//     // width: 264px;
//     // height: 100%;
//     padding: 36px 38px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     .navi_header {
//       min-width: max-content;
//       width: 187px;
//       height: 40px;
//       margin-bottom: 32px;
//       font-family: Spoqa Han Sans Neo;
//       font-weight: 500;
//       font-size: 28px;
//       text-align: center;
//     }
//     .navi_label {
//       min-width: max-content;
//       width: 187px;
//       min-height: 84px;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       font-family: Spoqa Han Sans Neo;
//       font-size: 28px;
//       cursor: pointer;
//     }
//     .red {
//       color: red;
//     }
//     .black {
//       color: black;
//     }
//     .select {
//       color: #1262ab;
//     }
//     .delete {
//       // margin-top: 531px;
//       cursor: pointer;
//     }
//     .borderBottom {
//       border-bottom: 2px solid #707070;
//     }
//   }
//   .vLine {
//     border: 1px solid #cccccc;
//     margin: 53px 0px;
//     height: 871px;
//   }
//   .summary {
//     padding: 45px 77px;
//   }
//   .completeButton {
//     width: 100%;
//     height: 94px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: black;
//     font-family: Spoqa Han Sans Neo;
//     font-size: 28px;
//     border: 1px solid #eaeaea;
//     box-shadow: 8px 8px 8px #0000002b;
//     margin-top: 61px;
//     cursor: pointer;
//   }
//   .marginRight1 {
//     margin-right: 51px;
//   }
//   .marginRight2 {
//     margin-right: 0px;
//   }
//   .flex_board {
//     display: flex;
//   }
//   .board {
//     max-width: 1248px;
//     min-width: 1000px;
//     width: 100%;
//     height: max-content;
//     padding: 56px 72px 0px 72px;
//     .board_label {
//       width: max-content;
//       min-width: 195px;
//       display: flex;
//       align-items: center;
//       height: 40px;
//       font-family: Spoqa Han Sans Neo;
//       font-weight: Medium;
//       font-size: 28px;
//     }
//     .guide {
//       font-size: 20px;
//       font-family: Spoqa Han Sans Neo;
//       line-height: 28px;
//       color: #707070;
//     }
//     .board_box {
//       width: 100%;
//       padding-left: 40px;
//       display: flex;
//     }
//     .column {
//       flex-direction: column;
//     }
//     .paddingLeft1 {
//       padding-left: 200px;
//     }
//     .buttonBox {
//       display: flex;
//       justify-content: flex-end;
//       align-items: center;
//       margin-top: 26px;
//     }
//   }
//   .grid_wrapper {
//     min-width: 1000px;
//     width: 100%;
//     max-width: 1566px;
//     padding-left: 50px;
//     display: flex;
//     flex-direction: column;
//     .grid_buttonWrap {
//       display: flex;
//       justify-content: flex-end;
//       width: 100%;
//       .button {
//         cursor: pointer;
//         width: 86px;
//         height: 49px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         color: white;
//         font-size: 28px;
//         font-family: Spoqa Han Sans Neo;
//       }
//       .grey {
//         background-color: #8d8d8d;
//       }
//       .red {
//         background-color: red;
//       }
//     }
//   }
//   .board_Grid {
//     max-width: 1566px;
//     width: 96%;
//     height: max-content;
//   }
//   .addImg {
//     width: 290px;
//     height: 290px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #e9e9e9;
//     margin-bottom: 20px;
//     margin-top: 10px;
//     object-fit: cover;
//     .plus {
//       width: 100px;
//       height: 100px;
//       object-fit: fit;
//     }
//   }
//   .sub {
//     height: 40px;
//     color: red;
//   }
//   .licenseItem {
//     margin-bottom: 46px;
//     color: #707070;
//     font-size: 22px;
//     font-weight: 300;
//     font-family: Spoqa Han Sans;
//     .textLabel {
//       margin-left: 35px;
//       vertical-align: top;
//     }
//   }
//   .row {
//     width: 100%;
//     display: flex;
//   }
//   .imageBox {
//     width: 290px;
//     height: 290px;
//     background-color: #e9e9e9;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   .imageLabel {
//     margin-left: 38px;
//     padding-top: 10px;
//     .findThumbnailText {
//       cursor: pointer;
//       font-size: 30px;
//       font-family: Spoqa Han Sans Neo;
//       font-weight: Regular;
//       color: red;
//     }
//     .thumbnailExplainText {
//       font-size: 22px;
//       font-family: Spoqa Han Sans;
//       font-weight: Regular;
//       color: #707070;
//       margin-top: 15px;
//       line-height: 33px;
//     }
//   }
//   .dropdown {
//     width: 228px;
//     min-height: 41px !important;
//     max-height: 41px !important;
//     padding: 0px 20px !important;
//     display: flex !important;
//     align-items: center !important;
//     justify-content: space-between !important;
//     border-radius: 0px !important;
//   }
//   .messageBubble {
//     width: 100%;
//     display: none;
//     .quest {
//       min-width: 20px;
//       min-height: 20px;
//       max-width: 20px;
//       max-height: 20px;
//       font-size: 15px;
//       font-family: Noto Sans KR;
//       font-weight: 400;
//       border-radius: 50%;
//       background-color: red;
//       color: white;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//   }
//   @media only screen and (min-width: 500px) and (max-width: 1400px) {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     .board {
//       padding-left: auto;
//       padding-right: auto;
//     }
//     .grid_wrapper {
//       padding-left: 0px;
//       padding-left: auto;
//       padding-right: auto;
//     }
//     .vLine {
//       width: 96%;
//       min-width: 1000px;
//       margin: 0;
//       margin-left: auto;
//       margin-right: auto;
//       height: 0px;
//       border-bottom: 1px solid #cccccc;
//       margin-top: 60px;
//     }
//     .navi_menu {
//       min-width: 1000px;
//       width: 100%;
//       height: 100px;
//       display: flex;
//       flex-direction: row;
//       align-items: center;
//       flex-wrap: wrap;
//       justify-content: center;
//       .navi_header {
//         width: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//       }
//       .navi_label {
//         min-height: 40px;
//       }
//       .borderBottom {
//         border: none;
//       }
//       .delete {
//         margin: 0;
//         margin-left: 50px;
//       }
//     }
//     .messageBubble {
//       display: flex;
//     }
//   }
// `;

// const ContentWrapper = styled.div`
//   max-width: 1566px;
//   width: 100%;

//   // display:flex;
//   padding-bottom: 100px;
//   .formWrap {
//     max-width: 1248px;
//     width: 100%;
//   }
//   .buttonWrap {
//     min-height: 920px;
//     display: flex;
//     justify-content: flex-end;
//     align-items: flex-end;
//     width: 250px;
//     .button {
//       cursor: pointer;
//       width: 86px;
//       height: 49px;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       color: white;
//       font-size: 28px;
//       font-family: Spoqa Han Sans Neo;
//     }
//     .grey {
//       background-color: #8d8d8d;
//     }
//     .red {
//       background-color: red;
//     }
//   }
//   @media only screen and (min-width: 500px) and (max-width: 1400px) {
//     .buttonWrap {
//       padding-right: 30px;
//       width: 100%;
//       min-width: 1000px;
//       height: max-content;
//       min-height: max-content;
//       margin-top: 30px;
//     }
//   }
// `;
// const QuestionGuide = styled.div`
//   width: 35px;
//   height: 35px;
//   background-color: red;
//   border-radius: 50%;
//   color: white;
//   font-size: 30px;
//   font-weight: 800;
//   font-family: Spoqa Han Sans;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 4px;
//   margin-left: 10px;
//   position: relative;
//   cursor: default;
//   .messageBubble {
//     width: ${(props) => props.bubbleSize}px;
//     font: normal normal normal 20px/27px Noto Sans KR;
//     letter-spacing: 0px;
//     line-height: 25px;
//     color: #707070;
//     font-weight: 400;
//     padding: 10px;
//     position: absolute;
//     left: ${(props) => props.left}px;
//     top: ${(props) => props.top}px;

//     z-index: 888;

//     display: block;
//   }
//   @media only screen and (min-width: 500px) and (max-width: 1400px) {
//     display: none;
//     .messageBubble {
//       display: none;
//     }
//   }
// `;
// const DesignCard = styled.div`
//   *{
//     font-family:Spoqa Han Sans Neo;
//     color:black;
//   }
//   width:360px;
//   height:525px;
//   box-shadow: 8px 8px 8px #4141411A;
//   border: 0.5px solid #eaeaea;

//   .thumbnail{
//     width:100%;
//     height:333px;
//     border: 0.5px solid #eaeaea;
//   }
//   .info{
//     width:100%;
//     padding:21px 23px 31px 23px;
//   }
//   .spaceBetween{
//     width:100%;
//     display:flex;
//     align-items:center;
//     justify-content:space-between;
//     margin-bottom:7px;
//   }
//   .title{
//     font-size:37px;
//     font-weight:600;
//     height:49px;
//     display:flex;
//     align-items:center;
//   }
//   .date{
//     color:#707070;
//     font-size:17px;
//   }
//   .designer{
//     font-size:16px;
//   }

//   .asset_wrapper{
//     width:100%;
//     height:30px;
//     display:flex;
//     align-items:center;
//     margin-top:31px;
//     .asset_icon{
//       width:27px;
//       height27px;
//       object-fit:cover;
//     }
//     .asset_text{
//       min-width:70px;
//       font-size:18px;
//       padding-left:10px;
//     }
//   }
// `;
// const InputText = styled.input`
//   width: 880px;
//   height: 51px;
//   background-color: #e9e9e9;
//   padding: 5px 20px;
//   outline: none;
//   border: none;
//   resize: none;
//   // margin-left:30px;
//   margin-top: 12px;
//   font-size: 22px;
// `;
// const InputTextArea = styled.textarea`
//   width: 880px;
//   height: 323px;
//   background-color: #e9e9e9;
//   padding: 20px;
//   outline: none;
//   border: none;
//   resize: none;
//   // margin-left:30px;
//   margin-top: 24px;
//   font-size: 22px;
// `;
// const CategoryDropDown = styled(Dropdown)`
//   max-width: 309px;
//   height: 41px !important;
//   font-family: Spoqa Han Sans, Regular;
//   font-size: 22px;
//   background-color: #8e8e8e !important;
//   margin-right: 68px;
//   margin-top: 10px;
//   margin-bottom: 10px;
//   .text {
//     color: white !important;
//   }
//   .item {
//     background-color: #8e8e8e !important;
//   }
// `;
// const ResetButtonWrapper = styled.div`
//   width: max-content;
//   margin-left: auto;
//   margin-right: 25px;
//   color: #707070;
//   font-size: 16px;
//   cursor: pointer;
//   margin-top: 10px;
//   margin-bottom: 20px;
// `;
// const DelBtn = styled.button`
//   display: none;
//   position: absolute;
//   top: 0;
//   left: 95%;
//   transform: translate(-50%, -50%);
//   border: 0;
//   padding: 0;
//   width: 45px;
//   height: 45px;
//   border-radius: 25px;
//   line-height: 25px;
//   box-sizing: border-box;
//   font-size: 12px;
//   background-color: ${osdcss.color.main.basic};
//   color: white;
//   text-align: center;
//   box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
//   outline: 0;
//   i.icon {
//     margin: 0;
//   }
//   &:focus .subMenu {
//     display: block;
//   }
// `;
// const DesignTemplateSelector = styled.div`
//   max-width: 100%;
//   width: 100%;
//   .title {
//     width: max-content;
//     margin: auto;
//     color: #707070;
//     padding: 10px 5px;
//     font-size: 1.5rem;
//     font-weight: 300;
//     line-height: 2rem;
//   }
//   .template-wrapper {
//     display: flex;
//     justify-content: center;
//     overflow: auto;
//   }
//   .element {
//     min-width: 200px;
//     margin: 5px;
//     border: 2px solid #efefef;
//     padding: 5px;
//     :hover {
//       border: 2px solid #777777;
//     }
//   }
// `;
// const DesignElement = styled.div`
//   * {
//     cursor: pointer;
//   }
//   position: relative;
//   cursor: pointer;
//   color: white;
//   font-size: 20px;
//   font-family: "Noto Sans KR";
//   z-index: 700;
//   border-radius: 15px;
//   // background-size: cover;
//   img {
//     max-width: 100%;
//     max-height: 100%;
//     // background-repeat: no-repeat;
//     background-position: center center;
//     background-image: url(${(props) => props.img});
//   }

//   .cover {
//     // cursor: default;
//     z-index: 701;
//     position: absolute;
//     border-radius: 15px;
//     background-image: linear-gradient(
//       180deg,
//       rgba(255, 255, 255, 0) 60%,
//       rgba(32, 32, 32, 0.7) 100%
//     );
//     width: 330px;
//     height: 330px;
//   }

//   .innerbox {
//     z-index: 703;
//     position: absolute;
//     width: 274.08px;
//     color: #ffffff;
//     line-height: 40px;
//     height: 35px;
//     font-family: Noto Sans KR;
//     margin-left: 25px;
//     margin-top: 201px;
//     .design-title {
//       font-size: 20px;
//       font-weight: 700;
//       text-shadow: 2px 2px 6px gray;
//       display: flex;
//       justify-content: space-between;
//     }
//     .update-time {
//       margin-top: 5px;
//       font-weight: 300;
//       border: 1px solid red;
//       width: max-content;
//       height: 25px;
//       font-size: 17px;
//       font-family: Noto Sans KR;
//       text-shadow: 2px 2px 6px gray;
//       line-height: 25px;
//       text-align: right;
//       // cursor: default;
//     }
//     .user-name {
//       font-size: 20px;
//       font-weight: 300;
//       text-shadow: 2px 2px 6px gray;
//       // cursor: default;
//     }
//     .user-update-wrapper {
//       width: 285px;
//       display: flex;
//       justify-content: space-between;
//     }
//   }

//   .counter {
//     z-index: 703;
//     position: absolute;
//     left: 24.92px;
//     top: 286px;
//     display: flex;
//     justify-content: space-start;
//     width: 291px;
//     height: 22px;
//     text-align: left;
//     line-height: 40px;
//     font-size: 15px;
//     font-weight: 500;
//     align-items: center;
//   }
//   .view {
//     z-index: 703;
//     margin-right: 4.25px;
//   }
//   .view-count {
//     z-index: 703;
//     margin-right: 6px;
//     // cursor: default;
//   }
//   .like {
//     z-index: 703;
//     margin-right: 4px;
//     img {
//       width: 13px;
//       height: 13px;
//     }
//   }
//   .like-count {
//     z-index: 703;
//     margin-right: 6px;
//     // cursor: default;
//   }
//   .fork {
//     z-index: 703;
//     margin-right: 4px;
//     img {
//       width: 22px;
//       height: 11px;
//     }
//   }
//   .fork-count {
//     z-index: 703;
//     margin-right: 0px;
//     // cursor: default;
//   }
// `;
// const EditorWrapper = styled.div`
//   // max-width:853px;
//   width: 100%;
//   .title {
//     width: 100%;
//     text-align: center;
//     margin: auto;
//     color: #707070;
//     padding: 10px 5px;
//     font-size: 1.5rem;
//     font-weight: 300;
//     line-height: 2rem;
//   }
//   .editor {
//     opacity: 0.75;
//     overflow: auto;
//   }
// `;
// const designImageText = "경험 이미지";
// const emptyCategory = [{ value: 0, text: "" }];
// const scrollmenu = [
//   { step: 0, txt: "기본 정보" },
//   { step: 1, txt: "부가 정보" },
//   { step: 2, txt: "컨텐츠 정보" },
// ];

// function Peer(props) {
//   return (
//     <div
//       style={{
//         cursor: "pointer",
//         display: "flex",
//         marginRight: "50px",
//         marginTop: "10px",
//       }}
//     >
//       <div
//         style={{
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundImage: `url(${props.s_img || noface})`,
//           backgroundColor: "#D6D6D6",
//           width: "30px",
//           height: "30px",
//           borderRadius: "50%",
//         }}
//       />
//       <div
//         style={{
//           marginTop: "1px",
//           marginLeft: "10px",
//           fontSize: "20px",
//           lineHeight: "29px",
//           textAlign: "left",
//           fontWeight: "500",
//           fontFamily: "Noto Sans KR",
//           color: "#707070",
//           width: "max-content",
//           height: "29px",
//         }}
//       >
//         {props.nick_name}
//       </div>
//       <div style={{ marginTop: "7.34px", marginLeft: "13.86px" }}>
//         <Cross angle={45} color={"#707070"} weight={3} width={16} height={16} />
//       </div>
//     </div>
//   );
// }

// class ModifyDesign extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       deleteModal: false,
//       crop: { unit: "%", width: 50, aspect: 1 },
//       loading: false,
//       designId: null,
//       isMyDesign: false,
//       editor: false,
//       is_problem: false,
//       basic: false,
//       additional: false,
//       content: false,
//       step: 0,
//       title: "",
//       explanation: "",
//       showSearch: false,
//       thumbnail: noimg,
//       thumbnail_name: "",
//       grid: false,
//       categoryLevel1: null,
//       categoryLevel2: null,
//       alone: false,
//       members: [],
//       addmem: [],
//       delmem: [],
//       license1: true,
//       license2: false,
//       license3: false,
//       cropper: false,
//     };
//     this.addMember = this.addMember.bind(this);
//     this.removeMember = this.removeMember.bind(this);
//     this.onCheckIsProblem = this.onCheckIsProblem.bind(this);
//     this.onCheckedLicense01 = this.onCheckedLicense01.bind(this);
//     this.onCheckedLicense02 = this.onCheckedLicense02.bind(this);
//     this.onCheckedLicense03 = this.onCheckedLicense03.bind(this);
//     this.onChangeCategory1 = this.onChangeCategory1.bind(this);
//     this.onChangeCategory2 = this.onChangeCategory2.bind(this);
//     this.onChangeCategory3 = this.onChangeCategory3.bind(this);
//     this.handleOnChangeThumbnail = this.handleOnChangeThumbnail.bind(this);
//     this.onKeyDownEnter = this.onKeyDownEnter.bind(this);
//     this.cancelDeleteDesign = this.cancelDeleteDesign.bind(this);
//   }
//   shouldComponentUpdate(nextProps) {
//     if (this.props.DesignDetail !== nextProps.DesignDetail) {
//       //console.log("img", nextProps.DesignDetail.img);
//       this.setState({
//         thumbnail:
//           nextProps.DesignDetail.img == null
//             ? noimg
//             : nextProps.DesignDetail.img.m_img,
//         title: nextProps.DesignDetail.title,
//         explanation: nextProps.DesignDetail.explanation,
//         categoryLevel1: nextProps.DesignDetail.category_level1,
//         categoryLevel2: nextProps.DesignDetail.category_level2,
//         categoryLevel3: nextProps.DesignDetail.category_level3,
//         members:
//           nextProps.DesignDetail.member &&
//           nextProps.DesignDetail.member.filter((mem) => {
//             return mem.user_id !== this.props.userInfo.uid;
//           }),
//         license1: nextProps.DesignDetail.is_commercial,
//         license2: nextProps.DesignDetail.is_display_creater,
//         license3: nextProps.DesignDetail.is_modify,
//         is_problem: nextProps.DesignDetail.is_problem,
//       });
//     }
//     return true;
//   }
//   componentDidMount() {
//     this.props
//       .GetDesignDetailRequest(this.props.id, this.props.token)
//       .then(() => {
//         this.props.GetDesignBoardRequest(this.props.id);
//       });
//     this.setState({
//       content: true,
//       designId: this.props.id,
//       grid: true,
//       loading: false,
//     });
//   }
//   handleOnChangeThumbnail(event) {
//     event.preventDefault();
//     const reader = new FileReader();
//     const file = event.target.files[0];
//     reader.onload = () => {
//       var image = new Image();
//       image.src = reader.result;
//       image.onload = () => {
//         this.setState({
//           is_rectangle: false,
//           ratio: image.width / image.height,
//           cropper: image.width / image.height !== 1.0,
//         });
//       };
//     };
//     reader.onloadend = () => {
//       this.setState({ thumbnail: reader.result, thumbnail_name: file.name });
//     };
//     if (event.target.files[0]) {
//       reader.readAsDataURL(file);
//     }
//   }
//   onChangeValueThumbnail = async (data) => {
//     let obj = {};
//     if (data.target) {
//       obj[data.target.name] = data;
//       await this.setState(obj);
//     }
//     this.checkFinishBasic();
//   };
//   onChangeValueTitle = async (event) => {
//     if (event.target) {
//       await this.setState({ title: event.target.value });
//     }
//     this.checkFinishBasic();
//   };
//   onChangeValueExplanation = async (event) => {
//     if (event.target) {
//       await this.setState({ explanation: event.target.value });
//     }
//     this.checkFinishBasic();
//   };
//   onKeyDownEnter(event) {
//     if (event.key === "Enter") {
//       document.getElementById("explainBox").focus();
//     }
//   }
//   onKeyPress = () => {
//     this.checkFinishBasic();
//   };
//   gotoPrevStep = () => {
//     goto("BACK");
//     // this.setState({ step: this.state.step - 1 });
//   };
//   gotoNextStep = () => {
//     this.setState({ step: this.state.step + 1 });
//   };
//   gotoStep = (menu) => {
//     if (this.state.basic) {
//     }
//     this.setState({ step: menu.step });
//   };
//   checkFinishBasic = async () => {
//     const { title, thumbnail } = this.state;
//     if (title && title.length > 0 && thumbnail && thumbnail.img) {
//       await this.setState({ basic: true });
//     } else {
//       await this.setState({ basic: false });
//     }
//   };
//   checkFinishAdditional = async () => {
//     const { categoryLevel1, alone, members, license1, license2, license3 } =
//       this.state;
//     if (
//       categoryLevel1 != null &&
//       ((alone && members.length === 0) || (!alone && members.length > 0))
//     ) {
//       await this.setState({ additional: true });
//     } else {
//       await this.setState({ additional: false });
//     }
//   };

//   onChangeCategory1(event, { value }) {
//     this.setState({
//       categoryLevel1: { value }.value,
//       categoryLevel2: null,
//       categoryLevel3: null,
//     });
//     this.checkFinishAdditional();
//   }
//   onChangeCategory2(event, { value }) {
//     this.setState({ categoryLevel2: { value }.value, categoryLevel3: null });
//     this.checkFinishAdditional();
//   }
//   onChangeCategory3(event, { value }) {
//     this.setState({ categoryLevel3: { value }.value });
//     this.checkFinishAdditional();
//   }
//   onCheckIsProblem = async () => {
//     await this.setState({ is_problem: !this.state.is_problem });
//     this.checkFinishAdditional();
//   };
//   onCheckedLicense01 = async () => {
//     await this.setState({ license1: !this.state.license1 });
//     this.checkFinishAdditional();
//   };
//   onCheckedLicense02 = async () => {
//     await this.setState({ license2: !this.state.license2 });
//     this.checkFinishAdditional();
//   };
//   onCheckedLicense03 = async () => {
//     await this.setState({ license3: !this.state.license3 });
//     this.checkFinishAdditional();
//   };
//   LeaveMeAlone = async () => {
//     await this.setState({ alone: !this.state.alone, members: [] });
//     this.checkFinishAdditional();
//   };
//   addMember = async (email, s_img, nick_name, uid) => {
//     let member = {
//       email: email,
//       s_img: s_img,
//       nick_name: nick_name,
//       user_id: uid,
//       uid: uid,
//     };
//     await this.setState({
//       members: this.state.members.concat(member),
//       addmem: this.state.addmem.concat(member),
//     });
//     this.checkFinishAdditional();
//     this.setState({ alone: false });
//   };
//   removeMember = async (user_id) => {
//     if (
//       this.state.addmem.find((mem) => {
//         return mem.user_id === user_id;
//       })
//     ) {
//       await this.setState({
//         addmem: this.state.addmem.filter((member) => {
//           return member.user_id !== user_id;
//         }),
//       });
//     } else {
//       // remove if not in addmem
//       await this.setState({
//         delmem: this.state.delmem.concat(
//           this.state.members.filter((member) => {
//             return user_id === member.user_id;
//           })
//         ),
//       });
//     }
//     await this.setState({
//       members: this.state.members.filter((member) => {
//         return user_id !== member.user_id;
//       }),
//     });

//     if (this.state.members.length === 0) {
//       this.setState({ alone: true });
//     }
//   };
//   closeCropper = () => {
//     if (this.state.is_rectangle === false) {
//       this.setState({ thumbnail_name: "", thumbnail: noimg });
//     }
//     this.setState({
//       cropper: false,
//       crop: { unit: "%", width: 50, aspect: 1 },
//     });
//     this.checkFinishBasic();
//   };
//   toDataURL = (url) =>
//     fetch(url)
//       .then((response) => response.blob())
//       .then(
//         (blob) =>
//           new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.onloadend = () => resolve(reader.result);
//             reader.onerror = reject;
//             reader.readAsDataURL(blob);
//           })
//       );
//   crop = async () => {
//     // apply
//     await this.toDataURL(this.state.croppedImageUrl).then(async (dataUrl) => {
//       this.setState({ thumbnail: dataUrl });
//     });
//     this.setState({ cropper: false });
//     this.checkFinishBasic();
//   };
//   onImageLoaded = (image) => {
//     this.imageRef = image;
//   };
//   onCropComplete = (crop) => {
//     this.makeClientCrop(crop);
//   };
//   onCropChange = (crop, percentCrop) => {
//     this.setState({ crop });
//   };
//   getCroppedImg = (image, crop, fileName) => {
//     const canvas = document.createElement("canvas");
//     const scaleX = image.naturalWidth / image.width;
//     const scaleY = image.naturalHeight / image.height;
//     canvas.width = crop.width;
//     canvas.height = crop.height;
//     const ctx = canvas.getContext("2d");
//     ctx.drawImage(
//       image,
//       crop.x * scaleX,
//       crop.y * scaleY,
//       crop.width * scaleX,
//       crop.height * scaleY,
//       0,
//       0,
//       crop.width,
//       crop.height
//     );

//     return new Promise((resolve, reject) => {
//       canvas.toBlob((blob) => {
//         if (!blob) {
//           console.error("Canvas is empty");
//           return;
//         }
//         blob.name = fileName;
//         window.URL.revokeObjectURL(this.fileUrl);
//         this.fileUrl = window.URL.createObjectURL(blob);
//         resolve(this.fileUrl);
//       }, "image/jpeg");
//     });
//   };
//   makeClientCrop = async (crop) => {
//     if (this.imageRef && crop.width && crop.height) {
//       const croppedImageUrl = await this.getCroppedImg(
//         this.imageRef,
//         crop,
//         this.state.thumbnail_name /*"newFile.jpeg"*/
//       );
//       this.setState({ croppedImageUrl });
//     }
//   };
//   deleteDesign = async () => {
//     const answer = await confirm("경험을 삭제하시겠습니까?", "확인", "취소");
//     answer &&
//       this.props
//         .DeleteDesignRequest(this.props.id, this.props.token)
//         .then(async () => {
//           const cate = this.props.DesignDetail.category_level1;
//           goto(cate === 1 ? "PLAY" : cate === 2 ? "LEARN" : "MAKE");
//         })
//         .catch(async () => {
//           await alert("삭제에 실패하였습니다.", "확인");
//         });
//   };
//   cancelDeleteDesign = () => {
//     this.setState({ deleteModal: !this.state.deleteModal });
//   };
//   deleteDialog = () => {
//     this.setState({ deleteModal: !this.state.deleteModal });
//   };

//   render() {
//     console.log(this.props);
//     let arrSummaryList = [];
//     if (this.state.members != null && this.state.members.length > 0) {
//       arrSummaryList = this.state.members.map((item, index) => {
//         return (
//           <div onClick={() => this.removeMember(item.user_id)} key={index}>
//             <Peer
//               s_img={item.s_img == null ? noface : item.s_img}
//               nick_name={item.nick_name}
//             />
//           </div>
//         );
//       });
//     }
//     let category3Index = -1;
//     let nCount = 0;
//     for (let i in this.props.category2) {
//       this.props.category2 &&
//         this.props.category2[i] &&
//         this.props.category2[i].map((item, index) => {
//           if (item.value == this.state.categoryLevel2) {
//             category3Index = nCount;
//           }
//           nCount++;
//         });
//     }
//     const DeleteDesignModal = () => {
//       return (
//         <Modal
//           open={this.state.deleteModal}
//           closeOnDimmerClick={true}
//           onClose={this.deleteDialog}
//           style={{
//             boxShadow: "0px 3px 6px #000000",
//             position: "relative",
//             width: "576px",
//             height: "200px",
//             textAlign: "center",
//             bottom: "318px",
//           }}
//         >
//           <div
//             style={{
//               position: "absolute",
//               left: "100%",
//               marginTop: "0px",
//               marginLeft: "10px",
//             }}
//             onClick={this.deleteDialog}
//           >
//             <Cross
//               angle={45}
//               color={"#EFEFEF"}
//               weight={3}
//               width={25}
//               height={25}
//             />
//           </div>
//           <div
//             style={{
//               width: "100%",
//               height: "69px",
//               fontFamily: "Noto Sans KR",
//               fontSize: "20px",
//               color: "#707070",
//               lineHeight: "40px",
//               marginTop: "35px",
//               marginBottom: "31px",
//             }}
//           >
//             {this.state.title}(을)를
//             <br />
//             삭제하시겠습니까?
//           </div>
//           <div
//             style={{
//               fontWeight: "500",
//               width: "100%",
//               height: "25px",
//               fontFamily: "Noto Sans KR",
//               fontSize: "20px",
//             }}
//           >
//             <div
//               style={{
//                 marginLeft: "auto",
//                 marginRight: "auto",
//                 width: "max-content",
//                 cursor: "pointer",
//               }}
//             >
//               <span
//                 style={{ color: "#707070" }}
//                 onClick={this.cancelDeleteDesign}
//               >
//                 취소
//               </span>
//               <span
//                 style={{ marginRight: "10px", color: "#FF0000" }}
//                 onClick={this.deleteDesign}
//               >
//                 확인
//               </span>
//             </div>
//           </div>
//         </Modal>
//       );
//     };
//     const { step, loading, deleteModal } = this.state; // const { DesignDetail } = this.props;
//     const thumbnailURL = this.state.thumbnail; //DesignDetail && DesignDetail.img == null ? noimg : DesignDetail.img.m_img;//this.state.thumbnail;
//     let boardWidth = 125;
//     if (step === 3) boardWidth = 0;
//     console.clear();
//     console.log(this.props, this.state);
//     return (
//       <React.Fragment>
//         {this.state.cropper ? (
//           <CropperDialog
//             ratio={this.state.ratio}
//             onKeyDown={null}
//             open={this.state.cropper}
//             onClose={null}
//           >
//             <div
//               onClick={this.closeCropper}
//               style={{
//                 position: "absolute",
//                 width: "max-content",
//                 top: "10px",
//                 right: "15px",
//               }}
//             >
//               <Cross
//                 angle={45}
//                 color={"#000000"}
//                 weight={2}
//                 width={32}
//                 height={32}
//               />
//             </div>
//             <div
//               style={{
//                 width: "max-content",
//                 height: "20px",
//                 lineHeight: "20px",
//                 color: "#707070",
//                 fontFamily: "Noto Sans KR",
//                 fontSize: "20px",
//                 fontWeight: "500",
//                 textAlign: "left",
//                 marginTop: "45px",
//                 marginLeft: "75px",
//               }}
//             >
//               {designImageText} 등록
//             </div>
//             <div
//               style={{
//                 width: "max-content",
//                 height: "15px",
//                 lineHeight: "15px",
//                 color: "#FF0000",
//                 fontFamily: "Noto Sans KR",
//                 fontSize: "15px",
//                 fontWeight: "300",
//                 textAlign: "left",
//                 marginTop: "5px",
//                 marginLeft: "75px",
//               }}
//             >
//               [!]등록하신 {designImageText}가 정사각형이 아닙니다.
//             </div>
//             <div
//               style={{
//                 width: "max-content",
//                 height: "30px",
//                 lineHeight: "15px",
//                 color: "#707070",
//                 fontFamily: "Noto Sans KR",
//                 fontSize: "15px",
//                 fontWeight: "300",
//                 textAlign: "left",
//                 marginTop: "5px",
//                 marginLeft: "75px",
//               }}
//             >
//               아래의 이미지에서 {designImageText}로 등록하고자하는 영역을 <br />{" "}
//               조절하여 등록하기를 클릭하시면 {designImageText}가 등록됩니다.
//             </div>
//             <div className="imagebox">
//               <div
//                 style={{
//                   marginLeft: "auto",
//                   marginRight: "auto",
//                   marginTop: "20px",
//                   marginBottom: "20px",
//                   width: this.state.ratio > 1.0 ? "370px" : "240px",
//                   height: "max-content",
//                 }}
//               >
//                 <ReactCrop
//                   src={this.state.thumbnail}
//                   crop={this.state.crop}
//                   onImageLoaded={this.onImageLoaded}
//                   onComplete={this.onCropComplete}
//                   onChange={this.onCropChange}
//                 />
//               </div>
//               <div style={{ marginTop: "20px", display: "flex" }}>
//                 <div
//                   style={{
//                     marginLeft: "25px",
//                     marginRight: "25px",
//                     width: "max-content",
//                     border: "none",
//                     background: "none",
//                     height: "40px",
//                     lineHeight: "40px",
//                     color: "#707070",
//                     paddingBottom: "1.5px",
//                     borderBottom: "1.5px solid #707070",
//                     fontSize: "20px",
//                     fontWeight: "500",
//                     fontFamily: "Noto Sans KR",
//                     textAlign: "left",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => this.closeCropper()}
//                 >
//                   취소
//                 </div>
//                 <div
//                   style={{
//                     marginLeft: "auto",
//                     textAlign: "middle",
//                     color: "#FF0000",
//                     fontSize: "20px",
//                     fontWeight: "500",
//                     fontFamily: "Noto Sans KR",
//                     lineHeight: "40px",
//                     borderBottom: "1.5px solid #FF0000",
//                     border: "1px splid black",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => this.crop()}
//                 >
//                   등록하기
//                 </div>
//               </div>
//             </div>
//           </CropperDialog>
//         ) : null}
//         <Wrapper>
//           {" "}
//           {this.props.DesignDetail.d_flag === 1 &&
//           this.props.DesignDetail.parent_design !== null ? (
//             <h1>경험아이템 참여신청하기</h1>
//           ) : (
//             <>경험아이템수정하기</>
//           )}
//           {/* <div className="vLine" /> */}
//           <ContentWrapper>
//             <Section isNone={step === 0}>
//               <React.Fragment>
//                 <div className="board">
//                   <div className="board_label">
//                     1. 대표 이미지 등록하기
//                     <sub className="sub marginRight2">*</sub>
//                     <QuestionGuide left={15} top={-50} bubbleSize={584}>
//                       ?
//                     </QuestionGuide>
//                   </div>
//                   <div className="board_box">
//                     <div className="row" style={{ marginTop: "10px" }}>
//                       {this.state.thumbnail == null ||
//                       this.state.thumbnail == noimg ? (
//                         <div className="imageBox">
//                           <img src={new_logo_plus} className="plus" />
//                         </div>
//                       ) : (
//                         <img className="imageBox" src={this.state.thumbnail} />
//                       )}
//                       <div className="imageLabel">
//                         <label className="findThumbnailText" htmlFor="file">
//                           찾아보기
//                         </label>
//                         <input
//                           hidden
//                           onChange={this.handleOnChangeThumbnail}
//                           id="file"
//                           type="file"
//                         />
//                         <div className="thumbnailExplainText">
//                           {" "}
//                           대표적으로 보이게 되는 사진으로, <br />
//                           JPG/JPEG/PNG/BMP 파일을 등록 가능합니다.
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="board_label" style={{ marginTop: "12px" }}>
//                     2. 경험 이름<sub className="sub marginRight1">*</sub>
//                   </div>
//                   <div className="board_box">
//                     <InputText
//                       onChange={this.onChangeValueTitle}
//                       onKeyDown={this.onKeyDownEnter}
//                       name="title"
//                       maxLength="100"
//                       value={this.state.title}
//                       placeholder="경험의 제목을 입력해주세요. (100자 이내)"
//                       onBlur={this.checkFinishBasic}
//                     />
//                   </div>
//                   <div className="board_label" style={{ marginTop: "22px" }}>
//                     3. 경험 설명<sub className="sub marginRight2">*</sub>
//                   </div>
//                   <div className="board_box">
//                     <InputTextArea
//                       id="explainBox"
//                       onChange={this.onChangeValueExplanation}
//                       name="explanation"
//                       maxLength="350"
//                       placeholder="경험 설명을 입력해주세요. (350자 이내)"
//                       value={this.state.explanation}
//                       onBlur={this.checkFinishBasic}
//                     />
//                   </div>
//                   <div className="navi_menu">
//                     <div
//                       onClick={this.deleteDesign}
//                       className="navi_label red delete"
//                     >
//                       경험 삭제하기
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid_buttonWrap">
//                   <CustomButton isComplete={false} onClick={this.gotoPrevStep}>
//                     <BtnText>뒤로</BtnText>
//                   </CustomButton>
//                   <CustomButton
//                     isComplete={
//                       this.state.type === "grid" && this.state.template == null
//                         ? false
//                         : true
//                     }
//                     onClick={this.submit}
//                   >
//                     <BtnText>완료</BtnText>
//                   </CustomButton>
//                 </div>
//               </React.Fragment>
//             </Section>
//           </ContentWrapper>
//         </Wrapper>
//       </React.Fragment>
//     );
//   }
// }

// export default ModifyDesign;

// const ControllerWrap = styled.div`
//   position: relative;
//   text-align: center;
//   border: 1px solid #707070;
//   padding: 25px;
//   margin-bottom: 30px;
//   .innerBox {
//     display: flex;
//     justify-content: space-between;
//   }
//   & .initWrap {
//     & > ul {
//       display: flex;
//       // box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.1);
//     }
//     & > span {
//       color: ${osdcss.color.grayScale.scale6};
//     }
//   }
//   &:hover {
//     background-color: #fafafa;
//     & .initWrap {
//       & > ul {
//         display: flex;
//       }
//       & > span {
//         color: ${osdcss.color.grayScale.scale6};
//       }
//     }
//   }
// `;
// const NewController = styled.div`
//   font-family: Spoqa Han Sans Neo;
//   font-weight: 500;
//   font-size: 28px;
//   color: black;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// `;
