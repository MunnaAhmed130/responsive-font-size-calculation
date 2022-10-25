import React from "react";
import ResponsiveFs from "./components/ResponsiveFs";
import RTPConverter from "./components/RTPConverter";
import { layout } from "./styles";

const App = () => {
    return (
        <div className={`${layout.mainSection}`}>
            <div className=" ">
                <ResponsiveFs></ResponsiveFs>
            </div>
            <div className=" ">
                <RTPConverter></RTPConverter>
            </div>
        </div>
    );
};

export default App;
