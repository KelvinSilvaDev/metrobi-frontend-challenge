import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

import "highlight.js/styles/atom-one-dark.css";

import * as Styled from "./styles";

hljs.registerLanguage("javascript", javascript);

export const QuestionFour: React.FC = () => {
  const codeSnippet = `
  function checkBrackets(str) {
    let stack = [];
    let brackets = {
      '}': '{',
      ')': '(',
      ']': '['
    };
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      if (char === '{' || char === '(' || char === '[') {
        stack.push(char);
      } else if (char === '}' || char === ')' || char === ']') {
        if (stack.length === 0) {
          return false;
        }
  
        let lastChar = stack.pop();
        if (lastChar !== brackets[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
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
    </Styled.Container>
  );
};

export default QuestionFour;
