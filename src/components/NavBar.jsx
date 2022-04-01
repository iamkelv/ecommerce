import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;
//space rule
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          Et Lorem cupidatat exercitation dolor sint.Laborum nisi qui irure in
          ut amet fugiat aute commodo consequat veniam et. Aliqua sint ullamco
          tempor fugiat minim duis labore cupidatat Lorem. Minim nulla
          consectetur eiusmod ut commodo esse ad do enim aliqua Lorem magna eu.
          Fugiat consectetur enim fugiat enim amet non ex nostrud culpa proident
          aliqua. Do enim anim labore laboris.
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
