import React from 'react'

const Puppy = (props) => {
  return(
    <>
      <h3>{props.puppy.name} the {props.puppy.breed}</h3>
    </>
  )
}

export default Puppy