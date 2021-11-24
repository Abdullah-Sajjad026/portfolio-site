import SkillCard from '../SkillCard/SkillCard'

const Skills = () => {
    return (
        <section id="skills" className='skills'>

            <div className="wrapper">

                <div className="title-box">
                    <h2 className="heading-2">My Skills</h2>
                </div>

                <div className="skills__content" data-aos="zoom-out-up">
                    <SkillCard img='html5.svg' skillName='HTML5' />
                    <SkillCard img='css3.svg' skillName='CSS3' />
                    <SkillCard img='js.svg' skillName='JavaScript' />
                    <SkillCard img='bootstrap.svg' skillName='Bootstrap' />
                    <SkillCard img='sass.svg' skillName='SASS/SCSS' />
                    <SkillCard img='git.svg' skillName='Git/Github' />
                </div>
            </div>
        </section>
    )
}

export default Skills
