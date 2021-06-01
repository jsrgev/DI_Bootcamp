import React from 'react';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      favoriteColor:'red'
    }
  }
  changeColor = () => {
    this.setState({favoriteColor:'yellow'});
  }
  componentDidMount = () => {
    setTimeout(this.changeColor, 5000);
  }
  clickHandler = () => {
    this.setState({favoriteColor:'blue'})
    this.setState({favoriteColor:'pink'})
  }
  shouldComponentUpdate = () => {
    return false;
  }
  render(){
    console.log()
      return(
        <>
        <h1>My favorite color is {this.state.favoriteColor}.</h1>
        <button onClick={this.clickHandler}>Change color</button>
        </>
      )
  }
}

export default App;



