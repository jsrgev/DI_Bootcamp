import './App.css';
import React from 'react'
import PostList from './PostList'


class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      loaded: false
    }
  }
  componentDidMount = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();
    this.setState({array:data})
  }
  render() {
    let array = this.state.array;

    return (
      <>
      <h1>List of Users</h1>
      <div className="users">
        {array.map((item,i) => {
            let {id,name,username,email,city} = item;
            return (
              <div key={i} className="user">
                <p><strong>ID:</strong> {id}</p>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Username:</strong> {username}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>City:</strong> {city}</p>
              </div>
              )
          })
        }
        </div>
      </>
    )
  }

}


class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      loaded: false
    }
  }
  componentDidMount = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();
    this.setState({array:data})
  }
  render() {
    let array = this.state.array;

    return (
      <>
      {(array.length>0)
        ?
        <ul>
          {array.map((item,i) => {
              let {name,email} = item;
              return <li key={i}>Name: {name} | Email: {email}</li>
            })
          }</ul>
        :
          <div>Loading</div>}
       </>
    )
  }
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  render() {

      return (
        <>
        {/*<Users />*/}
        <UsersList />
        <PostList />
        </>
    );
  }
}

export default App;
