import './app2.css';
import React from 'react'

class Form2 extends React.Component {
  constructor(){
    super();
    this.state={}
  }
  render() {
    const {handleClick} = this.props;
    return (
      <>
        <form>
        <input type="text" id="firstName" placeholder="First Name"></input>
        <input type="text" id="lastName" placeholder="Last Name"></input>
        <input type="text" id="phoneNumber" placeholder="Phone Number"></input>
        <input type="email" id="email" placeholder="Email"></input>
        <button type="button" onClick={handleClick}>Submit</button>
        </form>
        </>
    );

  }
}

export default Form2;
