import React from "react";
import './navbar.css';
import { Button } from "react"

function Navbar(){
    return(
        <section className="navbar">
            <ul className="nav-menu">
                <li className="nav-item dropdown">
                    <a href="" class="dropbtn">Buy</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="" class="dropbtn">Rent</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="" class="dropbtn">Sold</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="" class="dropbtn">Share</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="" class="dropbtn">New Homes</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="" class="dropbtn">Find Agents</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="" class="dropbtn">Lifestyle</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="" class="dropbtn">News</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="" class="dropbtn">Commerical</a>
                </li>
                <li className="nav-item_signup">
                    <a href="" target="_blank" className="nav-item_signup">Signup</a>
                </li>
                <li className="nav-item_login">
                    <button>Login</button>
                </li>   
            </ul>
            
        </section>
    )
}


export default Navbar;