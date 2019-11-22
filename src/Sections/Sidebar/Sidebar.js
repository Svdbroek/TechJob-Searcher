import React, { Component } from "react";
import {subDays, subWeeks, subMonths, format, parse} from 'date-fns'
import './Sidebar.css'
export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      value: this.formatDate(new Date())
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  formatDate = date => format(date, "dd/MM/yyyy");

  getCurrentValueAsDate = () => {
    const { value } = this.state;
    return parse(value, "dd/MM/yyyy", new Date());
  };

  render() {
    const now = new Date();
    return (
      <form className="form">
        <label>
          Added:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value={this.formatDate(now)}>Today</option>
            <option value={this.formatDate(subDays(now, 3))}>Past 3 days</option>
            <option value={this.formatDate(subWeeks(now, 2))}>Past 2 weeks</option>
            <option value={this.formatDate(subMonths(now, 1))}>Past month</option>
          </select>
        </label>
        <button
          type="button"
          onClick={() => this.props.handleSearch(this.getCurrentValueAsDate())}
        >
          Search
        </button>
      </form>
    );
  }
}
