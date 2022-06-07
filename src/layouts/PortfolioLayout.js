import React from "react";

const PortfolioLayout = (props) => {
    return (
        <div className="app1">
            I am a PortfolioLayout
            {React.createElement(props.component)}
        </div>
    )
}
export default PortfolioLayout;
