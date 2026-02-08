//react component for formatting the sections in the main content area
function SectionContainer({ title, children }) {
    return (
        <div className="section-container">
            <h2>{title}</h2>
            {children}
        </div>
    );
}

export default SectionContainer;