import React from "react";
import './navbar1.css';
import { Button } from "react"
import Arrow from "../../../assets/icons/down-arrow.svg"

function Navbar1(){
    return(
        <section className="navbar">
            <ul className="nav-menu">
                <li className="nav-item dropdown">
                    <a href="" class="dropbtn">All property types</a>
                    <img src={Arrow} alt="Arrow" />
                </li>
                <li className="nav-item dropdown">
                    <a href="" class="dropbtn">Beds(min)</a>
                    <img src={Arrow} alt="Arrow" />
                </li>
                <li className="nav-item dropdown">
                    <a href="" class="dropbtn">Beds(max)</a>
                    <img src={Arrow} alt="Arrow" />
                </li>
                <li className="nav-item dropdown">
                    <a href="" class="dropbtn">Price(min)</a>
                    <img src={Arrow} alt="Arrow" />
                </li>
                <li className="nav-item dropdown">
                    <a href="" class="dropbtn">Price(max)</a>
                    <img src={Arrow} alt="Arrow" />
                </li>   
            </ul>
            
        </section>
    )
}


export default Navbar1;