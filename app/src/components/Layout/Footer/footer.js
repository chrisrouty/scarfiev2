//Basic
import React from 'react';

//Styled
import {Styled} from './styled'; 

//Component
import Logo from '../Logo/logo'


function Footer(){
  return(
    <Styled>
      <ul>
        <li><Logo /></li>
        <li><a href="#">Conditions générales</a></li>
        <li><a href="#">Livraison</a></li>
        <li><a href="#">Paiements</a></li>
      </ul>
    </Styled>
  );
}

export default Footer; 