import React, { useState } from "react";
import "./creatingLink.css";

const CreatingLink = ({ onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="creating__link">
        <div className="creating__link__header">
          <span className="header__svg">
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 15H4.2C3.07989 15 2.51984 15 2.09202 14.782C1.71569 14.5903 1.40973 14.2843 1.21799 13.908C1 13.4802 1 12.9201 1 11.8V4.2C1 3.0799 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.0799 1 4.2 1H15.8C16.9201 1 17.4802 1 17.908 1.21799C18.2843 1.40973 18.5903 1.71569 18.782 2.09202C19 2.51984 19 3.0799 19 4.2V8M1 5H19M16 17V11M19 14.0008L13 14"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="header__title">Создание ссылки</p>
        </div>
        <form className="creating__link__main">
          <div className="link__input">
            <div className="link__input-title">Ваша ссылка</div>
            <div className="input__container">
              <input
                className="input"
                type="text"
                placeholder="https://app.dub.co/aleksandr-vysochenko"
                value={() => {}}
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="link__input">
            <div className="link__input-title">Короткая ссылка</div>
            <div className="input__container">
              <span className="svg__infinity">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                  <circle
                    cx="17.5"
                    cy="17.5"
                    r="17"
                    stroke="#9A9A9A"
                    stroke-opacity="0.5"
                  />
                  <path
                    d="M19.25 17.5C19.25 19.9162 17.2912 21.875 14.875 21.875H13.125C10.7088 21.875 8.75 19.9162 8.75 17.5C8.75 15.0838 10.7088 13.125 13.125 13.125H13.5625M15.75 17.5C15.75 15.0838 17.7088 13.125 20.125 13.125H21.875C24.2912 13.125 26.25 15.0838 26.25 17.5C26.25 19.9162 24.2912 21.875 21.875 21.875H21.4375"
                    stroke="black"
                    stroke-width="1.28"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              <input
                className="input"
                type="text"
                placeholder="https://nil-url/Ffv3cv.ru"
                value={() => {}}
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="link__input">
            <div className="link__input-title">Тег ссылки</div>
            <div className="input__container">
              <input
                className="input"
                type="text"
                placeholder="Название тега"
                value={() => {}}
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="link__functional"></div>
        </form>
        <div className="creating__link__footer">
          <button className="create__link__button">Создать ссылку</button>
        </div>
      </div>
    </div>
  );
};

export default CreatingLink;
