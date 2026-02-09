//react component for formatting the sections in the main content area
function SectionContainer({ id, background="bg-yellow-500", children }) {
    return (
        <section id={id} className={`${background} p-10 m-5`}>
            {children}
        </section>
    );
}

export default SectionContainer;