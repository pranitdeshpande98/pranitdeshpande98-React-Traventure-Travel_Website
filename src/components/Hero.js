import image from '../assets/12.jpg'
import "./HeroStyles.css";
function Hero () {
    return (<>
        <div className="hero">
        <img alt="HeroImg" src={ image } />

        <div className="hero-text">
            <h1> Your Journey Starts Here</h1>
            <p> Choose Your Favourite Destination.</p>
            <a href="/"> Travel Plan </a>
        </div>
        </div>
        </>);
}

export default Hero;