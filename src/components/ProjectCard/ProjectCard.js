const ProjectCard = (props) => {
    return (
        <article className="project-card card">
            <div className="img-col">
                <img src={`images/${props.img}`} alt={props.title} className="project--img" />
            </div>
            <div className="text-col">
                <div className="project--info">
                    <h4 className="heading-4">{props.title}</h4>
                    <p>{props.description}</p>
                    <a href={props.link} rel="noreferrer" target="_blank" className="btn btn--full btn--small">Visit
                        Site &rarr;</a>
                </div>
            </div>
        </article>
    )
}
/*
<article className="portfolio-card card">
            <img src={`images/${props.img}`} alt={`${props.title} Logo`} className="portfolio-card__img" />
            <hr />
            <h4 className="heading-4">{props.title}</h4>
            <p>{props.description}</p>
            <a href={props.link} rel="noreferrer" target="_blank" className="btn btn--full btn--small">Visit
                Site &rarr;</a>
        </article> */

export default ProjectCard
