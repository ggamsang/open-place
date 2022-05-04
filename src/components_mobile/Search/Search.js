import React from 'react';
import styledComponents from 'styled-components';

const Wrapper = styledComponents.div`
    width: 100vw;
`;
const InputWrapper = styledComponents.div`
    margin: auto;
    display: flex;
    align-items: center;
    max-width: 360px;
    width: 360px;
    height: 35px;
    border-radius: 6px;
    background-color: white;
    
    // padding-left: 9.53px;
    // padding-right: 16.55px;
    input {
        height: 18px;
        padding: 0px;
        // width: 100%;
    }
    .zoom {
        border:1px dashed #BDBDBD; 
        width: 18.69px; 
        height: 18.69px; 
    }
    .filter { 
        border:1px dashed #BDBDBD; 
        width: 23.14px; 
        height: 18.62px; 
    }
`;
const Zoom = () => <div style={{}}>&nbsp;</div>
const Filter = () => <div style={{}}>&nbsp;</div>

class Search extends React.Component {
    render() {
        return (<Wrapper>
            <InputWrapper>
                <span className="zoom">
                    <Zoom />
                </span>
                <input placeholder='경험 찾아보기' />
                <span className='filter'>
                    <Filter />
                </span>
            </InputWrapper>
        </Wrapper>);
    }
}
export default Search;