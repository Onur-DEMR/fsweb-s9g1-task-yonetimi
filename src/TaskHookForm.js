import React from "react";
import { useForm } from "react-hook-form";

export default function TaskHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  function newSubmit(data) {
    console.log(data);
  }
  return (
    <form className="taskForm" onSubmit={handleSubmit(newSubmit)}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          Başlık
        </label>
        <input
          className="input-text"
          id="title"
          {...register("title", {
            required: "Task başlığı yazmalısınız",
            minLength: {
              value: 3,
              message: "Task başlığı en az 3 karakter olmalı",
            },
          })}
          type="text"
        />
        <p className="input-error">
          {errors.title?.required || errors.title?.message}
        </p>
      </div>
      <div className="form-line">
        <label className="input-label" htmlFor="description">
          Açıklama
        </label>
        <textarea
          className="input-textarea"
          rows="3"
          id="description"
          {...register("description", {
            required: "Task açıklaması yazmalısınız",
            minLength: {
              value: 10,
              message: "Task açıklaması en az 10 karakter olmalı",
            },
          })}></textarea>
        <p className="input-error">{errors.description?.required}</p>
      </div>
      <div className="form-line">
        <label className="input-label">İnsanlar</label>
        <label className="input-checkbox">
          <input
            type="checkbox"
            {...register("people", {
              required: "Lütfen en az bir kişi seçin",
              minLength: {
                value: 1,
                message: "Lütfen en az bir kişi seçin",
              },
              maxLength: {
                value: 3,
                message: "En fazla 3 kişi seçebilirsiniz",
              },
            })}
            value="Onur"
          />
          Onur
        </label>
        <label className="input-checkbox">
          <input
            type="checkbox"
            {...register("people", { required: true })}
            value="Gülşah"
          />
          Onur
        </label>
      </div>
      <p className="input-error">{errors.people?.required}</p>
      <div className="form-line">
        <button className="submit-button" type="submit" disabled={!isValid}>
          Kaydet
        </button>
      </div>
    </form>
  );
}
