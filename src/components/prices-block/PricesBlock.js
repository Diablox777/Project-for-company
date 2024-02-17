import React from "react";
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
   </main> 
  );
};

export default PricesBlock;