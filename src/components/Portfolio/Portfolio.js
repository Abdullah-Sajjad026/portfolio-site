import ProjectCard from '../ProjectCard/ProjectCard';
import projectsdata from '../../projectsData';

const Portfolio = () => {

    const projects = projectsdata.map((project) => {
        return <ProjectCard img={project.img} title={project.title} description={project.description} link={project.link} />
    })
    return (
        <section id="portfolio">

            <div className="title-box">
                <h2 className="heading-2">My Recent Works</h2>
            </div>

            <div className="portfolio__content grid-3col">
                {projects}
            </div>
        </section>
    )
}

export default Portfolio
