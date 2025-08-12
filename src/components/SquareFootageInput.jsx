import React, { useState } from 'react';

export default function SquareFootageInput({ onAreaChange }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    const val = e.target.value;
    setValue(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      onAreaChange(num);
    } else if (val === '') {
      onAreaChange(0);
    }
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Total area (sq ft)</label>
      <input
        type="number"
        min="0"
        value={value}
        onChange={handleChange}
        placeholder="e.g. 350"
        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
      />
    </div>
  );
}
