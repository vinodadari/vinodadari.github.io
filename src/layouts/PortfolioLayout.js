import React from "react";

const PortfolioLayout = (props) => {
    return (
        <div className="portfolio_root_body">
            <header className="navigation_bar">
                <nav>
                    <div className="logo">
                        <a href="#">I am logo</a>
                    </div>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Experiance</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Resume</a></li>
                    </ul>
                </nav>
            </header>
            {React.createElement(props.component)}
        </div>
    )
}
export default PortfolioLayout;
