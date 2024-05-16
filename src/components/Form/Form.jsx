'use client'
import React from "react";
import { useFormWithValidation } from "../../lib/useForm";
import { mainApi } from "@/Utils/api";

const Form = ({ inputs, buttonText, error, clearError, children }) => {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    mainApi.sendForm(values);
    resetForm();
  };

  const handleCloseError = (evt) => {
    evt.preventDefault()
    clearError()
  }

  const FormAction = async (formData) => {
    formData.append('_wpcf7_unit_tag', '_wpcf7_unit_tag');
    const res = await fetch('http://api.pictdesign.ru/wp-json/contact-form-7/v1/contact-forms/5/feedback', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <>
      {children}
      <form className="form" action={FormAction}>
        <div className="form__inputs">
          {inputs.map((input) => {
            return (
              <div className="form__input-container" key={input.id}>
                <input
                  name={input.name}
                  id={input.id}
                  value={values[input.name] || ""}
                  onChange={handleChange}
                  className="form__input"
                  type={input.type}
                  required={input.required}
                  pattern={input.pattern}
                  minLength={input.minLength}
                  placeholder={input.placeholder.ru}
                />
                <span className="form__error">{errors[input.name]}</span>
              </div>
            );
          })}
        </div>
        {error && (
          <button onClick={handleCloseError} className="form__submit-error">
            Что-то пошло не так... {error}
            <span className="form__error-close">
              <div></div>
              <div></div>
            </span>
          </button>
        )}
        <button className="form__submit" type="submit" disabled={!isValid}>
          {buttonText}
        </button>
      </form>
    </>
  );
};

export default Form;
