package com.area.condominio.model.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import com.area.condominio.model.enums.StatusAreaEnum;
import com.area.condominio.model.enums.StatusPendenciaEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "areas", schema = "public")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Area {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique = true)
	private String descricao;
	
	@Enumerated(value = EnumType.STRING)
	private StatusAreaEnum status;
	
	@Column(name = "status_pendencia")
	@Enumerated(value = EnumType.STRING)
	private StatusPendenciaEnum statusPendencia;

}
