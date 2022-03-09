<template>
  <blog-posts-section :type="pageType" text="haha"/>
  <blog-posts-list :blog-posts="blogPosts"/>
</template>

<script setup>
import BlogPostsSection from "./BlogPostsSection.vue";
import BlogPostsList from "./BlogPostsList.vue";
import {ref} from "vue";

defineProps(['pageType'])

const blogPosts = ref([])
</script>

<style scoped>

</style>