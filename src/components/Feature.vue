<template>
  <div class="col-lg-6 col-md-6">
    <div class="single-feature">
      <div class="feature-icon">
        <img :src="feature.icon" alt="" />
      </div>
      <div class="feature-content">
        <h4>{{ feature.headline }}</h4>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import type {FeatureType} from "@/etitities";

defineProps<{feature: FeatureType}>()
</script>
