import React, { useState, useEffect } from 'react';
import './Counter.css'

function Counter() {
    // Déclare une nouvelle variable d'état, qu’on va appeler « count »
    // Déclare une fonction setCount qui permet de modifier la valeur de count
    const [count, setCount] = useState(Number);



    return (
        <div className="conter">
            <label for='counter'>Number :</label>
                <input type="number" id="counter" onChange={e => setCount(e.target.valueAsNumber)} />
                    <p>Le compteur est  à : {count} </p>
                        <button onClick={() => setCount(count + 1)}>
                            +1
                        </button>
                        <button onClick={() => setCount(count - 1)}>
                            -1
                        </button>
        </div>
    );
}

export default Counter;