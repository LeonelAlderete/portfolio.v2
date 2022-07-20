import React from "react";
//ui
import "./carousel.css";
import "./carousel-slide.css";
import { AiFillGithub } from "react-icons/ai";
//Utils
import projectsData from "../../utils/proyectsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel(props) {
  const { setActiveSlide } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    afterChange: (next) => {
      setActiveSlide(next);
    },
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {projectsData.map((project, index) => (
          <div className="slide" key={index}>
            <h2>{project.title}</h2>

            <div className="description">
              <p>{project.description}</p>
            </div>

            <div className="buttons">
              {project.demoURL && (
                <a
                  href={project.demoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Ver demo</button>
                </a>
              )}

              {project.githubURL && (
                <a
                  href={project.githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="github-btn" />
                </a>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
