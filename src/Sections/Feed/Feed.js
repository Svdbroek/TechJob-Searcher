import React, { Component } from "react";
import JobAplication from "./JobAplication"

export default class Feed extends Component {
  data = [{name: "jopb 1"},
                {name: "job2"}]
  
    render() {
    return <div>
        {this.data.map(jobAdv => <JobAplication name={jobAdv.name}/>) }
}        
    </div>
}}