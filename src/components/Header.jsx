import React from "react"
import { useState } from 'react'
import img from "../assets/troll-face.png"
import '../../style.css'



export default function Header() {
    return (
        <header className="header">
            <img 
                src= {img} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}