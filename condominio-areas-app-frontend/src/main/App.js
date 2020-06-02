import React from 'react';

import Rotas from './rotas';
import Navbar from '../components/navbar';

import 'toastr/build/toastr.min';
import 'bootswatch/dist/flatly/bootstrap.css';
import '../style.css';
import 'toastr/build/toastr.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const App=props=> {

    return(
      <div>
        <Navbar />
        <div className="container">    
            <Rotas />
        </div>
      </div>
    )
}

export default App;