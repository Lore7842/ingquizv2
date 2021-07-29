import {React, useState} from 'react'

import "C:\\Users\\lollo\\quiz\\src\\Components\\Header\\Header.css";

function Header(props){
    
    return (
        <div className="headerContainer">
            <div className="navBarContainer">
                <span id='navItem'>Home</span>
                <span id='navItem'>Materie</span>
                <span id='navItem'>Chi siamo</span>
                <span id='navItem'>Collabora</span>
                
            </div>
        </div>
    )
}

export {Header}