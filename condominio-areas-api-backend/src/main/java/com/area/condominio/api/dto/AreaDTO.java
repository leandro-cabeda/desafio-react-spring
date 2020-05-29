package com.area.condominio.api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AreaDTO {

	private Long id;
	private String descricao;
	private String status;
	
	@JsonProperty(value = "status_pendencia")
	private String statusPendencia;
}
