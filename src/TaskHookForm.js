import React from "react";
import { useForm } from "react-hook-form";

export default function TaskHookForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          Başlık
        </label>
        <input className="input-text" id="title" name="title" type="text" />
      </div>
      <div className="form-line">
        <label className="input-label" htmlFor="description">
          Açıklama
        </label>
        <textarea
          className="input-textarea"
          rows="3"
          id="description"
          name="description"></textarea>
      </div>
      <div className="form-line">
        <label className="input-label">İnsanlar</label>
        <label className="input-checkbox">
          <input type="checkbox" name="people" value="Onur" />
          Onur
        </label>
      </div>
      <div className="form-line">
        <button
          className="submit-button"
          type="submit"
          // disabled={}
        >
          Kaydet
        </button>
      </div>
    </form>
  );
}
