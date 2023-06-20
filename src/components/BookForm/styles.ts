import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% 25%;
  border: 1px solid #ccc;
  border-radius: 20px;

  h1 {
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 2%;
  }

  input,
  textarea {
    border: 0;
    border-radius: 6px;
    font-size: 1rem;
    width: 100%;
  }

  input {
    height: 30px;
    margin-bottom: 5%;
  }

  @media screen and (max-width: 950px) {
    width: 80%;
  }
`;

export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  transition: border-color 0.25s;
  margin: 7% 0;

  &hover {
    border-color: #646cff;
  }
`;
