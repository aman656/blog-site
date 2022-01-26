import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: #f3ca20;
  display: flex;
  padding: 10px;
  padding-left: 30px;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Categories = styled.button`
  background-color: #000000;
  font-size: 18px;
  color: #f3ca20;
  border-radius: 5px;
  width: fit-content;
  padding: 9px;
  opacity: 1;
  border: none;
  margin-right: 15px;
  margin-left: 10px;
`;
