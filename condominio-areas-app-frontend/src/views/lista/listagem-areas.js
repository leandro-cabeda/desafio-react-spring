import React from 'react';

import * as messages from '../../components/toastr';
import { withRouter } from 'react-router-dom';
import AreasService from '../../app/service/AreasService';
import CardListagem from '../../components/card-listagem';

const ListagemTable=props=>{

    const rows = props.areas.map( area=> {
        return (
            <tr key={area.id}>
                <td>{area.descricao}</td>
                <td>
                    <button className="btn btn-success" title="Reservar"
                            hidden={ area.status === 'RESERVADO'}
                            onClick={e => props.alterarStatus(area, 'RESERVADO')} 
                            type="button">
                            <i className="pi pi-circle-off"></i>
                    </button>
                    <button className="btn btn-primary"  title="Reservado"
                            disabled={ area.status === 'RESERVADO'}
                            hidden={ area.status === 'RESERVAR' || area.status === null} 
                            type="button">
                            <i className="pi pi-check-circle"></i>
                    </button>
                    <button className="btn btn-warning"  title="Cancelar Reserva"
                            hidden={ area.status === 'RESERVAR' || area.status === null}
                            onClick={e => props.alterarStatus(area, 'CANCELAR')}
                            type="button">
                            <i className="pi pi-times-circle"></i>
                    </button>
                </td>
            </tr>
        )
    } );

    return (
        <div className="table-responsive mt-2">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Descrição</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}


class Areas extends React.Component {

    state = {
        listaAreas : []
    }

    constructor(){
        super();
        this.service = new AreasService();
    }

    componentDidMount=()=> this.carregarLista();

    carregarLista=()=>{
        this.service.listar()
            .then( resposta => {
                const lista = resposta.data;
                
                if(lista.length < 1){
                    messages.mensagemAlert("Nenhum resultado encontrado.");
                }
                this.setState({ listaAreas: lista });
            }).catch( error => {
                messages.mensagemErro(error);
            });
    }

    preparaFormularioCadastro = () => {
        this.props.history.push('/cadastro-areas');
    }

    alterarStatus = (area, status) => {
        this.service
            .alterarStatus(area.id, status)
            .then(() => {
                this.carregarLista();
                messages.mensagemSucesso("Status atualizado com sucesso!")
            });
    }
    render(){

        return (
            <CardListagem title="Listagem de Áreas">
                <div className="row">
                    <div className="col-12 text-center">
                        <button onClick={this.preparaFormularioCadastro} 
                            type="button" 
                            className="btn btn-success">
                            <i className="pi pi-plus"></i>Cadastrar Áreas
                        </button>
                    </div>
                    <div className="col-12">
                        <div className="bs-component">
                            <ListagemTable areas={this.state.listaAreas}
                                              alterarStatus={this.alterarStatus} />
                        </div>
                    </div>  
                </div>           
            </CardListagem>

        )
    }

}

export default withRouter(Areas);
