import React, { useState } from "react";
import { ListContainer, DropdownWrapper, SelectContainer } from "./styles";

import { AnimatePresence } from "framer-motion";
import { getCodes, getName } from "country-list";
import { useCountriesStore } from "../../data";

const Dropdown = () => {
  const [state, setState] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const list = getCodes();
  const { changeCountries } = useCountriesStore();

  const changeHandler = (e) => {
    changeCountries(e);
    setState(e);
  };
  return (
    <DropdownWrapper>
      <SelectContainer
        className="shadow-sm"
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{state === "" ? "Add" : list.find((el) => el === state)}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </SelectContainer>
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <ListContainer
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="shadow-sm"
            >
              {list.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    changeHandler(option);
                    setIsOpen(false);
                  }}
                >
                  {getName(option)}
                </li>
              ))}
            </ListContainer>
          )}
        </AnimatePresence>
      </div>
    </DropdownWrapper>
  );
};

export default Dropdown;
