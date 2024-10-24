import React from "react";
import "../Login/styles.css";
import { FormProvider, useForm } from "react-hook-form";
import TextInput from "../common/TextInput";
import CustomButton from "../common/Button";

const SignIn = () => {
  const methods = useForm({
    mode: "onSubmit",
  });
  return (
    <div className="rectangle">
      <div className="image" />
      <div className="login">
        <h1 className="title">Авторизация</h1>
        <p className="label">
          Откройте доступ к видеокурсам и выгодным покупкам из Китая
        </p>
        <FormProvider {...methods}>
          <div className="input_fields">
            <TextInput
              name="email"
              type="email"
              label="Электронная почта"
              placeholder="Введите почту"
            />
            <TextInput
              name="password"
              label="Пароль"
              placeholder="Введите пароль"
              type="password"
            />
          </div>

          <CustomButton label="Войти" />
        </FormProvider>
      </div>
    </div>
  );
};

export default SignIn;
