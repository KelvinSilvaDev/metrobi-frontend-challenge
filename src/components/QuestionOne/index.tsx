import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

import "highlight.js/styles/atom-one-dark.css";

import * as Styled from "./styles";

hljs.registerLanguage("javascript", javascript);

export const QuestionOne: React.FC = () => {
  const codeSnippet = `
    function findDuplicates(arr) {
      const seen = {};
      const duplicates = [];

      for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
          duplicates.push(arr[i]);
        } else {
          seen[arr[i]] = true;
        }
      }

      return duplicates;
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

export default QuestionOne;
