// components/Button.tsx
import React from "react";
import { ButtonProps } from "../interfaces";

const Button: React.FC<ButtonProps> = ({ title, styleClass }) => {
  return (
    <button className={`px-4 py-2 bg-blue-500 text-white ${styleClass}`}>
      {title}
    </button>
  );
};

export default Button;
