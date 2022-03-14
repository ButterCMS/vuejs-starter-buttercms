<template>
  <blog-header :heading="heading" :links="headerLinks" :text="headerText" />
  <blog-content-container>
    <blog-posts-list v-if="!isArticle" :blog-posts="posts" />
  </blog-content-container>
</template>

<script setup>
import {basicBlogLinks} from "@/utils";
import {useBlogPosts} from "@/utils/hooks";
import {useRoute} from "vue-router";
import BlogHeader from "../components/BlogSections/BlogHeader.vue";
import BlogContentContainer from "../components/BlogSections/BlogContentContainer.vue";
import BlogPostsList from "../components/BlogSections/BlogPostsList.vue";
import {ref, watch} from "vue";
import {getBlogCategory, getBlogTag} from "@/utils/service";

const route = useRoute();
const headerText = ref("");
const heading = ref("");
const filter = ref({});
const headerLinks = ref([]);
const isArticle = ref(false);

const loadData = () => {
  headerLinks.value = basicBlogLinks;
  if ("category" in route.params) {
    const slug = route.params.category;
    heading.value = "Blog Posts by Category";
    filter.value = { category_slug: slug };
    getBlogCategory(slug).then((category) => {
      headerText.value = "Category: " + category.name;
    });
  } else if ("tag" in route.params) {
    const slug = route.params.tag;
    heading.value = "Blog Posts by Tag";
    filter.value = { tag_slug: slug };
    getBlogTag(slug).then((tag) => (headerText.value = "Tag: " + tag.name));
  } else if ("q" in route.query) {
    filter.value = String(route.query["q"]);
    heading.value = "Search Results";
    headerText.value = "Search: " + route.query["q"];
  } else {
    headerText.value = heading.value = "All blog posts";
    headerLinks.value = [basicBlogLinks[0]];
    filter.value = {};
  }
};
loadData();
watch(route, loadData);
const { posts } = useBlogPosts(filter);
</script>
