package com.area.condominio.api.resource;

import java.net.URI;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.area.condominio.api.dto.StatusDTO;
import com.area.condominio.api.dto.AreaAddDTO;
import com.area.condominio.api.dto.AreaDTO;
import com.area.condominio.service.AreaService;
import lombok.RequiredArgsConstructor;

@SuppressWarnings("rawtypes")
@RestController
@RequestMapping("/api/areas")
@RequiredArgsConstructor
public class AreaResource {

	private final AreaService service;
	
	@GetMapping
	public ResponseEntity listar() {
		
		return ResponseEntity.ok(service.listar());
	}
	
	@GetMapping("/reservas-aprovadas")
	public ResponseEntity listarReservasAprovadas() {
		
		return ResponseEntity.ok(service.listarReservasAprovadas());
	}
	
	@GetMapping("/reservas-pendentes")
	public ResponseEntity listarReservasPendentes() {
		
		return ResponseEntity.ok(service.listarReservasPendentes());
	}
	
	@GetMapping("/reservas-rejeitadas")
	public ResponseEntity listarReservasRejeitadas() {
		
		return ResponseEntity.ok(service.listarReservasRejeitadas());
	}
	
	@PostMapping
	public ResponseEntity salvar(@RequestBody AreaAddDTO areaAddDto ) {
			
			AreaDTO areaDTO = service.salvar(areaAddDto);
			URI uri= getUri(areaDTO.getId());
			
			return ResponseEntity.created(uri).body(areaDTO);
	}
	
	@PutMapping("/{id}/atualiza-status")
	public ResponseEntity atualizarStatusReserva(@PathVariable("id") Long id ,@RequestBody StatusDTO dto ) {
		
		service.atualizarStatusReserva(id, dto);
		
		return ResponseEntity.ok("OK");
	}
	
	@PutMapping("/{id}/atualiza-status-pendencia")
	public ResponseEntity atualizarStatusPendencia(@PathVariable("id") Long id,@RequestBody StatusDTO dto ) {
		
		service.atualizarStatusPendencia(id, dto);
		
		return ResponseEntity.ok("OK");
	}
	
	private URI getUri(Long id){
		
		return ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(id).toUri();
	}
}
