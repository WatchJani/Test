import React, { Component } from "react"



class Test extends Component{
    state={
        ime : "janko"
    }

    promijeni = () =>{
        this.setState ({
            ime : "pero"
        })
    }


    render(){
        return(
            <>
            <h1>{this.state.ime}</h1>
            <button onClick={this.promijeni}>klikni me</button>
            </>
        )
    }
}


export default Test