import React, {useState} from 'react';

import * as messages from '../../components/toastr';
import { withRouter } from 'react-router-dom';
import AreasService from '../../app/service/AreasService';
import CardListagem from '../../components/card-listagem';

const ListagemTable=({...props})=>{

    const rows = props.reservas.map( reserva=> {
        return (
            <tr key={reserva.id}>
                <td>{reserva.descricao}</td>
                <td>{reserva.status_pendencia}</td>
            </tr>
        )
    } );

    return (
        <div className="table-responsive mt-2">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Descrição</th>
                        <th scope="col">Situação</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}


const AreasReservasAprovadas=props=> {

    let [listaReservas,setListaAreas]=useState([]);

    const service = new AreasService();

        service.listarReservasAprovadas()
            .then( resposta => {
                const lista = resposta.data;
                
                if(lista.length < 1){
                    messages.mensagemAlert("Nenhum resultado encontrado.");
                }
                setListaAreas(listaReservas= lista);
            }).catch( error => {
                messages.mensagemErro(error);
            });

        return (
            <CardListagem title="Listagem de Reservas Aprovadas">
                <div className="row">
                    <div className="col-12">
                        <div className="bs-component">
                            <ListagemTable reservas={listaReservas}/>
                        </div>
                    </div>  
                </div>           
            </CardListagem>

        )
}

export default withRouter(AreasReservasAprovadas);
