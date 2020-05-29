import React from 'react';

class Home extends React.Component{

    render(){
        return (
            <div className="jumbotron offset-2 w-75">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de cadastro de areas.</p>
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead text-center">
                    <a className="btn btn-primary btn-lg" 
                    href="#/cadastro-areas" 
                    role="button"><i className="pi pi-share-alt"></i>  
                     Cadastrar Áreas
                    </a>
                    <a className="btn btn-danger btn-lg" 
                    href="#/lista-areas" 
                    role="button"><i className="pi pi-bars"></i>  
                     Listar Áreas
                    </a>
                </p>
            </div>
        )
    }
}

export default Home;