import React from 'react';
import Alarm from "components_mobile/Alarm";
import styled from 'styled-components';
import alarm from 'source/Iconly-alarm-white.svg'
import { resolution } from 'commons/resolution';
import { connect } from "react-redux";
import { GetMyAlarmListRequest } from 'actions/Alarm/alarm';
let dummy = [
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
const dummyUserInfo = {uid:1}
class AlarmContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false, alarm: [] };
    }
    
    async componentDidMount() {
        this.setState({ alarm: dummy });
        await this.props.GetMyAlarmListRequest(dummyUserInfo.uid)
        .then(async()=>{
            const temp=[];
            this.props.alarmList &&
            this.props.alarmList.length>0&&
            await this.props.alarmList.map((item,index)=>{
                temp.push({title:item.title})
            })
            await this.setState({alarm:temp})
        });
    }
    onOpen = () => {
        this.setState({ active: true })
        const dimmer = document.getElementById('dimmer');
        dimmer.classList.add("dimmer");
        const main = document.getElementById('main');
        main.classList.add("disabled");
    }
    onClose = () => {
        this.setState({ active: false })
        const dimmer = document.getElementById('dimmer');
        dimmer.classList.remove("dimmer");
        const main = document.getElementById('main');
        main.classList.remove("disabled");
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

const mapStateToProps = (state) => ({
    alarmList:state.AlarmList.status.alarmList,
});

const mapDispatchToProps = (dispatch) => ({
    GetMyAlarmListRequest:(user_id)=>{
        return dispatch(GetMyAlarmListRequest(user_id))
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(AlarmContainer);