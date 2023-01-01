import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Menu from "./Menu";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>Little Lemon</h3>
          <h4>Chicago</h4>
          <p>
            Little Lemon Restaurant is well known with a substantial gathering
            of people including families, kids, seniors, and business experts.
            Our benevolent condition is perfect for praising unique events,
            facilitating a business lunch, or assembling for a flavorful dinner
            with loved ones. <br />
          </p>
          <NavLink className="custom__button" to="/reservation">
            Reserve Table
          </NavLink>
        </div>
      </section>
      <Menu />
      <Testimonial />
      <About />
    </>
  );
};

export default Home;
