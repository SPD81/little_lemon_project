import React from "react";
// import about_01 from "../images/about_01.jpg";
// import about_02 from "../images/about_02.webp";

const About = () => {
  return (
    <>
      <section className="about-section" id="about">
        <div className="row">
          <div className="col-lg-6 about-images">
            {/* <img  className="about-image one" src={about_01} alt="about one" />
                        <img  className="about-image two" src={about_02} alt="about two" /> */}
          </div>
          <div className="col-lg-6 about-details">
            <h3>Little Lemon</h3>
            <h4>Chigaco</h4>
            <p>
              Little Lemon Restaurant is well known with a substantial gathering
              of people including families, kids, seniors, and business experts.
              Our benevolent condition is perfect for praising unique events,
              facilitating a business lunch, or assembling for a flavorful
              dinner with loved ones. <br />
              Open day by day for lunch and dinner, Little Lemon offers a choice
              of naturally arranged things utilizing just the best fixings
              accessible. Top picks mediterranean food. New prepared pot pie,
              strength plates of mixed greens, wood-let go pizzas, pasta,
              sandwiches, burgers, and more. <br /> Little Lemon heated
              merchandise and treats including our Six-Layer Chocolate
              Motherlode Cake, Scratch Carrot Cake, and delectably rich cream
              cheddar pies are prevalent top choices with our visit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
