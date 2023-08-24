import React from 'react';
import zoombg from "resources/mobiles/zoom.png";
import { authGET, GET, WIDTH } from 'constant';
import styled from 'styled-components';
import host from 'config';
import { goto } from 'navigator';

const Wrapper = styled.div`
    width: ${props => props.width === null ? WIDTH : props.width}px;
    position: relative;
`;
const InputWrapper = styled.div`
    margin: auto;
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
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
`;
const ListWrapper = styled.ul`
    position: absolute;
    transform: translate(0, 1rem);
    width: 300px;
    min-height: 39px;
    max-height: 400px;
    overflow-y: auto;
    background: #F8F8F8 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 7px;
    z-index: 9;
    box-sizing: border-box;
    padding: 0;
    list-style: none;

    li {
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid transparent;
        display: flex;
        align-item: center;
        flex-direction: row;
        div {
            width: 40%;
            :first-child {
                width: 20%;
            }
        }
        img {
            width: 25px;
            height: 25px;
            border-radius: 100%;
        }
        :hover {
            border: 0.5px dashed #DDD; 
        }
    }
`;

export class MemberSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: this.props.keyword,
            list: [],
        }
    }
    componentDidMount() {
        const node = document.getElementById('search');
        if (node) {
            node.value = this.props.keyword ? this.props.keyword : "";
        }
    }
    handleKeyDown = e => {
        console.log(e.target.value, e.target.value.length);
        if (e.target.value && e.target.value.length > 1) {
            fetch(`${host}/message/find/${e.target.value}`, GET)
                .then(res => res.json())
                .then(data => this.setState({ list: data.list || [] }))
                .catch(e => {
                    console.error(e);
                });
        } else { this.setState({ list: [] }) }
    }
    handleZoomClicked = e => {
        console.log(e);
    }
    getMessageGroupId = (user_id) => {
        const { token } = this.props;
        if (token) {
            fetch(`${host}/message/group/${user_id}`, authGET(token))
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        // if (data.detail) {
                        goto("MESSAGE", data.detail);
                        // } else {
                        // 
                        // }
                    }
                })
                .catch(e => {
                    console.error(e);
                });
        }
    }
    render() {
        const { list } = this.state;

        return (<Wrapper width={this.props.width}>

            <InputWrapper width={this.props.width}>
                <span
                    className="zoom"
                    onClick={this.handleZoomClicked} />
                <input
                    id="search"
                    placeholder={'대화상대 찾아보기'}
                    onChange={this.handleKeyDown} />
            </InputWrapper>

            {list && list.length > 0 &&
                <ListWrapper>
                    {list.map(({ uid, id, nick_name, s_img }) => {
                        return (<li key={uid} onClick={() => this.getMessageGroupId(uid)}>
                            <div>
                                <img alt="mini-profile" src={s_img} />
                            </div>
                            <div>
                                {id}
                            </div>
                            <div>
                                {nick_name}
                            </div>
                        </li>)
                    })}
                </ListWrapper>}
        </Wrapper>);
    }
};