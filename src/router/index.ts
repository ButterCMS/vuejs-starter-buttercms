import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogView from "../views/BlogView.vue";
import ArticleView from "../views/ArticleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/blog",
      name: "blog",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: BlogView,
    },
    {
      path: "/blog/category/:category",
      name: "blog-category",
      component: BlogView,
    },
    {
      path: "/blog/tag/:tag",
      name: "blog-tag",
      component: BlogView,
    },
    {
      path: "/blog/search",
      name: "blog-search",
      component: BlogView,
    },
    {
      path: "/blog/:article",
      name: "blog-post",
      component: ArticleView,
    },
  ],
});

export default router;
