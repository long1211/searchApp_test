import React, { useState } from "react";
import { productItems } from "../data";
import Products from "../component/productsIndex";

const Home = () => {
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter((item) => item.title.toLowerCase().includes(query));
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Products data={search(productItems)} />
    </>
  );
};

export default Home;
