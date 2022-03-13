<template>
  <blog-posts-section :type="pageType" text="haha"/>
  <blog-posts-list :blog-posts="blogPosts" :categories="categories"/>
</template>

<script setup>
import BlogPostsSection from "./BlogPostsSection.vue";
import BlogPostsList from "./BlogPostsList.vue";
import {onMounted, ref} from "vue";
import {butterCMS} from "../../utils/ButterCMS";
import {useCategories} from "../../utils/hooks";

defineProps(['pageType'])
const blogPosts = ref([])
const {categories} = useCategories()
onMounted(async () => {
  let filterBy = {}
  const posts = await butterCMS.post.list(filterBy)
  blogPosts.value = posts.data.data
})
</script>

<style scoped>

</style>