import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f1f1f1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #555;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 1.5;
  color: #666;
  margin-bottom: 20px;
`;

export const Code = styled.pre`
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 14px;
  background-color: #222;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: block;
  margin: 0 auto;
  max-width: 90%;
  overflow-x: auto;

  & span {
    display: inline-block;
    min-width: 1em;
  }

  & .hljs-keyword {
    color: #d73a49;
  }

  & .hljs-literal {
    color: #005cc5;
  }

  & .hljs-symbol {
    color: #6f42c1;
  }

  & .hljs-name {
    color: #333;
  }

  & .hljs-comment {
    color: #6a737d;
    font-style: italic;
  }

  & .hljs-string,
  & .hljs-template-string {
    color: #22863a;
  }

  & .hljs-type,
  & .hljs-params {
    color: #005cc5;
  }

  & .hljs-number {
    color: #005cc5;
  }
`;
