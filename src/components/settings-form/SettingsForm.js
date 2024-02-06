import React from "react";
import "./settings-form.css";

const SettingsForm = () => {
  return (
    <>
      <h4 className="settings__title">Настройки</h4>
      <div className="settings__controls">
        <div className="settings__controls__menu">
          <div className="settings__controls__menu-item">Основные</div>
        </div>
        <form className="settings__controls__form" action="#">
          <div className="settings__controls__form-item">
            <p className="title">Ваше имя пользователя</p>
            <p className="description">Оно будет отображаться в "Nil"</p>
            <input
              className="input"
              type="text"
              placeholder="username"
              onChange={() => {}}
            />
          </div>
          <div className="settings__controls__form-footer">
            <p className="description">Не более 32 символов</p>
            <button className="button">Сохранить</button>
          </div>
          <div className="settings__controls__form-item">
            <p className="title">Ваш email</p>
            <p className="description">Введите вашу электронную почту</p>
            <input
              className="input"
              type="text"
              placeholder="email"
              onChange={() => {}}
            />
          </div>
          <div className="settings__controls__form-footer">
            <p className="description">Email должен быть действительным</p>
            <button className="button">Сохранить</button>
          </div>
          <div className="settings__controls__form-item redborder">
            <p className="title">Удалить аккаунт</p>
            <p className="description">
              Учетная запись и все связанные с ней ссылки будут полностью
              удалены
            </p>
          </div>
          <div className="settings__controls__form-footer redborder">
            <p className="description"></p>
            <button className="button red">Удалить аккаунт</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SettingsForm;
