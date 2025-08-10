'use client';
import React from 'react';

import { useState } from "react";

export default function FormControlsDemo() {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState("option1");
  const [radio, setRadio] = useState("radio1");

  return (
    <form className="space-y-4 max-w-md p-4 border rounded shadow">
      <label className="block">
        <span className="text-gray-700">Text Input</span>
        <input
          type="text"
          placeholder="Enter text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Select Option</span>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          <option value="option1">Option One</option>
          <option value="option2">Option Two</option>
        </select>
      </label>

      <label className="inline-flex items-center space-x-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="form-checkbox text-blue-600"
        />
        <span>Check me!</span>
      </label>

      <div>
        <span className="text-gray-700 block mb-1">Choose one:</span>
        <label className="inline-flex items-center space-x-2 mr-4">
          <input
            type="radio"
            name="radioGroup"
            value="radio1"
            checked={radio === "radio1"}
            onChange={() => setRadio("radio1")}
            className="form-radio text-blue-600"
          />
          <span>Radio 1</span>
        </label>
        <label className="inline-flex items-center space-x-2">
          <input
            type="radio"
            name="radioGroup"
            value="radio2"
            checked={radio === "radio2"}
            onChange={() => setRadio("radio2")}
            className="form-radio text-blue-600"
          />
          <span>Radio 2</span>
        </label>
      </div>
    </form>
  );
}
