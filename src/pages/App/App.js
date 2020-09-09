import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'

class App extends Component {
  state = {
    navItems: [
      {url: "/classlist", name: "Class List"}, 
      {url: "/monsterlist", name: "Scary Monsters"}, 
      {url: "/spellSearch", name: "Search for Spells"}
    ]
  }

  render() {
    return (
      <>
        <NavBar 
          navItems={this.state.navItems}
        />
      </>
    )
  }
}

export default App;
