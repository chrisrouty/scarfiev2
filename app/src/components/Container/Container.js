//Basic
import React from 'react';

//Style
import {Styled} from './styled';

function Container({...props}) {
    return (
        <Styled {...props}>
            {props.children}
        </Styled>
    );
}

export default Container;