import React from "react";
import customer_one from "../images/customer_one.jpg";
import customer_two from "../images/customer_two.jpg";
import customer_three from "../images/customer_three.jpg";

const Testimonial = () => {
  return (
    <>
      <div className="row" id="testimoniol">
        <h1 className="section_title">What customers say for us.</h1>
        <div
          id="testimonial_carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h2 className="testimonial_text">
                “The succulent plump shrimp, deliciously sautéed in crunchy
                chili flakes and paired with a zesty, crunchy salad of
                mushrooms, cucumber and sweet corn turned out to be the
                refreshing start to my Saturday morning I didn’t know I needed.”
              </h2>
              <img
                className="testimonial_image"
                src={customer_one}
                alt="customer_one"
              />
              <p>Ion JR Henedy, Chicago</p>
            </div>
            <div className="carousel-item">
              <h2 className="testimonial_text">
                “The succulent plump shrimp, deliciously sautéed in crunchy
                chili flakes and paired with a zesty, crunchy salad of
                mushrooms, cucumber and sweet corn turned out to be the
                refreshing start to my Saturday morning I didn’t know I
                needed.”,
              </h2>
              <img
                className="testimonial_image"
                src={customer_two}
                alt="customer_two"
              />
              <p>Ada Ferguson, Florida</p>
            </div>
            <div className="carousel-item">
              <h2 className="testimonial_text">
                “The succulent plump shrimp, deliciously sautéed in crunchy
                chili flakes and paired with a zesty, crunchy salad of
                mushrooms, cucumber and sweet corn turned out to be the
                refreshing start to my Saturday morning I didn’t know I
                needed.”,
              </h2>
              <img
                className="testimonial_image"
                src={customer_three}
                alt="customer_three"
              />
              <p>Iosefina Maricela, Ontario,CA</p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonial_carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonial_carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
