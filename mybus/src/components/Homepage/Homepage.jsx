// import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import { useState } from "react";
import Slider from "react-slick";
import icon1 from '../assets/icon11.jpg';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import { FaArrowRight,FaArrowLeft } from 'react-icons/fa';
import maps from '../assets/map.png';
import Footer from '../Footer/Footer';



// const images = [
//   { src: icon1, btnName: "Button 1" },
//   { src: icon2, btnName: "Button 2" },
//   { src: icon3, btnName: "Button 3" },
//   { src: icon4, btnName: "Button 4" }
// ];

function Homepage() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "20%",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };




// return (
//   <Slider {...settings}>
//     {images.map((img, idx) => (
//       <div
//         key={idx}
//         className={idx === imageIndex ? "slide activeSlide" : "slide"}>
//           <div className='bgslide'>
//         <img src={img} alt={img} />
//         <button onClick={() => handleNav(idx)} className='buttonx'>{buttons[idx]}</button>
//       </div>
//       </div>
//     ))}
//   </Slider>

// );

const navigate = useNavigate();

const handleNav=({idx})=>{
  navigate(navtext[idx]);
}

const images = [icon1, icon3, icon2, icon4];
const buttons = ["Find your Bus", "Get your Stats", "Fleet Health Check", "Button 4"];
const navtext = ['/bus-estimation', '/login', '/fleet', '/login'];
const sentences = [
  "Figure out the best bus for your route in no time !",
  "Know how many buses you need.",
  "Keep your buses running smoothly with a quick health check !",
  "Explore additional features and options."
];



return (
  <>
    <Slider {...settings} style={{}}>
      {images.map((img, idx) => (
        <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"} style={{ background: '#000' }}>
          <div className='bgslide' style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
            <img src={img} alt={`icon-${idx}`} style={{ width: '300px', height: '300px', marginRight: '20px', marginLeft:'30px' }} />
            <div style={{ color: '#fff' }}>
              <p style={{ fontSize:'30px'}}>{sentences[idx]}</p>
              <button onClick={() => handleNav({ idx })} className='buttonx' style={{ marginTop: '150px' }}>{buttons[idx]}</button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
 

  <div className="containerss">
    <div className="left">
      <img src={maps} alt="icon1" style={{height:'400px',width:'650px',borderRadius:'20px',boxShadow:'inherit',margin:'20px',fontColor:'#fff'}}/>
    </div>
    <div className="right">
      <h2 style={{margin:'20px',marginLeft:'40px'}}>About Us</h2>
      <p className="poppins-regular" style={{
        margin: '20px',
        fontSize: '16px',
        lineHeight: '1.9',
        
      }}>
        Welcome to Namma Bus!

        Namma Bus, the Hubballi-Dharwad project, is a Special Purpose Vehicle for the rapid transit system between Hubballi and Dharwad. Our goal is safe, affordable, and sustainable transport for all commuters, focusing on the needs of underserved groups like children, persons with disabilities, and the elderly. Committed to providing fast, reliable, and comfortable travel, Namma Bus estimates daily needs and monitors real-time capacity aiming to make public transport safer and more accessible. Embark on adventures with Namma Bus - where every mile is a memory, your trusted partner for safe journeys.
      </p>
    </div>
  </div>
  <Footer /> 
</>

);
}

export default Homepage;
