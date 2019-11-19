import React, { Component } from "react";

export default class DescriptionBox extends Component{
    state={
        showMore : false
    }

    text = "somestring asdfasdfa sdfasdasdfdasfasfasdfas fwasdfdfdusafydsfo aiusdyfcheioausdy fudausoiyfiuysd  dsauf dsf ais dyaiusdfidysafhiawehwaefjaadsfkjasdl;k" //get this from outside somehow? 

    showMoreButton =()=> {
        this.setState({showMore:true})
    }

    render(){
        if (this.state.showMore)  {
                return <div><p>{this.text}</p></div>
        } else {
            return <div>
<p>{this.text.substring(0,12)}</p>
<button onClick={()=> {this.showMoreButton()}} >showMore</button>
</div>
        }
    }
}