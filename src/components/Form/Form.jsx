'use client'
import { useState } from "react";
import { useFormWithValidation } from "../../lib/useForm";
import Popup from "../Popup/popup";
import { IMaskInput } from "react-imask";

const Form = ({ inputs, buttonText, error, clearError, title }) => {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleCloseError = (evt) => {
    evt.preventDefault();
    clearError();
  }

  const FormAction = async (formData) => {
    formData.append('_wpcf7_unit_tag', '_wpcf7_unit_tag');
    const res = await fetch('http://api.pictdesign.ru/wp-json/contact-form-7/v1/contact-forms/5/feedback', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    setMessage(data.message);
    console.log(data);
    setPopupOpen(true);
    resetForm();
  }

  function handleClose() {
    setPopupOpen(false);
    document.body.style.overflow = 'unset';
    setMessage('');
  }

  return (
    <section className="contact-form">
      <div className="contact-form__wrapper">
        <h2>{title}</h2>
        <Popup active={isPopupOpen} message={message} setClose={handleClose} />
        <form className="form" action={FormAction}>
          <div className="form__inputs">
            {inputs.map((input) => {
              return (
                <div className="form__input-container" key={input.id}>
                  <IMaskInput
                    name={input.name}
                    mask={input.mask}
                    id={input.id}
                    value={values[input.name] || ""}
                    onChange={handleChange}
                    className="form__input"
                    type={input.type}
                    required={input.required}
                    pattern={input.pattern}
                    minLength={input.minLength}
                    placeholder={input.placeholder}
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
      </div>
    </section>
  );
};

export default Form;
