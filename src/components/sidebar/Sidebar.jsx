import React from "react";
import { SidebarContainer } from "./styles";
import Toggle from "../toggle/Toggle";
import { useCustomTooltip } from "../../data";
import Dropdown from "../Dropdown/Dropdown";

const Sidebar = () => {
  const { customTooltip, setCustomTooltip } = useCustomTooltip();
  return (
    <SidebarContainer>
      <h1>react-map-dashboard</h1>
      <p>A simple map component for your dashboard.</p>
      <section>
        <h2>Custom Tooltip</h2>
        <Toggle selected={customTooltip} setSelected={setCustomTooltip} />
      </section>
      <section>
        <h2>Add country</h2>
        <Dropdown />
      </section>
      <section>
        <div>
          <a
            href="https://github.com/krodetsa/react-map-dashboard-playground"
            target="_blank"
            aria-label="Github"
            rel="noreferrer"
          >
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
          <a
            href="https://www.npmjs.com/package/react-map-dashboard"
            target="_blank"
            aria-label="Npm"
            rel="noreferrer"
          >
            <svg viewBox="0 0 780 250" aria-hidden="true">
              <path
                fill="#231F20"
                d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"
              ></path>
            </svg>
          </a>
        </div>
      </section>
    </SidebarContainer>
  );
};

export default Sidebar;
