import React, { Component } from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';

const DropDown = styled.select`
    box-sizing:border-box;

    width:${resolution(props=>props.width)}px;
    height:${resolution(props=>props.height)}px;
    max-width:${resolution(props=>props.width)}px;
    max-height:${resolution(props=>props.height)}px;
    background-color:${props=>props.color==null?'#E9E9E9':props.color};
    border:${props=>props.warning == true ? "1px solid red" : "none"};
    border-radius:${props=>props.radius==null?"0":props.radius}px;
    outline:none;
    font-size:${resolution(props=>props.fontSize==null?"15":props.fontSize)}px;
    color:${props=>props.warning==true?"red":props.fontColor==null?"black":props.fontColor};
    padding:5px;
`

class DropDownNormal extends Component {
    constructor(props){
        super(props);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.state = {
            options:[],
        }
    }
    onChangeValue=async(event)=>{
        this.props.onChangeValue && await this.props.onChangeValue(event);
    }

    render() {
    const warning = this.props.warning;
    return (
        <React.Fragment>
            <DropDown
                value={this.props.value||-1}
                disabled={this.props.disabled}
                onChange={this.onChangeValue}
                style={this.props.style}
                width={this.props.width}
                height={this.props.height}
                color={this.props.color}
                radius={this.props.radius}
            >
                {
                    this.props.placeholder&&
                    <option selected disabled value="none">{this.props.placeholder}</option>
                }
                {
                    this.props.options&&this.props.options.map((item,index)=>{
                        return <option key={index} value={index}>{item.name}</option>
                    })
                }

            </DropDown>
        </React.Fragment>
    )
  }
}

export default DropDownNormal;
