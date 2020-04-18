//Basic
import React from 'react';

//Style
import {Styled} from './styled';

const SubscribeNewsletter = () => {
    return(
        <Styled>
            <form>
                <input type="text" placeholder="Inscrivez-vous à la newsletter" />
                <input type="submit" value="OK" />
            </form>
        </Styled>
    )
}

export default SubscribeNewsletter; 