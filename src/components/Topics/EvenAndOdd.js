import React, { Component } from 'react'

class EvenAndOdd extends Component {
    //define a constructor method
    constructor() {
        super()
        //state will keep track of what user input is and both arrays
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    handleChange = (val) => {
        // tells react to re-render userInput value at event change
        this.setState({ userInput: val })
    }
    assignEvenAndOdds = (userInput) => {
        //this stores user input value that has been made into a string with JSON.stringify and splits them with a comma in between
        let arr = userInput.split(',')
        let evens = []
        let odds = []

        for (let i = 0; arr.length; i++){
            if (arr[i] % 2 === 0){
                // push number at that index into evens array. parseInt parses strings and returns an integer at given radix (here, base 10)
                evens.push(parseInt(arr[i], 10))
            }
            else {
                odds.push(parseInt(arr[i], 10))
            }

        }
        //tells react to re-render resultsBox value to updated state
        this.setState({ evenArray: evens, oddArray: odds })
    }
    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                {/* handles user input, in react onChange attribute calls a function every time user enters input */}
                {/* e represents event, so handleChange is logging keystrokes and passes in current value */}
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }/>
                {/* here we invoke an onClick function(when button is clicked by user) that executes our method to sort inputs */}
                <button className='confirmationButton' onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}>Sort</button>
                {/* JSON.stringfy formats value into a JSON string, this.state renders objects being displayed on screen*/}
                <span className='resultsBox'>Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className='resultsBox'>Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}

export default EvenAndOdd