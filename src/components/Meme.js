import React from "react";
import memesData from "../memesData";

export default function Meme(){

    let url

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

    return(
        <main>
            <form className="form">
                <p>{url}</p>
                <input 
                    type="text" 
                    placeholder="Top text"
                    className="form--input"

                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image🖼️
                </button>
            </form>
        </main>
    )
}