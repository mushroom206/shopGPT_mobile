import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  locale: "english", // Default language
  fallbackLocale: "english",
  globalInjection: true,
  messages: {
    english: {
      "Log Out": "Log Out",
      "Privacy Policy": "Privacy Policy",
      "Terms of Service": "Terms of Service",
      "smart watch, Christmas gift, etc.": "smart watch, Christmas gift, etc.",
      Search: "Search",
      "Thinking...": "Thinking...",
      "Fine Tune Choices!": "Fine Tune Choices!",
      "Tell me more about this item": "Tell me more about this item",
      "Ask AI": "Ask AI",
      Pros: "Pros",
      Cons: "Cons",
      // other translations...
    },
    chinese: {
      "Log Out": "登出",
      "Privacy Policy": "隐私条例",
      "Terms of Service": "服务声明",
      "smart watch, Christmas gift, etc.": "蓝牙音箱，圣诞礼物，等",
      Search: "搜索",
      "Thinking...": "思考中...",
      "Fine Tune Choices!": "优化搜索",
      "Tell me more about this item": "我想了解更多",
      "Ask AI": "问 AI",
      Pros: "优点",
      Cons: "缺点",
      // other translations...
    },
  },
});

export default boot(({ app, store }) => {
  // Set i18n instance on app
  app.use(i18n);

  // watch for changes in language state
  store.watch(
    (state) => state.lang,
    (lang) => {
      i18n.global.locale = lang;
    }
  );
});
