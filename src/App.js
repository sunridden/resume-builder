import './App.css';

import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
    <form>
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
