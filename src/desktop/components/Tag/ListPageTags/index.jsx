import React, { useState } from "react";
import * as styled from "./styles";

const TagList = ({ _tags }) => {
  const [tags, setTags] = useState(_tags);
  const [isShowCondition, setIsShowCondition] = useState(false);
  const [selected, setSelected] = useState([]);
  console.log(typeof tags, tags);
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
// </React.Fragment>
