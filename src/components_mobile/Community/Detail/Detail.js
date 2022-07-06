import React from 'react';
import styled from 'styled-components';
import SearchForm from 'components_mobile/Commons/Search/SearchForm';
import { WIDTH } from 'constant';
import CommentListContainer from 'containers/CommentListContainer';
import DateFormat from 'modules/DateFormat';
import { InputFile } from 'components_mobile/Commons/Input';

const Wrapper = styled.div`
  margin-bottom: 150px; // 임시로 입력된 값입니다.

  .blanker {
    height: 44px;
  }
  .gradient {
    width: 100%;
    height: 131px;
    background: linear-gradient(69deg, #501B1B, #655FFA, #D30E0E);
    background-size: 200% 200%;
    background-position: top right;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .title {
      margin: auto;
      margin-top: 18px;
      color: white;
      width: max-content;
      text-align: center;
      font-family: Pretendard;
      font-weight: 500;
      font-size: 20px;
      line-height: 20px;
    }
  }
  .rows {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .top13 {
    margin-top: 13px;
  }
  .article-list-wrapper {
    margin: auto;
    margin-top: 10px;
    margin-bottom: 50px;
    width: ${WIDTH}px;
  }
  .row{
    margin: auto;
    width: ${WIDTH}px;
    margin-bottom: 10px;
  }

`;
const Button = styled.button`
  margin: auto;
  width: 155px;
  height: 35px;
  background: ${prop => prop.active ? "#FF0000" : "#707070"};
  box-shadow: 2px 2px 3px #00000019;
  border-radius: 10px;
  border: none;
  outline: none;
  display: flex;
  .text {
    margin: auto;
    width: max-content;
    height: 18px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    font-family: Pretendard;
    letter-spacing: 0px;
    color: #FFFFFF;
  }
`;
const DetailWrapper = styled.div`
  margin: auto;
  margin-top: 16px;
  margin-bottom: 20px;

  width: ${WIDTH}px;
  box-sizing: border-box;
  min-height: 254px;
  padding: 10px 8px;
  background-color: white;
  border-radius: 10px;
  border: 0.5px solid #E9E9E9;

  .width70fix {
    width: 70px;
  }
  .split {
    border-right: 1px solid #707070;
  }
  .center {
    width: 100%;
    justify-content: space-between;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .label {
    // width: max-content;
    height: 18px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    font-family: Pretendard;
    letter-spacing: 0px;
    color: #000;
  }
  .date {
    margin-left: 20px;
    height: 18px;
    text-align: left;
    font-weight: medium;
    font-size: 15px;
    line-height: 18px;
    font-family: Pretendard;
    letter-spacing: 0px;
    color: #000;
  }
  .author {
    margin-left: 20px;
    height: 18px;
    text-align: left;
    font-weight: medium;
    font-size: 15px;
    line-height: 18px;
    font-family: Pretendard;
    letter-spacing: 0px;
    color: #000;
  }
  .content {
    margin-top: 18px;
    text-align: left;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    font-family: Noto Sans KR;
    letter-spacing: 0px;
    color: #000;
  }
  .bottom28 {
    margin-bottom: 28px;
  }
`;

export default class CommunityDetail extends React.Component {

  render() {
    console.log(this.props);
    const {
      id,
      uid = null,
      title = '게시글 제목',
      text = '게시글 내용',
      nickname = '작성자',
      create_time = '2022-01-01',
    } = this.props;
    const files = this.props.files && JSON.parse(this.props.files);

    return (<Wrapper>

      <div className='gradient'>
        <div className='blanker'>&nbsp;</div>
        <SearchForm />
        <div className='title'>게시글 상세</div>
      </div>

      <DetailWrapper>
        <div className='label bottom28'>{title}</div>

        <div className='center row'>
          <div className='row'>
            <div className='label split width70fix'>작성자</div>
            <div className='author'>{nickname}</div>
          </div>
          <div className='row'>
            <div className='label split width70fix'>작성일자</div>
            <div className='date'>{DateFormat(create_time)}</div>
          </div>
        </div>

        <div className='content' dangerouslySetInnerHTML={{ __html: text }} />

      </DetailWrapper>
      
      <div className='row'>
        <div>파일 첨부</div>
        <InputFile files={files} />
      </div>
      <CommentListContainer id={id} />

    </Wrapper >);
  }
}