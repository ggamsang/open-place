import React from 'react';
import styled from 'styled-components';
import ScrollList from 'components_mobile/Commons/ScrollList';
import Search from 'components_mobile/Commons/Search';
import ButtonNormal from 'components_mobile/Commons/Button/\bButtonNormal';
// import { WIDTH } from "constant";
import { goto } from 'smallfuncs';

const Wrapper = styled.div`
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
       display: none;
    }
    margin: auto;
    .blanker {
        height: 44px;
    }
    .gradient {
        width: 100%;
        background: linear-gradient(69deg, #501B1B, #655FFA, #D30E0E);
        background-size: 200% 200%;
        background-position: top right;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title {
            margin: auto;
            margin-top: 18px;
            color: white;
            width: max-content;
            text-align: center;
            font-family: Pretendard;
            font-weight: 500;
            font-size: 20px;
            line-height: 20px;
        }
        .tagBox{
            width:100%;
            box-sizing:border-box;
            padding:20px 20px 34px 20px;
            .tagList{
                width:100%;
                height:110px;
                display:flex;
                justify-content:center;
                align-items:center;
                background-color:white;
                border-radius:10px;
            }
        }
    }
    .rows {
        width:100%;
        box-sizing:border-box;
        padding:0px 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .search-list-wrapper {
        width:100%;
     }
`;


const dummy = [
    {
      type: "item", title: "스파게티 코드를 작성하자!", score: 4.3,
      tags: ["tag1", "tag2", "tag3"],
      url: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
    },
    {
      type: "item", title: "멍때리며 놀자ㅡ!", score: 3.1,
      tags: ["tag1", "tag2", "tag3"],
      url: "https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc"
    },
    {
      type: "item", title: "결혼은 이렇게!", score: 4.0,
      tags: ["tag1", "tag2", "tag3"],
      url: "https://i.picsum.photos/id/1013/4256/2832.jpg?hmac=UmYgZfqY_sNtHdug0Gd73bHFyf1VvzFWzPXSr5VTnDA"
    },
    {
      type: "item", title: "앞 사람만 노 젖게 시키기", score: 3.5,
      tags: ["tag1", "tag2",],
      url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
    }
  ]
class ExpItemList extends React.Component {
    render() {
        const { list = dummy } = this.props;

        return (<Wrapper>

            <div className='gradient'>
                <div className='blanker'>&nbsp;</div>
                <Search />
                <div className='title'>태그리스트</div>
                <div className='tagBox'>
                    <div className='tagList'>

                    </div>
                </div>
            </div>

            <div className='rows' style={{marginTop:"15px",marginBottom:"15px"}}>
                <ButtonNormal
                onClickEvent={() => goto("CREATE-ITEM")}
                width={165}
                height={35}
                radius={10}
                fontSize={15}
                bgColor={"#707070"}
                text="경험 등록하기"
                style={{marginRight:"25px"}}
                />
                <ButtonNormal
                width={165}
                height={35}
                radius={10}
                fontSize={15}
                bgColor={"#707070"}
                text="인기순"
                />
            </div>

            <div className='search-list-wrapper'>
                <ScrollList list={list} />
                {/* <TopItemListContainer /> */}
            </div>

            <div className='blanker'>&nbsp;</div>
            <div className='blanker'>&nbsp;</div>
            <div className='blanker'>&nbsp;</div>

        </Wrapper>);
    }
}
export default ExpItemList;