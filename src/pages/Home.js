//
import React from "react";
import { useTranslation } from "react-i18next";

import "../css/Home.scss";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <main className='home'>
      <div className='container'>
        <h1>{t("home:title")}</h1>
      </div>
    </main>
  );
};
