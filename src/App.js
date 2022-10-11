import React, { useState } from "react";
import styles from "./styles.js";

const App = () => {
    const [minPx, setMinPx] = useState(null);
    const [maxPx, setMaxPx] = useState(null);
    const [minVw, setMinVw] = useState(null);
    const [maxVw, setMaxVw] = useState(null);
    // const [error, setError] = useState("");
    const [responsiveFs, setResponsiveFs] = useState();
    // console.log(error);
    const handleminpx = (e) => {
        // var minPxValue = e.target.value;
        // console.log(minPxValue);

        setMinPx(e.target.value);
    };
    const handlemaxpx = (e) => setMaxPx(e.target.value);
    const handleMinVw = (e) => setMinVw(e.target.value);
    const handleMaxVw = (e) => setMaxVw(e.target.value);

    var minRem = minPx / 16;
    let maxRem = maxPx / 16;
    console.log(minRem);
    // prettier-ignore
    const middleVw = ((100 * (maxPx - minPx)) / (maxVw - minVw)).toPrecision(5);

    // prettier-ignore
    const middleRem = ((((minVw * maxPx) - (maxVw * minPx)) / (minVw - maxVw)) / 16).toPrecision(5);

    const handleSubmit = (e) => {
        // if (minPx === null) {
        //     setError("This field cannot be empty");
        // }
        setResponsiveFs(
            `clamp(${minRem}rem ,${middleVw}vw + ${middleRem}rem ,  ${maxRem}rem)`
        );
        e.preventDefault();
    };

    // console.log(responsiveFs);

    return (
        <div className="App font-poppins antialiased max-w-4xl mx-auto text-center">
            <h1 className={`${styles.heading1}`}>Responsive Font size</h1>
            <span className="text-center inline-block m-auto pb-10 font-black">
                (Using Clamp)
            </span>
            {/* <h2>How to use</h2> */}
            <form className={`${styles.form}`} onSubmit={handleSubmit}>
                <div className={`${styles.inputRowContainer}`}>
                    <div className={`${styles.inputColContainer}`}>
                        <div className={`${styles.inputContainer}`}>
                            <div className="bg-orange-400 text-left">
                                <label
                                    hmtlfor="min-fs"
                                    className={`${styles.label}`}
                                >
                                    Min Font Size
                                </label>
                            </div>

                            <input
                                onBlur={handleminpx}
                                type="number"
                                id="min-fs"
                                className={`${styles.input}`}
                                placeholder="16"
                                required
                            ></input>
                            <p className={`${styles.error}`}>
                                This field cannot be empty
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.inputColContainer}`}>
                        <div className={`${styles.inputContainer}`}>
                            <div className="bg-orange-400 text-left">
                                <label
                                    hmtlfor="max-fs"
                                    className={`${styles.label}`}
                                >
                                    Max Font Size
                                </label>
                            </div>

                            <input
                                onBlur={handlemaxpx}
                                type="number"
                                id="max-fs"
                                className={`${styles.input}`}
                                placeholder="20"
                                required
                            ></input>
                            <p className={`${styles.error}`}>
                                This field cannot be empty
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.inputRowContainer}`}>
                    <div className={`${styles.inputColContainer}`}>
                        <div className={`${styles.inputContainer}`}>
                            <div className="bg-orange-400 text-left">
                                <label
                                    hmtlfor="min-vw"
                                    className={`${styles.label}`}
                                >
                                    Min Viewport Size
                                </label>
                            </div>

                            <input
                                onBlur={handleMinVw}
                                type="number"
                                id="min-vw"
                                className={`${styles.input} `}
                                placeholder="320"
                                required
                            ></input>
                            <p className={`${styles.error}`}>
                                This field cannot be empty
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.inputColContainer} `}>
                        <div className={`${styles.inputContainer} mb-10`}>
                            <div className="bg-orange-400 text-left">
                                <label
                                    hmtlfor="max-vw"
                                    className={`${styles.label}`}
                                >
                                    Max Viweport Size
                                </label>
                            </div>

                            <input
                                onBlur={handleMaxVw}
                                type="number"
                                id="max-vw"
                                className={`${styles.input} `}
                                placeholder="1200"
                                required
                            ></input>
                            <p className={`${styles.error}`}>
                                This field cannot be empty
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="py-2 font-bold  border-black hover:bg-orange-300 hover:text-orange-700 text-orange-600 bg-orange-200  transition duration-300 w-40 rounded mt-10"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <div>
                <p className="text-center mt-5 font-semibold text-orange-500 ">
                    {responsiveFs}
                </p>
            </div>
        </div>
    );
};

export default App;
