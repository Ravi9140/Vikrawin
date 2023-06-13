import React, { Fragment } from "react";
import FarmerResponsiveAppBar from "./FarmerNav";

import { Outlet } from "react-router-dom";

const FarmerLayout = ({ children, famerprofile, getfarmerprofile }) => {
  return (
    <Fragment>
      <FarmerResponsiveAppBar />
      <Outlet />
    </Fragment>
  );
};

export default FarmerLayout;
