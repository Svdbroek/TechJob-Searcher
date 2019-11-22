import React, { Component } from "react";
import "./JobAplication.css"
import DescriptionBox from "./DescriptionBox";
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom"


export default class JobAplication extends Component {


  render() {

  
    return (
      
      <div className="JobBlock" onClick={this.goToInfo} >
        <h1> {this.props.title}</h1>
        <div>
            <ul>

              <b>Company: </b>
              {this.props.company} <img width="30%" src={this.props.logo} />
            </ul>
            <ul>
              <b>Location:</b> {this.props.location}
            </ul>
        
        </div>
        <div>
          <h4>
            {" "}
            <b>description</b>
          </h4>
          <DescriptionBox description = {this.props.description} />
          <Link to={`/jobs/aplications/?locationSearch=${this.props.locationSearch}&jobSearch=${this.props.jobSearch}&id=${this.props.id}`} > Show Complete Add</Link>
          {/* {this.props.description} */}
        </div>
      </div>
    );
  }
}
