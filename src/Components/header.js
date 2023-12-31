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

    function handleItemClick() {
        window.open('https://www.instagram.com/buffalo_fabrication/', '_blank');
    };

    function gotoServices() {
        const vwOffset = 8; // Adjust this value to change the offset in viewport width units (vw)
        const contactAreaOffset = $("#intro").offset().top - vwOffset * $(window).width() / 100;
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
                    <li className="nav-link" onClick={gotoServices}>SERVICES</li>
                    <li className="nav-link" onClick={handleItemClick}>GALLERY</li>
                    <li className="nav-link" onClick={gotoContact}>CONTACT</li>
                </ul>
            </div>
        </nav>
    );
}

export default header;