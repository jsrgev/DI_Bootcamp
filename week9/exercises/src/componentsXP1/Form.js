// import './App.css';
import React from 'react'

class Form2 extends React.Component {
  constructor(){
    super();
    this.state={}
  }
  handleClick = () => {
    this.setState({
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      genre: document.getElementById("genre").value,
      yearPublished: document.getElementById("yearPublished").value      
    })
    console.log(this.state);
    alert("The info was added successfully");
  }
  render() {
    return (
        <form>
        <label>Title</label>
        <input type="text" id="title"></input>
        <label>Author</label>
        <input type="text" id="author"></input>
        <label>Title</label>
        <input type="text" id="genre"></input>
        <label>Year Published</label>
        <input type="number" id="yearPublished"></input>
        <button type="button" onClick={this.handleClick}>Submit</button>
        </form>
    );

  }
}

export default Form2;
