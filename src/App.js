import React from "react";
import "./App.css";
import Header from "./Sections/Header/Header";
import Feed from "./Sections/Feed/Feed";
import Sidebar from "./Sections/Sidebar/Sidebar";
import { parse, isWithinInterval } from "date-fns";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      originalData: [],
      data: [],
      loading: false
    };
  }

  Fetcher = (jobTitle, Location) => {
    this.setState({ loading: true, ranOnce: true });
    fetch(
      // "https://raw.githubusercontent.com/Svdbroek/TechJob-Searcher/master/src/jobs.json"
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${jobTitle}&location=${Location}`
    )
      .then(response => response.json())
      .then(myJson => {
        this.setState({ data: myJson, originalData: myJson, loading: false });
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
      <div className="App">
        <header className="App-header">
          <Header handleSearch={this.Fetcher} jobTitle="" />
        </header>
        <main className ="main"> 
        <Sidebar handleSearch={this.filterByDate}/>
        <div className="feed">
          {this.state.loading ? (
            <img alt="pingpongLoader" className="loader" src={require("./Images/loading.gif")}/>
          ) : (
            <Feed data={this.state.data} />
          )}
          </div>
        </main>
      </div>
    );
  }
}
