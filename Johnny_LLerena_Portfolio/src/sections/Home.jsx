// Landing page of the portfolio, contains the hero section and a brief introduction
import SectionContainer from "../components/SectionContainer";
import Profileimg from '../assets/Profile_Placeholder.jpeg';

function Home() {
    return(
        <SectionContainer 
            id="home" 
            bgClass="bg-[#1d1d1d]" 
            extra="min-h-[95vh]" 
            heading="Hey, I'm Johnny!"
        >
            <img 
                src={Profileimg} 
                alt="Profile Picture" 
                className="w-32 h-32 rounded-full mx-auto" 
            />
        </SectionContainer>
    );
}    
export default Home