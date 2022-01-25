import React from "react";
import { Button } from "@mui/material";

export const CustomButton = ({
  width,
  green,
  blue,
  onClick = () => {},
  className,
  children,
  redirect,
  disabled,
}) => {
  const palette = {
    green: "#3BAF6A",
    blue: "#3B93AF",
    common: "#26313A",
  };

  const buttonColor =
    (green && palette.green) || (blue && palette.blue) || palette.common;

  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      redirect={redirect}
      className={className}
      style={{
        textTransform: "none",
        fontSize: 14,
        width,
        height: 36,
        borderRadius: 20,
        background: buttonColor,
        color: "white",
        "&:hover": {
          backgroundColor: buttonColor,
        },
      }}
    >
      {children}
    </Button>
  );
};
