import React from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../Button/Button";

export const NavigationPane = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className={style.wrapper}>
      {data.map((button, i) => (
        <CustomButton key={i} width={150} onClick={() => navigate(button.url)}>
          {button.title}
        </CustomButton>
      ))}
    </div>
  );
};
