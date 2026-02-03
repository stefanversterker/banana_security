import React from 'react';
import './Input.css'

function Input({htmlFor, labelText, type, id, name, value, onChange, placeHolder}) {
    return (
        <div className="label-and-input">
            <label htmlFor={id}>
                {labelText}
                <input
                    className="form-input"
                    placeholder={placeHolder}
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                />
            </label>
        </div>
    );
}

export default Input;