import React, { useState } from "react";
import styled from "styled-components";
import useRegisterStudent from "../hooks/useRegisterStudent";

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of the viewport */
  background-color: #a32505; /* Background color for contrast */
`;

const RegisterBox = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 40px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const RegisterImage = styled.div`
  img {
    width: 100px;
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  background: #070838;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #070838;
  }
`;

const Link = styled.a`
  display: block;
  margin-top: 20px;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Paragraph = styled.p`
  margin-top: 20px;
  color: #666;
`;

const RegisterPage = () => {
  const [details, setDetails] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    college: "",
  });
  const { registerStudent } = useRegisterStudent();

  function handleRegister(e) {
    e.preventDefault();
    console.log(details);
    registerStudent(details);
  }

  return (
    <RegisterContainer>
      <RegisterBox>
        <RegisterImage>
          <img src="images/blue logo.png" alt="register" />
        </RegisterImage>
        <Title>Register</Title>
        <form>
          <InputGroup>
            <input
              type="text"
              id="name"
              placeholder="Name"
              required
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
            />
          </InputGroup>
          <InputGroup>
            <input
              type="text"
              id="phone"
              placeholder="Phone No."
              required
              onChange={(e) =>
                setDetails({ ...details, contact: e.target.value })
              }
            />
          </InputGroup>
          <InputGroup>
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
            />
          </InputGroup>
          <InputGroup>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
            />
          </InputGroup>
          <InputGroup>
            <input
              type="text"
              id="college"
              placeholder="College"
              required
              onChange={(e) =>
                setDetails({ ...details, college: e.target.value })
              }
            />
          </InputGroup>
          <Button type="submit" onClick={handleRegister}>
            Register
          </Button>
        </form>
        <Link href="/Login">Already have an account? Login</Link>
      </RegisterBox>
    </RegisterContainer>
  );
};

export default RegisterPage;
