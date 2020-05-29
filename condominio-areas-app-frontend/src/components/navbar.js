import React from 'react';
import NavbarItem from './navbarItem';

const Navbar=props=>{
    return (
      <div className="navbar navbar-expand fixed-top navbar-dark bg-primary">
        <div className="container">
          <a href="#/home" className="navbar-brand"><i className="pi pi-home"></i>Home</a>
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav">
                  <NavbarItem  href="#/cadastro-areas" label="Cadastro de Áreas" />
                  <NavbarItem  href="#/lista-areas" label="Listagem de Áreas" />
                  <NavbarItem  href="#/lista-areas-reservas-aprovadas" label="Listagem de Reservas Aprovadas" />
                  <NavbarItem  href="#/lista-areas-reservas-pendentes" label="Listagem de Reservas Pendentes" />
                  <NavbarItem  href="#/lista-areas-reservas-rejeitadas" label="Listagem de Reservas Rejeitadas" />
              </ul>
          </div>
        </div>
      </div>
    )
}

export default Navbar;