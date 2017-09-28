import React, { Component } from 'react';
import logo from './logo.svg';
import prev from './prev.jpg';
import './App.css';
import _ from 'lodash';
import Question from './question'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      problems: [],
      pageNumber: 1,
      grades: [],
      totalGrade: 0
    }
  }

  componentDidMount() {
    fetch('problems.json').then(res => res.json()).then(res => {
      this.setState({
        problems: res.problems
      })
    })
  }

  handleClick(event) {
    const newGrade = this.state.grades;
    newGrade.push(parseInt(event.target.value, 10))
    this.setState({grades: newGrade})
    console.log(this.state.grades)
    if (this.state.pageNumber !== 5){
      this.setState({pageNumber:this.state.pageNumber+1})
    }
  }

  handlePrev() {
    if (this.state.pageNumber !== 1){
      const newGrade = this.state.grades;
      newGrade.pop();
      this.setState({
        pageNumber:this.state.pageNumber-1,
        grades: newGrade
      })
    }
  }

  render() {
    if (this.state.problems.length === 0){
      return (
        <div>
          loading...
        </div>
      )
    }
    if (this.state.pageNumber === 5){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        <div>
        Total Grade: {_.sum(this.state.grades)}
        </div>
        </div>
      )
    }
    else{
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <img src={prev}  alt="previous problem" onClick={this.handlePrev.bind(this)}/>
        </div>
        <Question
              problems={this.state.problems}
              pageNumber={this.state.pageNumber}
              handleClick={this.handleClick.bind(this)}
              handlePrev={this.handlePrev.bind(this)}
        />
      </div>
    );
  }
  }
}

export default App;
