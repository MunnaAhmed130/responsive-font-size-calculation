import React from "react";
import ResponsiveFs from "./components/ResponsiveFs";
import RTPConverter from "./components/RTPConverter";
import { layout } from "./styles";

const App = () => {
    return (
        <div className={`${layout.mainSection}`}>
            <div className="pb-10">
                <ResponsiveFs></ResponsiveFs>
            </div>
            <div className=" mt-10">
                <RTPConverter></RTPConverter>
            </div>
        </div>
    );
};

export default App;
