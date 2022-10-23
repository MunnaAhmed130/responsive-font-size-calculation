import React from "react";
import PTRConverter from "./components/PTRConverter";
import ResponsiveFs from "./components/ResponsiveFs";
import RTPConverter from "./components/RTPConverter";
import { layout } from "./styles";

const App = () => {
    return (
        <div className={`${layout.mainSection}`}>
            <ResponsiveFs></ResponsiveFs>
            <RTPConverter></RTPConverter>
            <PTRConverter></PTRConverter>
        </div>
    );
};

export default App;
