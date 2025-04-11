import React from "react";
import NavLinks from "./NavLinks.jsx";
import {useState} from "react";
import '../../../styles.css'
import {MdOutlineMenu} from 'react-icons/md';
import {MdClose} from 'react-icons/md';

const MobileNav = () => {
    const [click, setclick] = useState(false);

    const Hamburger = <MdOutlineMenu className="hamburger" size="30px" color="#769EB8" onClick={() => setclick(!click)}/>

    const Close = <MdClose  className="hamburger" size="30px" color="#769EB8" onClick={() => setclick(!click)}/>
    
    return (
        <nav className="hamburger">
        {click ? Close : Hamburger}
        {click && <NavLinks/>}
        </nav>
    )
}

export default MobileNav;