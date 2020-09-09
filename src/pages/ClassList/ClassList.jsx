import React, { Component } from 'react'
import { getClassList } from '../../services/api-calls'

class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      results: ['Paladin', 'Bard', 'Rogue']
    }
  }
  
  async componentDidMount() {
    // Make an API Call
    const classData = await getClassList()
    // Set state with results
    console.log(classData)

  }

  render() {
    return (
      <div>
        <h3>Class List</h3>
        <div className="icon-container">
          {/* This is where we map over our results, representing each with a div containing an image and a name */}
          {this.state.results.map((classTitle) => (
            <div id="classDiv" key={classTitle}>
              <img style={{ width: "100px", height: "100px" }} src={`/images/${classTitle}.svg`} alt="class-logo"/>
              {classTitle}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ClassList