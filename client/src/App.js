import CreateAuctions from "./Pages/Farmer/CreateAuctions";
import Auctions from "./Pages/Farmer/Auctions";
import History from "./Pages/Farmer/History";
import { Routes, Route } from "react-router-dom";
import Profile from "./Pages/Farmer/Profile";
import UpdateAccount from "./Pages/Farmer/UpdateAccount";
import MyCrops from "./Pages/Farmer/MyCrops";
import HomePage from "./Pages/HomePage";
import UpcomingEvents from "./Pages/Bidder/UpcomingEvents";
import MarketPlace from "./Pages/Bidder/MarketPlace";
import Wishlist from "./Pages/Bidder/Wishlist";
import AboutUs from "./Pages/Bidder/AboutUs";
import BidderHome from "./Pages/Bidder/Home";
import BidderHistory from "./Pages/Bidder/History";
import FarmerRegistration from './Pages/Farmer/FarmerRegistration'
import BidderRegistration from './Pages/Bidder/BidderRegistration'


function App() {
 return(
   <div>
     <Routes>
     {/* RegistrationPage */}
     <Route path="/FarmerRegistration" element={<FarmerRegistration/>} />
     <Route path="/BidderRegistration" element={<BidderRegistration/>} />

     {/* FarmerPages */}
     <Route path="/" element={<HomePage/>} />
     <Route path="/FarmerAuctions" element={<Auctions/>} />
     <Route path="/FarmerHistory" element={<History/>} />
     <Route path="/FarmerProfile" element={<Profile/>} />
     <Route path="/FarmerCreateAuctions" element={<CreateAuctions/>} />
     <Route path="/FarmerMyCrops" element={<MyCrops/>} />
     <Route path="/FarmerUpdateAccount" element={<UpdateAccount/>} />

     {/* BidderPages */}
     <Route path="/BidderHome" element={<BidderHome/>} />
     <Route path="/BidderUpcomingEvents" element={<UpcomingEvents/>} />
     <Route path="/BidderMarketPlace" element={<MarketPlace/>} />
     <Route path="/BidderWishlist" element={<Wishlist/>} />
     <Route path="/BidderHistory" element={<BidderHistory/>} />
     <Route path="/BidderAboutUs" element={<AboutUs/>} />

     </Routes>
   </div>
 );
}

export default App
