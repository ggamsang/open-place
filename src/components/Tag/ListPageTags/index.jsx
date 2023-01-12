import React, { useState } from "react";
import * as styled from "./styles";

const dummy = [
  "태태그1",
  "태그태2",
  "태태그3",
  "태태태그4",
  "태태그5",
  "태그6",
  "태태태태그7",
  "태태그8",
];
/* 
 변경된 요청사항
 - 이 컴포넌트는 서버로부터 리스트페이지용 태그목록을 가져오며, 유저가 체크하면, 
 그에 해당되는 항목만 화면에 보이도록 구현한다.

 + ListPage/index.jsx 파일에서 아래와 같이 변경 
 <ListPageFilter onChange={handleChange} /> 에서 <ListPageFilter type={type} onChange={handleChange} /> 로.
 + ListPageTags/index.jsx에서 아래와 같이 변경
 + dummy삭제
 + const TagList = ({ type, onChange }) => { ... } 로 변경
 + useEffect(()=>{ 태그목록 fetch하여 setTags로 tags값을 저장 },[]);
     * 한번만 실행
     * const url = `https://place.opensrcdesign.com/api/tag/list/${type}`
 + "x" 지우기
 + 대신, "체크상자"를 둔다.
 + 체크상자를 클릭하면 selected라는 선택된 태그들만 임시저장하는 리스트를 state로 둔다.(useState사용)
 + selected에 값이 있다면 체크상자에 체크되어 있어야 함.
 + 이후 onChange에 selected라는 변수를 tags라는 이름으로 전달
 + 모두취소 클릭하면 selected비우고 onChange에 selected 값 전달
*/

const TagList = () => {

  const [tags, setTags] = useState(dummy);
  const [isShowCondition, setIsShowCondition] = useState(false);
  const [selected, setSelected] = useState([]);

  return (
    <styled.Container>
      <styled.Tags>
        {tags?.length > 0 &&
          tags.map((tag, index) => (
            <styled.TagButton key={index}>
              <styled.TagButtonText>{tag.text}</styled.TagButtonText>
              <styled.TagButtonDelete />
            </styled.TagButton>
          ))}
      </styled.Tags>
      <styled.CancelButton>
        <span>모두취소</span>
      </styled.CancelButton>
    </styled.Container>
  );
};

export default TagList;

// <styled.Wrapper>
// <styled.Tags>
//   <styled.TagButton>
//     <styled.TagButtonText>Tag123</styled.TagButtonText>
//     <styled.TagButtonDelete />
//   </styled.TagButton>
//   <styled.TagButton>
//     <styled.TagButtonText>Tag123</styled.TagButtonText>
//     <styled.TagButtonDelete />
//   </styled.TagButton>
//   <styled.TagButton>
//     <styled.TagButtonText>Tag123</styled.TagButtonText>
//     <styled.TagButtonDelete />
//   </styled.TagButton>
//   <styled.TagButton>
//     <styled.TagButtonText>Tag123</styled.TagButtonText>
//     <styled.TagButtonDelete />
//   </styled.TagButton>

//   <styled.MoreButton
//     onClick={() => {
//       setIsShowCondition(!isShowCondition);
//     }}
//     isShowCondition={isShowCondition}
//   >
//     <styled.MoreButtonPlusIcon />
//     <span>더보기</span>
//   </styled.MoreButton>

//   <styled.LessButton
//     onClick={() => {
//       setIsShowCondition(!isShowCondition);
//     }}
//     isShowCondition={isShowCondition}
//   >
//     <span>접기</span>
//   </styled.LessButton>

// </styled.Tags>
// </styled.Wrapper>
// {isShowCondition === true ? (
// <styled.ConditionBox>
//   <ConditionContents />
// </styled.ConditionBox>
// ) : null}
// </styled.Container>
// </>
