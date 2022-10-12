import React, { useState } from "react";
import styles from "./styles.js";

const App = () => {
    const [variables, setVariables] = useState({
        minPx: NaN,
        maxPx: NaN,
        minVw: NaN,
        maxVw: NaN,
    });
    console.log(variables);
    // const [minPx, setMinPx] = useState();
    // const [maxPx, setMaxPx] = useState();
    // const [minVw, setMinVw] = useState();
    // const [maxVw, setMaxVw] = useState();
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);

    const [responsiveFs, setResponsiveFs] = useState();
    // console.log(showError);
    const handleValue = (e) => {
        // console.log(e.target.name);
        setVariables({ ...variables, [e.target.name]: e.target.value });
        // const obj = { name: value };
        // console.log(obj);
        // setMinPx(e.target.value);
    };
    // const handleMinPx = (e) => setMaxPx(e.target.value);

    // const handlemaxpx = (e) => setMaxPx(e.target.value);
    // const handleMinVw = (e) => setMinVw(e.target.value);
    // const handleMaxVw = (e) => setMaxVw(e.target.value);

    let minRem = variables.minPx / 16;
    let maxRem = variables.maxPx / 16;
    console.log(minRem, maxRem);
    // prettier-ignore
    const middleVw = ((100 * (variables.maxPx - variables.minPx)) / (variables.maxVw - variables.minVw)).toPrecision(5);
    // console.log(middleVw);
    // prettier-ignore
    const middleRem = ((((variables.minVw * variables.maxPx) - (variables.maxVw * variables.minPx)) / (variables.minVw - variables.maxVw)) / 16).toPrecision(5);
    console.log(middleRem);

    const checkError = () => {
        // prettier-ignore
        if (variables.minPx !== undefined || NaN) {
            setError("This field");
            setShowError(false);
            setResponsiveFs(
                `clamp(${minRem}rem ,${middleVw}vw + ${middleRem}rem ,  ${maxRem}rem)`
            );
        }
    };
    console.log(
        `clamp(${minRem}rem ,${middleVw}vw + ${middleRem}rem ,  ${maxRem}rem)`
    );
    const handleSubmit = (e) => {
        checkError();
        setResponsiveFs(
            `clamp(${minRem}rem ,${middleVw}vw + ${middleRem}rem ,  ${maxRem}rem)`
        );
        // if (showError === false) {
        // }

        e.preventDefault();
    };
    // console.log(minRem);
    console.log(responsiveFs);

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
                                    Min Font Size(Px)
                                </label>
                            </div>

                            <input
                                onChange={handleValue}
                                name="minPx"
                                type="number"
                                id="min-fs"
                                className={`${styles.input}`}
                                placeholder="16"
                                step=".01"
                                // autoFocus
                            ></input>

                            <p className={`${styles.error}`}>
                                {setShowError && `${error}`}
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
                                    Max Font Size(Px)
                                </label>
                            </div>

                            <input
                                onChange={handleValue}
                                name="maxPx"
                                type="number"
                                id="max-fs"
                                className={`${styles.input}`}
                                placeholder="20"
                                step=".01"
                                // required
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
                                // onBlur={handleMinVw}
                                onChange={handleValue}
                                name="minVw"
                                type="number"
                                id="min-vw"
                                className={`${styles.input} `}
                                placeholder="320"
                                // required
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
                                // onBlur={handleMaxVw}
                                onChange={handleValue}
                                name="maxVw"
                                type="number"
                                id="max-vw"
                                className={`${styles.input} `}
                                placeholder="1200"
                                // required
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
                    {/* {showError === false && `${responsiveFs}`} */}
                    {responsiveFs}
                </p>
            </div>
        </div>
    );
};

export default App;
