import React, { Component } from 'react';

export default class Question extends Component {

  render(){
    return(
      <div>
        <div>
          {this.props.pageNumber}. {this.props.problems[this.props.pageNumber-1].problem}
        </div>
        <button onClick={this.props.handleClick} value={this.props.problems[this.props.pageNumber-1].A}> {this.props.problems[this.props.pageNumber-1].A} </button>
        <button onClick={this.props.handleClick} value={this.props.problems[this.props.pageNumber-1].B}> {this.props.problems[this.props.pageNumber-1].B} </button>
        <button onClick={this.props.handleClick} value={this.props.problems[this.props.pageNumber-1].C}> {this.props.problems[this.props.pageNumber-1].C} </button>
        <button onClick={this.props.handleClick} value={this.props.problems[this.props.pageNumber-1].D}> {this.props.problems[this.props.pageNumber-1].D} </button>
      </div>
    )
  }
}
