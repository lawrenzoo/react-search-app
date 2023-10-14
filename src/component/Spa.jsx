import { Component } from 'react'
import Cardlist from './cardlist/Cardlist';
import Searchbox from './search-box/Searchbox';
import '../App.css'

class Spa extends Component{
    //how to get the list from the array is by using componentMount()
    //filter which shows the comparing of the inputted event to the name in the array of the creatures 
    //using include to compare the inputted value to the filtered call back called creature 
    //we are going to solve a problem whereby if i clear the input, it would be able to go back to its intials state
    //firstly the event.target.value would be regarded as the intial search field(searchfield) because it will accessable from within the state if we move the filteredCreature to the render side
    //the filteredCreature would be placed at the rendering

    //the event in the input, return it as a setState(()=>{})
    //destructure and optimize the code, place the optimization under the component while the destructuring should be at the render.

    //passing the props from here to the Children page
    constructor(){
        super();

        this.state={
           creatures:[],
           searchfield:''
        }
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((users)=> this.setState(()=>{
            return {creatures: users}
        }
        ))
    }
//optimization
   onSearchChange =(event)=>{
        const searchfield = event.target.value.toLocaleLowerCase()
        this.setState(()=>{
            return {searchfield}
        })
    }
    render(){
        //destructing
            const {creatures, searchfield}=this.state
            const {onSearchChange}=this

        
            const filterdCreatures = creatures.filter((creature)=>{
            return creature.name.toLocaleLowerCase().includes(searchfield)
            })
        
      return (
    <>
        <div>
            <h1 className='app-title'>Creatures List</h1>
            <Searchbox onChangeHandler={onSearchChange}
            placeholder={'Search Creatures'} 
            className={'search-box'}
            />
            <Cardlist 
            creatures={filterdCreatures}
            />
        </div>
    </>
  )   
    }
 
}

export default Spa