import React, { useState } from "react";
import "./pricesBlock.css";
import BackImage from "../../img/back.svg";

const PricesBlock = () => {
  return (
    <main className="prices">
      <span className="prices__back">
        <img src={BackImage} alt="Назад"></img>
      </span>
      <div className="prices__title">
        <span class="gradient-text">Сверхдоступные</span>
        <span class="black-text"> цены</span>
      </div>
      <div className="prices__container">
      <div>
      <svg className="svg-bottom" width="145" height="33" viewBox="0 0 145 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V22.5C0 25.2614 2.23858 27.5 5 27.5H60.8734L72.5005 33L84.1277 27.5H140C142.761 27.5 145 25.2614 145 22.5V5C145 2.23858 142.761 0 140 0H5Z" fill="#9B9DAD"/>
      </svg>
      <div className="top-border">
        <svg className="svg-top" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="9" fill="white" stroke="url(#paint0_linear_1_1795)" strokeWidth="4"/>
          <defs>
            <linearGradient id="paint0_linear_1_1795" x1="0" y1="11" x2="22" y2="11" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6A11CB"/>
              <stop offset="1" stopColor="#2575FC"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      </div>
      </div>
      <div className="prices__block">
        <div className="prices__block-item">
          <p className="block__item__title">Бесплатно</p>
          <p className="block__item__description">Для хобби и побочных проектов</p>
          <div className="block__item__price">
            <p className="price">0 ₽</p>
            <p className="monthly"></p>
          </div>
          <p className="subscription__info">Бесплатно навсегда</p>
            <div className="block__item__privilege"></div>
            <div className="block__item__privilege"></div>
            <div className="block__item__privilege"></div>
          </div>

          <div className="prices__block-item">
          <p className="block__item__title">Бесплатно</p>
          <p className="block__item__description">Для хобби и побочных проектов</p>
          <div className="block__item__price">
            <p className="price">0 ₽</p>
            <p className="monthly"></p>
          </div>
          <p className="subscription__info">Бесплатно навсегда</p>
            <div className="block__item__privilege"></div>
            <div className="block__item__privilege"></div>
            <div className="block__item__privilege"></div>
          </div>

          <div className="prices__block-item">
          <p className="block__item__title">Бесплатно</p>
          <p className="block__item__description">Для хобби и побочных проектов</p>
          <div className="block__item__price">
            <p className="price">0 ₽</p>
            <p className="monthly"></p>
          </div>
          <p className="subscription__info">Бесплатно навсегда</p>
            <div className="block__item__privilege"></div>
            <div className="block__item__privilege"></div>
            <div className="block__item__privilege"></div>
          </div>
          
        </div>
    </main>
  );
};

export default PricesBlock;
