import React from "react";
import { useEffect } from "react";
import * as styled from "./styles";
import host from "../../../config";
import { GET, AcceptForThumbnail } from "../../../constants";
import { useState } from "react";
import DropDownNormal from "../../../mobile/components/Commons/DropDown";

const getCategoryListRequest = () => {
  const url = `${host}/defaultList/category`;
  return fetch(url, GET)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => []);
};
const getExpTypeListReqeuest = () => {
  const url = `${host}/defaultList/exptype`;
  return fetch(url, GET)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => []);
};
const getExpDetailRequest = (item_id, user_id) => {
  const url = `${host}/exp/${item_id}/${user_id}`;
  return fetch(url, GET)
    .then((res) => res.json())
    .then((data) => data || null)
    .catch((error) => null);
};

const Thumbail = ({ url, onChange }) => {
  const [newThumbnail, setNewThumbnail] = useState(null);
  const handleChangeThumnbail = async (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onloadend = () => {
      setNewThumbnail(reader.result);
      onChange &&
        onChange({ thumbnail: reader.result, thumbnail_name: file.name });
    };

    event.target.files[0] && reader.readAsDataURL(file);
  };

  return (
    <styled.AddThumbnail>
      <span>썸네일 이미지 등록</span>
      {newThumbnail && (
        <button
          className="x"
          onClick={() => {
            setNewThumbnail(null);
            document.getElementById("thumbnail").value = "";
          }}
        >
          취소
        </button>
      )}
      <label>
        <input
          hidden
          id="thumbnail"
          onChange={handleChangeThumnbail}
          type="file"
          accept={AcceptForThumbnail}
        />
        <styled.ThumbnailImg url={newThumbnail || url}>
          {!url && <span>첨부</span>}
        </styled.ThumbnailImg>
      </label>
    </styled.AddThumbnail>
  );
};

const InfoBox = ({ category: categories, title: _title }) => {
  const [title, setTitle] = useState(_title);

  useEffect(() => {
    if (title === "") {
      // alert("!");
    }
  }, [title]);

  return (
    <styled.InfoBox>
      <styled.TitleDiv>
        <div>제목</div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </styled.TitleDiv>

      <styled.CategoryDiv>
        <div>카테고리</div>
        <div>
          <DropDownNormal
            onChangeValue={(e) =>
              console.log(e.target.value, typeof e.target.value)
            }
            options={category}
            style={styled.CSS.category}
          />
        </div>
        {/* <div>
          <DropDownNormal
            onChangeValue={(e) =>
              console.log(e.target.value, typeof e.target.value)
            }
            options={category2}
            style={styled.CSS.category}
          />
        </div> */}
      </styled.CategoryDiv>
    </styled.InfoBox>
  );
};
const ExpEdit = ({ item_id, userInfo }) => {
  // load
  const [detail, setDetail] = useState(null);
  const [_detail, _setDetail] = useState(null);
  const [category, setCategory] = useState([]);
  const [typelist, setTypeList] = useState([]);

  console.log(item_id, userInfo);
  useEffect(() => {
    getCategoryListRequest().then(setCategory);
    getExpTypeListReqeuest().then(setTypeList);
  }, []);

  useEffect(() => {
    userInfo &&
      getExpDetailRequest(item_id, userInfo.uid).then((detail) => {
        setDetail(detail);
        _setDetail(detail);
      });
  }, [userInfo]);

  // category: 1;
  // content: "<p>딸기에 풍부하게 함유된 비타민C, 안토시아닌, 라이코펜 등의 성분은 혈액순환과</p><p><br></p><p> 신진대사를 촉진하여 감기예방에 도움을 주며 면역력을 높여주는데 효과적입니다.</p>";
  // create_time: "2022-06-23T11:04:29.000Z";
  // detail: null;
  // exp_files: '[{"file_id":1030,"file_url":"https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/dev/uploads/0e8569eb725a160b3ec188c7d43924d8","filename":"1620008191187-x50.png"}]';
  // info: "딸기에 풍부하게 함유된 비타민C, 안토시아닌, 라이코펜 등의 성분은 혈액순환과 신진대사를 촉진하여 감기예방에 도움을 주며 면역력을 높여주는데 효과적입니다.";
  // isLike: 0;
  // is_sold_out: 0;
  // nick_name: "카네이션핑크";
  // price: 20000;
  // taglist: "[딸기,키우기,재배]";
  // thumbnail: "https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/dev/thumbnails/1655948314396-x600.jpg";
  // thumbnail_id: 37;
  // title: "버섯 키우기 ";
  // type: 2;
  // type_detail: '{"game_files":"[]","isOnline":"0","place":"집앞","people":"4","startDate":"2022-07-03","endDate":"2022-07-06"}';
  // uid: 62;
  // update_time: "2022-06-23T11:04:29.000Z";
  // user_id: 11;

  const handleChangeThumnbail = (data) => {
    console.log(data);
  };
  const cancelModify = (e) => {
    e.preventDefault();
    alert("reset!");
  };
  const requestModify = () => {
    alert("...request...success...redirect");
  };
  const handleSubmit = () => {
    alert("!");
  };

  return (
    <styled.Main onSubmit={() => handleSubmit()}>
      <styled.AddExpText>경험 수정</styled.AddExpText>

      {detail === null && <p>{"경험정보를 가져오고 있습니다..."}</p>}

      {detail !== null && (
        <React.Fragment>
          <styled.Wrapper>
            <Thumbail url={detail.thumbnail} onChange={handleChangeThumnbail} />
            <InfoBox {...detail} category={category} onChange={console.log} />
            {/* <Category /> <ExpDetailBox /> */}
          </styled.Wrapper>

          <styled.Wrapper>
            <styled.AddButton onClick={requestModify}>
              <span>수정하기</span>
            </styled.AddButton>
            <styled.CancelButton onClick={cancelModify}>
              <span>취소하기</span>
            </styled.CancelButton>
          </styled.Wrapper>
        </React.Fragment>
      )}
    </styled.Main>
  );
};

export default ExpEdit;


/*
<styled.InfoBox>
  <styled.CategoryDiv>
    <div>카테고리</div>
    <DropDownNormal
      value={selectedCategory || detail?.category - 1}
      onChangeValue={(e) => {setSelectedCategory(e.target.value);}}
      options={category.filter((cate) => cate.parent === 0)}
    />
    <DropDownNormal
      options={category.filter((cate) => cate.parent !== 0)}
    />
    {/* <styled.CategoryButton2><span>소분류</span></styled.CategoryButton2> * /}
    </styled.CategoryDiv>

    <styled.TagDiv>
      <div>태그</div>
      <styled.InputTagDiv>
        <span>태그를 입력하고 [enter] 키를 누르세요.</span>
      </styled.InputTagDiv>
    </styled.TagDiv>
  
    <styled.TagExamplesDiv>
      <div>태그예시</div>
      <div>태그예시</div>
      <div>태그예시</div>
      <div>태그예시</div>
      <div>태그예시</div>
      <div>태그예시</div>
    </styled.TagExamplesDiv>
  
    <styled.DescriptionDiv>
      <div>설명</div>
  
      <textarea
        onChange={(e) => {
          setInfo(e.target.value);
        }}
        placeholder="설명을 입력하세요"
        value={modifiedInfo || detail?.info}
      />
    </styled.DescriptionDiv>
  
    <styled.ExpTypeDiv>
      <div>경험유형</div>
      <DropDownNormal
        value={selectedItemType}
        onChangeValue={(e) => {
          console.log(e.target.value);
          setItemType(e.target.value);
        }}
        options={typelist}
      />
      {/* <styled.InputPriceDiv>
    <span>{}</span>
  </styled.InputPriceDiv> * /}
    </styled.ExpTypeDiv>
  
    <styled.PriceDiv>
      <styled.PriceDivText>가격</styled.PriceDivText>
      <styled.PriceBox>10000</styled.PriceBox>
      <span>원</span>
      <styled.AddPrice>
        <styled.AddPriceButton>+ 1천</styled.AddPriceButton>
        <styled.AddPriceButton>+ 1만</styled.AddPriceButton>
        <styled.AddPriceButton>+ 5만</styled.AddPriceButton>
        <styled.AddPriceButton>+ 10만</styled.AddPriceButton>
        <styled.AddPriceButton>+ 100만</styled.AddPriceButton>
      </styled.AddPrice>
    </styled.PriceDiv>
  </styled.InfoBox>
  </styled.Wrapper>
  <styled.Wrapper>
  <styled.CategoryBox>
  <p>일반</p>
  <p>자문/상담</p>
  <p>강의/강좌</p>
  <p>모임</p>
  <p>게임</p>
  </styled.CategoryBox>
  <styled.ExpDetailBox>
  <span>경험유형 상세</span>
  </styled.ExpDetailBox>
  </styled.Wrapper>
  {/* <styled.AddFile></styled.AddFile> * /}
  
  {/* <styled.Footer /> * /}

*/