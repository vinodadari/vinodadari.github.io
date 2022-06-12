import DeveloperImage  from "../assets/myPic.png";

const AboutMe = () => {
    return (
        <>
            <section className="about_me">
                    <h2 className="section_heading">About Me</h2>
                    <div className="innerBox">
                        <div className="innerText">
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,

                            </p>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,

                            </p>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,

                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            </p>
                            <ul className="skill_list">
                                <li>skill 1</li>
                                <li>skill 1</li>
                                <li>skill 1</li>
                                <li>skill 1</li>
                                <li>skill 1</li>
                                <li>skill 1</li>
                            </ul>
                        </div>
                        <div className="innerImage">
                            <img src={DeveloperImage} alt="Vinodh Kumar Adari | Profile Pic | software engineer" />
                        </div>
                    </div>
                </section>
        </>
    )
}

export default AboutMe;
