import React, { Component } from "react";
import "./Header.css"
export default class Header extends Component {

  constructor() {
    super();
    this.state = {
      jobTitle: "",
      region: "",
      ranOnce: false,
    };
  }

  handleJobTitleChange = event => {
    this.setState({
      jobTitle: event.target.value
    });
  };

  handleRegionChange = event => {
    this.setState({
      region: event.target.value
    });
  };

  toggleClass = ()=>{
    if (this.state.ranOnce){}else{
    this.setState({ranOnce: true})}
  }

 wrapperFunction = () =>{
this.toggleClass()
this.props.handleSearch (this.state.jobTitle, this.state.region)
 }

  render() {
    return (
      <div className={this.state.ranOnce ? "formSection "   : "startPage"} 
       >
        <label>Search for a job:</label>
        <input placeholder={"Job title"} onChange={this.handleJobTitleChange} value={this.state.jobTitle}/>
        <input placeholder={"Region, city"} onChange={this.handleRegionChange} value={this.state.region}/>
        <button type="button" onClick={this.wrapperFunction}>
          Search
        </button>
      </div>
    );
  }
}