import React from 'react';

import { withRouter } from 'react-router-dom';
import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import AreasService from '../../app/service/AreasService';
import * as messages from '../../components/toastr';

class CadastroAreas extends React.Component{

    state = {
        descricao : ''
    }

    constructor(){
        super();
        this.service = new AreasService();
    }

    cadastrar = () => {

        const {descricao } = this.state;        
        const area = {descricao };
        const validacaoMSG = this.service.validar(area);

        if(validacaoMSG!=null){
            messages.mensagemErro(validacaoMSG);
            return false;
        }

        this.service.salvar(area)
            .then( response => {
                messages.mensagemSucesso('Área cadastrado com sucesso!');
                this.props.history.push('/lista-areas');
            }).catch(error => {

                const err={
                    text:error.message,
                    mensagem:"Já existe esta área cadastrada!"
                }

                messages.mensagemErro(err.text+"! "+err.mensagem+"!");
            });
    }

    cancelar = () => {
        this.props.history.push('/home');
    }

    render(){
        return (
            <Card title="Cadastro de Áreas">
                <div className="row">
                    <div className="col-12">
                        <div className="bs-component">
                            <FormGroup label="Descrição: *" htmlFor="descricao">
                                <input type="text" 
                                       id="descricao" 
                                       className="form-control text-center text-primary"
                                       name="descricao"
                                       onChange={e => this.setState({descricao: e.target.value})} />
                            </FormGroup>
                            <div className="text-center">
                                <button onClick={this.cadastrar} type="button" className="btn btn-success">
                                    <i className="pi pi-save"></i> Salvar
                                </button>
                                <button onClick={this.cancelar} type="button" className="btn btn-danger">
                                    <i className="pi pi-times"></i> Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroAreas);