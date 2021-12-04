import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";



function Navbar(props){

    let nav = props.currentUser ?
    <div className="nav">
        <div className='title'>Take Care</div>
       
        <ul>
            <li><NavLink to='/' activeClassName="active">Home</NavLink></li>
            <li><NavLink to='/JournalEntry' activeClassName="active">Journal</NavLink></li>
            <li><NavLink to='/getQuotes' activeClassName="active">Affirmations</NavLink></li>
            <li><NavLink to='/' activeClassName="active" onClick={props.handleLogout}>Logout</NavLink></li>
        </ul>
    </div> 
    :
    <div className="nav">
        <div>navbar</div>
        <ul>
            <li><NavLink to='/' activeClassName="active">Home</NavLink></li>
            <li><NavLink to='/login' activeClassName="active">Login</NavLink></li>
            <li><NavLink to='/signup' activeClassName="active">Signup</NavLink></li>
        </ul>
    </div> 

    return nav
}

export default Navbar

