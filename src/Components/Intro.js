import "../Style/intro.css"
import $ from 'jquery';

function Intro() {

    const handleMouseEnter1 = () => {
        $('#card1Title').css({
            height: `15vw`
        })
        $('#card1Title').find('p').css({
            opacity: `1`
        })
        $('.serviceButton').css({
            opacity: `1`
        })
    };

    const handleMouseLeave1 = () => {
        $('#card1Title').css({
            height: `2vw`
        })
        $('#card1Title').find('p').css({
            opacity: `0`
        })
        $('.serviceButton').css({
            opacity: `0`
        })
    };

    const handleMouseEnter2 = () => {
        $('#card2Title').css({
            height: `15vw`
        })
        $('#card2Title').find('p').css({
            opacity: `1`
        })
        $('.serviceButton').css({
            opacity: `1`
        })
    };

    const handleMouseLeave2 = () => {
        $('#card2Title').css({
            height: `2vw`
        })
        $('#card2Title').find('p').css({
            opacity: `0`
        })
        $('.serviceButton').css({
            opacity: `0`
        })
    };

    const handleMouseEnter3 = () => {
        $('#card3Title').css({
            height: `15vw`
        })
        $('#card3Title').find('p').css({
            opacity: `1`
        })
        $('.serviceButton').css({
            opacity: `1`
        })
    };

    const handleMouseLeave3 = () => {
        $('#card3Title').css({
            height: `2vw`
        })
        $('#card3Title').find('p').css({
            opacity: `0`
        })
        $('.serviceButton').css({
            opacity: `0`
        })
    };

    const handleMouseEnter4 = () => {
        $('#card4Title').css({
            height: `15vw`
        })
        $('#card4Title').find('p').css({
            opacity: `1`
        })
        $('.serviceButton').css({
            opacity: `1`
        })
    };

    const handleMouseLeave4 = () => {
        $('#card4Title').css({
            height: `2vw`
        })
        $('#card4Title').find('p').css({
            opacity: `0`
        })
        $('.serviceButton').css({
            opacity: `0`
        })
    };

    $('#callToAction').css({
        opacity: 1,
        display: `flex`
    })

    function handleMetalFabClick() {
        $('#intro').addClass("hidden");
        $('#metalFab').removeClass("hidden");
        const vwOffset = 8;
        const contactAreaOffset = $("#metalFab").offset().top - vwOffset * $(window).width() / 100;
        $('html, body').animate({ scrollTop: contactAreaOffset }, 900);
    }

    function handleDesignFabClick() {
        $('#intro').addClass("hidden");
        $('#design').removeClass("hidden");
        const vwOffset = 8;
        const contactAreaOffset = $("#design").offset().top - vwOffset * $(window).width() / 100;
        $('html, body').animate({ scrollTop: contactAreaOffset }, 900);
    }

    function handleCNCClick() {
        $('#intro').addClass("hidden");
        $('#CNC').removeClass("hidden");
        const vwOffset = 8;
        const contactAreaOffset = $("#CNC").offset().top - vwOffset * $(window).width() / 100;
        $('html, body').animate({ scrollTop: contactAreaOffset }, 900);
    }

    function handleProductionClick() {
        $('#intro').addClass("hidden");
        $('#production').removeClass("hidden");
        const vwOffset = 8;
        const contactAreaOffset = $("#production").offset().top - vwOffset * $(window).width() / 100;
        $('html, body').animate({ scrollTop: contactAreaOffset }, 900);
    }

    function handleBackClick() {
        $('#intro').removeClass("hidden");
        $('#metalFab').addClass("hidden");
        $('#design').addClass("hidden");
        $('#CNC').addClass("hidden");
        $('#production').addClass("hidden");
        const vwOffset = 8;
        const contactAreaOffset = $("#intro").offset().top - vwOffset * $(window).width() / 100;
        $('html, body').animate({ scrollTop: contactAreaOffset }, 900);
    }

    return (
        <div>
            <div id="intro">

                <div id="introText">
                    <h1>PRECISION FORMED SHEET METAL FABRICATIONS AND MACHINED COMPONENTS, UK AND WORLDWIDE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div id="services">
                    <div id="serviceCard1" className="serviceCard" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                        <div id="card1Title">
                            <h2>METAL FABRICATION</h2>
                            <p>Bunch of text</p>
                            <div className="serviceButton" onClick={handleMetalFabClick}>MORE</div>
                        </div>
                    </div>
                    <div id="serviceCard2" className="serviceCard" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                        <div id="card2Title">
                            <h2>DESIGN</h2>
                            <p>Bunch of text</p>
                            <div className="serviceButton" onClick={handleDesignFabClick}>MORE</div>
                        </div>
                    </div>
                    <div id="serviceCard3" className="serviceCard" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                        <div id="card3Title">
                            <h2>CNC</h2>
                            <p>Bunch of text</p>
                            <div className="serviceButton" onClick={handleCNCClick}>MORE</div>
                        </div>
                    </div>
                    <div id="serviceCard4" className="serviceCard" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                        <div id="card4Title">
                            <h2>PRODUCTION</h2>
                            <p>Bunch of text</p>
                            <div className="serviceButton" onClick={handleProductionClick}>MORE</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="metalFab" className="hidden">
                <div id="introText">
                    <h1>METAL FABRICATION</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <button className="backButton" onClick={handleBackClick}>BACK</button>
            </div>

            <div id="design" className="hidden">
                <div id="introText">
                    <h1>DESIGN</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <button className="backButton" onClick={handleBackClick}>BACK</button>
            </div>

            <div id="CNC" className="hidden">
                <div id="introText">
                    <h1>CNC</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <button className="backButton" onClick={handleBackClick}>BACK</button>
            </div>

            <div id="production" className="hidden">
                <div id="introText">
                    <h1>PRODUCTION</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <button className="backButton" onClick={handleBackClick}>BACK</button>
            </div>

        </div>
    );
}

export default Intro;