import { useState, useEffect } from  "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink} from 'react-router-dom';
import { scroller} from "react-scroll";
import { useLocation } from 'react-router-dom';

import "../../cssFiles/modern-normalize.css"
import "../../cssFiles/style.css"
import "../../cssFiles/navbar.css"
import "../../cssFiles/utils.css"


function Navbar() {
    console.log("Navbar component mounted");

   // const [navbarColor, setNavbarColor] = useState("transparent");
  //  const [navbarItemsColor, setNavbarItemsColor] = useState("#f5fcfa");
    const [scrollActive, setScrollActive] = useState(false);
    const [isHomePage, setIsHomePage] = useState(false);
    const [navActive, setNavActive] = useState(false);

    const location = useLocation();
    console.log('location');
    console.log(location);

    const isProjectPage = location.pathname.startsWith('/project');

    useEffect(() => {
        if (location.pathname === '/') {
            setIsHomePage(true);
            const sectionName = location.hash.substring(1);
            console.log(sectionName);
            scroller.scrollTo(sectionName, {
                duration: 0,
                offset: -70
            });
        } 
        else {
            setIsHomePage(false);
        }
    }, [location]);

    console.log("nav active is set to:")
    console.log(navActive)
   

    const toggleNav = () => {
        setNavActive(!navActive)
        console.log('nava ')
        console.log(!navActive);
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

    useEffect(() => {

        const handlePageLoad = () => {
            if (isProjectPage) {
              setScrollActive(true); // Set scrollActive to true immediately for project page
            } else if (isHomePage) {
              setScrollActive(false); // Reset scrollActive for home page
            }
          };

        handlePageLoad();
        
        const handleScroll = () => {

            const skillsSection = document.getElementById('skillsSection');
                if (skillsSection != null) {
                    const sectionPosition = skillsSection.offsetTop-70;
                    if (window.scrollY >= sectionPosition) {
                        setScrollActive(true); //change to true when past the section
                    }
                    else {
                        setScrollActive(false); //reset when above the section
                    }
                }
                else {
                    setScrollActive(true);
                }
        
        };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, [location.pathname]);


    return (
        <nav className={`navbar ${navActive ? "active" : ""} ${scrollActive ? "scrolled" : ""}`}>
            <div>
                {isHomePage ? (
                            <ScrollLink
                            //activeClass="navbar-active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="heroSection"
                            activeClass = " "
                            className={`navbar-content-logo ${navActive ? "active" : ""} ${scrollActive ? "scrolled" : ""}`}>
                            Rida Siddiqui
                        </ScrollLink>
                        ) : (
                            <RouterLink
                                to="/#heroSection"
                                className={`navbar-content-logo ${navActive ? "active" : ""} ${scrollActive ? "scrolled" : ""}`}>
                                    Rida Siddiqui
                                </RouterLink>
                        )}
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""} ${scrollActive ? "scrolled" : ""}`} onClick = {toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar-items ${navActive ? "active" : ""} ${scrollActive ? "scrolled" : ""}`}>
                <ul>
                    <li> 
                        {isHomePage ? (
                            <ScrollLink
                            onClick={closeMenu}
                            //activeClass="navbar-active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="heroSection"
                            activeClass = " "
                            className={`navbar-content ${navActive ? "active" : ""} ${scrollActive ? "scrolled" : ""}`}>
                            Home
                        </ScrollLink>
                        ) : (
                            <RouterLink
                                to="/#heroSection"
                                className={`navbar-content ${navActive ? "active" : ""} ${scrollActive ? "scrolled" : ""}`}
                                onClick={closeMenu}>
                                    Home
                                </RouterLink>
                        )}
                    </li>
                    <li> 
                        {isHomePage ? (
                            <ScrollLink
                            onClick={closeMenu}
                            //activeClass="navbar-active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="projectsSection"
                            activeClass = " "
                            className={`navbar-content ${navActive ? "active" : ""} ${scrollActive ? "scrolled" : ""}`}>
                            Projects
                        </ScrollLink>
                        ) : (
                            <RouterLink
                                to="/#projectsSection"
                                className={`navbar-content ${navActive ? "active" : ""} ${scrollActive ? "scrolled" : ""}`}
                                onClick={closeMenu}>
                                    Projects
                                </RouterLink>
                        )}
                    </li>
                    <li>
                        {isHomePage ? (
                            <ScrollLink
                            onClick={closeMenu}
                            //activeClass="navbar-active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="contactSection"
                            activeClass = " "
                            className={`navbar-content ${navActive ? "active" : ""} ${scrollActive ? "scrolled" : ""}`}>
                            Contact
                            </ScrollLink>
                        ) : (
                            <RouterLink
                            to="/#contactSection"
                            className={`navbar-content ${navActive ? "active" : ""} ${scrollActive ? "scrolled" : ""}`}
                            onClick={closeMenu}>
                            Contact
                            </RouterLink>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
        
        
    );
}

export default Navbar;