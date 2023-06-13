import React, { Fragment } from "react";
import BidderResponsiveAppBar from "./BidderNav";
import { Outlet } from "react-router-dom";

const BidderLayout = () => {
  return (
    <Fragment>
      <BidderResponsiveAppBar />
      <Outlet />
    </Fragment>
  );
};

export default BidderLayout;
