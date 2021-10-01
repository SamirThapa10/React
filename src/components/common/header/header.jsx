import React from "react";
import Logo from '../../../assets/icons/LOGO.png';
import search from '../../../assets/icons/search.svg'
import { Navbar } from "../../common";
import { Navbar1 } from "../../common";
import './header.css';
import Box from '@material-ui/core/Box';

function Header(){
    return(
    <section className="header">
        <section className="header-top">
            <section className="header-top_logo">
                <a href="/" className="header-logo">
                    <img src={Logo} alt="Logo" />
                </a>
            </section>
            <section className="header-top_navbar">
                <section className="header-top_navigation">
                    <Navbar />
                </section>
            </section>    
        </section>

        <section className="header-bottom">
            <section className="header-bottom_box">
                <Box color="white" bgcolor="#1D1F20" p={1}>
                    <section className="header-bottom_box_text">
                        Search Properties For Sale
                        </section>    
                    <section className="header-bottom_button">
                        <button>Buy</button>
                        <button>Rent</button>
                        <button>Sold</button>
                        <button>Property Value</button>
                        <button>Find Agents</button>
                    </section>
                    <section className="header-bottom_search">
                        <form action="/" method="get">    
                            <input   
                                type="text"
                                id="header-search"
                                placeholder="Search by state, suburb or postcode"
                                name="search" 
                                autoComplete="Off"
                            />
                            <button type="submit">Search</button>
                        </form>
                    </section>
                    <section>
                        <Navbar1 />
                    </section>
                </Box>
            </section>
            <section className="header-bottom_learn">
                <Box color="white" bgcolor="#1D1F20" p={1}>
                    <section className="header-bottom_title">
                        Home Loans
                    </section>    
                    <section className="header-bottom_text">
                        Finally, there’s one<br/>
                        place to look for your<br/>
                        home and your loan.
                    </section>
                    <section className="header-bottom_learnmore">
                        <button>Learn More</button>
                    </section>
                </Box>
            </section>

        </section>
    </section>
    )
}

export default Header;