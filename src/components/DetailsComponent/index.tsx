import { FC, ReactNode } from "react";
import styled from "styled-components";

interface DetailsProps {
  open: boolean;
  children: ReactNode;
}

const DetailsContainer = styled.div<DetailsProps>`
  max-height: ${({ open }) => (open ? "100%" : "0")};
  overflow: hidden;
  padding: ${({ open }) => (open ? "25px 0" : "0")};
  transition: all 0.3s ease-out;
`;

const DetailsComponent: FC<DetailsProps> = ({ open, children }) => (
  <DetailsContainer open={open}>{children}</DetailsContainer>
);

export default DetailsComponent;
