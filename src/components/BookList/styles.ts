import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
  }
`;

export const ContainerFilter = styled.div`
  display: flex;
  margin: 7% 0;
  justify-content: flex-end;

  select {
    border: none;
    border-radius: 10px;
    padding: 0 2em;
  }

  button {
    color: #fff;
    background: #303030;
    border: #303030;
    border-radius: 10px;
    font-weight: bold;
    height: 45px;
    font-size: 0.7em;
    margin: 0 10px;
    padding: 0 4em;
  }

  @media screen and (max-width: 435px) {
    flex-direction: column;
    align-items: center;
    gap: 18px;

    select {
      width: 50%;
      height: 30px;
    }
  }
`;

export const ContainerBookList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
