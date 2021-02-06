import { useState, useEffect } from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import RentalFleets from "./components/rentalFleets";
import "./styles/base/app.scss";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [direction, setDirection] = useState("");

  const handleScroll = () => {
    const windowScroll = window.pageYOffset || window.scrollY;
    const isScrollingDown = windowScroll > scrollPos;
    setDirection(isScrollingDown ? "bottom" : "top");
    setScrollPos(windowScroll);
    if (scrollPos >= 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  const height = window.innerHeight;
  const animatedHeader = direction === "bottom" && scrollPos > height * 0.8;

  return (
    <div className="App">
      <Navigation isScrolled={isScrolled} isAnimated={animatedHeader} />
      <Header />
      <RentalFleets />
    </div>
  );
};

export default App;
