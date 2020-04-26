//Basic
import React from 'react';

//Styled
import {Styled} from './styled'; 

//Component
import { InlineIcon } from "@iconify/react";
import bxsRightArrowAlt from '@iconify/icons-bx/bxs-right-arrow-alt';
import bxsLeftArrowAlt from '@iconify/icons-bx/bxs-left-arrow-alt';

function Reinssurance(){
  return(
    <Styled>
      <span className="iconLeft"><InlineIcon icon={bxsRightArrowAlt} width="50px" /></span>
      <div>
        <div>
          <p>
            Livraison offerte*
            <span>à partir de 3 écharpes dans le panier !</span>
            <a href="#">*Voir les modalités</a>
          </p>
        </div>
        <div>
          <p>
            Paiement sécurisé
            <a href="#">En savoir plus</a>
          </p>
        </div>
      </div>
      <span className="iconRight"><InlineIcon icon={bxsLeftArrowAlt} width="30px" /></span>
    </Styled>
  );
}

export default Reinssurance; 