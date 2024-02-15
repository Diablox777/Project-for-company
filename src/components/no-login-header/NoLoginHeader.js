import React from "react";
import "./noLoginHeader.css";
import LogoImage from "../../img/logo-icon.svg";

const NoLoginHeader = () => {
  return (
    <header className="no__login__header">
      <p className="prices__button">Цены</p>
      <span>
        <img src={LogoImage} alt="Логотип"></img>
      </span>
      <p className="prices__button login">Войти</p>
      <button className="registration__button">Зарегистрироваться</button>
    </header>
  );
};

export default NoLoginHeader;
