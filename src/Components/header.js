import "../Style/header.css"
import $ from 'jquery';

let scrollTop = 0;
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
    return (
        <nav>
            <div id="headerLogo"></div>
            <div>
                <ul id="navLinks">
                    <p className="nav-link">ABOUT</p>
                    <p className="nav-link">GALLERY</p>
                    <p className="nav-link">CONTACT</p>
                    <p className="nav-link">QUOTE</p>
                </ul>
            </div>
        </nav>
    );
}

export default header;