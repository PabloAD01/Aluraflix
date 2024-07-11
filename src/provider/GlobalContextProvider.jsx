import React, { useEffect } from "react";
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [id, setId] = useState(null);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [video, setVideo] = useState("");
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Front end",
      color: "rgba(107, 209, 255, 1)",
    },
    {
      id: 2,
      name: "Back end",
      color: "rgba(0, 200, 111, 1)",
    },
    {
      id: 3,
      name: "Innovación y gestión",
      color: "rgba(255, 165, 0, 1)",
    },
  ]);
  const [editModal, setEditModal] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/videos");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const uploadVideo = async () => {
    const newVideo = {
      title,
      description,
      image,
      category,
      video,
    };

    try {
    } catch (error) {}
    const response = await fetch("http://localhost:3000/videos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVideo),
    });

    const data = await response.json();

    fetchData();
    navigate("/");
  };

  const deleteVideo = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/videos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete video");
      }

      setData((prevData) => prevData.filter((video) => video.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateVideo = async (id, updatedVideo) => {
    try {
      const response = await fetch(`http://localhost:3000/videos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedVideo),
      });

      if (!response.ok) {
        throw new Error("Failed to update video");
      }

      setData((prevData) =>
        prevData.map((video) =>
          video.id === id ? { ...video, ...updatedVideo } : video
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const reset = () => {
    setTitle("");
    setDescription("");
    setImage("");
    setCategory("");
    setVideo("");
  };

  return (
    <GlobalContext.Provider
      value={{
        data,
        id,
        setId,
        title,
        setTitle,
        description,
        setDescription,
        image,
        setImage,
        category,
        setCategory,
        video,
        setVideo,
        team,
        editModal,
        setEditModal,
        uploadVideo,
        deleteVideo,
        updateVideo,
        reset,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
