import React from "react";


export const FormInputCheck = (props) =>{

  const {label, msngerro, onChange, id, ...inputProps} = props;

    return(


        <div className="form-check">
        <label
          htmlFor={props.nome} className="labelInput" title="Usuário?"
        >
          {props.label}
        </label>
        <div className="input-group mb-3">
          <input {...inputProps}
            name={props.nome}
            className="form-check-input"
            type="checkbox"
          />
          <div className="invalid-feedback erroSpan">
          <span className="text-danger erroSpan">
          {props.msngerro}
          </span>
          </div>
        </div>
      </div>

    )
}

export default FormInputCheck;