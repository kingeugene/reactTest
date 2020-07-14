import React, { useState } from 'react';

export default function (props) {
    let [cnt, setCnt] = useState(0);
    let [min] = useState(props.min);
    let [max] = useState(props.max);

    let increment = () => {
        if (cnt === max) {
            return;
        }

        setCnt(cnt + 1);
    };

    let decrement = () => {
        if (cnt === min) {
            return;
        }

        setCnt(cnt - 1);
    };

    let setValue = (e) => {
        const val = e.target.value;

        if (val > max || val < min) {
            return;
        }

        setCnt(+val);
    };

    return (
        <div>
            <button
                onClick={decrement}
                disabled={cnt === min
            }>Minus 1</button>
            <input value={cnt} onChange={setValue}  style={{margin: 20}} />
            <button onClick={increment} disabled={cnt === max}>Plus 1</button>
        </div>
    )
}
