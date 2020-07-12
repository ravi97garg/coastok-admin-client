import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants';
import './style.scss';

class NotFoundPageComponent extends React.PureComponent {
  render() {
    return (
      <div className="nf-page-container">
        Seems you have entered a wrong path
        <Link to={ROUTE.HOME}>GO TO HOME</Link>
      </div>
    );
  }
}

export default NotFoundPageComponent;
