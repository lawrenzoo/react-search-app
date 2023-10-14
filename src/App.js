import { Component } from 'react';
import Start from './component/Start'
import Spa from './component/Spa'

class App extends Component {

  //using the constructor method {remember object and classes }
  //learning how to make it more dynamic and also how to update name any time its clicked upon{this.state and this.setState}
  //button would have access to event listner to able to change the state{from chiagozie to lawrence }
  //when changing the key and value in the state, make sure the setstate also rhymes with the setState{shallow merge}
  //the call back function on the asyscronous, thats why setState does not read immediately on the console
  //as to solve this, we would need a secondary callback with in the setState to solve this issues
  constructor() {
    super();
  this.state ={
    name:{firstName:'chiagozie', lastName:'mbanusi'},
    company:'nupat'
  }


  }
  render () {
     return (
    <>
      <p>Hi {this.state.name.firstName} {this.state.name.lastName}, i am working at {this.state.company}</p>
      <button onClick={()=>{
        this.setState(()=>{
          return {
            name:{firstName:'chinonso',lastName:'mbanusi'},
            company:'microsoft'
          }}
          )
        

      }}> change name </button>
      {/* <Start/> */}
      <Spa/>
    </>
  );  
  }
}

export default App;
