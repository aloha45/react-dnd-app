import React, { Component } from 'react'
import { getMonsterList } from '../../services/api-calls'
import { Link } from 'react-router-dom'

class MonsterList extends Component {
  state = {
    monsterList: []
  }

  async componentDidMount() {
    // API Call
    const monsterList = await getMonsterList()
    // Set State
    console.log(monsterList)
    this.setState({ monsterList: monsterList.results })
  }

  render() {
    return (
      <>
        <h3>Monster List (OMG SCARY)</h3>
        {this.state.monsterList.map((monster) =>
          <div key={monster.index}>
            <Link
              to={{
                pathname: '/monster',
                state: { monster }
              }}
            >
              {monster.name}
            </Link><br></br>
          </div>
        )}
      </>
    )
  }
}

export default MonsterList