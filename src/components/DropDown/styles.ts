import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const DropdownTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  padding: 0.8rem;
  background-color: #222;
  color: #fff;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  gap: 1.5rem;

  &:hover {
    background-color: #444;
  }
`;

export const DropdownArrow = styled.div<{ isOpen: boolean }>`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(-135deg)")};
  transition: transform 0.3s ease-in-out;
`;

export const DropdownContent = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen }) => (isOpen ? "1rem" : "0")};
`;
