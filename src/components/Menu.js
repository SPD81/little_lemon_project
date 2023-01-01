import React from "react";
import { NavLink } from "react-router-dom";
import special_one from "../images/gallery01.png";
import special_two from "../images/gallery02.png";
import special_three from "../images/gallery04.png";

const Menu = () => {
  return (
    <>
      <section className="menu-item" id="menu">
        <div className="row first">
          <div className="special">
            <h1>Specials</h1>
          </div>
          <div className=" order-btn">
            <NavLink className="custom__button" to="/order">
              Order Online
            </NavLink>
          </div>
        </div>
        <div className="row" id="special-menu">
          {/*  */}
          <div className="col-md-4 card-details">
            <div className="card">
              <img
                className="card_img"
                src={special_one}
                alt="special one"
                height="160px"
              />
              <div className="card__body">
                <div className="">Sicilian Soup</div>
                <h6 className="">$19.30</h6>
                <p className="p-text">
                  The best soup in Sicily, made at home according to an ancient
                  recipe passed down from generation to generation.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-md-4 card-details">
            <div className="card">
              <img className="card_img" src={special_two} alt="special two" />
              <div className="card__body">
                <div className="card-title fw-semibold mb-3">Laid Egg</div>
                <h6 className="card-subtitle mb-3 text-muted ">$15.50</h6>
                <p className="p-text">
                  Sicilian-style poached egg, perfect for a healthy and filling
                  breakfast.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 card-details">
            <div className="card">
              <img
                className="card_img"
                src={special_three}
                alt="special three"
              />
              <div className="card__body">
                <div className="card-title fw-semibold mb-3">
                  Spaghetti, egg and bame.
                </div>
                <h6 className="card-subtitle mb-3 text-muted ">$18.39</h6>
                <p className="p-text">
                  A reinvented recipe of spaghetti, egg and okra grown in the
                  garden of the Little Lemon restaurant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
