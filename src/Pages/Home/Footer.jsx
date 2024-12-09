
import { Link } from "react-scroll";
import React from "react";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailSharpIcon from '@mui/icons-material/MailSharp';

import "../../cssFiles/modern-normalize.css"
import "../../cssFiles/style.css"
import "../../cssFiles/footer.css"
import "../../cssFiles/utils.css"

function Footer() {
    return (

    
    <footer className="container-footer footer--container">
      <div className="footer--link--container">
        <div className="footer--social--icon">
            <ul>
                <li>
                    <a href="https://github.com/RidaSiddiqui123" className="icon-link" target='_blank'>
                        <GitHubIcon
                            
                            sx={{ fontSize: 33,
                                color: '#f5fcfa', 
                                '&:hover': {
                                    color: 'gray'
                                }

                                }}
                            />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rida-siddiqui-cs/" className="icon-link" target='_blank'>
                        <LinkedInIcon 
                            sx={{ fontSize: 35,
                                color: '#f5fcfa', 
                                '&:hover': {
                                    color: 'gray'
                                }
                            }}
                            />
                    </a>
                </li>
                <li>
                    <a href="mailto:ridasiddiquicpp@gmail.com" className="icon-link" target='_blank'>
                        <MailSharpIcon
                            sx={{ fontSize: 35,
                                color: '#f5fcfa', 
                                '&:hover': {
                                    color: 'gray'
                                }
                                }}
                            />
                    </a>
                </li>
            </ul>
        </div>
        <div className="footer--items">
          
            <p>Developed by Rida Siddiqui</p>
            
        </div> 
      </div>
     
    </footer>
    );
}

export default Footer;