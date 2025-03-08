import React from "react";
import { useTranslation } from "react-i18next";
function BlueEconomy() {
  const { t } = useTranslation();
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            {t("blueEconomy.title")}
          </h1>
          <p className="text-justify text-lg text-gray-600 max-w-2xl mx-auto">
            {t("blueEconomy.subtitle")}
          </p>
          <h2 className="text-lg mt-8 sm:text-xl md:text-2xl lg:text-3xl">
            {t("blueEconomy.pillars.title")}
          </h2>
          <p className="text-justify text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
            <b>{t("blueEconomy.pillars.types.economic.title")}</b>
            {t("blueEconomy.pillars.types.economic.subtitle")}
          </p>
          <p className="text-justify text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
            <b>{t("blueEconomy.pillars.types.social.title")}</b>
            {t("blueEconomy.pillars.types.social.subtitle")}
          </p>
          <p className="text-justify text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
            <b>{t("blueEconomy.pillars.types.environmental.title")}</b>
            {t("blueEconomy.pillars.types.environmental.subtitle")}
          </p>
          <h2 className="text-lg mt-8 sm:text-xl md:text-2xl lg:text-3xl">
            {t("blueEconomy.movement.title")}
          </h2>
          <p className="text-justify text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
            {t("blueEconomy.movement.subtitle")}
          </p>
        </div>{" "}
      </div>
    </div>
  );
}

export default BlueEconomy;
