import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";
import { CustomButton } from "../Button/Button";

export const Check = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <div>Проверка организации</div>
        <div>31.08.2021</div>
      </div>
      <div className={style.section}>
        <div className={style.name}>Комментарий</div>
        <div className={style.content}>Направляю материалы на проверку</div>
      </div>
      <div className={style.section}>
        <div className={style.name}>Комментарий</div>
        <div className={classNames(style.content, style.files)}>Паспорт</div>
        <div className={classNames(style.content, style.files)}>ОГРН</div>
      </div>
      <div className={style.edit}>
        <CustomButton blue width={160}>Редактировать</CustomButton>
      </div>
      <div className={style.section}>
        <div className={style.name}>Комментарий администратора</div>
        <div className={style.content}>Согласовано</div>
      </div>
    </div>
  );
};
