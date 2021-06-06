import './App.css';
import React from 'react'
import Form2 from './componentsXP1/Form2'
import Display from './componentsXP1/Display'


class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  handleClick = () => {
    let inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        if (input.value === "") {
        alert("Please fill in all the fields");
        return;
      }
    }
    this.setState({
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      email: document.getElementById("email").value      
    })
    alert("The info was added successfully");
  }
  resetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: ""      
    });
  }
  render() {
      return (
      <>
        <h1>Welcome</h1>
        <p>Please provide your information below.</p>
        {(!this.state.firstName) ? <Form2 handleClick={this.handleClick} /> : <Display data={this.state} resetForm={this.resetForm} />}
      </>
    );
  }
}

export default App;
