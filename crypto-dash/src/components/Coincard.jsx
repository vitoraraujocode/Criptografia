import React from "react";

const Coincard = ({ coin }) => {
  return (
    <div>
      <div className="coin-card">
        <div className="coin-header">
          <img src={coin.image} alt={coin.name} className="coin-image" />

          <div>
            <h2>{coin.name}</h2>
            oi
            <p className="symbol">{coin.symbol.toUpperCase()}</p>
          </div>
        </div>
        <p>${coin.current_price.toLocaleString()}</p>
        <p
          className={
            coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
          }
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
        <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Coincard;
