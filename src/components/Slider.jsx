import {
  ArrowLeft,
  ArrowLeftOutlined,
  ArrowRight,
  ArrowRightOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { slideItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background: pink; */
  position: relative;
  overflow: hidden;
  transition: all 300ms ease;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 2;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  transition: all 300ms ease;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  padding: 0 50px;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 70px;
`;
const Image = styled.img`
  height: 80%;
`;
const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideItems > 0 ? slideItems - 1 : 0);
    } else {
      setSlideIndex(slideItems < 2 ? slideItems + 1 : 2);
    }
    console.log(slideItems);
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideItems.map((items, index) => (
          <Slide bg={items.bg} key={index}>
            <ImgContainer>
              <Image src={items.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{items.title}</Title>
              <Desc>{items.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
