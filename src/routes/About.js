import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimage from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

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
        <AboutUs />
        <Footer />
        </>
    )
}

export default About;