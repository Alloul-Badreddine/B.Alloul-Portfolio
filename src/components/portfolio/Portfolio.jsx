import "./portfolio.css";

import IMG1 from "../../assets/IfraneHub.png";
import IMG2 from "../../assets/Wumpus Game.png";
import IMG3 from "../../assets/cnn image classifi.png";
import IMG4 from "../../assets/SanSat.png";
import IMG5 from "../../assets/Bust The Ghost.jpeg";
import IMG6 from "../../assets/GuideWise.jpeg"
import React from "react";
import { FaGithub } from "react-icons/fa";


//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "IfraneHub",
      img: IMG1,
      description:
        "Online marketplace for lodging and travel experiences, connecting hosts with guests in Ifrane, Morocco.",
      technologies: "React | TypeScript | MongoDB",
      link: "https://github.com/Alloul-Badreddine/IfraneHub-Project",
    },
    {
      id: 2,
      title: "Wumpus Game",
      img: IMG2,
      description:
        "Rule-based expert system in Jess AI for navigating a maze, avoiding hazards, and hunting the elusive Wumpus creature.",
      technologies: "Java | Jess",
      link: "https://github.com/Alloul-Badreddine/Wumpus-Game-Jess",
    },
    {
      id: 3,
      title: "CNN Image Classification",
      img: IMG3,
      description:
        "Python-based Convolutional Neural Network (CNN) implementation for image classification on the CIFAR-10 dataset.(KERAS)",
      technologies: "Pyhton",
      link: "https://github.com/Alloul-Badreddine/CNN-Image-Classification",
    },
    {
      id: 4,
      title: "SanSat",
      img: IMG4,
      description:
        "SanSat's website: Showcasing comprehensive service descriptions, offerings, and facilitating seamless transactions for satellite-based solutions.",
      technologies: "HTML | CSS | JavaScript | PHP",
      link: "https://github.com/Alloul-Badreddine/SanSat-Website",
    },
    {
      id: 5,
      title: "Bust The Ghost Unity",
      img: IMG5,
      description:
        "Unity C# game 'Bust the Ghost': A thrilling adventure where players aim to capture mischievous ghosts in a dynamic and immersive virtual world.",
      technologies: "Unity | C# | Probability",
      link: "https://github.com/Alloul-Badreddine/Bust-The-Ghost-Unity",
    },
    {
    id: 6,
    title: "GuideWise Application",
    img: IMG6,
    description:
      "GuideForge: An application that empowers users to create and join interactive guides for diverse activities, fostering shared experiences and knowledge sharing.",
    technologies: "React | Javascript | FireBase",
    link: "https://github.com/Alloul-Badreddine/GuideWise",
  },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <h5>You can email me so I can grant you access to the source code</h5>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <br></br>
            <div className="portfolio__item-cta">
              {/* Wrap the GitHub logo in an anchor tag */}
              <a href={pro.link} target="_blank" rel="noreferrer">
                <FaGithub size={20} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
