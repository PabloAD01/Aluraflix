import "./VideoCard.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { GlobalContext } from "../../provider/GlobalContextProvider";

import { useContext } from "react";

const VideoCard = ({ data, color }) => {
  const {
    setEditModal,
    deleteVideo,
    setId,
    setTitle,
    setDescription,
    setImage,
    setCategory,
    setVideo,
  } = useContext(GlobalContext);

  const handleModal = () => {
    setEditModal(true);
    setId(data.id);
    setTitle(data.title);
    setDescription(data.description);
    setImage(data.image);
    setCategory(data.category);
    setVideo(data.video);
  };

  const cardStyle = {
    border: `4px solid ${color}`,
    boxShadow: `0px 0px 14px 2px ${color} inset`,
  };
  const imgStyle = {
    borderBottom: `4px solid ${color}`,
  };

  return (
    <div className={`videoCard videoCard--${data.category}`} style={cardStyle}>
      <a href={data.video} className="videoCard__image" style={imgStyle}>
        <img src={data.image} alt="" />
      </a>
      <div className="videoCard__buttons">
        <button className="deleteButton" onClick={() => deleteVideo(data.id)}>
          <MdOutlineDeleteForever size={20} />
          <p>Eliminar</p>
        </button>
        <button className="editButton" onClick={() => handleModal()}>
          <CiEdit size={20} />
          <p>Editar</p>
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
