import React from "react";
import {
  ExpInfoText,
  ExpInfoDiv,
  ExpImg,
  ExpInnerDiv,
  NameAndTagsDiv,
  ExpName,
  CateType,
  TagButton,
  TagButtonText,
  Price,
  StarIcon,
  LikeButton,
} from "./styles";
import { CATEs, TYPEs } from "constant";
import NumRate from "./NumRate";

import DesignDetailStepContainer from "containers/ExpItem/DesignDetailStepContainer";
import DesignDetailViewContainer from "containers/ExpItem/DesignDetailViewContainer";

const ExpTypeNorm = ({
  DesignDetail,
  isMyDesign,
  userInfo,
  onClickLike,
  onClickModify,
  token,
  id,
  history,
}) => {
  return (
    <>
      경험.일반
      {/* -head- */}
      <React.Fragment>
        <ExpInfoText>경험정보</ExpInfoText>
        <ExpInfoDiv>
          <ExpImg url={DesignDetail?.img?.l_img} />

          <ExpInnerDiv>
            <NameAndTagsDiv>
              <div>
                <ExpName>{DesignDetail?.title}</ExpName>
                <CateType>
                  (
                  {
                    CATEs.filter(
                      (cate) => cate.value === DesignDetail.category_level1
                    )[0]?.name
                  }
                  ) x (
                  {
                    TYPEs.filter(
                      (type) => type.value === DesignDetail.design_type
                    )[0]?.name
                  }
                  )
                </CateType>
              </div>
              {DesignDetail.taglist &&
                DesignDetail.taglist.length > 0 &&
                DesignDetail.taglist.split("|").map((tag, index) => (
                  <TagButton key={index}>
                    <TagButtonText>{tag}</TagButtonText>
                  </TagButton>
                ))}
            </NameAndTagsDiv>

            <Price>
              {isMyDesign ? (
                <>내 경험아이템</>
              ) : (
                <>작성자: {DesignDetail.userName}</>
              )}
              {/* {DesignDetail.price > 0
                      ? new Intl.NumberFormat("ko-KR", {
                          style: "currency",
                          currency: "KRW",
                        }).format(DesignDetail.price) + "원"
                      : "무료"} */}
            </Price>
            <NumRate />
          </ExpInnerDiv>

          <StarIcon liked={DesignDetail.isLike !== 0} />

          <div
            style={{
              marginRight: "15px",
              marginBottom: "15px",
              position: "absolute",
              width: "max-content",
              right: "0%",
              bottom: "0%",
              display: "flex",
            }}
          >
            {/* {isGroupMember && DesignDetail?.uid && ( */}
            {/* )} */}
            {/* {token &&
                  DesignDetail.user_id !== userInfo?.uid && (
                    <PurchaseButton onClick={this.onClickBuy}>
                      <span>구매하기</span>
                    </PurchaseButton>
                  )} */}

            {DesignDetail.user_id !== userInfo?.uid && (
              <LikeButton onClick={onClickLike}>
                {/* {DesignDetail.isLike} */}
                {/* bgColor={this.state.like === true ? "red" : "#dd5035"} text= */}
                <span>{DesignDetail.isLike !== 0 ? "❤️" : ""}좋아요</span>
              </LikeButton>
            )}

            {token && DesignDetail.user_id === userInfo?.uid && (
              <LikeButton onClick={onClickModify}>
                <span>수정하기</span>
              </LikeButton>
            )}
          </div>
        </ExpInfoDiv>
      </React.Fragment>
      <div style={{ marginTop: "2rem" }}>
        {DesignDetail?.is_project === 1 ? (
          <DesignDetailStepContainer
            editor={DesignDetail.user_id === userInfo?.uid}
            design={DesignDetail}
            // {...this.state}
          />
        ) : (
          <div className="marginLeft">
            <DesignDetailViewContainer
              editor={DesignDetail?.user_id === userInfo?.uid}
              id={id}
              // {...this.state}
              history={history}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default ExpTypeNorm;
