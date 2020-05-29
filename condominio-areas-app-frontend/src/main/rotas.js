import React from 'react';

import Home from '../views/home';
import CadastroAreas from '../views/cadastro/cadastroAreas';
import ListagemAreas from '../views/lista/listagem-areas';
import ListagemAreasReservasAprovadas from '../views/lista/listagem-areas-reservas-aprovadas';
import ListagemAreasReservasPendentes from '../views/lista/listagem-areas-reservas-pendentes';
import ListagemAreasReservasRejeitadas from '../views/lista/listagem-areas-reservas-rejeitadas';

import { Route, Switch, HashRouter } from 'react-router-dom';

const Rota=( { component: Component, ...props } )=>{
    return (
        <Route {...props} render={ (componentProps) => {
            
                return (
                    <Component {...componentProps} />
                )
            
        }}  />
    )
}

const Rotas=()=>{
    return (
        <HashRouter>
            <Switch>
                <Rota  path="/home" component={Home} />
                <Rota path="/cadastro-areas" component={CadastroAreas} />
                <Rota  path="/lista-areas" component={ListagemAreas} />
                <Rota  path="/lista-areas-reservas-aprovadas" component={ListagemAreasReservasAprovadas} />
                <Rota  path="/lista-areas-reservas-pendentes" component={ListagemAreasReservasPendentes} />
                <Rota  path="/lista-areas-reservas-rejeitadas" component={ListagemAreasReservasRejeitadas} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas;