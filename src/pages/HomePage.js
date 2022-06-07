import React from "react";
import PortfolioLayout from "../layouts/PortfolioLayout";

const HomePage = () => {
    return (
        <div className="app2">
            I am a HomePage
        </div>
    )
}

const HomePageMixin = () => {
    return (
        <div>
            <PortfolioLayout component={HomePage} />
        </div>
    )
}

export default HomePageMixin;
