<template>
  <div class="col-lg-4 col-md-8 col-sm-10">
    <div class="single-blog">
      <div v-if="featured_image" class="blog-header">
        <img
          class="img-fluid"
          loading="lazy"
          :src="featured_image"
          :alt="featured_image_alt"
        />
      </div>
      <div class="blog-body">
        <h5 class="package-name">
          <RouterLink :to="`/blog/${slug}`">{{ title }}</RouterLink>
        </h5>
        <p>{{ summary }}</p>
      </div>
      <div class="blog-footer">
        <RouterLink :to="`/blog/${slug}`" class="main-btn btn-hover">Read More</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps([
  "featured_image",
  "featured_image_alt",
  "slug",
  "title",
  "summary",
]);
</script>

<style scoped>

</style>