import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  letter-spacing:0.5px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  font-weight:500;
  margin: 20px 0px;
`;

const Button = styled.button`
 
  border: 2px solid teal;
  margin-bottom:10px;
  padding: 15px 20px;
  color: black;
  font-weight:600;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    color: white;
    background-color: teal;
}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First name"/>
          <Input placeholder="Last name"/>
          <Input placeholder="Username"/>
          <Input placeholder="Email"/>
          <Input placeholder="Password"/>
          <Input placeholder="Confirm Password"/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <div style={{display:'flex',flexDirection:'column'}} className="last">
          
          <Button>SIGN UP</Button>
          <p>Already have an account ? <a href='/login'>Login</a></p>
          </div>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;