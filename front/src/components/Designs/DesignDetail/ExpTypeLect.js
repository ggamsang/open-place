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
  const [fold, setFold] = React.useState(true);
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
            {
              // DesignDetail.user_id === userInfo?.uid &&
              // (isGroupMember || DesignDetail.is_parent) &&
              // DesignDetail?.uid && (
              // 이게 부모디자인인가? 맴버거나 너꺼이거나?
              // userinfo && parent && e (member || (designdetail))
              // DesignDetail?.is_parent &&
              ((isGroupMember && DesignDetail.d_flag === 1) ||
                (DesignDetail.is_parent &&
                  DesignDetail?.user_id === userInfo?.uid)) && (
                <>
                  <ManageButton onClick={onClickVChat}>
                    <span>화상회의</span>
                  </ManageButton>
                  <ManageButton onClick={onClickChat}>
                    <span>채팅</span>
                  </ManageButton>
                </>
              )
            }
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

            {token &&
              // isGroupExp &&
              DesignDetail.parent_design === null &&
              applied === false &&
              DesignDetail.user_id !== userInfo?.uid && (
                <PurchaseButton onClick={onClickBuy}>
                  <span>강의신청하기</span>
                </PurchaseButton>
              )}
            {DesignDetail.parent_design && (
              <>
                <PurchaseButton
                  onClick={() => goto("EXP", DesignDetail.parent_design)}
                >
                  <span>개설자페이지로 이동</span>
                </PurchaseButton>
              </>
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
                id={
                  isGroupMember ? DesignDetail.parent_design : DesignDetail.uid
                }
                token={token}
                user_id={userInfo?.uid}
              />
            )}

            {token &&
              forkDesignList?.length > 0 &&
              DesignDetail.is_parent &&
              DesignDetail.user_id === userInfo?.uid && (
                <ManageButton onClick={onClickManage}>
                  <span>관리모드</span>
                  {forkDesignList.filter((item) => item.d_flag === 0).length >
                    0 && <b>new!!</b>}
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

            {/* 개설자인가? */}
            {/* {DesignDetail.parent_design === null && (
              <>{DesignDetail.parent_design}...</>
            )} */}
            {/* <ExpInfoText>가입목록</ExpInfoText> */}
            {fold && DesignDetail?.parent_design === null && (
              <div
                style={{
                  marginTop: "25px",
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                  gap: "10px",
                }}
              >
                <div style={{ width: "330px" }}>
                  <Design {...DesignDetail} onClick={() => setFold(!fold)} />
                </div>
                {forkDesignList?.length > 0 && (
                  // DesignDetail.is_parent &&
                  <>
                    {forkDesignList
                      .filter((item) => item.d_flag !== 0)
                      .map((item) => (
                        <div key={item.uid} style={{ position: "relative" }}>
                          {DesignDetail.user_id === userInfo?.uid && (
                            <button
                              style={{
                                zIndex: "701",
                                position: "absolute",
                                backgroundColor: "black",
                                color: "white",
                                fontSize: "1.5rem",
                                top: "5px",
                                left: "10px",
                                borderRadius: "25px",
                                padding: "10px",
                              }}
                              onClick={() =>
                                onClickForkDesignKickOut(DesignDetail.uid)
                              }
                            >
                              퇴출
                            </button>
                          )}
                          {item.user_id === userInfo?.uid && (
                            <p
                              style={{
                                zIndex: "701",
                                position: "absolute",
                                backgroundColor: "#A0A0A0",
                                color: "white",
                                fontSize: "1.5rem",
                                top: "5px",
                                left: "10px",
                                borderRadius: "25px",
                                padding: "10px",
                              }}
                            >
                              내 디자인
                            </p>
                          )}
                          <Design
                            kickout={onClickForkDesignKickOut}
                            {...item}
                            onClick={() => goto("EXP", item.uid)}
                          />
                        </div>
                      ))}
                  </>
                )}
              </div>
            )}
          </>
        ) : (
          <></>
        )}
        {!fold && (
          <div style={{ marginTop: "10px" }}>
            <ManageButton onClick={() => setFold(!fold)}>
              <span>목록으로</span>
            </ManageButton>
            <ExpInfoText>상세정보</ExpInfoText>
          </div>
        )}
        {/* {DesignDetail?.parent_design !== null && ( */}
        <>
          {fold ? (
            <></>
          ) : (
            <>
              {DesignDetail.is_project === 1 ? (
                <DesignDetailStepContainer
                  editor={DesignDetail.user_id === userInfo?.uid}
                  design={DesignDetail}
                  // {...this.state}
                />
              ) : (
                <div className="marginLeft">
                  <DesignDetailViewContainer
                    editor={DesignDetail.user_id === userInfo?.uid}
                    id={id}
                    // {...this.state}
                    history={history}
                  />
                </div>
              )}
            </>
          )}
        </>
        {/* )} */}

        {DesignDetail?.is_parent == false &&
          isGroupMember &&
          DesignDetail.d_flag === 0 && (
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
          )}
        {DesignDetail?.is_parent === false && DesignDetail.d_flag === 1 && (
          <>
            {DesignDetail.is_project === 1 ? (
              <DesignDetailStepContainer
                editor={DesignDetail.user_id === userInfo?.uid}
                design={DesignDetail}
                // {...this.state}
              />
            ) : (
              <div className="marginLeft">
                <DesignDetailViewContainer
                  editor={DesignDetail.user_id === userInfo?.uid}
                  id={id}
                  // {...this.state}
                  history={history}
                />
              </div>
            )}
          </>
        )}
      </React.Fragment>
    </>
  );
};
export default ExpTypeLect;
