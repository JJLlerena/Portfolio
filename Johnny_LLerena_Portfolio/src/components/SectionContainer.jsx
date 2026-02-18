//react component for formatting the sections in the main content area
function SectionContainer({ 
    id, 
    heading="sectionName",
    bgClass="bg-gradient-to-br from-[#1d1d1d] to-[#2e2e2e]", 
    extra="", 
    children 
}) {
    return (
        <section 
            id={id} 
            className={`
                ${bgClass}
                ${extra}  
                px-10 pb-50 pt-10 m-5 
                rounded-lg shadow-lg
            `}
        >
            <p className="text-3xl font-bold text-white pb-10 mb-6 text-center"> 
                {heading}
            </p>
            {children}
        </section>
    ); 
}  

export default SectionContainer;