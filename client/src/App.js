import { Routes, Route } from "react-router-dom";
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
// import Wishlist from "./Pages/Bidder/Wishlist";
// import AboutUs from "./Pages/Bidder/AboutUs";
import BidderHome from "./Pages/Bidder/Home";
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

function App() {
  // useEffect(() => {}, []);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadBidder());
    store.dispatch(loadFarmer());
  }, []);
  return (
    <Provider store={store}>
      <Alert />
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

        <Route path="/" element={<HomePage />} />
        {/* FarmerPages */}

        {/* <Route path="/FarmerAuctions" element={<Auctions />} /> */}
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

        {/* BidderPages */}
        <Route
          path="/BidderHome"
          element={<BidderPrivateRoute component={BidderHome} />}
        />
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
      </Routes>
    </Provider>
  );
}

export default App;
