package com.area.condominio.api.modelmapper;

import org.modelmapper.ModelMapper;

import com.area.condominio.api.dto.AreaAddDTO;
import com.area.condominio.api.dto.AreaDTO;
import com.area.condominio.model.entity.Area;

public class ModelMap {
	
	public static AreaDTO toModel(Area area)
	{
		ModelMapper modelMapper = new ModelMapper();
		return modelMapper.map(area, AreaDTO.class);
	}
	
	public static Area toEntity(AreaAddDTO area)
	{
		ModelMapper modelMapper = new ModelMapper();
		return modelMapper.map(area, Area.class);
	}

}
