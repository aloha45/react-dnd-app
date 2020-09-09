import React from 'react';

const PuppyList = (props) => {
  return (
    <>
      <h2>Puppy List</h2>
      {props.puppies.map((puppy, idx) =>
        <h3>{puppy.name} the {puppy.breed}</h3>
      )}
    </>
  )
}

export default PuppyList