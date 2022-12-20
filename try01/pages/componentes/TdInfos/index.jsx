
import React, { useEffect, useState } from 'react';


export const TdInfos = ({nome, telefone, rg, cpf, email, login, senha}) =>{

    return(
       <>
            <tr key={login}>                                
                <td >{login}</td>
                <td >{nome}</td>
                <td></td>
                <td>Ativo</td>
                <td>Desbloqueado</td>
                <td hidden>{email}</td>
                <td hidden>{telefone}</td>
                <td hidden>{rg}</td>
                <td hidden>{cpf}</td>
                <td hidden>{senha}</td>

            </tr>
        
        </>

    )
}