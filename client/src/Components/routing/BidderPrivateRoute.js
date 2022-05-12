import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

const BidderPrivateRoute = ({
  component: Component,
  authbidder: { isAuthenticatedBidder, loading },
}) => {
  if (loading) return <Spinner />;
  if (isAuthenticatedBidder) return <Component />;

  return <Navigate to="/BidderRegistration" />;
};

BidderPrivateRoute.propTypes = {
  authbidder: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authbidder: state.authbidder,
});
export default connect(mapStateToProps)(BidderPrivateRoute);
