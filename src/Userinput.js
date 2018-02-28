import React,{Component} from 'react'
class Userinput extends React.Component {
    constructor(){
        super()
       this.state ={
           username:"Navjot singh "
       } 
    }
    handlechange=(e)=>{
        this.setstate({})
    }

render(){
    return(
        <div>
            {<input type="text" placeholder="username" /*onChange={this.handlechange(e)}*//>}
             <div>
               {this.state.username}

             </div>
        </div>
    );
}
}

export default Userinput;