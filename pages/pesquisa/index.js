import axios from 'axios';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import Header from '../componentes/Header';
import InputSearch from '../componentes/InputSearch';
import { ListaTable } from '../componentes/ListaTable';
import { TdInfos } from '../componentes/TdInfos';

export default function Pesquisa() {
    

    const [lista, setLista] = useState([]);

    const retrieveUsers = async () => {
        const response = await axios({
            url:"http://localhost:8080/crud/pesquisar",
        method: "GET",
        mode: "no-cors",
        headers:{
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin' : '*',
            
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'

        }});
        return response.data;
      };

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retrieveUsers();
      if (allUsers) setLista(allUsers);
    };

    getAllUsers();
  }, []);

  useEffect(() => {
  }, [lista]);

    return (
        <>

            <Header titulo="SMPEP - Pesquisa" />

            <div className="container-fluid">
            <div className='container-fluid '>
<ul className="nav nav-tabs navtop">
    <li className='linkInativo'>
<Link className="nav-link linkInativo" href="/cadastro" >
              Cadastro
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" href="/pesquisa">
              Pesquisa
            </Link>
</li>

</ul>
            </div>

              <div className='container-fluid card'>
               <section className='container-fluid sectionPesquisaUp card'>
              <InputSearch lista={lista} />
                </section>
                <section className='container-fluid sectionPesquisaDown card-body'>
                   <ListaTable lista={lista}/>
                </section>
            </div>
            </div>
        </>

    )
}