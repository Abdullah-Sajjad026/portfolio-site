import { useState } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard';
import projectsdata from '../../projectsData';

const Portfolio = () => {

    const [projects, setProjects] = useState(projectsdata.map((project) => {
        return <ProjectCard img={project.img} title={project.title} description={project.description} link={project.link} />
    }))
    const showMore = () => {

    }
    return (
        <section id="portfolio" className='portfolio'>

            <div className="title-box">
                <h2 className="heading-2">My Recent Works</h2>
            </div>

            <div className="portfolio__content grid-3col">
                {projects}
            </div>
            <div className='morebtn-wrapper'>
                <button className='loadmore-btn btn' onClick={showMore}>See More</button>
            </div>
        </section>
    )
}

export default Portfolio
