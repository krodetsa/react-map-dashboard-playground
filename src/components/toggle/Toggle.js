import React from "react";
import { StyledToggle, StyledToggleCircle } from "./styles";

const variants = {
  selected: {
    marginLeft: "50%",
  },
  notSelected: {
    marginLeft: "0%",
  },
};

const Toggle = ({ selected, setSelected }) => {
  return (
    <StyledToggle $isSelected={selected} onClick={() => setSelected(!selected)}>
      <StyledToggleCircle
        animate={selected ? "selected" : "notSelected"}
        variants={variants}
        transition={{ ease: "easeOut", duration: 0.3 }}
      />
    </StyledToggle>
  );
};

export default Toggle;
