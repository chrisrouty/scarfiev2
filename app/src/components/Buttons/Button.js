//Basic
import React from 'react';

//Style
import {Styled} from './styled'; 

function Button({...props}) {
    return (
        <Styled {...props}>
            {props.children}
        </Styled> 
    );
}

export default Button; 