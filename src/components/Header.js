import React from "react"
import '../images/troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <img 
                src="../images/troll-face.png" 
                className="header--image"
            />
            <h1 className="header--title">Meme Generator</h1>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}