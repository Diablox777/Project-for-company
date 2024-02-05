import React from "react";
import "./settings-form.css";

const SettingsForm = () => {
  return (
    <>
      <h4 className="settings__title">Settings</h4>
      <div className="settings__controls">
        <div className="settings__controls__menu">
          <div className="settings__controls__menu-item">Basic</div>
        </div>
        <form className="settings__controls__form" action="#">
          <div className="settings__controls__form-item">
            <p className="title">Your username</p>
            <p className="description">It will be displayed in "Nil"</p>
            <input className="input"
              type="text"
              placeholder="username"
              value= ""
              onChange="#"
            />
          </div>
          <div className="settings__controls__form-footer">
            <p className="description">Maximum 32 characters</p>
            <button className="button">Save</button>
          </div>
          <div className="settings__controls__form-item">
            <p className="title">Your email</p>
            <p className="description">Link your email</p>
            <input className="input"
              type="text"
              placeholder="email"
              value= ""
              onChange="#"
            />
          </div>
          <div className="settings__controls__form-footer">
            <p className="description">The email must be valid</p>
            <button className="button">Save</button>
          </div>
          <div className="settings__controls__form-item redborder">
            <p className="title">Delete account</p>
            <p className="description">
              The account and all associated links will be permanently deleted
            </p>
          </div>
          <div className="settings__controls__form-footer redborder">
            <p className="description"></p>
            <button className="button red">Delete account</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SettingsForm;
