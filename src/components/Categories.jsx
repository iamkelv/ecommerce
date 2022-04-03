import React from "react";
import styled from "styled-components";
import { Categorie } from "../data";
import { CategoryItem } from "../components/CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Categories = ({ item }) => {
  return (
    <Container>
      {Categorie.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};
