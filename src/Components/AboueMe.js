import DeveloperImage from "../assets/myPic.png";
import DeveloperImageWebp from "../assets/myPic.webp";

const AboutMe = () => {
    return (
        <>
            <section className="about_me" id="about">
                <h2 className="section_heading">About Me</h2>
                <div className="innerBox">
                    <div className="innerText">
                        <p>
                            I am an expertise in cloud deployment, containerization, building user-friendly web applications and RESTful APIs.
                            Proficient in Git, monitoring/automation tools, and both relational & NoSQL databases. Strong in Python & JavaScript. <br />

                        </p>
                        <p>At Tessrac Innovations, I won top performer of the year award</p>

                        <ul className="skill_list">
                            <li>Python</li>
                            <li>React JS</li>
                            <li>FastAPI</li>
                            <li>Rest APIs</li>
                            <li>MySQL</li>
                            <li>Apache Kafka</li>
                            <li>Docker</li>
                            <li>AWS</li>
                            <li>Linux</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div className="innerImage">
                        <div className="img_wrapper">
                            <picture>
                                <source srcSet={DeveloperImageWebp} type="image/webp" />
                                <img src={DeveloperImage} alt="Vinodh Kumar Adari | Profile Pic | software engineer" />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe;
