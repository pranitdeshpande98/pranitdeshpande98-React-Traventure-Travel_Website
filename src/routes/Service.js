import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimage from "../assets/10.jpg";

function Service () {
    return(
        <>
        <Navbar /> 
        <Hero 
        cName="hero-mid" 
        heroImg={aboutimage}
        title="Service"
        btnClass="hide"
        />
        </>
    )
}

export default Service;