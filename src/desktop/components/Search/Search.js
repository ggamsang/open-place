import React from 'react';
import styledComponents from 'styled-components';
import zoombg from "resources/zoom.png";
import filterbg from "resources/filter.png";
import { CATEGORY } from 'desktop/components/Commons/Define';

const WIDTH = 335;
const Wrapper = styledComponents.div`
    width: ${props => props.width === null ? WIDTH : props.width}px;
    // margin: auto;
`;
const InputWrapper = styledComponents.div`
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${props => props.width === null ? WIDTH : props.width}px;
    width: 100%;
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

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { keyword: this.props.keyword }
    }
    componentDidMount() {
        const node = document.getElementById('search');
        if (node) {
            node.value = this.props.keyword ? this.props.keyword : "";
        }
    }
    goSearch = (category,sort,keyword) => {
        console.log(`/search/${category}/${keyword}`)
        window.location.href = `/search/${category}/${sort}/${keyword}`;
    }
    handleKeyDown = e => {
        if (e.key === "Enter" && e.target.value) {
            this.goSearch(CATEGORY.PLAY,1,e.target.value);
        }
    }
    handleZoomClicked = () => {
        const input = document.getElementById("search");
        console.log(input.value)
        if (input.value !== "") {
            this.goSearch(CATEGORY.PLAY,1,input.value);
        }
    }
    render() {
        return (<Wrapper width={this.props.width}>
            <InputWrapper width={this.props.width}>
                <span className="zoom" onClick={() => this.handleZoomClicked()} />
                <input id="search" placeholder={this.props.placeholder || '경험 찾아보기'} onKeyDown={e => this.handleKeyDown(e)} />
                {this.props.disabled_filter !== true && <span className='filter' />}
            </InputWrapper>
        </Wrapper>);
    }
}
export default Search;