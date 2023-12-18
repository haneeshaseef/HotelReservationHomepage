import "./App.css";
import { OfferSection, DetailsSection, NavBar, HeroSection, DestinationSection, HeaderSection, Footer} from "./components";

function App() {
  return (
    <div>
      <NavBar/>
      <HeaderSection/>
      <HeroSection/>
      <DestinationSection/>
      <DetailsSection/>
      <OfferSection />
      <Footer/>
    </div>
  );
}

export default App;
