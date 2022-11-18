import React, { useState, useEffect } from "react";

const Buscador = () => {
  const [usuario, setUsuario] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const URL = " https://jsonplaceholder.typicode.com/users";

  const getBusqueda = async () => {
    const respuesta = await fetch(URL);
    const data = await respuesta.json();
    setUsuario(data);
  };
  const busquedaFiltrada = (e) => {
    setBusqueda(e.target.value);
  };
  // forma mas larga

  /* let resultado = [];
  if (!busqueda) {
    resultado = usuario;
  } else {
    resultado = usuario.filter((el) =>
      el.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }*/

  // forma mas avanzada

  const resultado = !busqueda
    ? usuario
    : usuario.filter((el) =>
        el.name.toLowerCase().includes(busqueda.toLowerCase())
      );

  useEffect(() => {
    getBusqueda();
  }, []);

  return (
    <div>
      <h1 className="text-center">Buscador de Usuarios</h1>
      <input
        type="text"
        className="form-control "
        placeholder="Ingrese usuario"
        value={busqueda}
        onChange={busquedaFiltrada}
      />
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-primary text-white">
            <th>Nombre</th>
            <th>Nombre de Usuario</th>
          </tr>
        </thead>
        <tbody>
          {resultado.map((el) => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Buscador;
