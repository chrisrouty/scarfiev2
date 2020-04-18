//Basic
import React from 'react';

//Style
import {Styled} from './styled'; 

function WrapperForm({...props}) {
    return (
        <Styled {...props}>
            {props.children}
        </Styled> 
    );
}

export default WrapperForm; 