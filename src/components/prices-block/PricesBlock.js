import React, { useState } from "react";
import "./pricesBlock.css";
import { BackImage, Privilege, TryButtonBlack, TryButtonBlue, SubButtonBlack, SubButtonBlue } from "../../components";


const PricesBlock = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <main className="prices">
      <span className="prices__back">
        <img src={BackImage} alt="Назад"></img>
      </span>
      <div className="prices__title">
        <span className="gradient__text"> Сверхдоступные</span>
        <span className="black__text"> цены</span>
      </div>
      <div className="prices__container">
        <div>
          <svg
            className="svg-bottom"
            width="145"
            height="33"
            viewBox="0 0 145 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 0C2.23858 0 0 2.23858 0 5V22.5C0 25.2614 2.23858 27.5 5 27.5H60.8734L72.5005 33L84.1277 27.5H140C142.761 27.5 145 25.2614 145 22.5V5C145 2.23858 142.761 0 140 0H5Z"
              fill="#9B9DAD"
            />
            <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" fill="white" font-size="13">
    0 пользователей
  </text>
          </svg>
          <div className="top-border">
            <svg
              className="svg-top"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="9"
                fill="white"
                stroke="url(#paint0_linear_1_1795)"
                strokeWidth="4"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_1795"
                  x1="0"
                  y1="11"
                  x2="22"
                  y2="11"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6A11CB" />
                  <stop offset="1" stopColor="#2575FC" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
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
