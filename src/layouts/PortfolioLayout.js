import React from "react";

const NavBar = React.lazy(() => import("../Components/NavBar"))

const PortfolioLayout = (props) => {
    return (
        <div className="portfolio_root_body">
            <NavBar />
            {React.createElement(props.component)}
        </div>
    )
}
export default PortfolioLayout;
