import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import PuppyList from '../../components/PuppyList/PuppyList'

class App extends Component {
  state = {
    navItems: [
      {url: "/classlist", name: "Class List"}, 
      {url: "/monsterlist", name: "Scary Monsters"}, 
      {url: "/spellSearch", name: "Search for Spells"},
      {url: "https://www.tacobell.com", name: "Get you some tacos"}
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
        <PuppyList 
          puppies={this.state.puppies}
        />
      </>
    )
  }
}

export default App;
