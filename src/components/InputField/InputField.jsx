import "./InputField.css";

const InputField = ({
  type,
  name,
  labelText,
  placeholder,
  value,
  setValue,
  error,
}) => {
  return (
    <div className="new-video-page__form__input">
      <label htmlFor={name}>{labelText}</label>

      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={error ? "input-error" : ""}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default InputField;
