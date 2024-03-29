import {useState} from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import {bigProjectsData, smallProjectsData} from "../../data/projects-data";

const Portfolio = () => {
  const bigProjectsCards = bigProjectsData.map((project) => (
    <ProjectCard
      img={project.img}
      title={project.title}
      description={project.description}
      link={project.link}
      key={project.title}
    />
  ));
  const smallProjectsCards = smallProjectsData.map((project) => (
    <ProjectCard
      img={project.img}
      title={project.title}
      description={project.description}
      link={project.link}
      key={project.title}
    />
  ));
  const allProjectsCards = [...bigProjectsCards, ...smallProjectsCards];

  const [projects, setProjects] = useState(bigProjectsCards);

  const showMore = (e) => {
    setProjects(allProjectsCards);
    e.target.style.display = "none";
  };
  return (
    <section id="portfolio" className="portfolio">
      <div className="title-box">
        <h2 className="heading-2">My Recent Works</h2>
      </div>

      <div className="portfolio__content" data-aos="fade-up">
        {projects}
      </div>
      <div className="morebtn-wrapper">
        <button className="loadmore-btn btn" onClick={showMore}>
          Show Mini Projects
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
