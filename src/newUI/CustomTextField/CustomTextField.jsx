import React from "react";
import style from "./style.module.scss";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const CustomTextField = ({
  value,
  label,
  name,
  formik,
  width,
  disabled,
  className,
}) => {
  const StyledTextField = withStyles({
    root: {
      "& .MuiInputBase-root": {
        color: "#9DAFBD",
        width,
        "& fieldset": {
          borderRadius: 15,
        },
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "white",
        },
        "&:hover fieldset": {
          borderColor: "white",
        },
        "&.Mui-focused fieldset": {
          borderColor: "white",
        },
      },
    },
  })(TextField);

  return (
    <StyledTextField
      value={value}
      onChange={(e) => formik.setFieldValue(name, e.target.vale)}
      variant={"outlined"}
      label={label}
      size={"small"}
      disabled={disabled}
      className={className}
      style={{ width: "150 !important" }}
      InputLabelProps={{ className: style.label }}
    />
  );
};
