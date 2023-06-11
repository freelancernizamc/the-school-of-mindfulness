const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto md:w-4/12 my-8 ">
            <p className="text-[#9931E1] font-bold text-center mb-2">--- {subHeading} ---</p>
            <h3 className="uppercase text-center text-2xl md:text-3xl font-extrabold border-y-4 border-double py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;