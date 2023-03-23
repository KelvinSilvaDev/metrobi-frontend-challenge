import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  max-width: 500px;
  height: 600px;
  color: #fff;
  gap: 0.5rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #54d5eb;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: stretch;
  gap: 0.5rem;
`;

export const SectionTwo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 30%;
  align-items: stretch;
  gap: 0.5rem;
`;

export const AsideWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: stretch;
  justify-content: center;
  gap: 0.5rem;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  background-color: #d7c9e3;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #9fc363;
  height: 100%;
`;

export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;
  gap: 0.5rem;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f5c632;
  height: 100%;
`;

export const ExtraContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #898989;
  height: 30%;
`;

export const RelatedImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #2bb673;
  width: 100%;
`;

export const RelatedPosts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f3ccde;
`;

export const Footer = styled.footer`
  display: flex;
  background-color: #ffa500;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
