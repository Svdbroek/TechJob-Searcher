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
      loading: false,
      ranOnce: false
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
    const { data } = this.state;
    if (this.state.ranOnce === false) {
      return (
        <div className="startPage">
          <Header handleSearch={this.Fetcher} />
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <Header handleSearch={this.Fetcher} />
        </header>
        <main>
        <Sidebar handleSearch={this.filterByDate}/>

          {this.state.loading ? (
            <img src="https://static-steelkiwi-dev.s3.amazonaws.com/media/filer_public/4e/07/4e07eece-7c84-46e2-944d-1a6b856d7b5f/463ff844-6f36-4ffe-b051-fea983d39223.gif" />
          ) : (
            <Feed data={data} />
          )}
        </main>
      </div>
    );
  }
}
