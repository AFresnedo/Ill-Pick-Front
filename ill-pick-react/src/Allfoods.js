import React, { Component } from 'react';
import './App.css';



const Allfoods = props => (
        <div>
          <label>
            <input type="checkbox"  value={props.meals} checked="checked"  onClick={props.addItem} />
            <span>{props.meals}</span>
          </label>
        </div>
)
    
  

export default Allfoods;