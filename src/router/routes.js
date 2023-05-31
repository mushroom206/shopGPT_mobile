import HomePage from "../pages/HomePage.vue";
import PrivacyPolicy from "../pages/PrivacyPolicy.vue";
import TermsOfService from "../pages/TermsOfService.vue";
import DataDeletion from "../pages/DataDeletion.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: HomePage },
      { path: "/privacy-policy", component: PrivacyPolicy },
      { path: "/terms-of-service", component: TermsOfService },
      { path: "/data-deletion", component: DataDeletion },
    ],
  },
];

export default routes;
