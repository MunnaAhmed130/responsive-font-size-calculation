import React, { useState } from "react";
import styles from "../styles";

const PTRConverter = () => {
    const [remValue, setRemValue] = useState("");

    const handlePxValue = (e) => {
        let pxValue = e.target.value;
        let remValue = pxValue / 16;
        setRemValue(remValue);
    };

    return (
        <div className="mb-10">
            <h2 className={`${styles.heading2}`}>Px To Rem Converter</h2>
            <form className={`${styles.form} mt-10`}>
                <div className="bg-orange-100  flex xs:flex-row flex-col justify-evenly py-10">
                    <div className="mx-2 text-center xs:text-left xs:pb-0 pb-10">
                        <div className=" bg-orange-400 ">
                            <label
                                hmtlfor="px-value"
                                className={`${styles.label}`}
                            >
                                Font Size(Px)
                            </label>
                        </div>

                        <input
                            onChange={handlePxValue}
                            name="px-value"
                            type="number"
                            id="px-value"
                            className={`${styles.placeholder} ${styles.border}  w-full  pl-2 text-center xs:text-left    font-semibold`}
                            placeholder="16"
                            step=".01"
                            // required
                            // autoFocus
                        ></input>
                    </div>
                    <div className="mx-2 text-center xs:text-center  ">
                        <div className=" bg-orange-400 text-left ">
                            <label
                                hmtlfor="rem-value"
                                className={`${styles.label}`}
                            >
                                Font Size(Rem)
                            </label>
                        </div>

                        <input
                            value={remValue}
                            name="rem-value"
                            type="number"
                            id="rem-value"
                            className={`${styles.placeholder} ${styles.border}  w-full  pl-2 text-center xs:text-left    font-semibold`}
                            placeholder="1"
                            step=".01"
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

export default PTRConverter;
