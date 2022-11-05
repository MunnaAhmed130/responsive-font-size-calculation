import React from "react";
import ResponsiveFs from "./components/ResponsiveFs";
import RTPConverter from "./components/RTPConverter";
import { layout } from "./styles";

const App = () => {
    return (
        <div className=" transition-all">
            <div className={`${layout.mainSection} `}>
                <div className="pb-10">
                    <ResponsiveFs></ResponsiveFs>
                </div>
                <div className=" mt-10 pb-5">
                    <RTPConverter></RTPConverter>
                </div>
            </div>
        </div>
    );
};

export default App;
