import React, { useState } from "react";
import styles from "../styles";

const ResponsiveFs = () => {
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
        <div>
            <h1 className={`${styles.heading1}`}>Responsive Font size</h1>

            <span className="inline-block m-auto pb-10 font-black">
                (Using Clamp)
            </span>

            <form
                className={`${styles.form} flex flex-col `}
                onSubmit={handleSubmit}
            >
                <div className="shadow-lg shadow-slate-200">
                    <div className={`${styles.flexEvenly} ${styles.bg}`}>
                        {/* <div className="mt-10"> */}
                        <div
                            className={`${styles.marginXT} text-center border border-slate-200 `}
                        >
                            <div className="bg-400">
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
                                className={`${styles.placeholder} ${styles.border} ${styles.input}`}
                                placeholder="16"
                                step="any"
                                // required
                                // autoFocus
                            ></input>

                            <p className={`${styles.error}`}>
                                {/* {setShowError && `${error}`} */}
                                {/* {warning.minPxError} */}
                                {minPxError}
                            </p>
                        </div>
                        {/* </div> */}
                        {/* <div className="mt-10"> */}
                        <div
                            className={`${styles.marginXT} text-center border border-slate-200`}
                        >
                            <div className="bg-slate-100">
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
                                className={`${styles.placeholder} ${styles.border} ${styles.input}`}
                                placeholder="20"
                                step="any"
                                // required
                            ></input>
                            <p className={`${styles.error}`}>
                                {/* {warning.maxPxError} */}
                                {maxPxError}
                            </p>
                        </div>
                        {/* </div> */}
                    </div>
                    <div className={`${styles.flexEvenly} ${styles.bg}`}>
                        {/* <div className="mt-10"> */}
                        <div
                            className={`${styles.marginXT} text-center border border-slate-200 `}
                        >
                            <div className="">
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
                                className={`${styles.placeholder} ${styles.border} ${styles.input}`}
                                placeholder="375"
                                // required
                            ></input>
                            <p className={`${styles.error}`}>
                                {/* {warning.minVwError} */}
                                {minVwError}
                            </p>
                        </div>
                        {/* </div> */}

                        {/* <div className="mt-10"> */}
                        <div className={`${styles.marginXT} text-center mb-10`}>
                            <div className="  ">
                                <label
                                    hmtlfor="max-vw"
                                    className={`${styles.label}`}
                                >
                                    Max Viweport Size
                                </label>
                            </div>

                            <input
                                onChange={handleValue}
                                name="maxVw"
                                type="number"
                                id="max-vw"
                                className={`${styles.placeholder} ${styles.border} ${styles.input}`}
                                placeholder="1024"
                                // required
                            ></input>
                            <p className={`${styles.error}`}>
                                {/* {warning.maxVwError} */}
                                {maxVwError}
                            </p>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className={`${styles.button} ${styles.buttonHover} py-2 duration-300 w-40 mt-10`}
                    >
                        Submit
                    </button>
                </div>
            </form>

            <div>
                <p className="text-center mt-5 font-semibold text-orange-500 ">
                    {showError === false ? `${responsiveFs}` : ""}
                </p>
            </div>
        </div>
    );
};

export default ResponsiveFs;
