import React, { Component } from "react";
import DetailsPage from "./DetailsPage";

export default class DetailsPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: null
    };
  }

  parseURLParams(url) {
    let queryStart = url.indexOf("?") + 1,
      queryEnd = url.indexOf("#") + 1 || url.length + 1,
      query = url.slice(queryStart, queryEnd - 1),
      pairs = query.replace(/\+/g, " ").split("&"),
      parms = {},
      i,
      n,
      v,
      nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
      nv = pairs[i].split("=", 2);
      n = decodeURIComponent(nv[0]);
      v = decodeURIComponent(nv[1]);

      if (!parms.hasOwnProperty(n)) parms[n] = [];
      parms[n].push(nv.length === 2 ? v : null);
    }
    console.log(parms);
    return parms;
  }

  componentDidMount() {
    this.urlString = window.location.href;
    this.urlParams = this.parseURLParams(this.urlString);
    console.log(this.urlString);
    console.log(this.urlParams);
    this.Fetcher(this.urlParams.jobSearch, this.urlParams.locationSearch);
  }

  Fetcher = (jobTitle, location) => {
    this.setState({ loading: true, ranOnce: true });
    fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${jobTitle}&location=${location}`
    )
      .then(response => response.json())
      .then(myJson => {
        this.setState({
          data: myJson[parseInt(this.urlParams.id)],
          loading: false
        });
      });
  };

  render() {
    console.log(this.state.data, "state data");
    return (
      !this.state.loading && (
        <div>
          <DetailsPage
            company={this.state.data.company}
            company_logo={this.state.data.company_logo}
            company_url={this.state.data.company_url}
            created_at={this.state.data.created_at}
            description={this.state.data.description}
            how_to_apply={this.state.data.how_to_apply}
            location={this.state.data.location}
            title={this.state.data.title}
            type={this.state.data.type}
          />
        </div>
      )
    );
  }
}
