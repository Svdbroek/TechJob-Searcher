import React from "react";
import "./App.css";
import {Route} from 'react-router-dom'
import MainPage from "./Sections/MainPage";
import DetailsPageContainer from"./Sections/DetailsPageContainer"

export default class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Route exact path = '/' component={MainPage}/>
        <Route path ='/jobs/aplications/' component={DetailsPageContainer} />
      </div>
    );
  }
}
