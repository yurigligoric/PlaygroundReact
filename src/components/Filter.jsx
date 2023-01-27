import React from 'react'
import {data} from '../data/data'


const Filter = () => {
    //const data2 = data.filter(person => person.name === 'Bob Johnson').
   //const listItems = data.filter(person => person.name === 'Bob Johnson').map(person => <li>{person.name}</li>)
  return (
    <div>
      {/* <ul>{listItems}</ul> */}
      <ul>{data.filter(person => person.name === 'Bob Johnson').map(person => <li>{person.name}</li>)}</ul>
    </div>
  )
}

export default Filter
