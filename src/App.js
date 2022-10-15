import React, { useState } from "react";
import styles from "./styles.js";

const App = () => {
    const precisionLimit = 6;
    const [variables, setVariables] = useState({
        minPx: "",
        maxPx: "",
        minVw: "",
        maxVw: "",
    });
    // console.log("variables:", variables);

    const [minPxError, setMinPxError] = useState("");
    const [maxPxError, setMaxPxError] = useState("");
    const [minVwError, setMinVwError] = useState("");
    const [maxVwError, setMaxVwError] = useState("");
    const [showError, setShowError] = useState(true);
    const [responsiveFs, setResponsiveFs] = useState();

    const handleValue = (e) => {
        setVariables({
            ...variables,
            [e.target.name]: e.target.value,
        });

        // this code will set and empty string on the result when an input field is empty
        if (e.target.name === "minPx") {
            if (e.target.value === "") {
                setMinPxError("This field cannot be empty");
                setResponsiveFs("");
            } else {
                setMinPxError("");
            }
        } else if (e.target.name === "maxPx") {
            if (e.target.value === "") {
                setMaxPxError("This field cannot be empty");
                setResponsiveFs("");
            } else {
                setMaxPxError("");
            }
        } else if (e.target.name === "minVw") {
            if (e.target.value === "") {
                setMinVwError("This field cannot be empty");
                setResponsiveFs("");
            } else {
                setMinVwError("");
            }
        } else if (e.target.name === "maxVw") {
            if (e.target.value === "") {
                setMaxVwError("This field cannot be empty");
                setResponsiveFs("");
            } else {
                setMaxVwError("");
            }
        }
        // this code will empty the string when submit button is clicked
        // if (e.target.name === "minPx") {
        //     e.target.value === ""
        //         ? setMinPxError("This field cannot be empty")
        //         : setMinPxError("");
        // } else if (e.target.name === "maxPx") {
        //     e.target.value === ""
        //         ? setMaxPxError("This field cannot be empty")
        //         : setMaxPxError("");
        // } else if (e.target.name === "minVw") {
        //     e.target.value === ""
        //         ? setMinVwError("This field cannot be empty")
        //         : setMinVwError("");
        // } else if (e.target.name === "maxVw") {
        //     e.target.value === ""
        //         ? setMaxVwError("This field cannot be empty")
        //         : setMaxVwError("");
        // }
    };

    let minRem = variables.minPx / 16;
    let maxRem = variables.maxPx / 16;

    // prettier-ignore
    const middleVw = ((100 * (variables.maxPx - variables.minPx)) / (variables.maxVw - variables.minVw)).toPrecision(precisionLimit);

    // prettier-ignore
    const middleRem = ((((variables.minVw * variables.maxPx) - (variables.maxVw * variables.minPx)) / (variables.minVw - variables.maxVw)) / 16).toPrecision(precisionLimit);

    const checkError = () => {
        if (variables.minPx === "") {
            setMinPxError("This field cannot be empty");
            setShowError(true);
        } else {
            setMinPxError("");
        }

        if (variables.maxPx === "") {
            setMaxPxError("This field cannot be empty");
        } else {
            setMaxPxError("");
        }

        if (variables.minVw === "") {
            setMinVwError("This field cannot be empty");
        } else {
            setMinVwError("");
        }

        if (variables.maxVw === "") {
            setMaxVwError("This field cannot be empty");
        } else {
            setMaxVwError("");
        }
        if (
            (variables.minPx &&
                variables.maxPx &&
                variables.maxVw &&
                variables.minVw) !== ""
        ) {
            setShowError(false);
            // console.log("no error");
            setResponsiveFs(
                `clamp(${minRem}rem ,${middleVw}vw + ${middleRem}rem ,  ${maxRem}rem)`
            );
        } else {
            setShowError(true);
            // console.log("error");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkError();
    };
    // console.log(minRem);
    // console.log("responsive font size :", responsiveFs);

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
                                // required
                                // autoFocus
                            ></input>

                            <p className={`${styles.error}`}>
                                {/* {setShowError && `${error}`} */}
                                {/* {warning.minPxError} */}
                                {minPxError}
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
                                {/* {warning.maxPxError} */}
                                {maxPxError}
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
                                {/* {warning.minVwError} */}
                                {minVwError}
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
                                {/* {warning.maxVwError} */}
                                {maxVwError}
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
                    {showError === false ? `${responsiveFs}` : ""}
                    {/* {responsiveFs} */}
                </p>
            </div>
        </div>
    );
};

export default App;
