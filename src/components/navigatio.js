import React from "react"
import { Link } from "react-router-dom"
import Logo from "./logo"

const Navigation = () => {
    return (
        <div>
            <div className="navi">
                <Logo />
                <div>
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                </div>
            </div>
        </div>
    )
}


export default Navigation