import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

import "highlight.js/styles/atom-one-dark.css";

import * as Styled from "./styles";
import WriteArrayItems from "./WriteArrayItems";

hljs.registerLanguage("javascript", javascript);

export const QuestionTwo: React.FC = () => {
  const codeSnippet = `
  async function writeArrayItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
      const delay = Math.pow(2, i) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  `.trim();

  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      const { value, language } = hljs.highlight(
        "javascript",
        codeSnippet,
        false
      );
      codeRef.current.innerHTML = value;
      codeRef.current.className = `language-${language}`;
    }
  }, [codeRef]);

  return (
    <Styled.Container>
      <Styled.Title>Answer</Styled.Title>
      {/* <Styled.Description>
        
      </Styled.Description> */}
      <Styled.Code
        ref={codeRef}
        className="javascript"
        style={{ padding: "11px", borderRadius: "12px" }}
      >
        {codeSnippet}
      </Styled.Code>
      <WriteArrayItems />
    </Styled.Container>
  );
};

export default QuestionTwo;
