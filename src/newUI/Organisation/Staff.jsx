import React from "react";
import style from "./style.module.scss";
import { DropDownList } from "../DropDownList/DropDownList";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";

const staff = {
  1: [
    {
      id: 1,
      user_id: 2,
      name: "Канаков Сергей Владимирович",
      experience: 5,
      rating: 4.9,
    },
  ],
  3: [
    {
      id: 2,
      user_id: 2,
      name: "Канаков Сергей Владимирович",
      experience: 5,
      rating: 4.9,
    },
    {
      id: 3,
      role_id: 2,
      name: "Канаков Сергей Владимирович",
      experience: 5,
      rating: 4.9,
    },
    {
      id: 4,
      user_id: 2,
      name: "Канаков Сергей Владимирович",
      experience: 5,
      rating: 4.9,
    },
    {
      id: 5,
      role_id: 2,
      name: "Канаков Сергей Владимирович",
      experience: 5,
      rating: 4.9,
    },
  ],
  7: [
    {
      id: 6,
      user_id: 2,
      name: "Канаков Сергей Владимирович",
      experience: 5,
      rating: 4.9,
    },
    {
      id: 7,
      role_id: 2,
      name: "Оттовордемгентшенфельд Сергей Владимирович",
      experience: 5,
      rating: 4.9,
    },
  ],
};

const roles = {
  1: "Управление предприятем",
  3: "Сотрудник предприятия",
  7: "Финансист",
};

export const Staff = () => {
  return (
    <div className={style.staffWrapper}>
      {Object.keys(staff).map((key) => (
        <DropDownList key={key} title={`${roles[key]} (${staff[key].length})`}>
          <div className={style.grid}>
            {staff[key].map((item) => (
              <EmployeeCard key={item.id} name={item.name} />
            ))}
          </div>
        </DropDownList>
      ))}
    </div>
  );
};
