import styled from "styled-components";

export const ArticleContainer = styled.div`
  margin: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 200px;
  // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  margin-left: 200px;
  padding: 10px;
  border-radius: 10px;
`;

export const ArticleHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 0;
`;
export const ImageContainer = styled.image`
  border-radius: 50%;
  margin-right: 10px;
`;
export const ImageContain = styled.img`
  // border-radius: 50%;
  // margin-right: 10px;
  width: 50%;
  align-item: center;
  justify-content: center;
  margin: auto;
  height: 300px;
`;
export const AuthorName = styled.p`
  color: #000000;
  font-size: 24px;
  padding-bottom: 5px;
  font-weight: bold;
  font-style: italic;
  // border-bottom: 1px solid #000000;
  opacity: 0.5;
`;
export const Wrote = styled.p`
  font-size: 15px;
  margin-left: 15px;
  color: #f3ca20;
  opacity: 10;
`;

export const ArticleMid = styled.div`
  display: flex;

  padding-left: 20px;
  bottom: 10;
`;
export const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Heading = styled.h2`
  font-size: 30px;
  margin-bottom: 0;
`;
export const ArticleDesc = styled.div`
  // display: flex;
`;
export const ArticleMain = styled.p`
  flex: 12;
  font-size: 18px;
  font-weight: 400;
  justify-content: center;
`;
export const ArticleDate = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Info = styled.div`
  display: flex;
  flex-firection: row;
  align-items: center;
  margin-right: 20px;
  padding: 0;
`;

export const SectionDivider = styled.div`
  width: 400px;
  background-color: #f3ca20;
`;

export const Read = styled.a`
  color: blue;
  font-size: 20px;
`;
