import React from "react";

export function Select(props) {
  return (
    <select
      onChange={(e) => props.onChange(e.target.value)}
      className="form-control col-3"
    >
      <option value=""> SELECCIONE UNA RAZA</option>
      {props.options.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
