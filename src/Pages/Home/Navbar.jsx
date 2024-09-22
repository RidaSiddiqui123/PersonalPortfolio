import { useState, useEffect } from  "react";
import { Link } from "react-scroll";

function Navbar() {
    console.log("Navbar component mounted");

    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1000) {
                closeMenu;
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu;
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <div className="navbar-content-logo">Rida Siddiqui</div>
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick = {toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar-items ${navActive ? "active" : ""}`}>
                <ul>
                    <li> 
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar-active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="heroSection"
                            className="navbar-content">
                            Home
                        </Link>
                    </li>
                    <li> 
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar-active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="projectSection"
                            className="navbar-content">
                            My Projects
                        </Link>
                    </li>
                    <li> 
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar-active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="contactSection"
                            className="navbar-content">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        
        
    );
}

export default Navbar;