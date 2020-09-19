// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge
// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1) - Importing a child component named Dice to be called within the render. 
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  constructor(props){
    super(props)
    // 2) Initializing the class Board's state objects and giving them default values.
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 3) Destructuring the state objects rollImages and diceLog so they can be used as variables.
    let { rollImages, diceLog } = this.state
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    // 4) Creating a new variable and assigning it a random image from the rollImages array
    let newRoll = rollImages[randomNum]
    // 5) Updating the state of currentPic to be the random image we stored in our new variable and updating the state of diceLog, which is the roll history, to include the newRoll.
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        {/* 6) calls the compenent Dice and renders it in the DOM. Gives it the props roll and currentPic, letting it affect those state objects */}
        <Dice
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

export default Board



// src/component/Dice.js

import React, { Component } from 'react'

class Dice extends Component{
  // 7) The render method. Its the only required method in a class component. Basically tells React what to display on the page. 
  render(){
    // 8) Destructuring currentPic and roll from the props so they can be used as variables.
    const { currentPic, roll } = this.props
    return(
      <div id="dice-container">
        <h2>Click to Roll</h2>
        <img
          id="dice-img"
          // 9) Specifies a bit of text that will be displayed or read if the image cannot be displayed.
          alt="images of dice"
          // 10) src attribute for the img tag. Can be a url or in this case a variable for the image imported into the component. 
          src={ currentPic }
          onClick={ roll }
        />
      </div>
    )
  }
}

export default Dice
