import React from "react";
import { useEffect } from "react";
import * as styled from "./styles";
import { GET } from "../../../constants";
import { useState } from "react";
import host from "../../../config";

export const ReviewList = ({ uid }) => {
  const [reviews, setReivews] = useState([]);

  function GetExpReviewListRequest() {
    const url = `${host}/review/${uid}`;
    return fetch(url, GET)
      .then((res) => res.json())
      .then((data) => setReivews(data?.detail || []))
      .catch((err) => {
        setReviews([]);
        console.error(err);
      });
  }

  useEffect(() => {
    GetExpReviewListRequest();
  }, []);

  console.log(reviews);

  const PreviewImages = ({ images }) => {
    return (
      <styled.ReviewPreviewImageWrapper>
        <p className="no-image">{images[0] === undefined && "No Image"}</p>
        <styled.ReviewPreviewImage url={images[0]} />
        {images.length > 1 && (
          <styled.PreviewLength>
            {images.length > 99 && "+"}
            {images.length > 99 ? 99 : images.length}
          </styled.PreviewLength>
        )}
      </styled.ReviewPreviewImageWrapper>
    );
  };

  const handleOnClickReviewPreview = (uid) => {
    alert(uid);
  };

  return (
    <>
      <styled.ReviewText>리뷰</styled.ReviewText>
      <styled.ReviewDiv>
        {reviews?.map((review) => (
          <div
            className="test"
            key={review.uid}
            onClick={() => handleOnClickReviewPreview(review.uid)}
          >
            <PreviewImages
              images={review?.review_image_list?.split(",") || []}
            />
          </div>
        ))}
      </styled.ReviewDiv>
      {/* 430 - 322 => 108/2 => 54 */}
    </>
  );
};
