import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './General.css';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    nro_documento: '',
    email: '',
    password: '',
    fecha_nacimiento: '',
    nro_telefono: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://vetesoft.com.py/veteadmin/api/auth/registro/', formData);
      console.log('Respuesta del servidor:', response.data);
      navigate('/Login');
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body-register">
              <h2 className="card-title">Registro</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="first_name">Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Apellidos:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nro_documento">Número de Documento:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nro_documento"
                    name="nro_documento"
                    value={formData.nro_documento}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="fecha_nacimiento"
                    name="fecha_nacimiento"
                    value={formData.fecha_nacimiento}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nro_telefono">Número de Teléfono:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nro_telefono"
                    name="nro_telefono"
                    value={formData.nro_telefono}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
