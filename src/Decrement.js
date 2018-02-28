import React, { Component } from 'react'
class Decrement extends React.Component {
    constructor(){
     super()
     this.state={
         num:500
     }
    }

    Decrement =() => {
        let nmbr=this.state.num
        this.setState({num:nmbr-1})
    }

    render(){
        return(
    <div>
        <button onClick={this.Decrement}>Click Me</button>
        <div>
           { this.state.num }
        </div>
    </div>        
        )
    }
} 

export default Decrement;