//react component for formatting the sections in the main content area
function SectionContainer({ id, heading="sectionName", extra="", children }) {
    return (
        <section id={id} className={`${extra} bg-[#1d1d1d] px-10 pb-50 pt-10 m-5`}>
            <h1 className="text-xl font-bold text-white pb-10 mb-6 justify-self-center">{heading}</h1>
            {children}
        </section>
    );
}

export default SectionContainer;