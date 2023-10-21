import React from "react";
import { TooltipWrapper } from "./styles";

const CustomTooltip = (props) => {
  return (
    <TooltipWrapper>
      <p>Your Custom component</p>
      <p>Some data from props: {props.data.country}</p>
    </TooltipWrapper>
  );
};

export default CustomTooltip;
