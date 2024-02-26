import React, { useState, useEffect } from "react";
import "./error.css";
import { Ampersand, Hashtag, Tilde, Triangle, Underscore } from "../components";

const ErrorPage = () => {
  const initialPositions = [
    { x: 50, y: 50 },
    { x: 150, y: 50 },
    { x: 250, y: 50 }, 
    { x: 350, y: 50 },
    { x: 50, y: 150 }, // пять элементов одного svg
    { x: 150, y: 150 },
    { x: 250, y: 150 },
    { x: 350, y: 150 }, // 3 элемента другого svg
    { x: 50, y: 250 },
    { x: 150, y: 250 },
    { x: 250, y: 250 }, // еще 3 элемента другого svg
    { x: 350, y: 250 },
    { x: 50, y: 350 },
    { x: 150, y: 350 }, // еще 3 элемента другого svg
    { x: 250, y: 350 },
    { x: 350, y: 350 }, // еще два элемента другого svg
  ];

  const svgNames = [
    { component: <img src={Ampersand} alt="Ampersand" />, rotation: getRandomRotation() },
    { component: <img src={Hashtag} alt="Hashtag" />, rotation: getRandomRotation() },
    { component: <img src={Tilde} alt="Tilde" />, rotation: getRandomRotation() },
    { component: <img src={Triangle} alt="Triangle" />, rotation: getRandomRotation() },
    { component: <img src={Underscore} alt="Underscore" />, rotation: getRandomRotation() },
  ];

  // Функция для получения случайного угла поворота
  function getRandomRotation() {
    return Math.floor(Math.random() * 360); // Возвращает случайное число от 0 до 359
  }

  // Функция для перемешивания массива в случайном порядке
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const shuffledPositions = shuffleArray(initialPositions);

  return (
    <div className="error-page">
      <h1 className="error-code">404</h1>
      <p className="error-message">Упс... страница не найдена</p>
      <div>
        {shuffledPositions.map((position, index) => (
          <div
            key={index}
            className="svg-wrapper"
            style={{
              position: 'absolute',
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: `rotate(${svgNames[index % svgNames.length].rotation}deg)`,
            }}
          >
            {svgNames[index % svgNames.length].component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ErrorPage; 