import React, { Component } from "react";
import "./JobAplication.css"
import DescriptionBox from "./DescriptionBox";
export default class JobAplication extends Component {
  
  render() {
    return (
      <div className="JobBlock">
        <h1> {this.props.title}</h1>
        <div>
            <ul>

              <b>Company: </b>
              {this.props.company} <img width="10%" src={this.props.logo} />
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
          {/* {this.props.description} */}
        </div>
      </div>
    );
  }
}
