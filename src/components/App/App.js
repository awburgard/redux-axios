// App.js

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ArtistList from './../ArtistList/ArtistList.js';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AddArtist from '../AddArtist/AddArtist';

class App extends Component {
  // Called when the (App) component is created
  state = {
    artists: [],
  }

  // DOM is ready
  componentDidMount() { // react Component method
    this.refreshArtists();
  }

  refreshArtists = () => {
    // just like $.ajax()
    axios({
      method: 'GET',
      url: '/artist'
    }).then((response) => {
      console.log(response);
      // response.data will be the array of artists
      this.props.dispatch({
        type: 'ADD_ARTISTS_LIST',
        payload: response.data,
      })
    });
  }

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Famous Artists</h1>
        </header>
        <br/>
        <Route exact path='/' component={ArtistList} />
        <Route path='/add-artist' component={AddArtist}/>
      </div>
      </Router>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
