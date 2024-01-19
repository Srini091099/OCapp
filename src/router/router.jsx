import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Loginpage } from "../pages/insidepages/Loginpages";
import { Intropages } from "../pages/insidepages/Intropage";
import { Homepage } from "../pages/insidepages/homepage";
import { ProductPage } from "../pages/insidepages/productpage";

export function Routerapp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intropages />} />
        <Route path="/Loginpage" element={<Loginpage />} />
        <Route path="/home" element={<Homepage />} />
        {/* Use a dynamic parameter for the product ID */}
        <Route path="/productpage/:productID" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}
