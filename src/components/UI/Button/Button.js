import React from 'react';
import './Button.css';

const button = (props) => (
    <button className={props.class} type={props.type} onClick={props.clicked} disabled={props.disabled}>{props.children}</button> 
);

export default button;