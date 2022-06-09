import React from "react";

const PortfolioLayout = (props) => {
    return (
        <div className="portfolio_root_body">
            <header className="navigation_bar">
                <nav>
                    <div className="logo">
                        <a href="#top">V</a>
                    </div>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experiance">Experiance</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#resume">Resume</a></li>
                    </ul>
                </nav>
            </header>
            {React.createElement(props.component)}
        </div>
    )
}
export default PortfolioLayout;
