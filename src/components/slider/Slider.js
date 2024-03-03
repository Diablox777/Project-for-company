import React, { useRef, useState, useEffect } from "react";
import "./slider.css"; 

const Slider = ({ initialRegisteredUsers }) => {
  const [remainder, setRemainder] = useState(0);
  const CircleRef = useRef(null);
  const CoverRef = useRef(null);
  const ContainerRef = useRef(null);
  const TextRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [rightValue, setRightValue] = useState(0);

  useEffect(() => {
    setContainerWidth(CircleRef.current.offsetParent.offsetWidth);
  }, []);

  useEffect(() => {
    const newPosition = (containerWidth - 100) * (remainder / 10000);
    CircleRef.current.style.transform = `translateX(${86 + newPosition}px) translateY(${-25}%)`;
    CoverRef.current.style.width = `${100 + newPosition}px`;
  }, [remainder]);

  useEffect(() => {
    determineRangeAndRemainder(initialRegisteredUsers);
  }, [initialRegisteredUsers]);

  const determineRangeAndRemainder = (users) => {
    const rangeNumber = Math.floor(users / 10000);
    const calculatedRightValue = (rangeNumber + 1) * 10000;
    setRemainder(users % 10000);
    setRightValue(calculatedRightValue);
  };

  return (
      <div className="slider-container" ref={ContainerRef}>
        <p className="slider-limit">{rightValue}</p>
        <div className="slider-circle" ref={CircleRef}>
          <div className="slider-text" ref={TextRef}>
            <p className="users-value">{initialRegisteredUsers} пользователей</p>
          </div>
        </div>
        <div className="slider-cover" ref={CoverRef}></div>
        </div>
  );
};

export default Slider;
