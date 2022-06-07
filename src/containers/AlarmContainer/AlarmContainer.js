import React from 'react';
import Alarm from "components_mobile/Alarm";
import styled from 'styled-components';
import alarm from 'source/Iconly-alarm-white.svg'
import { resolution } from 'commons/resolution';

const dummy = [
    { 'title': '같이모여서 공부해요!', 'content': 'alarm content' },
    { 'title': '[광고]할인행사!!!', 'content': 'alarm content' },
    { 'title': '우리 아이템을 구매해주셔서 감사합니다!', 'content': 'alarm content' },
    { 'title': 'alarm title', 'content': 'alarm content' },
    { 'title': 'alarm title', 'content': 'alarm content' },
    { 'title': 'alarm title', 'content': 'alarm content' }
]
const AlarmBox = styled.div`
    box-sizing:border-box;
    width:${resolution(34)}px;
    display:flex;
    justify-content:center;
    margin-right:10px;
    .img_alarm{width:${resolution(27)}px;height:${resolution(27)}px;}

`
class AlarmContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false, alarm: [] };
    }
    componentDidMount() {
        this.setState({ alarm: dummy });
        // this.onOpen();
    }
    onOpen = () => {
        this.setState({ active: true })
        const dimmer = document.getElementById('dimmer');
        dimmer.classList.add("dimmer");
        const main = document.getElementById('main');
        main.classList.add("disabled");
        console.log(main.classList)
    }
    onClose = () => {
        this.setState({ active: false })
        const dimmer = document.getElementById('dimmer');
        dimmer.classList.remove("dimmer");
        const main = document.getElementById('main');
        main.classList.remove("disabled");
        console.log(main.classList)
    }

    render() {
        return (<>
            <AlarmBox onClick={this.onOpen} className='alarm_box'><img className='img_alarm' src={alarm}/></AlarmBox>
            {this.state.active
                ? <Alarm close={() => this.onClose()} list={this.state.alarm} />
                :null}
        </>)
    }
}

export default AlarmContainer;