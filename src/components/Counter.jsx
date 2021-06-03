import React, { useState, useEffect } from "react";
import "./Counter.css";

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(Number(1));

  const fizzbuzzchecker = (count) => {
    return count % 15 === 0
      ? "fizzbuzz"
      : count % 3 === 0
      ? "fizz"
      : count % 5 === 0
      ? "buzz"
      : "number";
  };

console.log(fizzbuzzchecker(count))
  return (
    <div className="counter">
      <div className="description">
        <p>Choisissez un nombre entre 1 et 100</p>
        <p>S'il est divisible par 3 le résultat est fizz</p>
        <p>S'il est divisible par 5 le résultat est buzz</p>
        <p>S'il est divisible par 3 et par 5 le résultat est fizzbuzz</p>
      </div>
      <div className="chooseNumber">
        <label for="counter">Inscrivez le directement : </label>
        <input
          type="number"
          id="counter"
          onChange={(e) => setCount(e.target.valueAsNumber)}
        />
        <div className="btn">
          <label for="counter">ou retrouvez le : </label>
          <button
            onClick={() => {
              count <= 1 ? setCount(1) : setCount(count - 1);
            }}
          >
            -1
          </button>
          <button
            onClick={() => {
              count >= 100 ? setCount(100) : setCount(count + 1);
            }}
          >
            +1
          </button>
          <button onClick={() => setCount(0)}>reset</button>
        </div>
        <p>
          Votre choix est :{" "}
          <span style={{ fontSize: "36px", marginLeft: "15px" }}>{count}</span>
        </p>
      </div>
      <div className="results">
        <div>
          Résultat : <span className={`${fizzbuzzchecker(count)}`}>{fizzbuzzchecker(count)}</span>
        </div>
      </div>
    </div>
  );
}

export default Counter;
