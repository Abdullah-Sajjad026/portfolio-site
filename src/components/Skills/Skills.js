import SkillCard from "../SkillCard/SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="wrapper">
        <div className="title-box">
          <h2 className="heading-2">My Skills</h2>
        </div>

        <div className="skills__content" data-aos="zoom-out-up">
          <SkillCard img="html5.svg" skillName="HTML5" />
          <SkillCard img="css3.svg" skillName="CSS3" />
          <SkillCard img="sass.svg" skillName="SASS/SCSS" />
          <SkillCard img="bootstrap.svg" skillName="Bootstrap" />
          <SkillCard img="js.svg" skillName="JavaScript" />
          <SkillCard img="react.svg" skillName="ReactJS" />
          <SkillCard img="nextjs.svg" skillName="NextJS" />
          <SkillCard img="typescript.svg" skillName="Typescript" />
          <SkillCard img="redux.svg" skillName="Redux" />
          <SkillCard img="restapi.png" skillName="APIs Integration" />
          {/* <SkillCard img="nodejs.svg" skillName="Node JS" />
          <SkillCard img="expressjs.svg" skillName="Express JS" /> */}
          <SkillCard img="git.svg" skillName="Git/Github" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
