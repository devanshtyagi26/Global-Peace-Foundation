import { useTranslation } from "react-i18next";
function Diaspora() {
  const { t } = useTranslation();
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="md:max-w-[57rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            {t("diaspora.title")}
          </h1>
          <p className="text-justify text-lg text-gray-600 md:max-w-[57rem] w-full mx-auto">
            {t("diaspora.subtitle")}
          </p>

          <p className="text-justify text-lg mt-4 text-gray-600 md:max-w-[57rem] w-full mx-auto">
            <b>{t("diaspora.paras.role.title")}</b>
            {t("diaspora.paras.role.subtitle")}
          </p>
          <p className="text-justify text-lg mt-4 text-gray-600 md:max-w-[57rem] w-full mx-auto">
            <b>{t("diaspora.paras.influence.title")}</b>
            {t("diaspora.paras.influence.subtitle")}
          </p>
          <p className="text-justify text-lg mt-4 text-gray-600 md:max-w-[57rem] w-full mx-auto">
            <b>{t("diaspora.paras.promoting.title")}</b>
            {t("diaspora.paras.promoting.subtitle")}
          </p>
          <p className="text-justify text-lg mt-4 text-gray-600 md:max-w-[57rem] w-full mx-auto">
            <b>{t("diaspora.paras.diplomacy.title")}</b>
            {t("diaspora.paras.diplomacy.subtitle")
              .split("\n")
              .map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Diaspora;
