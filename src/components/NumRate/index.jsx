import React from 'react';
import * as styled from './styles';



const NumRate = () => {
    return(
        <styled.ExpDiv>
            <styled.RateDiv>
            <styled.Rate>4.4</styled.Rate>
            <styled.Review>리뷰 135개</styled.Review>
            </styled.RateDiv>
            <styled.StarIcon />
            {/* <NumRate /> */}
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
    );
};

export default NumRate;