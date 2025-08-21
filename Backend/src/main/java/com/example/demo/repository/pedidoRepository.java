package com.example.demo.repository;

import com.example.demo.entity.pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface pedidoRepository extends JpaRepository<pedido, Long> {}
