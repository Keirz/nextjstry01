import React, { useState } from "react";


export const FormInput = (props) =>{


  const {label, msngerro, onChange, id,customErr,  ...inputProps} = props;



    return(

        <div className="form-group mb-3">
        <label htmlFor={props.nome} className="labelInput">
          {props.label}
        </label>
        <div className="input-group mb-3">
          <input
            className="form-control input"
            {...inputProps} onChange={onChange} customErr={msngerro}
          />
          <div className="invalid-feedback">
          {props.msngerro}
          </div>
          </div>
      </div>

    )
}

export default FormInput;