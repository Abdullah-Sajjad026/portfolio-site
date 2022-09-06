import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <h3 className="heading-3">Living, learning, & leveling up everyday.</h3>

      <div className="footer__content">
        <span className="footer__logo">
          <a
            href="https://www.linkedin.com/in/abdullahsajjad026"
            rel="noreferrer"
            target="_blank"
            className="footer__link"
          >
            <Image layout="fill" src="/images/linkedin.png" alt="Social Logo" />
          </a>
        </span>
        <span className="footer__logo">
          <a
            href="https://www.facebook.com/profile.php?id=100047766791619"
            rel="noreferrer"
            target="_blank"
            className="footer__link"
          >
            <Image layout="fill" src="/images/fb.svg" alt="Social Logo" />
          </a>
        </span>
        <span className="footer__logo">
          <a
            href="https://www.instagram.com/ch_abdullah_sajjad/"
            rel="noreferrer"
            target="_blank"
            className="footer__link"
          >
            <Image layout="fill" src="/images/ig.svg" alt="Social Logo" />
          </a>
        </span>
        <span className="footer__logo">
          <a
            href="https://twitter.com/Abdullah_webdev"
            rel="noreferrer"
            target="_blank"
            className="footer__link"
          >
            <Image layout="fill" src="/images/twitter.svg" alt="Social Logo" />
          </a>
        </span>
        <span className="footer__logo">
          <a
            href="https://codepen.io/abdullah-webdev"
            rel="noreferrer"
            target="_blank"
            className="footer__link"
          >
            <Image layout="fill" src="/images/codepen.svg" alt="Social Logo" />
          </a>
        </span>
        <span className="footer__logo">
          <a
            href="https://www.github.com/Abdullah-Sajjad026/"
            rel="noreferrer"
            target="_blank"
            className="footer__link"
          >
            <Image layout="fill" src="/images/github.svg" alt="Social Logo" />
          </a>
        </span>
        <span className="footer__logo">
          <a
            href="https://www.frontendmentor.io/profile/Abdullah-webdev"
            rel="noreferrer"
            target="_blank"
            className="footer__link"
          >
            <Image
              layout="fill"
              src="/images/frontendmentor.jpeg"
              alt="Social Logo"
            />
          </a>
        </span>
        <span className="footer__logo">
          <a
            href="mailto:abdullahsa026@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="footer__link"
          >
            <Image layout="fill" src="/images/gmail.svg" alt="Social Logo" />
          </a>
        </span>
      </div>
      <p className="copyright-text">
        &copy; Copyright by Abdullah Sajjad. All Rights reserved. <br />{" "}
        Designed and developed with ♥ by me.
      </p>
    </footer>
  );
};

export default Footer;
