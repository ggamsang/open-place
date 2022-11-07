import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  border: 1px solid blue;
  width: 100%;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TagWrapper = styled.div`
  margin: auto;
`;
const SortWrapper = styled.div`
  position: absolute;
  right: 0%; 
`;

export { Wrapper, TagWrapper, SortWrapper };
