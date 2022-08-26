import React from 'react';
import * as styled from './styles';

const Tagbar = () => {
  return (
    <styled.Container>
        <styled.TagButton1 />
        <styled.TagButton2 />
        <styled.TagButton3 />
        <styled.TagButtonMore>
            <styled.TagButtonImg />
            <styled.TagButtonPlusIcon />
            <styled.TagButtonText>더보기</styled.TagButtonText>
        </styled.TagButtonMore>
        <styled.SortButton1 />
        <styled.SortButton2 />
    </styled.Container>
  );
};

export default Tagbar;
