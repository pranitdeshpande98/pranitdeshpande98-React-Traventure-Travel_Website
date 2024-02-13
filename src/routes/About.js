import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimage from "../assets/night.jpg";

function About () {
    return(
        <>
        <Navbar /> 
        <Hero 
        cName="hero-mid" 
        heroImg={aboutimage}
        title="About"
        btnClass="hide"
        />
        </>
    )
}

export default About;