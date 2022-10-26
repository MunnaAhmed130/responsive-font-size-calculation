const styles = {
    boxWidth: "max-w-4xl mx-auto",
    heading1: "xs:text-4xl sm:text-5xl text-3xl font-black pt-8 ",
    heading2: "sm:text-4xl xs:text-3xl text-2xl text-2xl font-black pt-8",
    form: `rounded-lg xxs:w-full px-2`,
    flexEvenly: "flex flex-col justify-evenly xs:flex-row",
    bg: "bg-slate-100",
    border: "solid focus:outline-0 focus:border-slate-500  ",
    placeholder: "placeholder:text-center placeholder:text-slate-200 ",
    label: "pl-2 text-lg font-medium text-slate-500 text-center w-full block py-1",
    labelBg: "bg-slate-200 shadow-md shadow-slate-200",
    input: "caret-slate-300 text-gray-400 w-full font-semibold text-center py-1 tracking-widest text-2xl focus:text-sky-300",
    error: "text-base text-center tracking-wide text-red-600 font-medium bg-orange-0 absolute margin-x-auto inset-x-0",
    button: "font-semibold bg-slate-100 text-slate-400 rounded transition shadow-lg shadow-slate-200",
    buttonHover:
        "hover:bg-slate-300 hover:text-slate-700 hover:shadow-slate-300",
    borderLine: "border border-black",
    marginXT: "mx-2 mt-10",
};

export const layout = {
    mainSection: `font-baijamjuree text-center ${styles.boxWidth}`,
};
export default styles;
