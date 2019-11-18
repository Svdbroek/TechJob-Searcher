import React, { Component } from "react";

export default class JobAplication extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.title}</h1>
        <div>
          <li>
        
            <ul> <b>Company: </b>{this.props.company} <img width='10%' src={this.props.logo}/> </ul>
            <ul><b>Location:</b> {this.props.location}</ul>
          </li>
        </div>
        <div><h4> <b>description</b></h4>{this.props.description}</div>
              </div>
    );
  }
}

