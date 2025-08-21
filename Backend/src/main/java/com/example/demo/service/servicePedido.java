package com.example.demo.service;

import com.example.demo.entity.pedido;
import com.example.demo.repository.pedidoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class servicePedido {
    private final pedidoRepository repo;

    public servicePedido(pedidoRepository repo) {
        this.repo = repo;
    }

    public List<pedido> listar() { return repo.findAll(); }
    public pedido crear(pedido pedido) { return repo.save(pedido); }
    public void eliminar(Long id) { repo.deleteById(id); }
}

