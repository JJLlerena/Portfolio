//react component for formatting the sections in the main content area
function SectionContainer({ id, heading="sectionName", background="bg-yellow-500", children }) {
    return (
        <section id={id} className={`${background} p-10 m-5`}>
            <h1 className="text-3xl font-bold text-white pb-6 justify-self-center">{heading}</h1>
            {children}
        </section>
    );
}

export default SectionContainer;