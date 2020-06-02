import React,{useState} from 'react';

import { withRouter } from 'react-router-dom';
import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import AreasService from '../../app/service/AreasService';
import * as messages from '../../components/toastr';

const CadastroAreas=props=>{

    let [descricao,setDescricao]=useState("");

    const service = new AreasService();

    const cadastrar = () => {
        
        const area = descricao;
        const validacaoMSG = service.validar(area);

        if(validacaoMSG!=null){
            messages.mensagemErro(validacaoMSG);
            return false;
        }

        service.salvar(area)
            .then( response => {
                messages.mensagemSucesso('Área cadastrado com sucesso!');
                props.history.push('/lista-areas');
            }).catch(error => {

                const err={
                    text:error.message,
                    mensagem:"Já existe esta área cadastrada!"
                }

                messages.mensagemErro(err.text+"! "+err.mensagem+"!");
            });
    }

   const cancelar = () => {
        props.history.push('/home');
    }

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
                                       onChange={e => setDescricao({descricao: e.target.value})} />
                            </FormGroup>
                            <div className="text-center">
                                <button onClick={cadastrar} type="button" className="btn btn-success">
                                    <i className="pi pi-save"></i> Salvar
                                </button>
                                <button onClick={cancelar} type="button" className="btn btn-danger">
                                    <i className="pi pi-times"></i> Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
}


export default withRouter(CadastroAreas);