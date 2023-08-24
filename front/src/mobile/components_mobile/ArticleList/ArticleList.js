import React from 'react';
import { Pagination } from 'semantic-ui-react';
// import Pagination from 'semantic-ui-react-button-pagination';
import { goto } from 'navigator';
import styled from 'styled-components';
import DateFormat from 'modules/DateFormat';

const Wrapper = styled.div`
    font-family: Noto Sans KR;
    .line {
        height: 21px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #C1C1C1;

        // *{ border: 1px solid red; }

        .header {
            text-align: left;
            font-weight: bold;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 0px;
            color: #C1C1C1;
        }
        .title {
            width: 120px;
            height: 19px;
            text-align: left;
            font-weight: medium;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 0px;
            color: #000;

            padding: 0 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .author {
            width: 100px;
            font-weight: normal;
            font-size: 13px;
            line-height: 16px;
            letter-spacing: 0px;
            color: #000;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
        }
        .date {
            width:40px;
            font-weight: normal;
            font-size: 13px;
            line-height: 16px;
            letter-spacing: 0px;
            color: #000;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
        }
    }

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
`;
const Thumbnail = styled.div`
    border: none;
    border-radius: 100%;
    width: 23px;
    height: 23px;
    background-image: url(${prop => prop.url});
    background-color: #E9E9E9;
    background-repeat: no-repeat;
    background-size: cover;
`;
const dummy = [
    { "header": "말머리", "title": "제목예시", "url": "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk", "author": "국민대CRC", "date": "2022-05-19", },
];

class ArticleList extends React.Component {
    componentDidMount() {
        this.props.GetTotalCount();
        this.props.GetList(0);
    }
    gotoDetail = id => {
        goto("READ", id);
    }
    handleClick = async (e, page) => {
        this.props.GetTotalCount();
        await this.props.GetList(page.activePage - 1);
    }

    render() {
        const { articles = dummy } = this.props;
        console.log(this.props);

        return (<Wrapper>
            {/* <div  className="line" style={{backgroundColor:"#efefef"}}>
                    <div className='title'>
                        제목
                    </div>
                    <div className='author'>
                        글쓴이
                    </div>
                    <div className='date'>
                        날짜
                    </div>
                </div> */}
            {articles.map((item, idx) =>
                <div key={idx} className="line" onClick={e => this.gotoDetail(item.uid || idx)}>
                    {/* <div className='header'>
                        {item.head}
                    </div> */}
                    <div className='title'>
                        &nbsp; {item.title}
                    </div>
                    <div className='author'>
                        <Thumbnail url={item.url} />
                        &nbsp;
                        {item.nickname}
                    </div>
                    <div className='date'>
                        {DateFormat(item.update_time)}
                    </div>
                </div>)}

            <div className='page-wrap'>
                <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={Math.round((this.props.total / 5) + 0.5)}
                    onPageChange={this.handleClick}
                />
            </div>
        </Wrapper>)
    }
}
export default ArticleList;