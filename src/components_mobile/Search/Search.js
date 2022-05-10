import React from 'react';
import styledComponents from 'styled-components';
import zoombg from "resources/zoom.png";
import filterbg from "resources/filter.png";

const Wrapper = styledComponents.div`
    width: 100vw;
`;
const InputWrapper = styledComponents.div`
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 360px;
    width: 360px;
    height: 35px;
    border-radius: 6px;
    background-color: white;

    
    input {
        font-family: Pretendard;
        font-weight: 500;
        font-size: 15px;
        text-align: left;
        line-height: 18px;
        border: none;
        outline: none;
        :focus {
            outline: none !important;
            border: 1px solid #BDBDBD;
            // box-shadow: 0 0 1px #719ECE;
        }
        height: 18px;
        padding: 0px;
        width: 80%;
        ::placeholder {
            color: #BDBDBD;

        }
    }
    .zoom {
        // border:1px dashed #BDBDBD;
        background-image: url(${zoombg});
        background-size: cover;
        background-repeat: no-repeat;
        width: 19px; 
        height: 19px; 
        margin-left: 10px;
        margin-right: 15px;
    }
    .filter { 
        // border: 1px dashed #BDBDBD; 
        background-image: url(${filterbg});
        background-size: cover;
        background-repeat: no-repeat;
        width: 23px; 
        height: 18px;
        margin-right: 15px;
        margin-left: 15px;
    }
`;
const Zoom = () => <div style={{}}>&nbsp;</div>
const Filter = () => <div style={{}}>&nbsp;</div>

class Search extends React.Component {
    handleKeyDown = e => {
        if (e.key === "Enter") {
            alert(e.target.value);
        }
    }
    handleZoomClicked = () => {
        const input = document.getElementById("search");
        input.value && alert(input.value);
    }
    render() {
        return (<Wrapper>
            <InputWrapper>
                <span className="zoom" onClick={() => this.handleZoomClicked()}>
                    <Zoom />
                </span>
                <input id="search" placeholder='경험 찾아보기' onKeyDown={e => this.handleKeyDown(e)} />
                <span className='filter'>
                    <Filter />
                </span>
            </InputWrapper>
        </Wrapper>);
    }
}
export default Search;