import React, { Component } from 'react'
import "./DetailsPage.css"



/*

            company={this.data.company}
            company_logo={this.data.company_logo}
            company_url={this.data.company_url}
            created_at={this.data.created_at}
            description={this.data.description}
            how_to_apply={this.data.how_to_apply}
            location={this.data.location}
            title={this.data.title}
            type={this.data.type}
        */


export default class DetailsPage extends Component {

    render() {
        return (
            <div className="DetailsPage">
                <h1>{this.props.title}</h1>
                <img alt='logo' className ="logo" src= {this.props.company_logo} /> 
                <div className="detailsBox">
                   <p> <strong>Comapny: </strong> {this.props.company}</p>
                   <p> <strong>Location: </strong> {this.props.location}</p>
                   <p>{this.props.type}</p>
                   <p><strong>Created on: </strong> {this.props.created_at}</p>
                   <p><strong>How to apply: </strong> <tag dangerouslySetInnerHTML={{__html:this.props.how_to_apply}}></tag></p>

                </div>
                <div className="description" dangerouslySetInnerHTML={{__html:this.props.description}}></div>

            </div>
        )
    }
}
