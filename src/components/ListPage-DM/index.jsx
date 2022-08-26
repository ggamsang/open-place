import React from 'react';
import * as styled from './styles';

const SendDm = () => {
    return(
        <styled.Container>
            <styled.DmButton>
                <styled.DmButtonImg />
                <styled.DmButtonText>문의</styled.DmButtonText>
            </styled.DmButton>
        </styled.Container>
    );
};

export default SendDm;