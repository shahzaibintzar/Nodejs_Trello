import React, { useState } from 'react';

const DynamicInputFields = () => {
    const [inputFields, setInputFields] = useState(['']);

    const handleAddField = () => {
        setInputFields([...inputFields, '']);
    };

    const handleInputChange = (index, event) => {
        const newInputFields = [...inputFields];
        newInputFields[index] = event.target.value;
        setInputFields(newInputFields);
    };

    const handleGetLatestInput = () => {
        if (inputFields.length > 0) {
            alert('Latest Input Data: ' + inputFields[inputFields.length - 1]);
        } else {
            alert('No input fields found.');
        }
    };

    return (
        <div className="containerrr">
            {inputFields.map((input, index) => (
                <div key={index} className="input-containerrr">
                    <input
                        type="text"
                        value={input}
                        onChange={(event) => handleInputChange(index, event)}
                        className="input-fielddd"
                    />
                </div>
            ))}
            <button onClick={handleAddField} className="btn-add">Add Input</button>
            <button onClick={handleGetLatestInput} className="btn-get">Get Latest Input Data</button>
        </div>
    );
};

export default DynamicInputFields;
