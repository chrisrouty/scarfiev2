//Basic
import React from 'react';

//Style
import {Styled} from './styled';

//Components
import Button from '../Buttons/Button'

const SubscribeNewsletter = () => {
    return(
        <Styled>
            <input type="text" placeholder="Entrez votre email" />
            <Button>Valider</Button>
        </Styled>
    )
}

export default SubscribeNewsletter; 