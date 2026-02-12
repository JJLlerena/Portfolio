// Component for navigation links in the sidebar
function SecNav({ href, text }) {
    return (
        <div className="
            flex cursor-pointer 
            place-content-center 
            text-2xl font-bold
            p-2 border-y-3 border-[#2d2d2d]
            " 
            onClick={() => window.location.href = href}>
            <span>{text}</span>
        </div>
    );
}

export default SecNav;