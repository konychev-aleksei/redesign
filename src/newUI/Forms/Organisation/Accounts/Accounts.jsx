import React from "react";
import style from "./style.module.scss";
import { CustomTextField } from "../../../CustomTextField/CustomTextField";
import { CustomButton } from "../../../Button/Button";

export const Accounts = () => {
  const editing = true;

  return (
    <form className={style.form}>
      <div className={style.wrapper}>
        <div className={style.title}>Банковские реквизиты №1</div>
        <div className={style.upperFields}>
          <CustomTextField
            value={""}
            label={"БИК банка"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={" Наименование банка"}
            formik={null}
            name={""}
          />
        </div>
        <div className={style.middleFields}>
          <CustomTextField
            value={""}
            label={"Корреспондентский счет"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Расчетный счет"}
            formik={null}
            name={""}
          />
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.title}>Банковские реквизиты №2</div>
        <div className={style.upperFields}>
          <CustomTextField
            value={""}
            label={"БИК банка"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={" Наименование банка"}
            formik={null}
            name={""}
          />
        </div>
        <div className={style.middleFields}>
          <CustomTextField
            value={""}
            label={"Корреспондентский счет"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Расчетный счет"}
            formik={null}
            name={""}
          />
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.title}>Казначейский счет</div>
        <div className={style.upperFields}>
          <CustomTextField
            value={""}
            label={"БИК банка"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={" Наименование банка"}
            formik={null}
            name={""}
          />
        </div>
        <div className={style.lowerFields}>
          <CustomTextField
            value={""}
            label={"Корреспондентский счет"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Расчетный счет"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Корреспондентский счет"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Расчетный счет"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Корреспондентский счет"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Расчетный счет"}
            formik={null}
            name={""}
          />
        </div>
        <div className={style.longField}>
          <CustomTextField
            value={""}
            label={"Корреспондентский счет"}
            formik={null}
            name={""}
          />
        </div>
      </div>
      {editing && (
        <CustomButton blue onClick={() => {}} className={style.button}>
          Сохранить
        </CustomButton>
      )}
    </form>
  );
};
