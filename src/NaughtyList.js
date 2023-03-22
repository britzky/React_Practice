import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Class for naughtylist
export default class NaughtyList extends Component {
    constructor() {
        super()
        this.state = {
            naughty: []
        }
    }
    //function to add an item
    addNaughty = (event) => {
        //prevent refreshing the page 
        event.preventDefault()
        //variable that stores the users input
        const newNaughty = event.target.naughty.value
        //update the state
        //prevState is the current state before the update
        //...prevState.naughty copies the current array
        // newNaughty adds the user input to the new array
        this.setState(prevState => ({ naughty: [...prevState.naughty, newNaughty]}))
        //clear the input field after submit
        event.target.naughty.value = ''
    }
    // function to remove an item
    removeNaughty = (index) => {
        //update the state
        // recieve the previous state before the update 
        this.setState(prevState => {
            // create a new array
            // use filter to iterate through the current array
            // if the naughty value doesn't equal the current index return true
            //filter() keeps the true values and gets rid of false 
            const updatedNaughty = prevState.naughty.filter((currentValue, i) => i !== index)
            return { naughty: updatedNaughty }
        })
    }
    
    //function display items in the naughty array
    viewNaughtyItems = () => {
        return(
        // display an unordered list
        <ul className="list-group">
            {/* iterate through the array and create a new li for each item in the array */}
            {this.state.naughty.map((item, index) => (
              <li key={index} className="list-group-item">
                {/*make the item into a clicable link that gets removed when its clicked */}
                <Link to='#' onClick={() => this.removeNaughty(index)}>{item}</Link>
              </li>  
            ))}  
        </ul>
        
        )
    }
  render() {
    return (
      <div className="naughty">
        <h1>Welcome back, Santa.</h1>
        <br>
        </br>
        <h5>Please submit your next target.</h5>
        <br></br>
        <h6>When you've taken care of your target, click their name to remove them.</h6>
        <form onSubmit={this.addNaughty}>
            <input name="naughty" placeholder="Enter a naughty" />
            <button>Naughty!</button>
        </form>
        <br></br>
        {this.viewNaughtyItems()}
      </div>
    )
  }
}
