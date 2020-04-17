//Basic
import React, { Component }  from 'react';

//Styles
import Styled from './styled'

//Components
import Logo from '../Logo/logo' 

class Navigation extends Component {
  render() {
    return (
      <Styled>
        <ul>
            <li>Les Echarpes</li>
            <li>A propos</li>
        </ul>
        <Logo />
        <ul>
            <li>Se connecter</li>            
            <li>Panier</li>            
        </ul>
      </Styled>
    );
  } 
}

export default Navigation;