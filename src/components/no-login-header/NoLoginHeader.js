import React, { useState } from "react";
import "./noLoginHeader.css";
import LogoImage from "../../img/logo-icon.svg";
import CreatingLink from "../creating-link/CreatingLink";

const NoLoginHeader = () => {
  const [isCreatingLinkOpen, setIsCreatingLinkOpen] = useState(false);

  const toggleCreatingLink = () => {
    setIsCreatingLinkOpen(!isCreatingLinkOpen);
  };

  const closeCreatingLink = () => {
    setIsCreatingLinkOpen(false);
  };

  return (
    <header className="no__login__header">
      {isCreatingLinkOpen && <CreatingLink onClose={closeCreatingLink} />}
      <p className="prices__button">Цены</p>
      <span className="logo">
        <img src={LogoImage} alt="Логотип" />
      </span>
      <div className="no__login__header__right">
        <p className="prices__button login">Войти</p>
        <button className="registration__button" onClick={toggleCreatingLink}>Зарегистрироваться</button>
      </div>
    </header>
  );
};

export default NoLoginHeader;