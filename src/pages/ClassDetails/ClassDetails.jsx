import React, { Component } from 'react'

class ClassDetails extends Component {
  state = { 
    url: this.props.location.state.classTitle.url,
    classDetails: {}
   }

   async componentDidMount() {
     // This is where we call the API
     // Then set state
   }

  render() { 
    return ( 
      <div>
        <h3>Class Details</h3>
      </div>
     );
  }
}
 
export default ClassDetails;