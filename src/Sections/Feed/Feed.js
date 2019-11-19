import React, { Component } from "react";
import JobAplication from "./JobAplication";

export default class Feed extends Component {
  // data = [{name: "jopb 1"},
  //               {name: "job2"}]


 
    render() {
      const {data} = this.props;
    return (
      
    <div>

        {data.map(jobAdv => <JobAplication name={jobAdv.name}/>)}
        
    </div>)
}
}