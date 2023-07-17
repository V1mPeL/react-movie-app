import React from "react";
import Header from "../header/Header";
import Categories from "../categories/Categories";
import movieRequest from "../../services/movieRequest";

const HomePage = () => {
  return (
    <>
      <Header />
      <Categories requests={movieRequest} />
    </>
  );
};

export default HomePage;
