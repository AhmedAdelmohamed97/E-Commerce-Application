import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Myslider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius:"10px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius:"10px" , }}
        onClick={onClick}
      />
    );
  }



  const settings = {
  
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
 
  };
  return (
    <Slider className="mb-3  text-dark" {...settings}>
      <div>
        <img className="w-100 mt-2 " style={{'height': '400px' }} src={require('../../Assets/clothes.jpg')} alt="" />
      </div>
      <div>
        <img className="w-100 mt-2 " style={{'height': '400px' }} src={require('../../Assets/young-handsome-man-choosing-clothes-shop.jpg')} alt="" />
      </div>
      <div>
        <img className="w-100 mt-2 " style={{'height': '400px' }} src={require('../../Assets/large-set-isolated-vegetables-white-background.jpg')} alt="" />
      </div>
      <div>
        <img className="w-100 mt-2 " style={{'height': '400px' }} src={require('../../Assets/view-paper-bag-with-vegetables.jpg')} alt="" />
      </div>
      <div>
        <img className="w-100 mt-2 " style={{'height': '400px' }} src={require('../../Assets/cyber-monday-retail-sales.jpg')} alt="" />
      </div>
      <div>
        <img className="w-100 mt-2 " style={{'height': '400px' }} src={require('../../Assets/men39s-clothes-hanger-generative-ai.jpg')} alt="" />
      </div>
      <div>
        <img className="w-100 mt-2 " style={{'height': '400px' }} src={require('../../Assets/close-up-flannel-shirt-detail.jpg')} alt="" />
      </div>
      <div>
        <img className="w-100 mt-2 " style={{'height': '400px' }} src={require('../../Assets/kitchen.jpg')} alt="" />
      </div>
      <div>
        <img className="w-100 mt-2 " style={{'height': '400px' }} src={require('../../Assets/shoes.jpg')} alt="" />
      </div>
    </Slider>
  )
}