package com.area.condominio.service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import static java.util.stream.Collectors.*;
import com.area.condominio.api.dto.AreaAddDTO;
import com.area.condominio.api.dto.AreaDTO;
import com.area.condominio.api.dto.StatusDTO;
import com.area.condominio.api.modelmapper.ModelMap;
import com.area.condominio.exception.RegraNegocioException;
import com.area.condominio.model.entity.Area;
import com.area.condominio.model.enums.StatusAreaEnum;
import com.area.condominio.model.enums.StatusPendenciaEnum;
import com.area.condominio.model.repository.AreaRepository;
import com.area.condominio.service.AreaService;
import lombok.extern.slf4j.Slf4j;


@Slf4j
@Service @Transactional
public class AreaService{
	
	@Autowired
	private AreaRepository repository;
	
	@Transactional(readOnly = true)
	public List<AreaDTO> listar() {
		
		log.info("Listando todas as areas cadastradas");
		return repository.findByAllOrderById().stream()
				.map(ModelMap::toModel)
				.collect(toList());
	}
	
	@Transactional(readOnly = true)
	public List<AreaDTO> listarReservasAprovadas() {
		
		log.info("Listando todas as reservas aprovadas");
		return repository.findByAllReservasAprovadas().stream()
				.map(ModelMap::toModel)
				.collect(toList());
	}
	
	@Transactional(readOnly = true)
	public List<AreaDTO> listarReservasPendentes() {
		
		log.info("Listando todas as reservas pendentes");
		return repository.findByAllReservasPendentes().stream()
				.map(ModelMap::toModel)
				.collect(toList());
	}
	
	@Transactional(readOnly = true)
	public List<AreaDTO> listarReservasRejeitadas() {
		
		log.info("Listando todas as reservas rejeitadas");
		return repository.findByAllReservasRejeitadas().stream()
				.map(ModelMap::toModel)
				.collect(toList());
	}
	
	public AreaDTO salvar(AreaAddDTO areaAddDTO) {
		
		log.info("Verificando se a descrição da área já existe no banco");
		Area area = repository.findByDescricao(areaAddDTO.getDescricao());
		
		if(area!=null) throw new RegraNegocioException("Já existe esta área cadastrada!");
		
		log.info("Transforma a descrição em letra minuscula para salvar no banco ");
		String lowerDescricao=areaAddDTO.getDescricao().toLowerCase();
		areaAddDTO.setDescricao(lowerDescricao);
		
		log.info("Cadastrando uma área");
		area=repository.save(ModelMap.toEntity(areaAddDTO));
		
		return ModelMap.toModel(area);
	}

	public void atualizarStatusReserva(Long id, StatusDTO statusDTO) {
		
		log.info("Verificando se a área do Id: "+id+" existe");
		Area area= repository.findById(id).get();
		
		if(area==null) throw new RegraNegocioException("Área não encontrada com id: "+id);
		
		log.info("Verificando se o status veio como cancelamento");
		if(statusDTO.getStatus().equals("CANCELAR")){
			area.setStatus(StatusAreaEnum.RESERVAR);
			area.setStatusPendencia(StatusPendenciaEnum.CANCELADO);
		}else {
			area.setStatus(StatusAreaEnum.RESERVADO);
			area.setStatusPendencia(StatusPendenciaEnum.AGUARDANDO);
		}
		
		log.info("Atualizando o Status da Reserva");
		repository.save(area);
	}

	public void atualizarStatusPendencia(Long id, StatusDTO statusDTO) {
		
		log.info("Atualizando o Status da Pendencia pelo Administrador pela ferramenta Postman");
		
		log.info("Verificando se a área do Id: "+id+" existe");
		Area area= repository.findById(id).get();
		
		if(area==null) throw new RegraNegocioException("Área não encontrada com id: "+id);
		
		log.info("Verifica o Status da Pendência caso veio Rejeitado");
		if(statusDTO.getStatus().equals("REJEITADO")) {
			area.setStatus(StatusAreaEnum.RESERVAR);
			area.setStatusPendencia(StatusPendenciaEnum.REJEITADO);
		}else if(statusDTO.getStatus().equals("APROVADO")) {
			area.setStatusPendencia(StatusPendenciaEnum.APROVADO);
		}
		
		log.info("Atualizando o Status da Pendência");
		repository.save(area);
	}
}
