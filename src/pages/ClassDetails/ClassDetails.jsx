import React, { Component } from 'react'
import * as APIMethods from '../../services/api-calls'

// Or you can write it this way!:
// import { getDetails } from "../../services/api-calls";

class ClassDetails extends Component {
  state = { 
    url: this.props.location.state.classTitle.url,
    classDetails: {}
   }

   async componentDidMount() {
     // This is where we call the API
     const classDetails = await APIMethods.getDetails(this.state.url)

    // The other way:
    // const classDetails = await getDetails(this.state.url)

     // Then set state
    this.setState({ classDetails })
    }

  render() {
    const { classDetails } = this.state; 
    return ( 
      <div>
        {/* Look at this sweet ternary! */}
        {/* This is a great way to render a 'loading' page! */}
        {classDetails.name ?
        <>
          {/* Gotta have the random cat pics... */}
          <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
          <h2>{classDetails.name}</h2>
          <div>Hit die: d{classDetails.hit_die}</div>
          <h3>Proficiencies:</h3>
          {classDetails.proficiencies.map((proficiency) => (
            <div key={proficiency.index}>{proficiency.name}</div>
          ))}
        </>
        :
        <>
          <p>Loading class details...</p>
        </>
        }
      </div>
    );
  }
}
 
export default ClassDetails;