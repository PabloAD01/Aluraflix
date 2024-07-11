import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import "./Banner.css";
import bannerImg from "../../assets/img/bannerImg.png";
import Category from "../Category/Category";
import { GlobalContext } from "../../provider/GlobalContextProvider";

const Banner = () => {
  const { data, team } = useContext(GlobalContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [data]);

  if (data.length === 0 || team.length === 0) {
    return null;
  }

  const currentItem = data[index];
  const currentTeam =
    team.find((t) => t.name === currentItem.category) || team[0];
  const imgStyle = {
    border: `4px solid ${currentTeam.color}`,
    boxShadow: `0px 0px 14px 2px ${currentTeam.color} inset`,
  };

  return (
    <section className="banner">
      <img className="banner__img" src={bannerImg} alt="" />
      <div className="banner__content">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="content__container"
        >
          <div className="banner__text">
            <Category
              category={currentItem.category}
              color={currentTeam.color}
            />
            <h2>{currentItem.title}</h2>
            <p>{currentItem.description}</p>
          </div>

          <a href={currentItem.video ? currentItem.video : "#"}>
            <img
              src={currentItem.image}
              style={imgStyle}
              alt={currentItem.title}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
