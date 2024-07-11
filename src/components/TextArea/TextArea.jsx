import "./TextArea.css";

const TextArea = ({ name, labelText, placeholder, value, setValue, error }) => {
  return (
    <div className="new-video-page__form__textarea">
      <label htmlFor={name}>{labelText}</label>
      <textarea
        name={name}
        id={name}
        rows={10}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={error ? "input-error" : ""}
      />

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default TextArea;
