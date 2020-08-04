import polyglotI18nProvider from "ra-i18n-polyglot";

const englishMessages = {
  ra: {
    notification: {
      http_error: "Network error. Please retry",
    },
    action: {
      save: "Save",
      delete: "Delete",
    },
  },
};
const koreanMessages = {
  ra: {
    notification: {
      http_error: "네트워크 오류입니다. 다시 시도하세요",
    },
    action: {
      save: "저장",
      delete: "삭제",
    },
  },
};

const i18nProvider = polyglotI18nProvider(
  (locale) => (locale === "en" ? englishMessages : koreanMessages),
  "ko"
);

export default i18nProvider;