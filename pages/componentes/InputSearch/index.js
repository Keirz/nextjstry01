
import React, { useEffect, useState } from 'react';
export default function InputSearch() {
    
  const [inputTexto, setInputTexto] = useState("");
  let inputHandler = (e) => {
    //convertendo o input para lower case para facilitar o query
    var lowerCase = e.target.value.toLowerCase();
    setInputTexto(lowerCase);
  }
    return (
        <>
        <div className="row">
                  
        <label htmlFor="searchNome" className="labelInput">
          Nome
        </label>
        <div className="input-group">
          <input
            className="form-control"
            type="text" placeholder="" value='' id='searchNome' onChange={inputHandler}  />
          </div>
          
          </div>
          <div className="row">
      
        <label htmlFor="searchLogin" className="labelInput">
          Login
        </label>
        <div className="input-group">
          <input
            className="form-control"
            type="text" placeholder="" value='' id='searchLogin' />
          </div>
          
          </div>
          <div className="row">
        <div className='col-sm-6'>
        <label htmlFor="searchCPF" className="labelInput">
          CPF
        </label>
        <div className='input-group'>
          <input
            className="form-control"
            type="text" placeholder="" value='' id='searchCPF' />
          </div>
          </div>
          <div className='col-sm-6'>
        <label htmlFor="searchCNS" className="labelInput">
          CNS
        </label>
        <div className='input-group'>
          <input
            className="form-control"
            type="text" placeholder="" value='' id='searchCNS' />
          </div>
          </div>
          </div>
          <div className="row">
          <div className='col-sm-6'>
        <label htmlFor="searchAdmin" className="labelInput">
          Administrador?
        </label>
        <div className='input-group'>
          <select
            className="form-control"
             placeholder="" value='' id='searchAdmin' >
                </select>
          </div>
          </div>
          <div className='col-sm-6'>
          <div className="form-check">
          <label
            htmlFor="searchAtivoCheck"
            className="labelInput"
            title="Ativo?"
          >
            Ativo?
          </label>
          <div className="input-group mb-3">
            <input
              name="searchAtivoCheck"
              id="searchAtivoCheck"
              className="form-check-input"
              type="checkbox"
              placeholder=""
            />
          </div>
          </div>
          </div>
          </div>
          <div className='row'>
            
          <div className='container-fluid d-flex'>
            <div className='col-sm-3'>
            <div className="d-grid gap-2">
            <button type="button" className="btn btn-secondary">Pesquisar</button>
            </div>
            </div>
            <div className='col-sm-3'>
            <div className="d-grid gap-2">
            <button type="button" className="btn btn-primary">Nova Pesquisa</button>
            </div>
            </div>
            </div>
          </div>
          </>
    )
}