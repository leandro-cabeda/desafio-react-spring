package com.area.condominio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class AreasApplication implements WebMvcConfigurer {
	
	public static void main(String[] args) {
		SpringApplication.run(AreasApplication.class, args);
	}

}
