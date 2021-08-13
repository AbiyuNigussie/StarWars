import React from 'react'; 
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <Link to="/Planets"><button>PLANETS</button></Link>
            <Link to="/People"><button>PEOPLE</button> </Link>
        </nav>
    );
}

export default Navbar;