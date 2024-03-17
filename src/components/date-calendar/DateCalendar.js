import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './dateCalendar.css'; // Подключаем CSS для стилизации

const DateCalendar = () => {
  const [value, onChange] = useState(new Date()); // Состояние для текущей выбранной даты

  // Обработчик изменения даты
  const handleDateChange = (date) => {
    onChange(date); // Обновляем выбранную дату
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateChange} // Передаем обработчик изменения даты
        value={value} // Значение текущей выбранной даты
        className="calendar" // Применяем класс для стилизации
      />
    </div>
  );
};

export default DateCalendar;
