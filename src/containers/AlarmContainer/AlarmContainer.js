import React from 'react';
import Alarm from "components_mobile/Alarm";

const dummy = [
    { 'title': '같이모여서 공부해요!', 'content': 'alarm content' },
    { 'title': '[광고]할인행사!!!', 'content': 'alarm content' },
    { 'title': '우리 아이템을 구매해주셔서 감사합니다!', 'content': 'alarm content' },
    { 'title': 'alarm title', 'content': 'alarm content' },
    { 'title': 'alarm title', 'content': 'alarm content' },
    { 'title': 'alarm title', 'content': 'alarm content' }
]
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
            {this.state.active
                ? <Alarm close={() => this.onClose()} list={this.state.alarm} />
                : <button
                    id="alarm-button"
                    style={{ display: "none", top: "0", zIndex: "999", position: "fixed" }}
                    onClick={() => this.onOpen()}>alarm</button>
            }
        </>)
    }
}

export default AlarmContainer;