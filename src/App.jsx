import Hero from "./components/hero";
import Navbar from "./components/navbar";
// import SlidingCards from "./components/slidingCards";
// import Card from "./components/card";
// import data from "./components/data"
// import { FaChevronLeft } from "react-icons/fa"
// import { FaChevronRight } from "react-icons/fa"
import CardElements from "./components/cardElements";

export default function App() {



  return (
    <div className="container">
      <Navbar />
      <Hero />
      <CardElements/>
    </div>
  )
}