import React from "react";
import Banner from "../../components/Banner/Banner";
import "./HomePage.css";
import Modal from "../../components/EditCardModal/EditCard";
import { GlobalContext } from "../../provider/GlobalContextProvider";
import { useContext } from "react";
import CategoriesCard from "../../components/Cards/CategoriesCard";

const HomePage = () => {
  const { editModal, team, data } = useContext(GlobalContext);

  return (
    <>
      <main>
        <Banner />
        <section className="category__container">
          {team.map((team) => (
            <CategoriesCard
              key={team.id}
              data={data.filter((data) => data.category === team.name)}
              teamName={team.name}
              teamColor={team.color}
            />
          ))}
        </section>
      </main>

      {editModal && <Modal />}
    </>
  );
};

export default HomePage;
