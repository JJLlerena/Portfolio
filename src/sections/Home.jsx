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
                className="w-60 h-60 rounded-full my-20 mx-auto" 
            />
            <p className="">
                CS grad from FIU currently working as a repair tech 
                in the Keys while transitioning back into software development. 
                I picked up my Security+ cert recently and I'm building out this 
                portfolio to showcase what I can do with React and JavaScript.
            </p>
        </SectionContainer>
    );
}    
export default Home