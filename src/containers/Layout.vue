<script setup lang="ts">
import Header from "@/containers/Header.vue";
import {onMounted, ref} from "vue";
import type {NavigationItem} from "@/etitities";
import ScrollToTop from "@/components/ScrollToTop.vue";
import Footer from "@/containers/Footer.vue";

defineProps<{
  menuItems: NavigationItem[]
}>()

const activeLink = ref('')

onMounted(() => {
  const onScroll = () => {
    const sections = document.querySelectorAll('.page-scroll');
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const currLinkHref = currLink.getAttribute('href');
      const val = currLinkHref?.replace("/", "");
      const refElement = document.querySelector(val);
      const scrollTopMinus = scrollPos + 73;

      if (refElement && refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
        activeLink.value = String(currLinkHref)
      }
    }
  };

  window.document.addEventListener('scroll', onScroll, {passive: true});
  return () => window.document.removeEventListener('scroll', onScroll);
})
</script>

<template>
  <Header :menu-items="menuItems" :active-link="activeLink" />
  <slot />
  <ScrollToTop/>
  <Footer :menu-items="menuItems" :active-link="activeLink"/>
</template>


<style scoped>

</style>