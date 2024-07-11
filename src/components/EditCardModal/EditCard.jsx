import { useContext, useState, useEffect } from "react";
import "./EditCard.css";
import Form from "../Form/Form";
import { GlobalContext } from "../../provider/GlobalContextProvider";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const EditVideoModal = () => {
  const {
    setEditModal,
    reset,
    updateVideo,
    id,
    title,
    description,
    image,
    category,
    video,
  } = useContext(GlobalContext);

  const [exitModal, setExitModal] = useState(false);

  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const handleCloseModal = (e) => {
    reset(e);
    setEditModal(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = (e) => {
    const updatedVideo = { title, description, image, category, video };
    updateVideo(id, updatedVideo);

    setExitModal(true);

    setTimeout(() => {
      handleCloseModal(e);
    }, 2000);
  };

  return (
    <div className="edit-video-modal" onClick={handleCloseModal}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="edit-video-modal__content"
        onClick={stopPropagation}
      >
        <div className="edit-video-modal__form">
          <IoMdCloseCircleOutline
            className="close-button"
            size={30}
            onClick={handleCloseModal}
          />
          {exitModal ? (
            <>
              <h1>¡Card editada con éxito!</h1>
            </>
          ) : (
            <>
              <h1>Editar Card:</h1>
              <Form onSubmit={handleSubmit} isModal={true} />
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EditVideoModal;
