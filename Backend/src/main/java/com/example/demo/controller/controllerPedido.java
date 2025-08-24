package com.example.demo.controller;

import com.example.demo.entity.pedido;
import com.example.demo.service.servicePedido;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/pedidos")
public class controllerPedido {
    private final servicePedido service;

    public controllerPedido(servicePedido service) {
        this.service = service;
    }

    @GetMapping
    public List<pedido> listar() {
        return service.listar();
    }

    @PostMapping
    public pedido crear(@RequestBody pedido pedido) {
        return service.crear(pedido);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}

