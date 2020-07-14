import React, { useState } from 'react';

export default function () {
    let [cnt, setCnt] = useState(0);

    let increment = () => {
        setCnt(cnt + 1);
    }

    return (
        <div>
            <strong>{cnt}</strong>
            <br/>
            <button onClick={increment}>Plus 1</button>
        </div>
    )
}
