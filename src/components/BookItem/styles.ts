import styled from "styled-components";

export const ContainerBook = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 220px;
  height: 300px;
  background-color: rgb(124, 124, 124, 0.9);
  border-radius: 10px;
  margin: 2% 5%;
`;

export const Title = styled.h2`
  text-align: center;
  width: 70%;
`;

export const Author = styled.h4`
  text-align: center;
  width: 80%;
`;

export const Details = styled.p`
  text-align: center;
  width: 50%;
  overflow-wrap: break-word;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: -12px;
  right: -10px;
  font-size: 18px;
  color: black;
  width: 20px;
  background-color: #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const DetailButton = styled.button`
  color: #fff;
  background: #303030;
  border: #303030;
  border-radius: 10px;
  font-weight: bold;
  height: 45px;
  font-size: 0.7em;
  margin: 0 10px;
  padding: 0 4em;
`;

export const Modal = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  background-color: rgb(130, 139, 147);
  border-radius: 10px;
  height: max-content;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  button {
    color: #000;
    font-size: 20px;
    position: absolute;
    right: -13px;
    top: -13px;
    border: none;
    border-radius: 10px;
    background-color: white;
  }
`;
