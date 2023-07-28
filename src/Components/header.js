import "../Style/header.css"
import $ from 'jquery';

window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 0) {
        // scroll down
        $('nav').addClass('navMoved');
    } else {
        // scroll up
        $('nav').removeClass('navMoved');
    }
}, false);

function header() {

    function gotoAbout() {
        const vwOffset = 8; // Adjust this value to change the offset in viewport width units (vw)
        const contactAreaOffset = $("#intro").offset().top - vwOffset * $(window).width() / 100;
        $('html, body').animate({ scrollTop: contactAreaOffset }, 900);
    }

    function gotoServices() {
        const vwOffset = 8; // Adjust this value to change the offset in viewport width units (vw)
        const contactAreaOffset = $("#services").offset().top - vwOffset * $(window).width() / 100;
        $('html, body').animate({ scrollTop: contactAreaOffset }, 900);
    }


    function gotoContact() {
        const vwOffset = 8; // Adjust this value to change the offset in viewport width units (vw)
        const contactAreaOffset = $("#contactArea").offset().top - vwOffset * $(window).width() / 100;
        $('html, body').animate({ scrollTop: contactAreaOffset }, 900);
    }



    return (
        <nav>
            <div id="headerLogo"></div>
            <div>
                <ul id="navLinks">
                    <p className="nav-link" onClick={gotoAbout}>ABOUT</p>
                    <p className="nav-link" onClick={gotoServices}>SERVICES</p>
                    <p className="nav-link">GALLERY</p>
                    <p className="nav-link" onClick={gotoContact}>CONTACT</p>
                </ul>
            </div>
        </nav>
    );
}

export default header;