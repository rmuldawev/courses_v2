import React, { FC } from "react";
import "./styles.css";
interface CustomButtonProps {
  label: string;
}

const CustomButton: FC<CustomButtonProps> = ({ label }) => {
  return (
    <button className="button_style">
      <p className="label">{label}</p>
    </button>
  );
};

export default CustomButton;
