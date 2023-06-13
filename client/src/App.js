import { Routes, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { useEffect } from "react";

// Page Not Found
import Notfound from "./static/images/NotFound.jpg";
// Farmer
import CreateAuctions from "./Pages/Farmer/CreateAuctions";
// import Auctions from "./Pages/Farmer/Auctions";
import History from "./Pages/Farmer/History";
import Profile from "./Pages/Farmer/Profile";
import MyCrops from "./Pages/Farmer/MyCrops";

// Bidder
import UpcomingEvents from "./Pages/Bidder/UpcomingEvents";
import MarketPlace from "./Pages/Bidder/MarketPlace";

import BidderProfile from "./Pages/Bidder/BidderProfile";
import BidderHistory from "./Pages/Bidder/History";
import FarmerRegistration from "./Pages/Farmer/FarmerRegistration";
import BidderRegistration from "./Pages/Bidder/BidderRegistration";
import Alert from "./Components/Alert";
// Redux

import { Provider } from "react-redux";
import store from "./store";

// Actions
import { loadBidder } from "./actions/authbidder";
import { loadFarmer } from "./actions/authfarmer";
import setAuthToken from "./utils/setAuthToken";

// PrivateRoutes

import BidderPrivateRoute from "./Components/routing/BidderPrivateRoute";
import FarmerPrivateRoute from "./Components/routing/FarmerPrivateRoute";

import ForgotPassword from "./Pages/Farmer/ForgotPassword";
import ResetPassword from "./Pages/Farmer/ResetPassword";
import BForgotPassword from "./Pages/Bidder/BForgotPassword";
import BResetPassword from "./Pages/Bidder/BResetPassword";
import PageLayout from "./Components/BidderLayout";
import BidderLayout from "./Components/BidderLayout";
import FarmerLayout from "./Components/FarmerLayout";

function App() {
  // useEffect(() => {}, []);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadBidder());
    store.dispatch(loadFarmer());
  }, []);

  console.log("Hi there. Here is the store");
  console.log(store);

  return (
    <Provider store={store}>
      <Alert />

      {/* Common Pages */}
      <Routes>
        <Route
          path="*"
          element={
            <div>
              <img src={Notfound} alt="Page Missing"></img>
            </div>
          }
        />
        {/* RegistrationPage */}

        <Route path="/FarmerRegistration" element={<FarmerRegistration />} />
        <Route path="/BidderRegistration" element={<BidderRegistration />} />

        {/* ForgotPassword */}
        <Route path="/FarmerForgotPassword" element={<ForgotPassword />} />
        <Route path="/FarmerResetPassword" element={<ResetPassword />} />

        <Route path="/BidderForgotPassword" element={<BForgotPassword />} />
        <Route path="/BidderResetPassword" element={<BResetPassword />} />

        <Route path="/" element={<HomePage />} />
        {/* </Routes> */}

        {/* FarmerPages */}
        {/* <FarmerLayout>
        <Routes> */}
        <Route element={<FarmerLayout />}>
          <Route
            path="/FarmerHistory"
            element={<FarmerPrivateRoute component={History} />}
          />
          <Route
            path="/FarmerMyCrops"
            element={<FarmerPrivateRoute component={MyCrops} />}
          />
          <Route
            path="/FarmerProfile"
            element={<FarmerPrivateRoute component={Profile} />}
          />
          <Route
            path="/FarmerCreateAuctions"
            element={<FarmerPrivateRoute component={CreateAuctions} />}
          />
        </Route>
        {/* </Routes>
      </FarmerLayout> */}

        {/* BidderPages */}
        {/* <BidderLayout>
        <Routes> */}
        <Route element={<BidderLayout />}>
          <Route
            path="/BidderUpcomingEvents"
            element={<BidderPrivateRoute component={UpcomingEvents} />}
          />
          <Route
            path="/BidderMarketPlace"
            element={<BidderPrivateRoute component={MarketPlace} />}
          />
          <Route
            path="/BidderHistory"
            element={<BidderPrivateRoute component={BidderHistory} />}
          />
          <Route
            path="/BidderProfile"
            element={<BidderPrivateRoute component={BidderProfile} />}
          />
        </Route>
        {/* </Routes>
      </BidderLayout> */}
      </Routes>
    </Provider>
  );
}

export default App;
