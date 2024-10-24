import React, { HTMLInputTypeAttribute } from "react";
import { Controller, useFormContext } from "react-hook-form";
import "./styles.css";

interface TextInputProps {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  defaultValue?: string;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  type = "text",
  defaultValue,
  placeholder,
}) => {
  const { control } = useFormContext();
  return (
    <div className="custom-input">
      <p className="input_label">{label}</p>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field: { onChange, value } }) => (
          <input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            className="input-field"
          />
        )}
      />
    </div>
  );
};

export default TextInput;
