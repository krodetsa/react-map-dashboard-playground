import { styled } from "styled-components";
import { motion } from "framer-motion";

export const StyledToggle = styled.div`
  transition: all 0.3s ease-in-out;
  background: ${(props) => (props.$isSelected ? `#8f29b8` : `#739899`)};
  border-radius: 16px;
  width: 32px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0px 4px;
`;
export const StyledToggleCircle = styled(motion.div)`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background: #fff;
`;
