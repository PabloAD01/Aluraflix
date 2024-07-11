import "./Category.css";

const Category = ({ category, color }) => {
  const style = {
    backgroundColor: color,
  };

  return (
    <h2 className={`category ${category}`} style={style}>
      {category}
    </h2>
  );
};

export default Category;
