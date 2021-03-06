import {
  Search,
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
const Container = styled.div`
  flex: 1;
  margin: 5px;
`;
const Circle = styled.div``;
const Image = styled.img``;
const Info = styled.div``;
const Icon = styled.div``;

export const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};
