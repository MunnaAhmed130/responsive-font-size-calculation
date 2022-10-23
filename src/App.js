import React from "react";
import ResponsiveFs from "./components/ResponsiveFs";
import RTPConverter from "./components/RTPConverter";
import { layout } from "./styles";

const App = () => {
    return (
        <div className={`${layout.mainSection}`}>
            <ResponsiveFs></ResponsiveFs>
            <RTPConverter></RTPConverter>
        </div>
    );
};

export default App;
