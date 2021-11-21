const SkillCard = (props) => {

    return (
        <article className="skill-card">
            <div className="skill-card__img-container">
                <img src={`images/${props.img}`} alt={props.skillName} />
            </div>
            <h4 className="heading-4 skill-card__heading">{props.skillName}</h4>
        </article>
    )
}

export default SkillCard
