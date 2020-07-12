import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import {
  loginUserFailed,
  loginUserSuccess,
  logoutUser,
} from '../../actions/user';
import { GOOGLE_CLIENT_ID } from '../../config/google_auth';
import { ROUTE } from '../../constants';
import './style.scss';

class HeaderComponent extends React.PureComponent {
  onLoginSuccess = (userData) => {
    const {
      history,
      loginUserSuccess,
    } = this.props;
    console.log(userData);
    loginUserSuccess(userData);
    history.push(ROUTE.DASHBOARD);
  };

  onLogoutSuccess = () => {
    const {
      history,
      logoutUser,
    } = this.props;
    logoutUser();
    history.push(ROUTE.HOME);
  };

  render() {
    const {
      loginUserFailed,
      user,
    } = this.props;
    return (
      <header>
        <div className="logo-wrapper">
          <Link to="/">COASTOK</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={ROUTE.DASHBOARD}>
                Dashboard
              </Link>
            </li>
            <li>
              {/* <Link to="/auth">Login</Link> */}
              {(user && user.data) ? (
                <GoogleLogout
                  clientId={GOOGLE_CLIENT_ID}
                  buttonText="Logout"
                  onLogoutSuccess={this.onLogoutSuccess}
                />
              ) : (
                <GoogleLogin
                  clientId={GOOGLE_CLIENT_ID}
                  buttonText="Login"
                  onSuccess={this.onLoginSuccess}
                  onFailure={loginUserFailed}
                  isSignedIn
                  cookiePolicy="single_host_origin"
                />
              )}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

const mapDispatchToProps = {
  loginUserSuccess,
  loginUserFailed,
  logoutUser,
};

HeaderComponent.propTypes = {
  history: PropTypes.object.isRequired,
  loginUserFailed: PropTypes.func.isRequired,
  loginUserSuccess: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object,
};

HeaderComponent.defaultProps = {
  user: null,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderComponent));
