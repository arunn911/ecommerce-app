import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import {mobile} from "../responsive";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/999267/pexels-photo-999267.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  border-radius:10px;
  background-color: #ffffff9c;
  ${mobile({ width: "75%" })}
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  letter-spacing:0.5px;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: 2px solid teal;
  padding: 15px 20px;
  margin-bottom: 10px;
  color: black;
  font-weight:600;
  cursor: pointer;
  background-color: teal;
  transition: all 0.5s ease;
  &:hover{
    color: white;
    &:disabled{
      cursor:not-allowed;
    }
}
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  font-weight:500;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color:red;
`


const Login = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const {isFetching, error} = useSelector((state) => state.user)
const dispatch = useDispatch();

const handleClick = (e) => {
  e.preventDefault()
  login(dispatch, {username,password})
}

  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
         {error && <Error>Something went wrong...</Error>}
          <Link>FORGOT PASSWORD ???</Link>
          <Link href ='/register'>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;