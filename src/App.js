import React from "react";
import styles from "./styles.js";

const App = () => {
    return (
        <div className="App font-poppins antialiased">
            <h1 className={`${styles.heading1}`}>Responsive Font size</h1>
            {/* <h2>How to use</h2> */}
            <form className={`${styles.form}`}>
                <div className={`${styles.inputRowContainer}`}>
                    <div className={`${styles.inputContainer}`}>
                        <label for="min-fs">Min Font Size</label> <br />
                        <input
                            type="number"
                            id="min-fs"
                            className={`${styles.input}`}
                        ></input>
                    </div>
                    <div className="border m-5">
                        <label for="max-fs">Max Font Size</label> <br />
                        <input
                            type="number"
                            id="max-fs"
                            className={`${styles.input}`}
                        ></input>
                    </div>
                </div>
                <div className={`${styles.inputRowContainer}`}>
                    <div className={`${styles.inputContainer}`}>
                        <label for="min-vw">Min Viewport Size</label> <br />
                        <input
                            type="number"
                            id="min-vw"
                            className={`${styles.input}`}
                        ></input>
                    </div>
                    <div className={`${styles.inputContainer}`}>
                        <label for="max-vw">Max Viweport Size</label> <br />
                        <input
                            type="number"
                            id="max-vw"
                            className={`${styles.input}`}
                        ></input>
                    </div>
                </div>
                <button
                    type="submit"
                    className="py-2  border-black hover:bg-orange-300 hover:text-white text-orange-700"
                >
                    Submit
                </button>
            </form>
            <div>
                <p></p>
            </div>
        </div>
    );
};

export default App;
