import React from "react";
import styles from "../Hero.module.css"; // Import the CSS module

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles["hero-banner"]}>
        <h1>backroads app</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href="#tours" className={styles["hero-btn"]}>
          explore tours
        </a>
      </div>
    </section>
  );
}

export default Hero;
