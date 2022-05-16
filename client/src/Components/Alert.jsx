import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { Alert as AlertMsg } from "@mui/material";
import { Snackbar } from "@mui/material";

const AlertSnack = React.forwardRef(function AlertSnack(props, ref) {
  return <AlertMsg elevation={6} ref={ref} variant="filled" {...props} />;
});

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Snackbar open={true}>
      <AlertSnack severity={`${alert.alertType}`} sx={{ width: "100%" }}>
        {alert.msg}
      </AlertSnack>
    </Snackbar>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
