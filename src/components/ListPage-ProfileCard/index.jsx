import React, { useEffect, useState } from 'react';
import * as styled from './styles';


const ListPageProfileCard = () => {
    return(
        <styled.TopLists>
            <styled.Profile>
                <styled.ProfileImg />
                <styled.ProfileImgStar />
            </styled.Profile>
            <styled.Wrapper>
                <styled.Name>경험이름</styled.Name>
                <styled.Category>카테고리</styled.Category>
                <styled.Price>13500원</styled.Price>
            </styled.Wrapper>
            
            <styled.ExpDiv>
                <styled.RateDiv>
                <styled.Rate>4.4</styled.Rate>
                <styled.Review>리뷰 135개</styled.Review>
                </styled.RateDiv>
                <styled.StarIcon />
                <styled.NumRate>
                <styled.NumRate2>
                    5<styled.RateIcon /><styled.RateBar />                
                </styled.NumRate2>
                <styled.NumRate2>
                    4<styled.RateIcon /><styled.RateBar />
                </styled.NumRate2>
                <styled.NumRate2>
                    3<styled.RateIcon /><styled.RateBar />
                </styled.NumRate2>
                <styled.NumRate2>
                    2<styled.RateIcon /><styled.RateBar />
                </styled.NumRate2>
                <styled.NumRate2>
                    1<styled.RateIcon /><styled.RateBar />
                </styled.NumRate2>
                
                </styled.NumRate>
            </styled.ExpDiv>
        </styled.TopLists>
    )
}


export default ListPageProfileCard;