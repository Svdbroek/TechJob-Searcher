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
      data: []
    };

    fetch(
      "https://raw.githubusercontent.com/Svdbroek/TechJob-Searcher/master/src/jobs.json"
    )
      .then(response => response.json())
      .then(myJson => {
        this.setState({ data: myJson, originalData: myJson });
      });
  }

  filterByDate = date => {
    const { originalData } = this.state;
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

  filterByJobTitleAndRegion = (jobTitle, region) => {
    const { originalData } = this.state;
    const result = originalData.filter(data => {
      return (
        data.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
        data.location.toLowerCase().includes(region.toLowerCase())
      );
    });
    this.setState({ data: result });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Header handleSearch={this.filterByJobTitleAndRegion} />
        </header>
        <main>
          <Feed data={data} />
          <Sidebar handleSearch={this.filterByDate} />
        </main>
      </div>
    );
  }
}
