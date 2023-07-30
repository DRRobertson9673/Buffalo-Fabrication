import "../Style/HamburgerMenu.css"
import $ from 'jquery';

window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 0) {
        // scroll down
        $('#HamburgerHeaderLogo').addClass('opacityNone');
    } else {
        // scroll up
        $('#HamburgerHeaderLogo').removeClass('opacityNone');
    }
}, false);

function HamburgerMenu() {

    function handleHBOpenClick() {
        $('.HBOpen').addClass('hidden');
        $('.HBClose').removeClass('hidden');
        $('.HamburgerMenu').removeClass('menuNoHeight');
        $('.HamburgerMenu').addClass('menuFullHeight');
    }

    function handleHBCloseClick() {
        $('.HBOpen').removeClass('hidden');
        $('.HBClose').addClass('hidden');
        $('.HamburgerMenu').addClass('menuNoHeight');
        $('.HamburgerMenu').removeClass('menuFullHeight');
    }

    function gotoServices() {
        const vwOffset = 0; // Adjust this value to change the offset in viewport width units (vw)
        const contactAreaOffset = $("#intro").offset().top - vwOffset * $(window).width() / 100;
        $('html, body').animate({ scrollTop: contactAreaOffset }, 900);
        $('.HBOpen').removeClass('hidden');
        $('.HBClose').addClass('hidden');
        $('.HamburgerMenu').addClass('menuNoHeight');
        $('.HamburgerMenu').removeClass('menuFullHeight');
    }

    function gotoContact() {
        const vwOffset = 0; // Adjust this value to change the offset in viewport width units (vw)
        const contactAreaOffset = $("#contactArea").offset().top - vwOffset * $(window).width() / 100;
        $('html, body').animate({ scrollTop: contactAreaOffset }, 900);
        $('.HBOpen').removeClass('hidden');
        $('.HBClose').addClass('hidden');
        $('.HamburgerMenu').addClass('menuNoHeight');
        $('.HamburgerMenu').removeClass('menuFullHeight');
    }

    function handleItemClick() {
        window.open('https://www.instagram.com/buffalo_fabrication/', '_blank');
    };

    return (
        <div>
            <div id="HamburgerHeader">
                <div id="HamburgerHeaderLogo"></div>
                <div className="HamburgerIcon HBOpen" onClick={handleHBOpenClick}></div>
            </div>
            <div className="HamburgerMenu menuNoHeight">
                <div className="HamburgerIcon HBClose hidden" onClick={handleHBCloseClick}></div>
                <div className="HamburgerItem" onClick={gotoServices}>SERVICES</div>
                <div className="HamburgerItem" onClick={handleItemClick}>GALLERY</div>
                <div className="HamburgerItem" onClick={gotoContact}>CONTACT</div>
            </div>
        </div>
    );
}

export default HamburgerMenu;