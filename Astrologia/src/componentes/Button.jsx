// src/components/Button.jsx
/*import React from 'react';

function Button({ label, onClick }) {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;*/
import React from 'react';

function Button({ label, onClick }) {
    return (
        <button onClick={onClick} style={{ margin: "10px", padding: "10px", cursor: "pointer" }}>
            {label}
        </button>
    );
}

export default Button;



