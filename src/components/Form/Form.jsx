import "./Form.css";
import { useContext, useState } from "react";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";
import CategoriesOptions from "../CategoriesOptions/CategoriesOptions";
import { GlobalContext } from "../../provider/GlobalContextProvider";
const Form = ({ onSubmit, isModal }) => {
  const {
    title,
    description,
    image,
    category,
    video,
    setTitle,
    setDescription,
    setImage,
    setCategory,
    setVideo,
    reset,
  } = useContext(GlobalContext);

  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    else if (title.length > 100)
      newErrors.title = "Title cannot exceed 30 characters";
    if (!category.trim()) newErrors.category = "Category is required";
    if (!image.trim()) newErrors.image = "Image URL is required";
    else if (image.length > 100)
      newErrors.image = "Image URL cannot exceed 100 characters";
    if (!video.trim()) newErrors.video = "Video URL is required";
    else if (video.length > 100)
      newErrors.video = "Video URL cannot exceed 100 characters";
    if (!description.trim()) newErrors.description = "Description is required";
    else if (description.length > 500)
      newErrors.description = "Description cannot exceed 500 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      onSubmit();
      reset();
    }
  };

  const handleClearClick = (e) => {
    e.preventDefault();
    reset();
  };

  return (
    <form onSubmit={handleSaveClick}>
      <div className="new-video-page__form__inputs">
        <div className={`inputs__group ${isModal ? "column" : ""}`}>
          <InputField
            type="text"
            name="title"
            labelText="Título"
            placeholder="Título..."
            value={title}
            setValue={setTitle}
            error={errors.title}
          />

          <CategoriesOptions
            name="category"
            labelText="Categoría"
            value={category}
            setValue={setCategory}
            error={errors.category}
          />
        </div>

        <div className={`inputs__group ${isModal ? "column" : ""}`}>
          <InputField
            type="url"
            name="image"
            labelText="Imagen"
            placeholder="Url de la imagen..."
            value={image}
            setValue={setImage}
            error={errors.image}
          />

          <InputField
            type="url"
            name="video"
            labelText="Video"
            placeholder="Url del video..."
            value={video}
            setValue={setVideo}
            error={errors.video}
          />
        </div>

        <div className={`inputs__group ${isModal ? "column" : ""}`}>
          <TextArea
            name="description"
            labelText="Descripción"
            placeholder="Describa el video..."
            value={description}
            setValue={setDescription}
            error={errors.description}
          />
        </div>
      </div>

      <div
        className={`new-video-page__form__buttons ${isModal ? "column" : ""}`}
      >
        <Button text="guardar" type="submit"></Button>
        <Button text="limpiar" onClick={handleClearClick}></Button>
      </div>
    </form>
  );
};

export default Form;
