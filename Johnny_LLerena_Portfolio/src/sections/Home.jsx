// Landing page of the portfolio, contains the hero section and a brief introduction
import SectionContainer from "../components/SectionContainer";
import Profileimg from '../assets/ProfilePic.png';

function Home() {
    return(
        <SectionContainer 
            id="home" 
            bgClass="bg-[#1d1d1d]" 
            extra="min-h-[95vh] scroll-mt-5" 
            heading="Hey, I'm Johnny!"
        >
            <img 
                src={Profileimg} 
                alt="Profile Picture" 
                className="w-60 h-60 rounded-full mx-auto" 
            />
        </SectionContainer>
    );
}    
export default Home