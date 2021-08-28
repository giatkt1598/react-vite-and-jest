import React, { useState } from 'react';

const CheckboxWithLabel = (props: { labelOn: any, labelOff: any }) => {
    const [isChecked, setIsChecked] = useState(false);

    const onChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label>
            <input type="checkbox" checked={isChecked} onChange={onChange} />
            {isChecked ? props.labelOn : props.labelOff}
        </label>
    );
};

export default CheckboxWithLabel;