import React from "react";
import "./error.css";

const Error = () => {
    return (
        <div className="error-page">
        <h1 className="error-code">404</h1>
        <p className="error-message">Упс... страница не найдена</p>
        </div>
    );
  };
  
  export default Error;