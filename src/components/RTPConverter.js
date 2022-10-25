import React, { useState } from "react";
import styles from "../styles";

const RTPConverter = () => {
    const convertRemValue = (e) => {
        let remValue = e.target.value;
        console.log(remValue);
        let pxValue = remValue * 16;
        document.getElementById("pxValue").value = pxValue;
    };
    const convertPxValue = (e) => {
        let pxValue = e.target.value;
        console.log(pxValue);
        let remValue = pxValue / 16;
        document.getElementById("remValue").value = remValue;
    };
    // let pxValue = document.getElemementById("pxValue").value;
    // console.log(pxValue);
    return (
        <div>
            <h2 className={`${styles.heading2}`}>Rem To Px Converter</h2>
            <form className={`${styles.form} mt-10`}>
                <div className={`${styles.flexEvenly} bg py-10`}>
                    <div className="mx-2 text-center xs:pb-10 py-10">
                        <div className=" bg-orange-400 ">
                            <label
                                hmtlfor="remValue"
                                className={`${styles.label}`}
                            >
                                Font Size(Rem)
                            </label>
                        </div>

                        <input
                            // onChange={handleRemValue}
                            onChange={convertRemValue}
                            // value={pxValue}
                            name="remValue"
                            type="number"
                            id="remValue"
                            className={`${styles.placeholder} ${styles.border} ${styles.input}  w-full  pl-2 text-center    font-semibold`}
                            placeholder="1"
                            step="any"
                            // required
                            // autoFocus
                        ></input>
                    </div>
                    <div className="mx-2 text-center  py-10">
                        <div className=" bg-orange-400 text-left ">
                            <label
                                hmtlfor="px-value"
                                className={`${styles.label}`}
                            >
                                Font Size(Px)
                            </label>
                        </div>

                        <input
                            // value="16"
                            onChange={convertPxValue}
                            // value={pxValue}
                            name="pxValue"
                            type="number"
                            id="pxValue"
                            className={`${styles.placeholder} ${styles.border} ${styles.input} w-full pl-2 text-center font-semibold`}
                            placeholder="16"
                            step="any"
                            // required
                            // autoFocus
                        ></input>
                    </div>
                </div>

                {/* <div> */}
            </form>
        </div>
    );
};

export default RTPConverter;
