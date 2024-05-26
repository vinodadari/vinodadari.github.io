import DeveloperImage  from "../assets/myPic.png";
import DeveloperImageWebp  from "../assets/myPic.webp";

const AboutMe = () => {
    return (
        <>
            <section className="about_me">
                <h2 className="section_heading">About Me</h2>
                <div className="innerBox">
                    <div className="innerText">
                        <p>
                            As a developer, I have experience in using Git and Github for version control, and I have deployed projects on both AWS and GCP virtual machines. Additionally, I have worked with containerization using Docker and developed applications using Nagios, SNMP, Django, Flask, React, Socket, Twisted, Fast Api, and Python-Kafka. I have also used Dogpilecache to improve performance and designed and developed Rest APIs. I am proficient in both Python and JavaScript, and have experience working with MySQL databases.
                        </p>

                        <ul className="skill_list">
                            <li>Python</li>
                            <li>React JS</li>
                            <li>HTML & SCSS</li>
                            <li>Django</li>
                            <li>Git</li>
                            <li>AWS</li>
                        </ul>
                    </div>
                    <div className="innerImage">
                        <div className="img_wrapper">
                            <picture>
                                <source srcSet={DeveloperImageWebp} type="image/webp"/>
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
