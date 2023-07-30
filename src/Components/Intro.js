import "../Style/intro.css"
import $ from 'jquery';

function Intro() {

    const handleMouseEnter1 = () => {
        $('#card1Title').css({
            height: `30vw`
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
            height: `30vw`
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
            height: `30vw`
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
            height: `30vw`
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

    return (
        <div>
            <div id="intro">
                <div id="introText">
                    <h1>WELCOME TO BUFFALO FABRICATION LTD.</h1>
                    <p>We're a Hampshire based design and fabrication company with a broad range of production capabilities. Please have a look at our site or drop us a line if you have any questions.</p>
                </div>
                <div id="services">
                    <div id="serviceCard1" className="serviceCard" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                        <div id="card1Title">
                            <h2>METAL FABRICATION</h2>
                            <p>End to end fabrication.</p>
                            <p>Our capabilities include: MIG, TIG and ARC welding with steel, stainless steel and aluminium. Milling, drilling, tapping and reaming. Bending and folding.</p>
                        </div>
                    </div>
                    <div id="serviceCard2" className="serviceCard" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                        <div id="card2Title">
                            <h2>DESIGN</h2>
                            <p>From concept, to CAD drawings, structural calculations and rendered images and animations.</p>
                        </div>
                    </div>
                    <div id="serviceCard3" className="serviceCard" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                        <div id="card3Title">
                            <h2>CNC</h2>
                            <p>CNC routing, plasma and laser cutting and turning. DXF and cut-file creation all produced in house. Our routing service works with a range of materials including aluminium, acrylic, polycarbonate, plywood, MDF, MFC, fibreglass and resin.</p>
                        </div>
                    </div>
                    <div id="serviceCard4" className="serviceCard" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                        <div id="card4Title">
                            <h2>PRODUCTION</h2>
                            <p> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;