import Image from "next/image";
const Header = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h3 className="heading-3">
          <span className="logo">
            <Image
              src="/images/programmer.svg"
              alt="Programmer Icon"
              layout="fill"
            />
          </span>
          Hello, I&apos;m
        </h3>
        <h1 className="heading-1">Abdullah Sajjad</h1>
        <h4 className="heading-4">Web Developer, Freelancer, Student</h4>
        <div className="btns">
          <a href="#about" className="btn btn--ghost">
            Explore
          </a>
          <a href="#contact" className="btn btn--full">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
