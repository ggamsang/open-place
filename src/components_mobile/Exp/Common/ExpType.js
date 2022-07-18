import React, { Component, useState, useRef, useEffect } from "react";
import styled from 'styled-components';
import { resolution } from 'commons/resolution';
import { Editor } from 'commons/Editor/Editor';
import { InputFile, InputGameFile } from 'components_mobile/Commons/Input';
import DropDownNormal from "components_mobile/Commons/DropDown/DropDownNormal";
import InputNormal from "components_mobile/Commons/Input/InputNormal";
import { InputCalendar } from "components_mobile/Commons/Input";
import Jodit from "commons/Jodit";
//일반:1 자문/상담:2 강의/강좌:3 모임:4 게임5
const TYPE_NORMAL = 0;
const TYPE_TALK = 1;
const TYPE_LECTURE = 2;
const TYPE_CLASS = 3;
const TYPE_GAME = 4;
const Wrapper = styled.div`
  width: 100%;
  .add_content{
    // border:1px solid white;
    // border-radius:20px;
    // padding-bottom:20px;
  }
  .row{
    display: flex;
    margin-top: 20px;
    .label{
      padding-left: 10px;
      width: ${resolution(80)}px;
      height: ${resolution(30)}px;
      font: normal normal bold 15px/18px Pretendard;
      color: white;
      display: flex;
      align-items: center;
      &.wide {
        transform: translate(0, -20px);
        padding: 0; 
        margin-left: 10px;
        width: max-content !important;
        height: 45px;
      }
    }
  }
  .whiteBox{
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    margin-bottom: 15px;
    box-shadow: 2px 2px 5px #00000029;
  }
`
const OnOfflinelist = [
  { uid: 1, name: "온라인" },
  { uid: 2, name: "오프라인" },
]
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

class ExpType extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: "",
      exp_files: [],

      game_files: [],
      isOnline: 1,
      place: "",
      people: 0,

      startDate: null, endDate: null, dayDate: null,

    }
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);

    this.onChangeOnline = this.onChangeOnline.bind(this);
    this.onChangePlace = this.onChangePlace.bind(this);
    this.onChangeGame = this.onChangeGame.bind(this);
    this.onChanegPeople = this.onChanegPeople.bind(this);
    this.getStartDateValue = this.getStartDateValue.bind(this);
    this.getEndDateValue = this.getEndDateValue.bind(this);
    this.getDayDateValue = this.getDayDateValue.bind(this);
    this.returnState = this.returnState.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.content != this.props.content) {
      this.setState({ content: this.props.content }, () => { console.log(this.state.content) })
      this.setState({ exp_files: this.props.exp_files ? [].concat(this.props.exp_files) : [] })
    }
    if (prevProps.exp_files != this.props.exp_files) {
      this.setState({ exp_files: this.props.exp_files ? [].concat(this.props.exp_files) : [] })
    }
    if (prevProps.typeDetail != this.props.typeDetail) {
      console.log(this.props.typeDetail)
      const { typeDetail } = this.props;
      if (typeDetail != null) {
        const typeDetailToJSON = JSON.parse(typeDetail);
        console.log(typeDetailToJSON)
        this.setState({
          isOnline: typeDetailToJSON.isOnline,
          place: typeDetailToJSON.place,
          people: typeDetailToJSON.people,
          startDate: typeDetailToJSON.startDate,
          endDate: typeDetailToJSON.endDate,
          game_files: JSON.parse(typeDetailToJSON.game_files),
        })
      }
    }
    // if (this.props && this.props.typeDetail != null) {
    //   if (prevProps.typeDetail&&JSON.stringify(prevProps.typeDetail) != JSON.stringify(this.props.typeDetail)) {
    //     this.setState({
    //       game_files: this.props.typeDetail == null ? [] : JSON.parse(this.props.typeDetail.game_files),
    //       isOnline: this.props.typeDetail && this.props.typeDetail.isOnline,
    //       place: this.props.typeDetail && this.props.typeDetail.place,
    //       people: this.props.typeDetail && this.props.typeDetail.people,
    //       startDate: this.props.typeDetail && this.props.typeDetail.startDate,
    //       endDate: this.props.typeDetail && this.props.typeDetail.endDate,
    //     })
    //   }
    //   if (prevProps.content&&JSON.stringify(prevProps.content) != JSON.stringify(this.props.content)) {
    //     this.setState({
    //       content: this.props.content && this.props.content,
    //     })
    //   }
    //   if (prevProps.exp_files&&JSON.stringify(prevProps.exp_files) != JSON.stringify(this.props.exp_files)) {
    //     this.setState({
    //       exp_files: this.props.exp_files == null ? [] : JSON.parse(this.props.exp_files),
    //     })
    //   }

    // }

  }

  returnState = () => {
    const Data = {
      game_files: JSON.stringify(this.state.game_files),
      isOnline: this.state.isOnline,
      place: this.state.place,
      people: this.state.people,
      startDate: this.state.startDate,
      endDate: this.state.endDate || this.state.startDate,
    }
    console.log("game:", Data, this.state.game_files);
    return this.props.return && this.props.return(JSON.stringify(Data));
  }
  onChangeContent = (value) => {
    this.setState({ content: value }, () => {
      return this.props.getContent && this.props.getContent(value)
    });
  }
  onChangeFile = (value) => {
    this.setState({ exp_files: value }, () => {
      return this.props.getFiles && this.props.getFiles(value)
    })
  }
  onChangeOnline = (event) => {
    this.setState({ isOnline: event.target.value }, () => this.returnState())
  }
  onChangePlace = (event) => {
    this.setState({ place: event.target.value }, () => this.returnState());
  }
  onChangeGame = (files) => {
    this.setState({ gameFile: files }, () => this.returnState())
  }
  onChanegPeople = (event) => {
    this.setState({ people: event.target.value }, () => this.returnState())
  }
  getStartDateValue = (value) => {
    this.setState({ startDate: value }, () => this.returnState());
  }
  getEndDateValue = (value) => {
    this.setState({ endDate: value }, () => this.returnState());
  }
  getDayDateValue = (value) => {
    this.setState({ dayDate: value }, () => this.returnState());
  }

  render() {
    const { type } = this.props;

    return (
      <Wrapper>
        <div className="add_content">
          {
            type == TYPE_TALK &&
            <React.Fragment>
              <div className="row">
                <div className='label'>온라인</div>
                <DropDownNormal
                  value={this.state.isOnline}
                  onChangeValue={this.onChangeOnline}
                  width={150} height={31} radius={10}
                  options={OnOfflinelist} />
              </div>
              <div className="row">
                <div className='label'>상담 장소</div>
                <InputNormal onChangeValue={this.onChangePlace}
                  value={this.state.value} placeholder={"장소를 입력하세요"} radius={10}
                  width={245} height={31} fontSize={14} color={"#E9E9E9"} />
              </div>
            </React.Fragment>
          }
          {
            type == TYPE_LECTURE &&
            <React.Fragment>
              <div className="row">
                <div className='label'>온라인</div>
                <DropDownNormal
                  value={this.state.isOnline}
                  onChangeValue={this.onChangeOnline}
                  width={150} height={31} radius={10}
                  options={OnOfflinelist} />
              </div>
              <div className="row">
                <div className='label'>강의 날짜</div>
                <InputCalendar
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  name="calendar"
                  getStartDateValue={this.getStartDateValue}
                  getEndDateValue={this.getEndDateValue}
                  getDayDateValue={this.getDayDateValue} />
              </div>
              <div className="row">
                <div className='label'>강의 장소</div>
                <InputNormal onChangeValue={this.onChangePlace}
                  value={this.state.place} placeholder={"장소를 입력하세요"} radius={10}
                  width={245} height={31} fontSize={14} color={"#E9E9E9"} />
              </div>
              <div className="row">
                <div className='label'>모집 인원</div>
                <InputNormal
                  type="number"
                  onChangeValue={this.onChanegPeople}
                  value={this.state.people} placeholder={"인원을 입력하세요"} radius={10}
                  width={245} height={31} fontSize={14} color={"#E9E9E9"} />
              </div>
            </React.Fragment>
          }
          {
            type == TYPE_CLASS &&
            <React.Fragment>
              <div className="row">
                <div className='label'>온라인</div>
                <DropDownNormal
                  value={this.state.isOnline}
                  onChangeValue={this.onChangeOnline}
                  width={150} height={31} radius={10}
                  options={OnOfflinelist} />
              </div>
              <div className="row">
                <div className='label'>모임 날짜</div>
                <InputCalendar
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  name="calendar"
                  getStartDateValue={this.getStartDateValue}
                  getEndDateValue={this.getEndDateValue}
                  getDayDateValue={this.getDayDateValue} />
              </div>
              <div className="row">
                <div className='label'>모임 장소</div>
                <InputNormal onChangeValue={this.onChangePlace}
                  value={this.state.place} placeholder={"장소를 입력하세요"} radius={10}
                  width={245} height={31} fontSize={14} color={"#E9E9E9"} />
              </div>
              <div className="row">
                <div className='label'>모집 인원</div>
                <InputNormal
                  type="number"
                  onChangeValue={this.onChanegPeople}
                  value={this.state.people} placeholder={"인원을 입력하세요"} radius={10}
                  width={245} height={31} fontSize={14} color={"#E9E9E9"} />
              </div>
            </React.Fragment>
          }
          {
            type == TYPE_GAME &&
            <React.Fragment>
              <div className="row">
                <div className='label'>게임 첨부</div>
              </div>
              <div className="whiteBox">
                <InputGameFile
                  files={this.state.game_files}
                  display={true}
                  getValue={(value) => this.onChangeGame(value)}
                  accept="html,zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed" />
              </div>
              <div className="row">
                <div className='label wide'>
                  1) index.html만 업로드<br />
                  2) zip파일로 업로드,<br />
                  파일 내 index.html이 반드시 있어야 함.<br />
                </div>
              </div>
            </React.Fragment>
          }
        </div>


        <div className='row' style={{ flexDirection: "column" }}>
          <div className='label'>경험 컨텐츠</div>
          <div className="whiteBox">
            <Jodit value={this.state.content} config={config} onChange={(value) => {
              this.onChangeContent(value)
            }} />
          </div>
        </div>

        <div className='whiteBox'>
          <InputFile files={this.state.exp_files} display={true} getValue={(value) => this.onChangeFile(value)} accept="" />
        </div>



      </Wrapper>
    )
  }
}
export default ExpType;
