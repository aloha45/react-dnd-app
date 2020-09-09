import React from 'react';
import Puppy from '../Puppy/Puppy'

const PuppyList = (props) => {
  return (
    <>
      <h2>Puppy List</h2>
      {props.puppies.map((puppy, idx) =>
        <Puppy 
          key={idx}
          puppy={puppy}
        />
      )}
    </>
  )
}

export default PuppyList