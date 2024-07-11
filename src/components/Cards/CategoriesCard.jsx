import "./CategoriesCard.css";
import VideoCard from "./VideoCard";
import Category from "../Category/Category";
import { motion } from "framer-motion";

const CategoriesCard = ({ data, teamName, teamColor }) => {
  const filteredData =
    teamName === "Front end" ? data.filter((item) => item.id !== "0") : data;

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="category__content">
      <div className="category__title">
        <Category category={teamName} color={teamColor} />
      </div>
      {filteredData?.length > 0 ? (
        <motion.div
          className="category__cards"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredData.map((item) =>
            item.id == 0 ? null : (
              <motion.div key={item.id} variants={itemVariants}>
                <VideoCard data={item} color={teamColor} />
              </motion.div>
            )
          )}
        </motion.div>
      ) : (
        <h1>No hay videos</h1>
      )}
    </div>
  );
};

export default CategoriesCard;
