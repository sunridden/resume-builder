import './App.css';

import React, { Component } from "react";
import Job from "./components/Job";
import uniqid from "uniqid";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jobInfo: {
        id: uniqid(),
        company: '',
        position: '',
        role: '',
        startDate: '',
        endDate: '',
        jobDuties: [],
      }
      
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let form = event.target;
    let processedData = new FormData(form);
    let addedTask = processedData.get("activity");
    this.setState({jobInfo: [...this.state.jobInfo, {id: uniqid(), name: addedTask}]});
  }

  render() {
    return (
    <div>
    <form onSubmit={this.handleSubmit}>
      <label>Personal Information
        <input type='text' id='information' name='information' placeholder='Enter your title, first- and last name'></input>
        <input type='text' id='information' name='information' placeholder='Enter job title'></input>
        <input type='text' id='information' name='information' placeholder='Enter email'></input>
        <input type='text' id='information' name='information' placeholder='Enter phone number'></input>
        <input type='text' id='information' name='information' placeholder='City, Country'></input>
        <button>Hit me!</button>
      </label>
      <label>Experience
        
      </label>
    </form>
    </div>
    )
  }
}

export default App;
