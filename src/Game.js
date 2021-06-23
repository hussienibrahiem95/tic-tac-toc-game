import './Game.css';
import Board from './componenets/Board'
import React , { Component } from 'react';
class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      history :[{
        squares: Array(9).fill(null),
      }],
      stepNumber : 0,
      CurrentPlay:0,
      finished:0,
    }
  }
  handleClick = (i)=>{
    const history = this.state.history.slice(0,this.state.stepNumber + 1);
    const current_squares = history[history.length - 1]
    const squares = current_squares.squares.slice(); // return all elements
    if(!squares[i] && !this.state.finished){
        squares[i] = this.state.CurrentPlay == 0? 'X' : 'O';
        this.setState({
            finished:0,
            CurrentPlay : !this.state.CurrentPlay,
            history : history.concat([{squares:squares}]),
            stepNumber : history.length,
        })
    }
  }
  MoveState = (move)=>{
    this.setState({
      finished:0,
      stepNumber : move,
      CurrentPlay: (move % 2 !== 0),
    })
  }
  render(){
    const history = this.state.history
    const current_squares = history[this.state.stepNumber]
    const  winner = detectWinner(current_squares.squares);
    const moves = history.map(
      (step,move)=>{
        const content = move ? 'Go to move #' +move : 'Go To Start Game';
        return(
          <li key={move}>
            <button onClick={()=>{this.MoveState(move)}}>{content}</button>
          </li>
        )
      }
    )
    let status;
    let class_winner = 'header';
    if(winner){
      this.state.finished = 1;
      status = 'Winner : ' + winner;
      class_winner = 'winner'
    }
    else {
        if(this.state.stepNumber == 9){
          status = 'Game Finished With Draw ';
        }
        else 
          status = 'Next player:' + (this.state.CurrentPlay == 0 ?'X' :'O');
    }    
    return (
      <div className="Game">
          <h2 class='header'>Tic Tac Toe Game</h2>
          <h4 class={class_winner}>{status}</h4>
          <div className = "game">
            <Board squares = {current_squares.squares}
              onClick = {(i)=> this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <br></br>
            <br></br>
            <p> History </p>
            <ol>{moves}</ol>
          </div>
      </div>
    );
  }
 
}
function detectWinner(squares) {
  const valid_lines = [
      [0,1,2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];
  for(let i = 0 ; i<valid_lines.length;i++){
      const [a,b,c] = valid_lines[i];
      if(squares[a] &&squares[a] == squares[b] && squares[b] == squares[c])
          return squares[a];
  }
  return null;
}
export default Game;


