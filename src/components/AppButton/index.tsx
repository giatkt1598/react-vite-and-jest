import React, { useState } from 'react'

export default function AppButton(props: { children?: any }) {
    return (
        <button
            style={{ color: 'green', background: 'yellow' }}>
            {props.children}
        </button>
    )
}
