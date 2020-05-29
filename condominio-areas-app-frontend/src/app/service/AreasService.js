import ApiService from '../ApiService';

export default class AreasService extends ApiService {

    constructor(){
        super('/api/areas');
    }

    alterarStatus(id, status){
        return this.put(`/${id}/atualiza-status`, { status })
    }

    salvar(area){
        return this.post(area);
    }

    listar(){

        return this.get();
    }

    listarReservasAprovadas(){

        return this.getReservas('/reservas-aprovadas');
    }

    listarReservasPendentes(){

        return this.getReservas('/reservas-pendentes');
    }

    listarReservasRejeitadas(){

        return this.getReservas('/reservas-rejeitadas');
    }

    validar(area){
        let erros = null;

        if(!area.descricao){
            erros='O campo Descrição é obrigatório.';
        }
        
      return erros;
    }

}