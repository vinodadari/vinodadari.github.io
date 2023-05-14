import React from 'react';
import GitIcon  from '../assets/GitIcon.png';
import InstaIcon from '../assets/InstaIcon.png';
import LinkedinIcon from '../assets/LinkedinIcon.png'


const GetInTouch = () => {
    return (
        <>
            <section className='GetinTouch'>
            <div className="InnerText big_heading">
                        <h3>
                            Get In Touch
                        </h3>
                        <p>
                            If you need any technical support, assistance or collaboration in your project. <br />
                        </p>
                        <p>If you don't get an answer immediately. I might just be traveling through the middle of nowhere. I'll get back to you as soon as I can. That's a promise!</p>
                        <p><a href="mailto:vinod.codes@gmail.com" rel="noreferrer noopener">vinod.codes@gmail.com</a></p>
                        <span className="social_links">
                            <a href="https://www.instagram.com/itsvinodadari/" rel="noreferrer noopener" target="_blank">
                                <img src={InstaIcon} alt="Instagram Icon" /></a>
                            <a href="https://github.com/vinodadari" rel="noreferrer noopener" target="_blank">
                                <img src={GitIcon} alt="Git Icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/vinodadari/" rel="noreferrer noopener" target="_blank">
                                <img src={LinkedinIcon} alt="Linkedin Icon" />
                            </a>
                        </span>

                        <h5>
                            If you are good at something never do if for free <span className="emoji"></span>
                    </h5>
                    </div>
            </section>
        </>
    )
}

export default GetInTouch;
