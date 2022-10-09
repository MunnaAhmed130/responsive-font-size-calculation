import React from "react";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <h1 className="">Responsive Font size</h1>
            <h2>How to use</h2>
            <form>
                <div className="">
                    <div>
                        <label for="min-fs">Min Font Size</label> <br />
                        <input type="number" id="min-fs"></input>
                    </div>
                    <div>
                        <label for="max-fs">Max Font Size</label> <br />
                        <input type="number" id="max-fs"></input>
                    </div>
                </div>
                <div>
                    <label for="min-vw">Min Viewport Size</label>
                    <input type="number" id="min-vw"></input>
                    <label for="max-vw">Max Viweport Size</label>
                    <input type="number" id="max-vw"></input>
                </div>
            </form>
        </div>
    );
};

export default App;
