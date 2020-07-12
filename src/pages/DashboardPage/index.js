import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SideMenu from '../../components/SideMenu';
import { ROUTE } from '../../constants';
import './style.scss';

class DashboardPageComponent extends React.PureComponent {
  componentDidMount() {
    const {
      history,
      user,
    } = this.props;
    if (!user || !user.data) {
      history.push(ROUTE.HOME);
    }
  }

  render() {
    const {
      user: {
        data,
      },
    } = this.props;
    return (
      <div className="dashboard-page-container">
        <SideMenu />
        {data && (
          <div className="dashboard-content">{`Hare Krishna ${data.profileObj.givenName}`}</div>)}
      </div>
    );
  }
}

DashboardPageComponent.propTypes = {
  history: PropTypes.object.isRequired,
  user: PropTypes.object,
};

DashboardPageComponent.defaultProps = {
  user: null,
};

export const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps, null)(DashboardPageComponent);
