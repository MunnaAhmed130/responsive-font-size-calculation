import React from "react";
import styles from "../styles";

const RTPConverter = () => {
    const convertRemValue = (e) => {
        let remValue = e.target.value;
        // console.log(remValue);
        let pxValue = remValue * 16;
        document.getElementById("pxValue").value = pxValue;
    };
    const convertPxValue = (e) => {
        let pxValue = e.target.value;
        // console.log(pxValue);
        let remValue = pxValue / 16;
        document.getElementById("remValue").value = remValue;
    };
    // let pxValue = document.getElemementById("pxValue").value;
    // console.log(pxValue);
    return (
        <div>
            <h2 className={`${styles.heading2}`}>Rem To Px Converter</h2>
            <form className={`${styles.form} my-10 `}>
                <div
                    className={`${styles.flexEvenly} bg-slate-100 dark:bg-slate-600 py-10 shadow-lg shadow-slate-200 dark:shadow-slate-600`}
                >
                    <div
                        className={`mx-2 text-center ${styles.labelBg} xs:mb-0 mb-10`}
                    >
                        <label hmtlfor="remValue" className={`${styles.label}`}>
                            Font Size(Rem)
                        </label>

                        <input
                            onChange={convertRemValue}
                            name="remValue"
                            type="number"
                            id="remValue"
                            className={`${styles.placeholder} ${styles.border} ${styles.input}  w-full  pl-2 text-center font-semibold `}
                            placeholder="1"
                            step="any"
                        ></input>
                    </div>
                    <div className={`mx-2 text-center ${styles.labelBg}`}>
                        <div>
                            <label
                                hmtlfor="px-value"
                                className={`${styles.label}`}
                            >
                                Font Size(Px)
                            </label>
                        </div>

                        <input
                            onChange={convertPxValue}
                            name="pxValue"
                            type="number"
                            id="pxValue"
                            className={`${styles.placeholder} ${styles.border} ${styles.input} w-full pl-2 text-center font-semibold `}
                            placeholder="16"
                            step="any"
                        ></input>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RTPConverter;
