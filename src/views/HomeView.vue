<script setup>
import { butterCMS } from "@/utils/ButterCMS";
import { onMounted, ref } from "vue";
import HeroSection from "@/components/HomepageSections/HeroSection.vue";
import TwoColumnWithImageSection from "@/components/HomepageSections/TwoColumnWithImageSection.vue";
import FeaturesSection from "@/components/HomepageSections/FeaturesSection.vue";
import TestimonialsSection from "@/components/HomepageSections/TestimonialsSection.vue";
import BlogSection from "@/components/HomepageSections/BlogSection.vue";
import { useApiError } from "@/utils/hooks";
import Seo from "@/components/Seo.vue";

const { setError } = useApiError();
const pageData = ref(null);
const blogPosts = ref([]);

onMounted(async () => {
  try {
    const page = await butterCMS?.page.retrieve(
      "landing-page",
      "landing-page-with-components"
    );
    pageData.value = page?.data.data;
    const posts = await butterCMS?.post.list({ page: 1, page_size: 2 });
    blogPosts.value = posts?.data.data;
  } catch (e) {
    setError(e);
  }
});
</script>

<template>
  <div v-if="pageData">
    <seo v-bind="pageData.fields.seo" />
    <template v-for="(item, index) in pageData.fields.body">
      <hero-section
        v-if="item.type === 'hero'"
        :key="index"
        :fields="item.fields"
      />
      <two-column-with-image-section
        v-if="item.type === 'two_column_with_image'"
        :key="index"
        :fields="item.fields"
      />
      <features-section
        v-if="item.type === 'features'"
        :key="index"
        :fields="item.fields"
      />
      <testimonials-section
        v-if="item.type === 'testimonials'"
        :key="index"
        :fields="item.fields"
      />
    </template>
    <blog-section :blog-posts="blogPosts" />
  </div>
</template>
