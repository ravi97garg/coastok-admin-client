import React from 'react';
import './style.scss';

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: true,
    };
  }

  toggleMenuOpen = () => {
    const {
      menuOpen,
    } = this.state;
    if (menuOpen) {
      this.setState({
        menuOpen: false,
      });
    } else {
      this.setState({
        menuOpen: true,
      });
    }
  };

  render() {
    const {
      menuOpen,
    } = this.state;
    return (
      <div className="side-menu-container">
        <div className="sidenav" style={{ width: menuOpen ? '250px' : '0' }}>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
        <div className="menu-opener" onClick={this.toggleMenuOpen}>
          {menuOpen ? (
            <span>&times;</span>
          ) : (
            <span> &gt; </span>
          )}
        </div>
      </div>
    );
  }
}

export default SideMenu;
