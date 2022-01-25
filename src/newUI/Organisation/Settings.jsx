import React from "react";
import { Checkbox } from "@material-ui/core";
import style from "./style.module.scss";

import { withStyles } from "@material-ui/core/styles";
import { CustomTextField } from "../CustomTextField/CustomTextField";

const RedCheckbox = withStyles({
  root: {
    color: "white",
    "&$checked": {
      color: "#3BAF6A",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export const Settings = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Настройка</div>
      <div className={style.tickers}>
        <div className={style.ticker}>
          <RedCheckbox name="checkedA" />
          <div>Проверенная</div>
        </div>
        <div>
          <div className={style.ticker}>
            <RedCheckbox name="checkedA" />
            <div>Безопасная сделка по тарифному плану</div>
          </div>
          <div className={style.ticker}>
            <RedCheckbox name="checkedA" />
            <div className={style.percentageField}>
              Безопасная сделка по процентной ставке &nbsp;&nbsp;
              <CustomTextField className={style.chtoto} width={60} />
              &nbsp;&nbsp; процентов
            </div>
          </div>
          <div className={style.ticker}>
            <RedCheckbox name="checkedA" />
            <div>ГИП работает по бюджету</div>
          </div>
        </div>
      </div>
    </div>
  );
};
