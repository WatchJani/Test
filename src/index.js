import React, { Component } from "react"
import ReactDOM from "react-dom"
import Navigation from "./components/navigatio"
import "./Css/index.css"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./components/home"
import About from "./components/about"



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navigation />
                <Route path="/" exact component={Home}></Route>
                <Route path="/About" exact  component={About}></Route>
            </BrowserRouter>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("app"))