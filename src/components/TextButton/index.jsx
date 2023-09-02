import { styled } from "styled-components";
import style from '/src/App.css';


export const TextButton = styled.button`
  border: 1px solid var(--purple);
  border-radius: 4px;
  background-color: white;
  color: black;
  padding: 5px 10px;
  width: 100%;

  &:hover {
    background-color: var(--purple);
    color: white;
    cursor: pointer;
  }
`