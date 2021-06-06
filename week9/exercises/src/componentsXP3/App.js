import './App.css';
import React from 'react'
import PostList from './PostList'


class App extends React.Component {
  render() {
      return (
        <>
        <h1>List of Posts</h1>
          <PostList />
        </>
    );
  }
}

export default App;
