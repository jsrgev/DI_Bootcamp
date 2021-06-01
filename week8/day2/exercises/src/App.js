import React from 'react';


class Child extends React.Component {
  componentWillUnmount = () => {
    alert("The header is about to be deleted");
  }
  render(){
    return <h2>Hello world!</h2>;
  }
}


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      favoriteColor:'red',
      show: true
    }
  }
  changeColor = () => {
    this.setState({favoriteColor:'yellow'});
  }
  deleteHeader = () => {
    this.setState({show:false});
  }
  componentDidMount = () => {
    setTimeout(this.changeColor, 5000);
  }
  clickHandler = () => {
    // this.setState({favoriteColor:'blue'})
    this.setState({favoriteColor:'pink'})
  }
  componentDidUpdate = () => {
    let div = document.getElementById("message");
    div.textContent = `My updated favorite color is ${this.state.favoriteColor}`
  }
  shouldComponentUpdate = () => {
    return true;
    // return false;
  }
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    let div = document.getElementById("snapshot");
    div.textContent = `Before the update, the favorite was ${prevState.favoriteColor}.`
  }
  render(){
    let hello = this.state.show ? <Child /> : "";
    return(
      <>
        {hello}
        <button onClick={this.deleteHeader}>Delete header</button>
        <h1>My favorite color is {this.state.favoriteColor}.</h1>
        <button onClick={this.clickHandler}>Change color</button> 
        <div id="snapshot"></div>
        <div id="message"></div>
      </>
    )
  }
}

export default App;



