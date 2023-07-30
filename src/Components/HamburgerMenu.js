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
    return (
        <div id="HamburgerHeader">
            <div id="HamburgerHeaderLogo"></div>
            <div className="HamburgerIcon HBOpen"></div>
            <div className="HamburgerIcon HClose hidden"></div>
            <div id="HamburgerMenu">
                <div className="HamburgerItem">SERVICES</div>
                <div className="HamburgerItem">GALLERY</div>
                <div className="HamburgerItem">CONTACT</div>
            </div>
        </div>
    );
}

export default HamburgerMenu;