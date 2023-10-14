import React, { Component } from 'react'
import './Searchbox.css'

export class Searchbox extends Component {
  //going to pass the props from the parent component to the child component 
  render() {
    //de
    return (
      <div>
            <input className={this.props.className}
             type="search" 
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler} 
            />
      </div>
    )
  }
}

export default Searchbox