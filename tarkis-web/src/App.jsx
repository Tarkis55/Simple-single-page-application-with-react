import React from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import FeedBack from "./components/FeedBack";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WhatAreWe from "./components/WhatAreWe";

function App() {
  return (
    <div className="bg-background w-full overflow-hidden">
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <WhatAreWe />
          <FeedBack />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
