import React, { Component } from 'react';
import styled from 'styled-components';
import { resolution } from 'mobile/commons/resolution';
import { keyframes } from 'styled-components';
import CheckIcon from 'resources/mobiles/check_green.svg';

const Wrap = styled.div`
    width:${resolution(props => props.width === null ? 300 : props.width)}px;
    height:${resolution(props => props.height === null ? 300 : props.height)}px;
    max-width:${resolution(props => props.width === null ? 300 : props.width)}px;
    max-height:${resolution(props => props.height === null ? 300 : props.height)}px;

    border-radius:3px;
    border:1px solid white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    .checked{
        opacity:${props => props.checked === true ? "1" : "0"};
        width:16px;
        height:16px;
        max-width:16px;
        max-height:16px;
        background-image:url(${CheckIcon});
        background-repeat:no-repeat;
        margin-right:15px;
    }
    .preNum010 {
        margin-left: 10px;
    }
`
const InputField = styled.input`
    background-color:transparent;
    outline:none;
    border:none;
    padding-left: 10px;
`
const InputRegionNumber = styled.input`
    width:${resolution(50)}px;
    font-size:${resolution(16)}px;
    border:none;
    outline:none;
    background-color:transparent;
    margin-left:15px;
    border-right:1px solid white;

`
class InputPhone extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const warning = this.props.warning;
        return (
            <React.Fragment>
                <Wrap width={this.props.width} height={this.props.height} checked={this.props.checked}>
                    <InputRegionNumber value={"+82"} />
                    <div className='preNum010'>
                        010-
                    </div>
                    <InputField
                        maxlength="8"
                        type="number"
                        onChange={this.props.onChangeValue}
                        value={this.props.value}
                    />
                    <div className='checked' />
                </Wrap>
            </React.Fragment>
        )
    }
}

export default InputPhone;
