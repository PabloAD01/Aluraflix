import "./NewVideoPage.css";
import { useContext } from "react";
import Form from "../../components/Form/Form";

import { GlobalContext } from "../../provider/GlobalContextProvider";

const NewVideoPage = () => {
  const { uploadVideo } = useContext(GlobalContext);

  return (
    <div className="new-video-page">
      <div className="new-video-page__text">
        <h1>Nuevo Video</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </div>

      <div className="new-video-page__form">
        <h1>Crear Tarjeta</h1>
        <Form onSubmit={uploadVideo} />
      </div>
    </div>
  );
};

export default NewVideoPage;
