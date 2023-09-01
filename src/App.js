import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Productrange1 from "./Pages/Productrange1";
import Productrange2 from "./Pages/Productrange2";
import Productrange3 from "./Pages/Productrange3";
import Productrange4 from "./Pages/Productrange4";
import Productrange5 from "./Pages/Productrange5";
import Productrange6 from "./Pages/Productrange6";
import Productrange7 from "./Pages/Productrange7";
import Productrange8 from "./Pages/Productrange8";
import Productrange9 from "./Pages/Productrange9";
import Productrange10 from "./Pages/Productrange10";
import Productrange11 from "./Pages/Productrange11";
import Productrange13 from "./Pages/Productrange13";
import Certificate from "./Pages/Certificate";
import Enquiryform from "./Pages/Enquiryform";
import Contactus from "./Pages/Contactus";
import { Carousel } from "./component/Carousel";
import "./Pages/style/Home.css";
import "./Pages/style/Aboutus.css";
import "./Pages/style/Productrange1.css";
import "./Pages/style/Certificate.css";
import "./Pages/style/Enquiryform.css";
import "./Pages/style/Contactus.css";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/productrange1" element={<Productrange1 />} />
          <Route path="/productrange2" element={<Productrange2 />} />
          <Route path="/productrange3" element={<Productrange3 />} />
          <Route path="/productrange4" element={<Productrange4 />} />
          <Route path="/productrange5" element={<Productrange5 />} />
          <Route path="/productrange6" element={<Productrange6 />} />
          <Route path="/productrange7" element={<Productrange7 />} />
          <Route path="/productrange8" element={<Productrange8 />} />
          <Route path="/productrange9" element={<Productrange9 />} />
          <Route path="/productrange10" element={<Productrange10 />} />
          <Route path="/productrange11" element={<Productrange11 />} />
          <Route path="/productrange13" element={<Productrange13 />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/enquiry" element={<Enquiryform />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/carousel" element={<Carousel/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
