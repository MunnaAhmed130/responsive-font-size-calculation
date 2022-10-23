import React, { useState } from "react";
import styles from "../styles";

const RTPConverter = () => {
    const [pxValue, setPxValue] = useState("");

    const handleRemValue = (e) => {
        let remValue = e.target.value;
        let pxValue = remValue * 16;
        setPxValue(pxValue);
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
    };

    return (
        <div className="">
            <h2 className={`${styles.heading2}`}>Rem to Px Converter</h2>
            <form className={`${styles.form} mt-10`} onSubmit={handleSubmit2}>
                <div className="bg-orange-100  flex xs:flex-row flex-col justify-evenly py-10">
                    <div className="mx-2 text-center xs:text-left pb-10">
                        <div className=" bg-orange-400 ">
                            <label
                                hmtlfor="rem-value"
                                className={`${styles.label}`}
                            >
                                Font Size(Rem)
                            </label>
                        </div>

                        <input
                            onChange={handleRemValue}
                            name="rem-value"
                            type="number"
                            id="rem-value"
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
                                hmtlfor="fs-rem"
                                className={`${styles.label}`}
                            >
                                Font Size(Px)
                            </label>
                        </div>

                        <input
                            value={pxValue}
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
                </div>

                {/* <div> */}
            </form>
        </div>
    );
};

export default RTPConverter;
