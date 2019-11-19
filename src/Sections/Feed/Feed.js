import React, { Component } from "react";
import './Feed.css'
import JobAplication from "./JobAplication";

export default class Feed extends Component {
  // data = [{name: "jopb 1"},
  //               {name: "job2"}]


 
    render() {
      const {data} = this.props;
      console.log({data})

    return (
    <div>

        {data.map(jobAdv => <JobAplication title={jobAdv.title} company={jobAdv.company} location={jobAdv.location} description={jobAdv.description} logo={jobAdv.company_logo}/>)}
        
    </div>)
}
}
