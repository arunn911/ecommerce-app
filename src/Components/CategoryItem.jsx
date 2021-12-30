import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
    color:black;
    background-color:white;
    padding:5px;
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: teal;
    color:white;
    cursor: pointer;
    font-weight: 600;
    margin-bottom:20px;
   
`;
const Link = styled.a`
 color:white;
 text-decoration:none;

`

const CategoryItem = ({ item }) => {

  const url = `products/${item.cat}`;

  return (

    <Container>
      
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button><Link href={url}>SHOP NOW</Link></Button>
      </Info>
      
    </Container>
  );
};

export default CategoryItem;