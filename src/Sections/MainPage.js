import React, {Component} from "react";
import "./MainPage.css";
import Header from "./Header/Header";
import Feed from "./Feed/Feed";
import Sidebar from "./Sidebar/Sidebar";
import { parse, isWithinInterval } from "date-fns";

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      originalData: [],
      data: [],
      loading: false,
      jobTitle : "",
      location: "",
    };
  }

  Fetcher = (jobTitle, location) => {
    this.setState({ loading: true, ranOnce: true });
    fetch(
      // "https://raw.githubusercontent.com/Svdbroek/TechJob-Searcher/master/src/jobs.json"
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${jobTitle}&location=${location}`
    )
      .then(response => response.json())
      .then(myJson => {
        this.setState({ data: myJson, originalData: myJson, loading: false,  jobTitle:jobTitle, location:location});
      });
  };

  filterByDate = date => {
    const  originalData  = this.state.originalData; // instead of const {originalData = this.state} // not sure why it works now, though
    const result1 = originalData.filter(job => {
      const parsedCreatedAt = parse(
        job.created_at,
        "EEE MMM dd HH:mm:ss 'UTC' yyyy",
        new Date()
      );
      return isWithinInterval(parsedCreatedAt, {
        start: date,
        end: new Date()
      });
    });
    this.setState({ data: result1 });
  };

  render() {
    return (
      <div className="MainPage">
        <header className="MainPage-header">
          <Header handleSearch={this.Fetcher} jobTitle="" />
        </header>
        <main className ="main"> 
        <Sidebar handleSearch={this.filterByDate}/>
        <div className="feed">
          {this.state.loading ? (
            <img alt="pingpongLoader" className="loader" src={require("../Images/loading.gif")}/>
          ) : (
            <Feed data={this.state.data} location={this.state.location} jobTitle= {this.state.jobTitle} />
          )}
          </div>
        </main>
      </div>
    );
  }
}
