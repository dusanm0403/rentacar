import { useState, useEffect } from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import RentalFleets from "./components/rentalFleets";
import "./styles/base/app.scss";

import { WindowManager } from "react-window-decorators";
import Footer from "./components/footer";
import Info from './components/info'
import PhoneBanner from './components/phoneBanner'
import MobileNav from './components/mobileNav'

const BREAKPOINTS = [
  {
    name: "sm",
    media: "(min-width: 0)",
  },
  {
    name: "md",
    media: "(min-width: 768px)",
  },
  {
    name: "lg",
    media: "(min-width: 1024px)",
  },
  {
    name: "xl",
    media: "(min-width: 1280px)",
  },
  {
    name: "xxl",
    media: "(min-width: 1440px)",
  },
  {
    name: "xxxl",
    media: "(min-width: 1800px)",
  },
];

new WindowManager(BREAKPOINTS);

function App() {
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

  const [burgerActive, setBurgerActive] = useState(false)

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
      <Navigation isScrolled={isScrolled} isAnimated={animatedHeader} burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
      <MobileNav
          setBurgerActive={setBurgerActive}
          burgerActive={burgerActive}
        />
      <div className="content">
        <Header />
        <PhoneBanner />
        <RentalFleets />
        <Info />
      </div>
      <Footer />
    </div>
  );
}

export default App;
