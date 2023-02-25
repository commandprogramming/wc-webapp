import { useState, useEffect } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";
import OurProcess from "./scenes/ourProcess";
import Events from "./scenes/events";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-primary-800">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <OurProcess setSelectedPage={setSelectedPage} />
      <Events setSelectedPage={setSelectedPage} />
      {/* Leaderboard */}
      {/* <Benefits setSelectedPage={setSelectedPage} /> */}
      {/* <OurClasses setSelectedPage={setSelectedPage} /> */}
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
