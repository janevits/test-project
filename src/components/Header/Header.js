import React, { PureComponent, PropTypes } from 'react';

import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
const styled = require('styled-components').default;

class Header extends PureComponent {
  render() {
    return (
      /* TODO:PBond fix css */
      <HeaderStyle>
      <div className="main-page-header">
        <NavbarMobile/>
      </div>
      </HeaderStyle>
    );
  }
}
const HeaderStyle = styled.div `
  .main-page-header {
    background-color: #C21000;
    position: sticky;
    z-index:1000000;
  }
`
Header.propTypes = {
};

Header.defaultProps = {
};

Header.contextTypes = {};

export default Header;
