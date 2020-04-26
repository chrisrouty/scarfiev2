//Basic
import React, { Component }  from 'react';

//View Import


//Style
import Styled from './styled'
 
class Logo extends Component {
  render() {
    return (
      <Styled>
        <a href="/" alt="Scarfie">
          <img src="logo_scarfie.svg" alt=""/>
        </a>
      </Styled>
    );
  }
}

export default Logo;