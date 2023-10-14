import React, { Component } from 'react';
import Cardbox from '../card/Cardbox';
import './Cardlist.css';


export class Cardlist extends Component {
  render() {
    const {creatures} = this.props
    if (!creatures || creatures.length === 0) {
      return <div>No data available.</div>;
    }

    return (
      <div className='card-list'>
        {creatures.map((creature)=>{

        return(
           <Cardbox creature={creature} />
           )
        })
        } 
      </div>
    )
  }
}

export default Cardlist
