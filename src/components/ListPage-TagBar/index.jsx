import React, {useState} from 'react';
import * as styled from './styles';


const Tagbar = () => {
  const [isShowCondition, setIsShowCondition] = useState(false);

  const ConditionContents = () => {
    return(
      <styled.Tags>
        <styled.TagButton>
          <styled.TagButtonText>Tag123</styled.TagButtonText>
          <styled.TagButtonDelete />
        </styled.TagButton>
        <styled.TagButton>
          <styled.TagButtonText>Tag123</styled.TagButtonText>
          <styled.TagButtonDelete />
        </styled.TagButton>
        <styled.TagButton>
          <styled.TagButtonText>Tag123</styled.TagButtonText>
          <styled.TagButtonDelete />
        </styled.TagButton>
        <styled.TagButton>
          <styled.TagButtonText>Tag123</styled.TagButtonText>
          <styled.TagButtonDelete />
        </styled.TagButton>
        <styled.CancelButton>
          <span>모두취소</span>
        </styled.CancelButton>
        <styled.LessButton>
          <span>접기</span>
        </styled.LessButton>
      </styled.Tags>
    );    
  };



  return (
    <>
    <styled.Container>
      <styled.Wrapper>
        <styled.Tags>
          <styled.TagButton>
            <styled.TagButtonText>Tag123</styled.TagButtonText>
            <styled.TagButtonDelete />
          </styled.TagButton>
          <styled.TagButton>
            <styled.TagButtonText>Tag123</styled.TagButtonText>
            <styled.TagButtonDelete />
          </styled.TagButton>
          <styled.TagButton>
            <styled.TagButtonText>Tag123</styled.TagButtonText>
            <styled.TagButtonDelete />
          </styled.TagButton>
          <styled.TagButton>
            <styled.TagButtonText>Tag123</styled.TagButtonText>
            <styled.TagButtonDelete />
          </styled.TagButton>

          {/* <styled.MoreButton onClick={() => {setIsShowCondition(!isShowCondition);}} >
              <styled.MoreButtonImg />
              <styled.MoreButtonPlusIcon />
              <styled.MoreButtonText>더보기</styled.MoreButtonText>
          </styled.MoreButton> */}

          <styled.MoreButton onClick={() => {setIsShowCondition(!isShowCondition);}}>
            <styled.MoreButtonPlusIcon />
            <span>더보기</span>
          </styled.MoreButton>

          <styled.LessButton>
            <span>접기</span>
          </styled.LessButton>
          

          <styled.SortButton1 />
          <styled.SortButton2 />
        </styled.Tags>
      </styled.Wrapper>
      {isShowCondition === true ? (
        <styled.ConditionBox>
          <ConditionContents />
        </styled.ConditionBox>
      ) : null}
    </styled.Container>
    </>
  );
};

export default Tagbar;
