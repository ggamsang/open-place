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
  ManageButton,
  LikeButton,
  PurchaseButton,
  ReviewText,
} from "./styles";
import { CATEs, TYPEs } from "constant";
import Design from "components/Designs/Design";
import { goto } from "navigator";
import DesignDetailStepContainer from "containers/ExpItem/DesignDetailStepContainer";
import DesignDetailViewContainer from "containers/ExpItem/DesignDetailViewContainer";
import GroupNoticeContainer from "containers/Groups/GroupNoticeContainer";
import NumRate from "./NumRate";

const ExpTypeLect = ({
  id,
  token,
  DesignDetail,
  userInfo,
  forkDesignList,
  manage,
  onClickVChat,
  onClickChat,
  onClickLike,
  onClickBuy,
  isGroupExp,
  isGroupMember,
  history,
  onClickModify,
  applied,
  isMyDesign,

  onClickForkDesignKickOut,
  onClickForkDesignAccept,
  onClickForkDesignDeny,
  onClickManage,
}) => {
  return (
    <>
      {/* 경험.강의/강좌 */}
      {isGroupMember && <>member</>}
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
              {isMyDesign
              ?<>내 경험아이템</>
              :<>
              작성자: {DesignDetail.userName}
              </>}
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
            {(DesignDetail.user_id === userInfo.uid || isGroupMember) &&
              DesignDetail?.uid && (
                <ManageButton onClick={onClickVChat}>
                  <span>화상회의</span>
                </ManageButton>
              )}
            {isGroupMember && DesignDetail?.uid && (
              <ManageButton onClick={onClickChat}>
                <span>채팅</span>
              </ManageButton>
            )}
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

            {token &&
              // isGroupExp &&
              applied === false &&
              DesignDetail.user_id !== userInfo?.uid && (
                <PurchaseButton onClick={onClickBuy}>
                  <span>강의신청하기</span>
                </PurchaseButton>
              )}
            {/* {token &&
              // isGroupExp &&
              applied === true &&
              DesignDetail.user_id !== userInfo?.uid && (
                <LikeButton onClick={onClickBuy}>
                  <span>신청하기</span>
                </LikeButton>
              )} */}

            {DesignDetail && (
              <GroupNoticeContainer
                owner_id={DesignDetail.user_id}
                id={DesignDetail.uid}
                token={token}
                user_id={userInfo?.uid}
              />
            )}

            {token && forkDesignList?.length > 0 && DesignDetail.is_parent && (
              <ManageButton onClick={onClickManage}>
                <span>관리모드</span>
              </ManageButton>
            )}

            {token && DesignDetail.user_id === userInfo?.uid && (
              <LikeButton onClick={onClickModify}>
                <span>수정하기</span>
              </LikeButton>
            )}
          </div>
        </ExpInfoDiv>
      </React.Fragment>

      {/* -body- */}
      <React.Fragment>
        {isGroupExp ? (
          <>
            {manage && (
              <>
                <ExpInfoText>그룹관리</ExpInfoText>
                {forkDesignList &&
                  forkDesignList.filter((item) => item.d_flag === 0).length ===
                    0 && <h3>가입신청내역없음</h3>}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                  }}
                >
                  {forkDesignList &&
                    forkDesignList
                      .filter((item) => item.d_flag === 0)
                      .map((item) => (
                        <div key={item.uid}>
                          <button
                            style={{
                              backgroundColor: "red",
                              color: "white",
                              fontSize: "1.5rem",
                              padding: "5px 10px",
                              borderRadius: "15%",
                            }}
                            onClick={() => onClickForkDesignAccept(item.uid)}
                          >
                            수락
                          </button>
                          <button
                            style={{
                              backgroundColor: "black",
                              color: "white",
                              fontSize: "1.5rem",
                              padding: "5px 10px",
                              borderRadius: "15%",
                            }}
                            onClick={() => onClickForkDesignDeny(item.uid)}
                          >
                            거절
                          </button>
                          <Design {...item} />
                        </div>
                      ))}
                </div>
              </>
            )}
            {token && forkDesignList?.length > 0 && DesignDetail.is_parent && (
              <>
                {/* <ExpInfoText>가입목록</ExpInfoText> */}

                <div
                  style={{
                    marginTop: "25px",
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                  }}
                >
                  {forkDesignList
                    .filter((item) => item.d_flag !== 0)
                    .map((item) => (
                      <div key={item.uid}>
                        <Design
                          {...item}
                          onClick={() => goto("EXP", item.uid)}
                        />
                        <button
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            fontSize: "1.5rem",
                            padding: "5px 10px",
                            borderRadius: "15%",
                          }}
                          onClick={() => onClickForkDesignKickOut(item.uid)}
                        >
                          퇴출
                        </button>
                      </div>
                    ))}
                </div>
              </>
            )}
          </>
        ) : (
          <></>
        )}

        {isGroupMember && DesignDetail.d_flag === 0 ? (
          <>
            {" "}
            <p
              style={{
                fontSize: "2rem",
                padding: "50px",
                textAlign: "center",
                width: "100%",
              }}
            >
              가입신청 중입니다.
            </p>
          </>
        ) : (
          <>
            {/* design detail */}
            <ExpInfoText>상세정보</ExpInfoText>

            {DesignDetail && DesignDetail.is_project === 1 ? (
              <DesignDetailStepContainer
                design={DesignDetail}
                // {...this.state}
              />
            ) : (
              <div className="marginLeft">
                <DesignDetailViewContainer
                  id={id}
                  {...this.state}
                  history={history}
                />
              </div>
            )}
          </>
        )}
        {!isGroupMember && (
          <>
            {/*  */}
            <ReviewText>리뷰</ReviewText>
            <div className="reviewWrap">
              {/* <ReviewContainer
                write={this.state.write}
                onCloseWriteModal={() => this.setState({ write: false })}
              /> */}
            </div>
          </>
        )}
      </React.Fragment>
    </>
  );
};
export default ExpTypeLect;
