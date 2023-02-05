import React from "react";
import { useForm } from "react-hook-form";

export default function TaskHookForm(submitFn, kisiler) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { title: "", description: "", people: [] },
  });
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

        {kisiler.map((p) => (
          <label className="input-checkbox" key={p}>
            <input
              type="checkbox"
              {...register("people", {
                altSinir: (secim) =>
                  secim.length >= 1 || "Lütfen en az 1 kişi seçiniz.",
                üstSinir: (secim) =>
                  secim.length <= 3 || "En fazla 3 kişi seçebilirsiniz.",
              })}
              value={p}
            />
          </label>
        ))}

        {kisiler.map((p) => (
          <label className="input-checkbox" key={p}>
            <input
              type="checkbox"
              {...register("people", {
                altSinir: (secim) =>
                  secim.length >= 1 || "Lütfen en az 1 kişi seçiniz.",
                üstSinir: (secim) =>
                  secim.length <= 3 || "En fazla 3 kişi seçebilirsiniz.",
              })}
              value={p}
            />
          </label>
        ))}
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
