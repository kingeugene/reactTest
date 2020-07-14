import React, { useState } from 'react';

export default function (props) {
    let [cnt, setCnt] = useState(0);
    let [min] = useState(props.min);
    let [max] = useState(props.max);

    let increment = () => {
        cnt !== max && setCnt(cnt + 1);
    };

    let decrement = () => {
        cnt !== min && setCnt(cnt - 1);
    };

    return (
        <div>
            <button onClick={decrement} disabled={cnt === min}>Minus 1</button>
            <strong style={{margin: 20}}>{cnt}</strong>
            <button onClick={increment} disabled={cnt === max}>Plus 1</button>
        </div>
    )
}
