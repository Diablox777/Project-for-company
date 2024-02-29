import React, {useLayoutEffect, useRef, useState, useEffect } from "react";
import "./slider.css"; // Подключаем файл со стилями

const Slider = ({ initialRegisteredUsers }) => {
  const [registeredUsers, setRegisteredUsers] = useState(initialRegisteredUsers);
  const [range, setRange] = useState("");
  const [remainder, setRemainder] = useState(0);
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Вызываем функцию при изменении количества зарегистрированных пользователей
    determineRangeAndRemainder(registeredUsers);
  }, [registeredUsers]);

  // Функция для определения диапазона зарегистрированных пользователей и остатка от деления
  const determineRangeAndRemainder = (users) => {
    const rangeNumber = Math.floor(users / 5000);
    const leftValue = rangeNumber * 5000;
    const rightValue = (rangeNumber + 1) * 5000;
    setRange(`${leftValue}-${rightValue}`);
    setRemainder(users % 5000);
  }
  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="slider-container">
        <div className="slider-circle" ref={ref}></div>
        <div className="slider-cover" style={{ width: width }}></div>
      </div>
      <div>
        <p>Количество зарегистрированных пользователей: {registeredUsers}</p>
        <p>Диапазон: {range}</p>
        <p>Остаток от деления на 5000: {remainder}</p>
      </div>
    </>
  );
};

export default Slider;
