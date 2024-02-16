import React from 'react';
import "./portfolio.css";
import Image1 from "../assets/work(1).svg";
import Image2 from "../assets/work(2).svg";
import Image3 from "../assets/work(3).svg";
import Image4 from "../assets/work4.svg";
import Image5 from "../assets/work(5).svg";
import Image6 from "../assets/work(6).svg";
import Image7 from "../assets/work(7).svg";
import Image8 from "../assets/work(8).svg";
import Image9 from "../assets/work(9).svg";



const Array = [
  {
    id: 1,
    image: Image1,
    title: "Z - Aura Perfume Website Design",
  },
  {
    id: 2,
    image: Image2,
    title: "Forhelp Charity Website Design",
  },
  {
    id: 3,
    image: Image3,
    title: "Skill Bridge Website Design",
  },
  {
    id: 4,
    image: Image4,
    title: "Current Vandi Website Design",
  },
  {
    id: 5,
    image: Image5,
    title: "Fit Fusion Gym Website Design",

  },
  {
    id: 6,
    image: Image6,
    title: "DX Digital Agency Website Design",
  },
  {
    id: 7,
    image: Image7,
    title: "Little Learners Website Design",
  },
  {
    id: 8,
    image: Image8,
    title: "StreamVibe Website Design",
  },
  {
    id: 9,
    image: Image9,
    title: "YourBank Website Design",
  },
];
const portfolio = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="portfolio__heading">
          <h2 className="title">My Creative Portfolios</h2>
          <p className="section__subtitle">Here's what some of my satisfied clients have to say about my work</p>
        </div>
        <div className="portfolio__creative">
        <div className="work__content grid">
            {Array.map(({id,image,title})=>{
        return(
          <div className="work__item box" key={id} >
            <h3 className="section__subtitle ">{title}</h3>
            <div className="thumb">
              <img src={image} alt="" />
            </div>
            
          </div>
        )})}
        </div>
        </div>

      </div>
    
    </section>
  )
}

export default portfolio