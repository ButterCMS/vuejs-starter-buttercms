<script setup lang="ts">
import Header from "@/containers/Header.vue";
import {ref} from "vue";
import type {NavigationItem} from "@/etitities";
import ScrollToTop from "@/components/ScrollToTop.vue";

const props = defineProps<{
  menuItems: NavigationItem[]
}>()

const activeLink = ref('')
</script>

<template>
  <Header :menu-items="menuItems" :active-link="activeLink" />
  <slot />
  <ScrollToTop/>
</template>


<style scoped>

</style>