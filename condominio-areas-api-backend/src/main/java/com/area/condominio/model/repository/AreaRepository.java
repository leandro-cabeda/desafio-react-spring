package com.area.condominio.model.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.area.condominio.model.entity.Area;

@Repository
public interface AreaRepository extends JpaRepository<Area, Long> {

	Area findByDescricao(String descricao);
	
	@Query("select new Area(a.id,a.descricao,a.status,a.statusPendencia) from Area a order by a.id asc")
	List<Area>findByAllOrderById();
	
	@Query("select new Area(a.id,a.descricao,a.status,a.statusPendencia) from Area a where a.statusPendencia='APROVADO'")
	List<Area>findByAllReservasAprovadas();
	
	@Query("select new Area(a.id,a.descricao,a.status,a.statusPendencia) from Area a where a.statusPendencia='AGUARDANDO'")
	List<Area>findByAllReservasPendentes();
	
	@Query("select new Area(a.id,a.descricao,a.status,a.statusPendencia) from Area a where a.statusPendencia='REJEITADO'")
	List<Area>findByAllReservasRejeitadas();
}
