//Basic
import React from 'react';

//Style
import {Styled} from './styled';

function Title({...props}) {
    const {isH2, isH3, isH4} = props; 
    if(isH2){
        return (
            <Styled {...props}>
                <h2>{props.children}</h2>
            </Styled>
        );
    } else if(isH3){
        return (
            <Styled {...props}>
                <h3>{props.children}</h3>
            </Styled>
        );
    } else if(isH4){
        return (
            <Styled {...props}>
                <h4>{props.children}</h4>
            </Styled>
        );
    } else {
        return (
            <Styled {...props}>
                <h1>{props.children}</h1>
            </Styled>
        );
    }

}

export default Title;