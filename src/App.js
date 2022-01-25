import React, { useState } from "react";
import { TitlePanel } from "./newUI/TitlePanel/TitlePanel";
import { Map } from "./newUI/Forms/Organisation/Map/Map";
import { Accounts } from "./newUI/Forms/Organisation/Accounts/Accounts";
import { TabsPanel } from "./newUI/TabsPanel/TabsPanel";
import { Staff } from "./newUI/Organisation/Staff";
import { Check } from "./newUI/Organisation/Check";
import { Settings } from "./newUI/Organisation/Settings";
import { NavigationPane } from "./newUI/NavigationPane/NavigationPane";
import style from "./style.module.scss";
import { BrowserRouter as Router } from "react-router-dom";

const tabsInfo = [
  {
    title: "Карта организации",
    url: "info",
    filled: true,
    redirect: false,
  },
  { title: "Банковские счета", url: "accounts", redirect: false },
  { title: "Сотрудники", url: "staff", redirect: false },
  {
    title: "Кошелек",
    url: "https://dev.bimit.ru/account/view?id=261",
    redirect: true,
  },
  { title: "Задачи на проверку", url: "task", redirect: false },
  { title: "Настройка", url: "settings", redirect: false },
];

const navigationData = [
  {
    title: "Мой профиль",
    url: "/myprofile",
  },
  {
    title: "Организации",
    url: "/organisations",
  },
];

const App = () => {
  const initialTab = tabsInfo.length ? tabsInfo[0].url : null;
  const [currentTab, setCurrentTab] = useState(initialTab);

  const components = (
    <>
      {currentTab === "info" && <Map />}
      {currentTab === "accounts" && <Accounts />}
      {currentTab === "staff" && <Staff />}
      {currentTab === "task" && <Check />}
      {currentTab === "settings" && <Settings />}
    </>
  );

  return (
    <Router>
      <div className={style.wrapper}>
        <NavigationPane data={navigationData} />
        <TitlePanel
          primaryText={`ЗАО "ХОЛДИНГОВАЯ КОМПАНИЯ "ЮНАЙТ...`}
          secondaryText={"Не проверенная"}
        />
        <div className={style.contents}>
          <TabsPanel
            tabsInfo={tabsInfo}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            components={components}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
