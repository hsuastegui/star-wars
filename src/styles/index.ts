import styled from "styled-components";
import { Link } from 'react-router-dom';

interface cardProps {
  readonly winner: boolean;
}

export const Container = styled.div`
  color: white;
  padding: 20px;
  margin: 0 auto;
  max-width: 700px;
`;

export const Button = styled.button`
  background: white;
  border: 1px solid lightgrey;
  color: black;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  width: 48%;
  box-sizing: border-box;
`;

export const Card = styled.div<cardProps>`
  border: 1px solid white;
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 48%;
  box-sizing: border-box;
  background: ${({ winner }) => (winner ? "darkgreen" : "black")}
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 0;
`;

export const Anchor = styled(Link)`
  color: white;

`;