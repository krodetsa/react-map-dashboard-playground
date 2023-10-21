import { motion } from "framer-motion";
import styled from "styled-components";

export const DropdownWrapper = styled.div`
  width: auto;
  position: relative;
`;
export const SelectContainer = styled.div`
  border-radius: 6px;
  border: 1px solid rgb(209, 213, 219);
  padding: 8px 12px;
  height: 16px;
  background: #fff;
  width: auto;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  position: relative;
  margin-left: auto;
  & svg {
    cursor: pointer;
    height: 20px;
    color: #888;
    transition: all 0.3s ease-in-out;
    transform: ${(props) =>
      props.$isOpen ? "rotate(180deg)" : "rotate(0deg)"};
    &:hover {
      color: #000;
    }
  }
`;
export const ListContainer = styled(motion.ul)`
  position: absolute;
  top: 100%;
  right: 0px;
  width: fit-content;
  min-width: fit-content;
  background: #fff;
  border: 1px solid rgb(209, 213, 219);
  border-top: none;
  z-index: 400;
  border-radius: 6px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-top: 0px;
  padding: 0px;
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  left: 0px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  & li {
    width: 100%;
    min-width: 202px;
    padding: 8px 12px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: rgb(75, 85, 99);
    list-style-type: none;
    &:hover {
      background: #f9fafb;
      color: rgb(17, 24, 39);
    }
  }
`;
