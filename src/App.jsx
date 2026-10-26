import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Booking />
      <Footer />
    </>
  );
}

export default App;
