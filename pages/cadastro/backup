
import React, { useState, useEffect } from 'react';
import FormCadastro from '../componentes/FormCadastro';
import Header from '../componentes/Header';
import api from '../api/api';

import Link from 'next/link';


export default function Cadastro() {


const [props, setProps] = useState({});

const retrieveData = async () => {
  const response = await api.get("/pesquisar");
  return response.data;
};

const addNewData = async (props) => {
  console.log(props);
  const request = {
    ...props,
  };
  const response = await api.post("/inserir", request);
  console.log(response);
  setProps([... response.data]);
};


useEffect(() => {
  const getAllData = async () => {
    const allData = await retrieveData();
    if (allData) setProps(allData);
  };

  getAllData();
}, []);

useEffect(() => {
}, [props]);





  return (
    <>
  
    <Header titulo='SMPEP - Cadastro'/>
  
    <div className="container-fluid">
            <div className='container-fluid '>
<ul className="nav nav-tabs navtop">
    <li className='nav-item '>
<Link className="nav-link linkInativo active" href="/cadastro" >
              Cadastro
            </Link>
          </li>

          <li className="linkInativo">
            <Link className="nav-link linkInativo" href="/pesquisa">
              Pesquisa
            </Link>
</li>
<div className='container right'>
<li className='nav-item right'>
 <button className='btn btn-primary'>Novo Cadastro</button>
</li>
</div>
</ul>
            </div>
        <FormCadastro {...props} addHandler={props => addNewData(props)} />
        </div>
        </>

  )
}