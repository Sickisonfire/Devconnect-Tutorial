import React from 'react';
import PropTypes from 'prop-types';
// whenever you want to interact with reduct (wheter calling an action or getting state)
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  // alert from rootreducer
  alerts: state.alert
});
export default connect(mapStateToProps)(Alert);
