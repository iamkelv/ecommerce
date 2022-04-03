import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background: teal;
  height: 30px;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
export const Announcement = () => {
  return <Container>Super Deal! Free Shipping on orders over $50</Container>;
};
