import React from "react";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Categories } from "../components/Categories";
import NavBar from "../components/NavBar";
import { Products } from "../components/Products";
import { Slider } from "../components/Slider";

const Container = styled.div`
  width: 100%;
`;
export const Home = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    </Container>
  );
};
