import React from "react";
import style from "./style.module.scss";
import { CustomTextField } from "../../../CustomTextField/CustomTextField";
import { CustomButton } from "../../../Button/Button";

export const Map = () => {
  const editing = true;

  return (
    <form className={style.form}>
      <div className={style.wrapper}>
        <div className={style.title}>Карта организации</div>
        <label className={style.uploader}>
          <img
            className={style.imageUploader}
            src={
              "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
            }
            alt=""
          />
          <input type="file" className={style.input} />
          <div>Выбрать</div>
        </label>
        <div className={style.upperFields}>
          <CustomTextField
            value={""}
            label={"Полное наименование организации"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Краткое наименование организации"}
            formik={null}
            name={""}
          />
        </div>
        <div className={style.middleFields}>
          <CustomTextField value={""} label={"ИНН"} formik={null} name={""} />
          <CustomTextField value={""} label={"ОГРН"} formik={null} name={""} />
          <CustomTextField value={""} label={"КПП"} formik={null} name={""} />
          <CustomTextField
            value={""}
            label={"Страна"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Регион"}
            formik={null}
            name={""}
          />
          <CustomTextField value={""} label={"Город"} formik={null} name={""} />
        </div>
        <div className={style.lowerFields}>
          <CustomTextField
            value={""}
            label={"Юридический адрес"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Фактический адрес"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Должность из ЕГРЮЛ/ЕГРИП"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"ФИО руководителя из ЕГРЮЛ/ЕГРИП"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Документ-основание"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Вид налогообложения"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Телефон"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"E-mail"}
            formik={null}
            name={""}
          />
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.title}>Доверенность</div>
        <div className={style.lowerFields}>
          <CustomTextField
            value={""}
            label={"Номер доверенности"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Дата подписи доверенности"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Дата подписи доверенности"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Дата окончания действия"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"Должность доверенного лица"}
            formik={null}
            name={""}
          />
          <CustomTextField
            value={""}
            label={"ФИО доверенного лица"}
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
