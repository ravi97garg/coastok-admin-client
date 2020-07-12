import React from 'react';
import './style.scss';
import backgroundImage from '../../assets/images/89885902_1307706819421449_5487947346396315648_o.jpg';

class HomePageComponent extends React.PureComponent {
  render() {
    return (
      <div className="home-page-container">
        <div className="image-wrapper">
          <img src={backgroundImage} alt="COASTOK Admin Panel" />
        </div>
      </div>
    );
  }
}

export default HomePageComponent;
