import React, { Suspense } from "react";

const PortfolioLayout = React.lazy(() => import("../layouts/PortfolioLayout"))
const Intro = React.lazy(() => import("../Components/Intro"));
const AboutMe = React.lazy(() => import("../Components/AboueMe"));
const WorkExperiance = React.lazy(() => import("../Components/WorkExperiance"));
const GetInTouch = React.lazy(() => import("../Components/GetInTouch"));


const HomePage = () => {
    return (
        <div>
            <main className="HomePage_content">
                <Suspense fallback={<div>Loading</div>}>
                    <Intro id="intro" />
                    <AboutMe id="about"/>
                    <WorkExperiance id="experiance" />
                    <GetInTouch id="contact" />
                </Suspense>
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
