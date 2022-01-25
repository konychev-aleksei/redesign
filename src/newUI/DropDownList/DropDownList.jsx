import React, { useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const sx = { color: "white" };

export const DropDownList = ({ title, children, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classNames(style.wrapper, className)}>
      <div onClick={() => setOpen(!open)} className={style.bar}>
        <div className={style.title}>{title}</div>
        <div className={style.control}>
          <IconButton>
            {open ? <ArrowDropDownIcon sx={sx} /> : <ArrowDropUpIcon sx={sx} />}
          </IconButton>
        </div>
      </div>
      <div className={style.content}>{open && children}</div>
    </div>
  );
};
