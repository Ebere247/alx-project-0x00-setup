// components/Button.tsx
import React from "react";
import { ButtonProps } from "../interfaces";

const Button: React.FC<ButtonProps> = ({ title, styleClass }) => {
  return (
    <button className={`bg-blue-600 text-white px-4 py-2 ${styleClass}`}>
      {title}
    </button>
  );
};

export default Button;
