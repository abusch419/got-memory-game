import React, { Component } from "react";
import "./App.css";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    score: 0,
    highScore: 0
  };
  
  gameOver = () => {
    if(this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score}, function() {
        console.log(this.state.highScore)
      })
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    })
    alert(`Game Over! Score: ${this.state.score}`)
    this.setState({score: 0})
    return true
  }
 
  clickCount = id => {
    // .find() will go through the array and return the value of the first element it reaches in the array where the object id matches the id 
    // assgined to the image in the gamecard component
    // eslint-disable-next-line
    this.state.cards.find((el, i, cards) => {
      if (el.id === id) {
        // if the card hasnt been clicked yet then change its count to 1 indicating it has been clicked
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
          });
          // a cool way to sort an array randomly by providin a 50/50 chance of a positive number in the compare function of .sort()
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } 
        else {
          this.gameOver();
        }
      }
    });
  }


  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highScore={this.state.highScore}>Memory Game</Header>
        {this.state.cards.map(card => (
          <GameCard 
          clickCount={this.clickCount}
          id={card.id}
          key={card.id}
          image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
