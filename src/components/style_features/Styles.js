import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  color: rgb(221, 59, 86);
`;

export const Content = styled.div`
  /* overflowy: scroll; */
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 48%;
  bottom: 50px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: rgb(221, 59, 86);
  opacity: 0.5;
`;

export const Links = styled.a`
  text-decoration: none;
  margin-left: 100px;
  display: flex;
  margin-top: 10px;

  font-size: 30px;
`;
