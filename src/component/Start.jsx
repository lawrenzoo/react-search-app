import React, { Component } from 'react';
import '../App.css';

class Start extends Component{
  //firstly i was able to map through the state and also include their key props so that react can be able to differentiate each monster with id as the key incase there are more than two identical names in the array.

constructor(){
  super();
  this.state ={
    monsters:[
      {id:1,
        name:'chioma'
      },
      {id:2,
        name:'ruth'
      },
      {id:3,
        name:'uche'
      },
      {id:4,
        name:'goat'
      },
      {id:5,
        name:'messi'
      },
      {id:6,
        name:'stephen'
      },
      {id:7,
        name:'chinonso'
      },
    ]
  }
}
render() {
  return (
    <div>
      {this.state.monsters.map((monster)=>{
        return <h2 key ={monster.id}>welcome {monster.name}</h2>
      })} 
    </div>
  )
}
  
}

export default Start