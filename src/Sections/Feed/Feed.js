import React, { Component } from "react";
import "./Feed.css";
import JobAplication from "./JobAplication";

export default class Feed extends Component {
  // data = [{name: "jopb 1"},
  //               {name: "job2"}]

  render() {
    const data = this.props.data; 
    return (
      <div className="feed">
        {data.map((jobAdv, index) => (
          <JobAplication
            title={jobAdv.title}
            company={jobAdv.company}
            location={jobAdv.location}
            description={jobAdv.description}
            logo={jobAdv.company_logo}
            key={index}
            id = {index}
            jobSearch = {this.props.jobTitle}
            locationSearch = {this.props.location}
          />
        ))}
      </div>
    );
  }
}
