import DeveloperImage  from "../assets/myPic.png";
import DeveloperImageWebp  from "../assets/myPic.webp";

const AboutMe = (props) => {
    return (
        <>
            <section className="about_me" id={props.id}>
                <h2 className="section_heading">About Me</h2>
                <div className="innerBox">
                    <div className="innerText">
                        <p>
                            Hello!, I'm Vinodh Kumar Adari, and I enjoy creating things that live on the internet.
                            My career started with the accidentally shown web source page with numerous HTML tags.
                            And I became addicted and deep dive into cloud things.
                        </p>
                        <p>I've had the privilege of working with <a href="https://www.vensatechnologies.com" rel="noopener noreferrer" className="highlight_link" target="_blank">Vensa</a> and  <a href="https://inspiredgeit.com" rel="noopener noreferrer" className="highlight_link" target="_blank">InspiredgeIT</a>. I am currently working at <a href="https://www.tessrac.com" rel="noopener noreferrer" className="highlight_link" target="_blank">Tessrac</a> in order to build more accessible, inclusive products for various clients.

                        </p>
                        <ul className="skill_list">
                            <li>HTML & SCSS</li>
                            <li>React JS</li>
                            <li>Python</li>
                            <li>Django</li>
                            <li>Sockets</li>
                            <li>MySQLi</li>
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
