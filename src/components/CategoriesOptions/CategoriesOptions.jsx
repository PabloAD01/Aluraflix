import { useContext } from "react";
import "./CategoriesOptions.css";
import { GlobalContext } from "../../provider/GlobalContextProvider";

const CategoriesOptions = ({ name, labelText, value, setValue, error }) => {
  const { team } = useContext(GlobalContext);

  return (
    <div className="new-video-page__form__options">
      <label htmlFor={name}>{labelText}</label>
      <select
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={error ? "input-error" : ""}
      >
        <option value="" hidden>
          Selecione una categoria
        </option>
        {team.map((category, index) => {
          return <option key={index}>{category.name}</option>;
        })}
      </select>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CategoriesOptions;
