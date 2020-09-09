import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import PuppyList from '../../components/PuppyList/PuppyList'
import { Route } from 'react-router-dom'
import ClassList from '../ClassList/ClassList'
import ClassDetails from '../ClassDetails/ClassDetails'

class App extends Component {
  state = {
    navItems: [
      {url: "/classlist", name: "Class List"}, 
      {url: "/monsterlist", name: "Scary Monsters"}, 
      {url: "/spellSearch", name: "Search for Spells"},
      {url: "/puppies", name: "Puppies"}
    ],
    puppies: [
      {name: "Belvedere", breed: "Poodle"},
      {name: "Sniffles", breed: "Rat Terrier"},
      {name: "JT", breed: "Jindo"}
    ]
  }

  render() {
    return (
      <>
        <NavBar 
          navItems={this.state.navItems}
        />
        <Route 
          exact path='/puppies/'
          render={() => 
            <PuppyList 
              puppies={this.state.puppies}
            />
          }
        />
        <Route 
          exact path='/classlist'
          render={() => 
            <ClassList />
          }
        />
        <Route 
          exact path='/class'
          render={( {location} ) => 
            <ClassDetails 
              location={location}
            />
          }
        />
      </>
    )
  }
}

export default App;
