import React, { Component }  from 'react';

//Components

import Navigation from '../Navigation/navigation'

//style
import Styled from './styled'

class Header extends Component {
  render() {
    return (
      <Styled>
        <Navigation />
      </Styled>
    );
  } 
}

export default Header;