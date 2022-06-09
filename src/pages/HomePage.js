import React, { Suspense } from "react";
import { ReactComponent as DeveloperActivity } from '../assets/DeveloperActivity.svg';

const PortfolioLayout = React.lazy(() => import("../layouts/PortfolioLayout"))

const HomePage = () => {
    return (
        <>
            <main className="HomePage_content">
                <section className="about_section" id="about">
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
                            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a href="https://tessrac.com/" rel="noreferrer" target="_blank" className="highlight_btn">Tessrac</a>
                        </p>
                    </div>
                    <div className="DeveloperActivity">
                        <DeveloperActivity />
                    </div>
                </section>
            </main>
        </>
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
