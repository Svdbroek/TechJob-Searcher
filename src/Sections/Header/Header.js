import React, { Component } from "react";

export default class Header extends Component {

  constructor() {
    super();
    this.state = {
      jobTitle: "",
      region: ""
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

  render() {
    const {jobTitle, region} = this.state;

    return (
      <div className="formSection">
        <label>Search for a job:</label>
        <input placeholder={"Job title"} onChange={this.handleJobTitleChange} value={jobTitle}/>
        <input placeholder={"Region, city"} onChange={this.handleRegionChange} value={region}/>
        <button type="button" onClick={() => this.props.handleSearch(jobTitle, region)}>
          Search
        </button>
      </div>
    );
  }
}