import React, { Component } from 'react'
import './Cardbox.css'

export class Cardbox extends Component {
  render() {
    const {id, name, phone} =this.props.creature;
    return (
        <div className='card-container' key={id}>
        <img 
        src={`https://robohash.org/${id}?set=set${id}&size=180x180`}
         alt={`creature ${name}`}
         />
        <h2>{name}</h2>
        <p>{phone}</p>
      </div>
    )
  }
}

export default Cardbox