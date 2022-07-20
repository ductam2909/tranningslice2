import React from "react";
import "../style.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Test(props){
  return(
    // <h1 onClick={props.onClick}>hhh</h1>
    <button className="btn2" onClick={props.onClick}><img src="/assets/img/btn-next.jpg" alt="" /></button>
  );
}
export default function Slickslider() {
  const renderSlides = () =>
    [
    <div className="content4-a">
      <div className="content4-a-left">
        <img src="/assets/img/content4a1.png" alt="" />
        <div className="user">
          <img src="/assets/img/Thumb.png" alt="" />
          <p>Mike Page</p>
        </div>
      </div>
      <div className="content4-a-right">
        <img src="/assets/img/art2.png" alt="" />
        <img src="/assets/img/art3.png" alt="" />
      </div>
    </div>,
    <div className="content4-a">
      <div className="content4-a-left">
        <img src="/assets/img/art4.png" alt="" />
        <div className="user">
          <img src="/assets/img/Thumb2.png" alt="" />
          <p>Jane Foster</p>
        </div>
      </div>
      <div className="content4-a-right">
        <img src="/assets/img/art5.png" alt="" />
        <img src="/assets/img/art7.png" alt="" />
      </div>
    </div>,
    <div className="content4-a">
      <div className="content4-a-left">
        <img src="/assets/img/art8.png" alt="" />
        <div className="user">
          <img src="/assets/img/Thumb3.png" alt="" />
          <p>Brendon Fraser</p>
        </div>
      </div>
      <div className="content4-a-right">
        <img src="/assets/img/art9.png" alt="" />
        <img src="/assets/img/art10.png" alt="" />
      </div>
    </div>, 
  <div className="content4-a">
    <div className="content4-a-left">
      <img src="/assets/img/content4a1.png" alt="" />
      <div className="user">
        <img src="/assets/img/Thumb.png" alt="" />
        <p>Mike Page</p>
      </div>
    </div>
    <div className="content4-a-right">
      <img src="/assets/img/art2.png" alt="" />
      <img src="/assets/img/art3.png" alt="" />
    </div>
  </div>
  ].map(num => (
      <div className="content4">
        {num}
      </div>
    ));

  return (
    <div className="App">
      <Slider
        nextArrow={<Test type="next" />}
        // prevArrow={<Arrow type="prev" />}
        dots={true}
        slidesToShow={3}
        slidesToScroll={1}
        // customPaging={customPaging}
        // appendDots={appendDots}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}
