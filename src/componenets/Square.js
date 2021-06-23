import React , {Component} from 'react';
import './Square.css'

function Square(props) {
    let class_name = props.value=='X' ?'space x' :'space o';
    return (
        <button className={class_name}  onClick={props.onClick}>
            {props.value}
        </button>
    )
}
export default Square;