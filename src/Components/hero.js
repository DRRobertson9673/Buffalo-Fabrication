import "../Style/hero.css"
import video from '../Images/VideoSmallest.mp4';
import React, { useEffect } from 'react';
import $ from 'jquery';

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

            if ((((heroContentOffset * 10) / scrollTop) / heroContentOffset) < 0.1) {
                $('#callToAction').css({
                    display: `none`
                })
            }
        }
    }, []);

    function gotoContact() {
        const vwOffset = 8; // Adjust this value to change the offset in viewport width units (vw)
        const contactAreaOffset = $("#contactArea").offset().top - vwOffset * $(window).width() / 100;
        $('html, body').animate({ scrollTop: contactAreaOffset }, 900);
    }

    return (
        <div className="video-container">
            <div id="overlay">
                <div id="callToAction">FROM CONCEPT TO REALITY<div id="callToActionButton" onClick={gotoContact}>GET A QUOTE</div></div>
            </div>
            <video autoPlay muted loop playsInline poster="Images/BuffaloLogo.svg">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Hero;