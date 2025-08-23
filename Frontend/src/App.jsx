import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useState, useEffect } from "react";

export default function App() {
  const API_URL = "http://backend:8080/api/pedidos"
  const [pedidos, setPedidos] = useState([]);
  const [nuevoPedido, setNuevoPedido] = useState({ cliente: "", producto: ""});

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setPedidos(data));
  }, []);

  const crearPedido = () => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoPedido)
    })
      .then(res => res.json())
      .then(p => setPedidos([...pedidos, p]));
  };

  const eliminarPedido = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setPedidos(pedidos.filter(p => p.id !== id)));
  };

  return (
    <div className="p-4">
      <h1>Gestión de Pedidos</h1>

      <div>
        <input
          placeholder="Cliente"
          value={nuevoPedido.cliente}
          onChange={e => setNuevoPedido({ ...nuevoPedido, cliente: e.target.value })}
        />
        <input
          placeholder="Producto"
          value={nuevoPedido.producto}
          onChange={e => setNuevoPedido({ ...nuevoPedido, producto: e.target.value })}
        />
        <button onClick={crearPedido}>Agregar</button>
      </div>

      <ul>
        {pedidos.map(p => (
          <li key={p.id}>
            {p.cliente} - {p.producto} ({p.cantidad})  
            <button onClick={() => eliminarPedido(p.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

