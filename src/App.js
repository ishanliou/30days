import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component{
  render(){
    return(
      <div className="header">
        <div className="fa fa-more"></div>

        <span className="title">Timeline</span>

        <input
          type="text"
          className="searchInput"
          placeholder="Search ..." />

        <div className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}

class Content extends Component{
  render(){
    return(
      <div className="content">
        <div className="line"></div>

        {/* Timeline item */}
        <div className="item">
          <div className="avatar">
            <img
            alt='Doug'
            src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
            Doug
          </div>

          <span className="time">
            An hour ago
          </span>
          <p>Ate lunch</p>
          <div className="commentCount">
            2
          </div>
        </div>

        {/* ... */}

      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
            <Header />
            <Content />
        </div>
      </div>
    );
  }
}

export default App;
