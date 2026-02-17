//react component for formatting the sections in the main content area
function SectionContainer({ id, heading="sectionName", extra="", children }) {
    return (
        <section id={id} className={`${extra}  bg-gradient-to-br from-[#1d1d1d] to-[#2e2e2e] px-10 pb-50 pt-10 m-5 rounded-lg shadow-lg`}>
            <h1 className="text-xl font-bold text-white pb-10 mb-6 justify-self-center">{heading}</h1>
            {children}
        </section>
    );
}

export default SectionContainer;