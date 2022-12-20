
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TdInfos } from '../TdInfos';



export const ListaTable = (lista) => { 
    
    const [listaTable, setListaTable] = useState([]);

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
      if (allUsers) setListaTable(allUsers);
    };

    getAllUsers();
  }, []);

  useEffect(() => {
  }, [listaTable]);

    return (
<table className="table table-striped table-bordered responsive">
                    <thead>
                        <tr>
                            <th scope="col" className='tableHead table-active'>Login</th>
                            <th scope="col" className='tableHead table-active'>Nome</th>
                            <th scope='col' className='tableHead table-active'>Descrição</th>
                            <th scope='col' className='tableHead table-active'>Situação</th>
                            <th scope='col' className='tableHead table-active'>Situação Bloqueado</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        
                        {listaTable.map((item) =>
                            <TdInfos key={item.login} nome={item.nome} telefone={item.telefone} rg={item.rg} cpf={item.cpf} login={item.login} />
                        )}
                    </tbody>
</table>

)
}
