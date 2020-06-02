import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...optherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...optherProps}/>
        {
            label ? 
            <label className={`${optherProps.value.length?'shrink':''} form-input-label`}>
                {label}
            </label>
            : null
        }
    </div>
)

export default FormInput;