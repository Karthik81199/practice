import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="bg-blue-500 shadow m-4">
            <div className="w-full p-4 md:flex md:items-center md:justify-between mx-auto">
                <span className="font-bold">
                    Designed by Karthik G Kamath
                </span>
                <span className="font-bold">
                    Copyright © {year} 
                </span>
            <ul className="flex flex-wrap items-center space-x-4">
                <li className="social-icons">
                    <a href="">
                        <FaLinkedinIn />
                    </a>
                </li>
                <li className="social-icons">
                    <a href="">
                        <FaGithub />
                    </a>
                </li>
            </ul>
            </div>
        </footer>
    )
}

export default Footer;