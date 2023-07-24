import "../Style/hero.css"
import video from '../Images/VideoLarger.mp4';

function Hero() {
    return (
        <div className="video-container">
            <div id="overlay"></div>
            <video autoPlay muted loop playsInline poster="Images/BuffaloLogo.svg">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div id="callToAction">FROM CONCEPT TO FINISHED PRODUCT<div id="callToActionButton">Get a quote</div></div>
        </div>
    );
}

export default Hero;