import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

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

function App() {
  return (
    <Provider store={store}>
      <Alert />
      <Routes>
        {/* RegistrationPage */}
        <Route path="/FarmerRegistration" element={<FarmerRegistration />} />
        <Route path="/BidderRegistration" element={<BidderRegistration />} />

        <Route path="/" element={<HomePage />} />
        {/* FarmerPages */}

        {/* <Route path="/FarmerAuctions" element={<Auctions />} /> */}
        <Route path="/FarmerHistory" element={<History />} />
        <Route path="/FarmerMyCrops" element={<MyCrops />} />
        <Route path="/FarmerProfile" element={<Profile />} />
        <Route path="/FarmerCreateAuctions" element={<CreateAuctions />} />

        {/* BidderPages */}
        <Route path="/BidderHome" element={<BidderHome />} />
        <Route path="/BidderUpcomingEvents" element={<UpcomingEvents />} />
        <Route path="/BidderMarketPlace" element={<MarketPlace />} />
        <Route path="/BidderHistory" element={<BidderHistory />} />
        <Route path="/BidderProfile" element={<BidderProfile />} />
      </Routes>
    </Provider>
  );
}

export default App;
