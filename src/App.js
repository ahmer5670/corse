import "./App.css";
import NavbersTop from "./NavberTop/NavberTop";
import Contact from "./contact/Contact";
import OurTarcks from "./OurTarcks/OurTarcks";
import Premium from "./Premium/Premium";
import Coment from "./Coment/coment";
import OurTarck from "./OurTarck/OurTarck";
import Company from "./Company/Company";
import Comeant from "./comanteSee/comeant";
import Frontend from "./OurTarcks/frontend/VideoFront";
import BackEnd from "./OurTarcks/BackEnd/videoBack";
import LoginVideoFront from "./OurTarcks/frontend/loginVideoFront/loginvideoFront";
// logein
import Signup from "./loginSign/sign";
import Login from "./loginSign/logeIn";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CorseDesing from "./OurTarcks/CorseDesing";
import { UplodProvider } from "./OurTarcks/OurUplode";

function App() {
  // const isLoggedIn = localStorage.getItem("loggedInUser");
  return (
    <div className="App">
      <UplodProvider>
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route
            path="/"
            element={
              <>
                <NavbersTop />
                <Contact />
                <OurTarcks />
                <Premium />
                <Coment />
                <OurTarck />
                <Comeant />
                <Company />
              </>
            }
          />

          {/* صفحة الكورس */}
          <Route path="/coser" element={<CorseDesing />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<BackEnd />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gotovideo" element={<LoginVideoFront />} />
        </Routes>
      </UplodProvider>
    </div>
  );
}

export default App;
