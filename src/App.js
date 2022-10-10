import React, { useState } from "react";
import styles from "./styles.js";

const App = () => {
    const [minpx, setminpx] = useState();
    const [maxpx, setmaxpx] = useState();
    const [minVw, setMinVw] = useState();
    const [maxVw, setMaxVw] = useState();
    const [responsiveFs, setResponsiveFs] = useState();

    const handleminpx = (e) => setminpx(e.target.value);
    const handlemaxpx = (e) => setmaxpx(e.target.value);
    const handleMinVw = (e) => setMinVw(e.target.value);
    const handleMaxVw = (e) => setMaxVw(e.target.value);

    let minRem = minpx / 16;
    let maxRem = maxpx / 16;

    // prettier-ignore
    const middleVw = ((100 * (maxpx - minpx)) / (maxVw - minVw)).toPrecision(5);

    // prettier-ignore
    const middleRem = ((((minVw * maxpx) - (maxVw * minpx)) / (minVw - maxVw)) / 16).toPrecision(5);

    const handleSubmit = (e) => {
        setResponsiveFs(
            `clamp(${minRem}rem ,${middleVw}vw + ${middleRem}rem ,  ${maxRem}rem)`
        );
        e.preventDefault();
    };
    console.log(responsiveFs);

    return (
        <div className="App font-poppins antialiased max-w-4xl mx-auto text-center">
            <h1 className={`${styles.heading1}`}>Responsive Font size</h1>
            <span className="text-center inline-block m-auto pb-10 font-black">
                (Using Clamp)
            </span>
            {/* <h2>How to use</h2> */}
            <form className={`${styles.form}`}>
                <div className={`${styles.inputRowContainer}`}>
                    <div className={`${styles.inputContainer}`}>
                        <label hmtlfor="min-fs" className="w-full">
                            Min Font Size
                        </label>{" "}
                        <br />
                        <input
                            onBlur={handleminpx}
                            type="number"
                            id="min-fs"
                            className={`${styles.input}`}
                            placeholder="16"
                            required
                        ></input>
                    </div>
                    <div className={`${styles.inputContainer}`}>
                        <label hmtlfor="max-fs">Max Font Size</label> <br />
                        <input
                            onBlur={handlemaxpx}
                            type="number"
                            id="max-fs"
                            className={`${styles.input}`}
                            placeholder="20"
                            required
                        ></input>
                    </div>
                </div>
                <div className={`${styles.inputRowContainer}`}>
                    <div className={`${styles.inputContainer}`}>
                        <label hmtlfor="min-vw">Min Viewport Size</label> <br />
                        <input
                            onBlur={handleMinVw}
                            type="number"
                            id="min-vw"
                            className={`${styles.input}`}
                            placeholder="320"
                            Required
                        ></input>
                    </div>
                    <div className={`${styles.inputContainer}`}>
                        <label hmtlfor="max-vw">Max Viweport Size</label> <br />
                        <input
                            onBlur={handleMaxVw}
                            type="number"
                            id="max-vw"
                            className={`${styles.input}`}
                            placeholder="1200"
                            required
                        ></input>
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="py-2 font-bold  border-black hover:bg-orange-300 hover:text-white text-orange-700"
                >
                    Submit
                </button>
            </form>
            <div>
                <p className="text-center mt-5">{responsiveFs}</p>
            </div>
        </div>
    );
};

export default App;
