import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCloudMoonRain,
    faEnvelope,
    faMoon,
    faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles";

const ResponsiveFs = () => {
    // checks if darkMode is true or false
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.theme === "dark"
    );

    useEffect(() => {
        const html = window.document.documentElement;

        const prevTheme = isDarkMode ? "light" : "dark";
        html.classList.remove(prevTheme);

        const nextTheme = isDarkMode ? "dark" : "light";
        html.classList.add(nextTheme);

        localStorage.setItem("theme", nextTheme);
    }, [isDarkMode]);

    // precision
    const precisionLimit = 6;

    const [variables, setVariables] = useState({
        minPx: "",
        maxPx: "",
        minVw: "",
        maxVw: "",
    });

    // console.log("variables:", variables);

    // error
    const [minPxError, setMinPxError] = useState("");
    const [maxPxError, setMaxPxError] = useState("");
    const [minVwError, setMinVwError] = useState("");
    const [maxVwError, setMaxVwError] = useState("");

    // show responsiveFs on ui when showError is false
    const [showError, setShowError] = useState(true);

    // store clamp
    const [responsiveFs, setResponsiveFs] = useState("");

    // copy text
    const [textCopied, setTextCopied] = useState(false);

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
            setTextCopied(false);
            // console.log("no error");
            setResponsiveFs(
                `clamp( ${minRem}rem , ${middleVw}vw + ${middleRem}rem ,  ${maxRem}rem )`
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

    const copyText = () => {
        navigator.clipboard.writeText(responsiveFs);
        setTextCopied(true);
    };
    // console.log(minRem);
    // console.log("responsive font size :", responsiveFs);
    // const [darkToggle, setDarkToggle] = useState(false);

    return (
        <div className="relative mb-10  ">
            <h1 className={`${styles.heading1}`}>Responsive Font size</h1>
            <div className="fixed z-10 top-0 left-0 ml-5 mt-3">
                <label
                    className="toggleDarkBtn relative bg-[#111]  w-[55px] h-[26px] rounded-[50px] p-2 flex items-center justify-between  cursor-pointer scale-95 sm:scale-110 xs:scale-100 "
                    for="theme"
                >
                    <input
                        type="checkbox"
                        className="opacity-0 hidden  peer"
                        id="theme"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                    />
                    <FontAwesomeIcon
                        icon={faMoon}
                        className="text-orange-400 text-[20px]"
                    />
                    <FontAwesomeIcon icon={faSun} className="text-orange-400" />
                    <span className="absolute w-[22px] h-[22px] peer-checked:translate-x-[29px] transition-all slideBtnTg rounded-[35px]  top-[2px] left-[2px] bg-white "></span>
                </label>
            </div>

            <span className="inline-block m-auto pb-10 font-black dark:text-slate-300">
                (Using Clamp)
            </span>

            <form
                className={`${styles.form} flex flex-col `}
                onSubmit={handleSubmit}
            >
                <div className="shadow-lg shadow-slate-200 dark:shadow-slate-600">
                    <div className={`${styles.flexEvenly} ${styles.bg} `}>
                        <div className="relative">
                            <div
                                className={`${styles.marginXT} text-center ${styles.labelBg} `}
                            >
                                <div className={``}>
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
                                ></input>
                                <p className={`${styles.error} `}>
                                    {minPxError}
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div
                                className={`${styles.marginXT} text-center  ${styles.labelBg}`}
                            >
                                <div className="">
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
                                ></input>
                            </div>
                            <p className={`${styles.error}`}>{maxPxError}</p>
                        </div>
                    </div>
                    <div className={`${styles.flexEvenly} ${styles.bg} pb-10`}>
                        <div className="relative">
                            <div
                                className={`${styles.marginXT} text-center   ${styles.labelBg} `}
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
                                    onChange={handleValue}
                                    name="minVw"
                                    type="number"
                                    id="min-vw"
                                    className={`${styles.placeholder} ${styles.border} ${styles.input}`}
                                    placeholder="375"
                                ></input>
                            </div>
                            <p className={`${styles.error}`}>{minVwError}</p>
                        </div>
                        <div className="relative">
                            <div
                                className={`${styles.marginXT} text-center  ${styles.labelBg}`}
                            >
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
                            </div>
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
                        className={`${styles.button} ${styles.buttonHover} py-2 duration-300 w-40 mt-10`}
                    >
                        Submit
                    </button>
                </div>
            </form>
            {/* {showError === false ? ( */}
            <div
                className={`${responsiveFs === "" && "hidden"} ${
                    showError === true && "hidden"
                } absolute mx-auto inset-x-0  `}
            >
                <p className=" inline-block sm:text-lg text-base text-center mt-10 font-medium tracking-wide text-zinc-500 dark:text-slate-300 bg-slate-100 dark:bg-slate-600 rounded px-5  py-3 shadow-lg dark:shadow-slate-600">
                    {showError === false && `${responsiveFs}`}
                    <div className="relative inline-block group ml-5">
                        <button
                            onClick={copyText}
                            className={`${
                                textCopied === true
                                    ? "text-slate-500 dark:text-slate-400"
                                    : "text-slate-400 dark:text-slate-300"
                            }    border-2 border-slate-300 dark:border-slate-400 px-1 rounded  hover:text-slate-500 dark:hover:text-slate-400  `}
                        >
                            <FontAwesomeIcon icon={faCopy} />
                        </button>
                        <div className="absolute bottom-full mx-auto inset-x-0  flex-col items-center hidden group-hover:flex mb-5">
                            <span className=" relative  flex flex-col items-center -mb-2 whitespace-nowrap  bg-slate-400 dark:bg-slate-600 text-slate-100 dark:text-slate-300 text-sm p-2 rounded ">
                                {textCopied === true
                                    ? "Copied"
                                    : "Click to copy"}
                            </span>
                            <div class="w-3 h-3 rotate-45 bg-slate-400 dark:bg-slate-600"></div>
                        </div>
                    </div>
                </p>
            </div>
            {/* ) : (
                <div></div>
            )} */}
        </div>
    );
};

export default ResponsiveFs;
