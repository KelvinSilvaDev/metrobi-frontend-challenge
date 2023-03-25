import { useState } from "react";
import {
  DropdownWrapper,
  DropdownTitle,
  DropdownArrow,
  DropdownContent,
} from "./styles";

interface DropdownProps {
  title: string;
  children: any;
}

export default function DropDown({ title, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownWrapper>
      <DropdownTitle onClick={() => setIsOpen(!isOpen)}>
        <DropdownArrow isOpen={isOpen} />
        {title}
      </DropdownTitle>
      <DropdownContent isOpen={isOpen}>{isOpen && children}</DropdownContent>
    </DropdownWrapper>
  );
}
