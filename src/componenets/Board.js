import React , {Component} from 'react';
import Square from './Square'
import './Board.css'
class Board extends Component{
    renderSquare(i) {
       return < Square  
        value ={this.props.squares[i]}
        onClick = {()=> this.props.onClick(i)}
       />;
    }
    render(){
        return (
            <div className="board">
                <div className='space'>  {this.renderSquare(0)}</div>
                <div className='space'>  {this.renderSquare(1)}</div>
                <div className='space'>  {this.renderSquare(2)}</div>
                <div className='space'>  {this.renderSquare(3)}</div>
                <div className='space'>  {this.renderSquare(4)}</div>
                <div className='space'>  {this.renderSquare(5)}</div>
                <div className='space'>  {this.renderSquare(6)}</div>
                <div className='space'>  {this.renderSquare(7)}</div>
                <div className='space'>  {this.renderSquare(8)}</div>
            </div> 
        )
    }
}
export default Board;