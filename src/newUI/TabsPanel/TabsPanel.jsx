import React, { useState, useEffect } from "react";
import style from "./style.module.scss";

import { IconButton } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

export const TabToggler = ({
  currentTab,
  setCurrentTab,
  item,
  setMenuOpen,
  mobile,
  setCurrentSection,
}) => {
  const handleClick = () => {
    if (item.redirect) {
      window.location.href = item.url;
    } else {
      setCurrentTab(item.url);
      setCurrentSection(item.title);
      if (!mobile) {
        setMenuOpen(false);
      }
    }
  };
  const customStyle = currentTab
    ? { background: "#3B93AF", color: "white" }
    : {};

  return (
    <div onClick={handleClick} className={style.toggler} style={customStyle}>
      <div className={style.title}>{item.title}</div>
      <div className={style.plot}></div>
    </div>
  );
};

export const TabsPanel = ({
  tabsInfo,
  currentTab,
  setCurrentTab,
  components,
}) => {
  const [mobile, setMobile] = useState(window.innerWidth > 1140);
  const [menuIsOpen, setMenuOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState(
    tabsInfo.length > 0 ? tabsInfo[0].title : null
  );
  const sx = { color: "white" };

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(window.innerWidth > 1140);
      setMobile(window.innerWidth > 1140);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {menuIsOpen ? (
        <div className={style.wrapper}>
          {tabsInfo.map((item) => (
            <TabToggler
              key={item.url}
              currentTab={currentTab === item.url}
              setCurrentTab={setCurrentTab}
              item={item}
              mobile={mobile}
              setMenuOpen={setMenuOpen}
              setCurrentSection={setCurrentSection}
            />
          ))}
        </div>
      ) : (
        <div onClick={() => setMenuOpen(true)} className={style.temp}>
          <div>{currentSection}</div>
          <IconButton>
            <LoginIcon sx={sx} />
          </IconButton>
        </div>
      )}
      {(!menuIsOpen || mobile) && components}
    </>
  );
};
