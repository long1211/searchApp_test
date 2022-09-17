import React, { useState } from "react";
import { productItems } from "../data";
import styled from "styled-components";
import Products from "../component/productsIndex";

const Input = styled.input`
  outline: none;
  border: none;
  background-color: #f5f5f5;
  padding: 12px 20px;
  border: 1px solid #9f9f9f;
  font-size: 16px;
  width: 20%;
`;

const InputSearch = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 0;
`;

const Home = () => {
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter((item) => item.title.toLowerCase().includes(query));
  };
  return (
    <>
      <InputSearch>
        <Input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputSearch>

      <Products data={search(productItems)} />
    </>
  );
};

export default Home;
