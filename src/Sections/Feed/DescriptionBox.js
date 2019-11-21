import React, { Component } from "react";
import "./DescriptionBox.css"

export default class DescriptionBox extends Component{
    state={
        showMore : false
    }

    text = this.props.description.replace(/<\/?[^>]+(>|$)/g, "");



    showMoreButton =()=> {
        this.setState({showMore:true})
    }

    showLessButton =()=> {
        this.setState({showMore:false})
    }

    render(){
        if (this.state.showMore)  {
                return <div> {this.text}
<button onClick={()=> {this.showLessButton()}} >show less</button>

</div>
        } else {
            return <div>
                 <div className="textTeaser">{this.text.substring(0,400)}</div>
<button onClick={()=> {this.showMoreButton()}} >show more</button>
</div>
        }
    }
}