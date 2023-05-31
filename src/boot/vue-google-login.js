import vue3GoogleLogin from "vue3-google-login";

export default ({ app }) => {
  app.use(vue3GoogleLogin, {
    clientId:
      "386372323157-34tj0kthjhnbcgb9jl9msamk33fi27ad.apps.googleusercontent.com",
  });
};
