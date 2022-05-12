import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

const FarmerPrivateRoute = ({
  component: Component,
  authfarmer: { isAuthenticatedFarmer, loading },
}) => {
  if (loading) return <Spinner />;
  if (isAuthenticatedFarmer) return <Component />;

  return <Navigate to="/FarmerRegistration" />;
};

FarmerPrivateRoute.propTypes = {
  authfarmer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authfarmer: state.authfarmer,
});
export default connect(mapStateToProps)(FarmerPrivateRoute);
