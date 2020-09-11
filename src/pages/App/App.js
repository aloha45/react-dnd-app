import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import PuppyList from '../../components/PuppyList/PuppyList'
import { Route } from 'react-router-dom'
import ClassList from '../ClassList/ClassList'
import ClassDetails from '../ClassDetails/ClassDetails'
import MonsterList from '../MonsterList/MonsterList'
import MonsterDetails from '../MonsterDetails/MonsterDetails'
import SpellSearch from '../SpellSearch/SpellSearch'
import SpellDetails from '../SpellDetails/SpellDetails'

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
        <Route 
          exact path='/monsterlist'
          render={() => 
            <MonsterList 
            />
          }
        />
        <Route 
          exact path='/monster' 
          render={({ location }) => 
            <MonsterDetails 
              location={location}
            />
          }/>
          <Route 
          exact path='/spellSearch' 
          render={() => 
            <SpellSearch 
            />
          }/>
          <Route 
          exact path='/spell/:name'
          render={({ match }) =>
            <SpellDetails 
            match={match}/>
          }/>
      </>
    )
  }
}

export default App;
