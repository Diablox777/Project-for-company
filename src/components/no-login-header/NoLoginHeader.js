import React from "react";
import "./noLoginHeader.css";
import LogoImage from "../../img/logo-icon.svg";

const NoLoginHeader = () => {
  return (
    <header className="no__login__header">
      
      <p className="prices__button">Цены</p>
      <span className="logo">
        <img src={LogoImage} alt="Логотип"></img>
      </span>
      <div className="no__login__header__right">
      <p className="prices__button login">Войти</p>
      <button className="registration__button">Зарегистрироваться</button>
      </div>
    </header>
  );
};

export default NoLoginHeader;
