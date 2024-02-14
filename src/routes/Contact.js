import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimage from "../assets/2.jpg";
import Footer from "../components/Footer";


function Contact () {
    return(
        <>
        <Navbar /> 
        <Hero 
        cName="hero-mid" 
        heroImg={aboutimage}
        title="Contact"
        btnClass="hide"
        />
        <Footer />
        </>
    )
}

export default Contact;