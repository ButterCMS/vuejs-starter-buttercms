<template>
  <section id="blog-roll" class="blog-roll-nav">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <div v-if="type === 'blog'" class="section-title text-center">
            <h2>All Blog Posts</h2>
            <ul class="breadcrumb-nav">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>All blog posts</li>
            </ul>
          </div>
          <div v-else-if="type === 'category'" class="section-title text-center">
            <h2>Blog Posts by Category</h2>
            <ul class="breadcrumb-nav">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/blog">Blog</router-link>
              </li>
              <li>Category: {{ text }}</li>
            </ul>
          </div>
          <div v-else-if="type === 'tag'" class="section-title text-center">
            <h2>Blog Posts by Tag</h2>
            <ul class="breadcrumb-nav">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/blog">Blog</router-link>
              </li>
              <li>Tag: {{ text }}</li>
            </ul>
          </div>
          <div v-else-if="type === 'search'" class="section-title text-center">
            <h2>Search Results</h2>
            <ul class="breadcrumb-nav">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/blog">Blog</router-link>
              </li>
              <li>Search: {{ text }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['type', 'text'])
</script>

<style scoped>

</style>