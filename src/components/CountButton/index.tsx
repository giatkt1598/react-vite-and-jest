import React, { useState } from 'react'

export default function CountButton() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => { setCount(count + 1) }}>
            {`Count: ${count}. Click me to count++`}
        </button>
    )
}
