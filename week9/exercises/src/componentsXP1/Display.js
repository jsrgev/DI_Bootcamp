import './app2.css';
import React from 'react'

class Display extends React.Component {
  // constructor(){
  //   super();
  //   this.state={}
  // }
  render() {
    const {firstName, lastName, phoneNumber, email} = this.props.data;
    const {resetForm} = this.props;
    return (
      <div id="display">
        <div>{lastName}, {firstName}</div>
        <div>{phoneNumber} | {email}</div>
        <button type="button" onClick={resetForm}>Reset</button>
      </div>
    );

  }
}

export default Display;
