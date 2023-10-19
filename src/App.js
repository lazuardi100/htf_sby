import "./App.css";
import Footer from "./components/footer";
import ReactGA from "react-ga";

import Section1 from "./components/section_1";
import Section2 from "./components/section_2";
import Section3 from "./components/section_3";
import Section4 from "./components/section_4";
import Section5 from "./components/section_5";

const trackingId = "G-4WCYLSECZB";
ReactGA.initialize(trackingId);

function App() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
}

export default App;
