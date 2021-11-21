const About = () => {
    return (
        <section className="about" id="about">
            <div className="wrapper">

                <div className="title-box">
                    <h2 className="heading-2">A little bit about me</h2>
                </div>
                <div className="about__content grid-2col">
                    <div className="about__text-col">
                        <div className="card">
                            <p>I build websites which generate results.
                                <br /> Coding has been my passion
                                since the days I started working with computers but I found myself into web
                                design/development since 2020. I enjoy
                                learning Web Development and new technologies. <br /><br /> Learning Everyday, Uplevelling
                                Everyday.</p>
                        </div>
                    </div>
                    <div className="about__img-col">
                        {/* <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_iorpbol0.json" background="transparent" speed="1" loop autoplay></lottie-player> */}
                        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_vEfHlN.json" background="transparent" speed="1" loop="" autoplay="">
                        </lottie-player>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
