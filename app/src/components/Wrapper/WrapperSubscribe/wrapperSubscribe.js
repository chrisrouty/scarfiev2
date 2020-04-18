//Basic
import React from 'react';

//Style
import {Styled} from './styled'; 

function WrapperSubscribe({...props}) {
    return (
        <Styled {...props}>
            {props.children}
        </Styled>
    );
}

export default WrapperSubscribe; 