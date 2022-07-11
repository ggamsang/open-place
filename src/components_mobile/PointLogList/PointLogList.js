import React from 'react';
import { Pagination } from 'semantic-ui-react';
import styled from 'styled-components';
import { WIDTH } from 'constant';

const Wrapper = styled.div`
    font-family: Noto Sans KR;
    *{ box-sizing: border-box; }
    ul { padding: 0; margin: 0;}
    .page-wrap {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .active {
            background-color: red;
            color: white;
        }
        .item {
            padding: 5px 12px;
            margin-right: 10px;
            border-radius: 5px;
        }
    }
    .line {
        margin: auto;
        width: ${WIDTH - 20}px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 10px;
        div {
            text-align: center;
            width: 33%;
            &.point-log-list-header {
                height: 15px;
                text-align: center;
                font: normal normal 500 12px/15px Pretendard;
                letter-spacing: 0px;
                color: #000000;
            }
            &.point-log-list-element {
                height: 16px;
                text-align: center;
                font: normal normal normal 13px/16px Pretendard;
                letter-spacing: 0px;
                color: #000000; 
            }
        }
        border-bottom: 1px solid #E9E9E9;
    }
`;
const SubTitle = styled.div`
    width: 100%;
    // height: 21px;
    text-align: center;
    font: normal normal medium 18px/21px Pretendard;
    letter-spacing: 0px;
    color: #4A4B4D; 
    padding: 10px 0px;
    box-sizing: border-box;
`;
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 27px;

    button {
        &.active {
            background: #FE1400 0% 0% no-repeat padding-box;
        }
        &.stepback {
            margin-left: 8px;
        }
        border: none;
        outline: none;
        width: 155px;
        height: 35px;
        background: #707070 0% 0% no-repeat padding-box;
        box-shadow: 2px 2px 3px #00000019;
        border-radius: 10px;
        .text {
            margin: auto;
            width: max-content;
            height: 18px;
            text-align: center;
            font: normal normal bold 15px/18px Pretendard;
            letter-spacing: 0px;
            color: #FFFFFF;
        }
    }
`;
const logs = [
    {
        "create_time": "2021. 05. 17",
        "point_history": "10,000",
        "charge_type": "카드 결제",
    },
];

class PointLogList extends React.Component {
    componentDidMount() {
        this.GetList();
    }
    GetList = () => {
        this.props.GetTotalCount();
        this.props.GetList(0);
    }
    handlePageNumberClicked = async (e, page) => {
        this.props.GetTotalCount();
        await this.props.GetList(page.activePage - 1);
    }

    render() {
        const { pointlog = logs } = this.props;
        const date = (strDate) => strDate ? strDate.split("T")[0] : "알 수 없음";
        const PER = 8; // 페이지당 출력개수

        return (<Wrapper>

            <SubTitle>충전 내역</SubTitle>

            <ButtonWrapper>
                <button>
                    <div className='text'>포인트충전</div>
                </button>
                <button className='stepback active'>
                    <div className='text'>충전 내역</div>
                </button>
            </ButtonWrapper>

            <div className='line'>
                <div className="point-log-list-header">날짜</div>
                <div className="point-log-list-header">결제 금액</div>
                <div className="point-log-list-header">결제 수단</div>
            </div>

            <ul>
                {pointlog.map((item, idx) =>
                    <li key={idx} className="line">
                        <div className='point-log-list-element'>{date(item.create_time)}</div>
                        <div className='point-log-list-element'>{item.point_history}</div>
                        <div className='point-log-list-element'>{item.charge_type}</div>
                    </li>)}
            </ul>

            <div className='page-wrap'>
                <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={Math.round(((this.props.total || PER) / PER) + 0.5)}
                    onPageChange={this.handlePageNumberClicked}
                />
            </div>
        </Wrapper>)
    }
}
export default PointLogList;