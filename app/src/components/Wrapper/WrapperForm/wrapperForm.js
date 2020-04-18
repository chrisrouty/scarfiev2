//Basic
import React from 'react';

//Style
import {Styled} from './styled'; 

function WrapperForm({...props}) {
    return (
        <Styled {...props}>
            <form>
                {props.children}
            </form>
        </Styled> 
    );
}

export default WrapperForm; 