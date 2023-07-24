import "../Style/hero.css"
import video from '../Images/VideoLarger.mp4';
import React, { useEffect } from 'react';

function Hero() {

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        function onScroll() {
            const scrollTop = $(window).scrollTop();
            const heroContentOffset = document.getElementById('callToAction').offsetTop;
            $('#callToAction').css({
                opacity: ((heroContentOffset * 10) / scrollTop) / heroContentOffset
            })
            if (scrollTop < 1) {
                $('#callToAction').css({
                    opacity: 1,
                    display: `flex`
                })
            }

            if (   (((heroContentOffset * 10) / scrollTop) / heroContentOffset) < 0.1   ) {
                $('#callToAction').css({
                    display: `none`
                })
            }
        }
    }, []);

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