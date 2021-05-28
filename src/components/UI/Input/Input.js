import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
console.log('isvalid' + props.type +' ->' + props.isValid)

    return <div
          className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor={props.id}>{props.labelText}</label>
          <input
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
}
export default Input;