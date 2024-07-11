import React from "react";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Página no encontrada</p>
      <Link to="/" className="not-found__link">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
