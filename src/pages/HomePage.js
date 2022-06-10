import React, { Suspense } from "react";

const PortfolioLayout = React.lazy(() => import("../layouts/PortfolioLayout"))

const HomePage = () => {
    return (
        <div>
            <main className="HomePage_content">
                <section className="introduction" id="about">
                    <span>
                        <div className="highlight ">
                            <h1>Hi, my name is</h1>
                        </div>
                        <div className="big_heading">
                            <h2>Vinodh Kumar Adari.</h2>
                        </div>
                        <div className="big_heading">
                            <h3>I build things for the web.</h3>
                        </div>
                        <div className="description">
                            <p>
                                I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a href="https://tessrac.com/" rel="noreferrer" target="_blank" className="highlight_link">Tessrac</a>
                            </p>
                        </div>
                    </span>
                </section>
                <section className="about_me">
                    <h2 className="section_heading">About ME</h2>
                    <div className="innerBox">
                        <div className="innerText">
                            <p>lorem</p>
                            <div className="skills_list">
                                <ul>
                                    <li>skill 1</li>
                                </ul>
                            </div>
                        </div>
                        <div className="innerImage">
                            I am Image
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

const HomePageMixin = () => {
    return (
        <div>
            <Suspense>
                <PortfolioLayout component={HomePage} />
            </Suspense>
        </div>
    )
}

export default HomePageMixin;
