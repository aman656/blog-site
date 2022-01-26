import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  color: white;

  font-weight: normal;
`;

export const Logo = styled.img`
  height: 60px;
  width: 60px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &:hover {
    color: yellow;
    opacity: 1;
    cursor: pointer;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  margin-right: 20px;
  border: none;
  outline:none:!important;
  align-items: center;
  justify-content-center;
  padding-left:10px;
  border-radius:5.5px;
`;

export const Search = styled.input`
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  outline:none:!important;
  border:none;

`;
