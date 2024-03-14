import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './General.css';


const Welcome = ({ username }) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">¡Bienvenido!</h2>
              <p>Esta es tu página de bienvenida.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
