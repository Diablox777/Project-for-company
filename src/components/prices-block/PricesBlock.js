import React, { useState } from "react";
import "./pricesBlock.css";
import {
  BackImage,
  Privilege,
  TryButtonBlack,
  TryButtonBlue,
  SubButtonBlack,
  SubButtonBlue,
  Slider
} from "../../components";

const PricesBlock = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const registeredUsers = 6000;

  return (
    <main className="prices">
      <span className="prices__back">
        <img src={BackImage} alt="Назад"></img>
      </span>
      <div className="prices__title">
        <span className="gradient__text"> Сверхдоступные</span>
        <span className="black__text"> цены</span>
      </div>

      <Slider initialRegisteredUsers={registeredUsers} /> {/* Используем компонент Slider */}

      <div className="prices__block">
        <div className="prices__block-item">
          <p className="block__item__title">Бесплатно</p>
          <p className="block__item__description">
            Для хобби и побочных проектов
          </p>
          <div className="block__item__price">
            <p className="price">0 ₽</p>
          </div>
          <p className="block__item__description">Бесплатно навсегда</p>
          <div className="block__item__privilege">
            <div className="block__item__privilege-item">
              <span className="prices__back">
                <img src={Privilege} alt="Преимущества:"></img>
              </span>
              <p>25 ссылок в месяц</p>
            </div>
            <div className="block__item__privilege-item">
              <span className="prices__back">
                <img src={Privilege} alt="Преимущества:"></img>
              </span>
              <p>5 тыс. отслеживаемых кликов в месяц</p>
            </div>
            <div className="block__item__privilege-item">
              <span className="prices__back">
                <img src={Privilege} alt="Преимущества:"></img>
              </span>
              <p>30 дневное сохранение аналитики</p>
            </div>
          </div>
          <div className="button__wrapper">
            <img
              className="try__button"
              src={isHovered1 ? TryButtonBlue : TryButtonBlack}
              alt="Try Button"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            />
          </div>
        </div>
        <div className="prices__block-item center">
          <p className="block__item__title">Профессиональный</p>
          <p className="block__item__description">
            Для стартапов и малого бизнеса
          </p>
          <div className="block__item__price">
            <p className="price">1 999 ₽</p>
            <p className="monthly">/месяц</p>
          </div>
          <p className="block__item__description">Оплачивается ежегодно</p>
          <div className="block__item__privilege">
            <div className="block__item__privilege-item">
              <span className="prices__back">
                <img src={Privilege} alt="Преимущества:"></img>
              </span>
              <p>1000 ссылок в месяц</p>
            </div>
            <div className="block__item__privilege-item">
              <span className="prices__back">
                <img src={Privilege} alt="Преимущества:"></img>
              </span>
              <p>50 тыс. отслеживаемых кликов в месяц</p>
            </div>
            <div className="block__item__privilege-item">
              <span className="prices__back">
                <img src={Privilege} alt="Преимущества:"></img>
              </span>
              <p>Сохранение аналитики в течение 1 года</p>
            </div>
            <div className="block__item__privilege-item">
              <span className="prices__back">
                <img src={Privilege} alt="Преимущества:"></img>
              </span>
              <p>10 пользовательских доменов</p>
            </div>
            <div className="block__item__privilege-item">
              <span className="prices__back">
                <img src={Privilege} alt="Преимущества:"></img>
              </span>
              <p>5 пользователей</p>
            </div>
          </div>
          <div className="button__wrapper">
            <img
              className="try__button"
              src={isHovered2 ? SubButtonBlue : SubButtonBlack}
              alt="Try Button"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            />
          </div>
        </div>
        <div className="prices__block-item">
          <p className="block__item__title">Бизнес</p>
          <p className="block__item__description">Для более крупных команд </p>
          <div className="block__item__price">
            <p className="price">4 999 ₽</p>
            <p className="monthly">/месяц</p>
          </div>
          <p className="block__item__description">Оплачивается ежегодно</p>
          <div className="block__item__privilege">
            <div className="block__item__privilege-item">
              <span className="prices__back">
                <img src={Privilege} alt="Преимущества:"></img>
              </span>
              <p>5000 ссылок в месяц</p>
            </div>
            <div className="block__item__privilege-item">
              <span className="prices__back">
                <img src={Privilege} alt="Преимущества:"></img>
              </span>
              <p>250 тыс. отслеживаемых кликов в месяц</p>
            </div>
            <div className="block__item__privilege-item">
              <span className="prices__back">
                <img src={Privilege} alt="Преимущества:"></img>
              </span>
              <p>Сохранение аналитики в течение 2 лет</p>
            </div>
            <div className="block__item__privilege-item">
              <span className="prices__back">
                <img src={Privilege} alt="Преимущества:"></img>
              </span>
              <p>20 пользовательских доменов</p>
            </div>
            <div className="block__item__privilege-item">
              <span className="prices__back">
                <img src={Privilege} alt="Преимущества:"></img>
              </span>
              <p>15 пользователей</p>
            </div>
            <div className="block__item__privilege-item">
              <span className="prices__back">
                <img src={Privilege} alt="Преимущества:"></img>
              </span>
              <p>Повышенная поддержка</p>
            </div>
            <div className="block__item__privilege-item">
              <span className="prices__back">
                <img src={Privilege} alt="Преимущества:"></img>
              </span>
              <p>Индивидуальный брендинг</p>
            </div>
          </div>
          <div className="button__wrapper">
            <img
              className="try__button"
              src={isHovered3 ? SubButtonBlue : SubButtonBlack}
              alt="Sub Button"
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PricesBlock;
