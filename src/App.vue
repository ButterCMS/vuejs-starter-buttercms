<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import NoApiKeyView from "@/views/NoApiKeyView.vue";
import Layout from "@/containers/Layout.vue";
import {useMenuItems} from "@/utils/hooks";

const apiKeyExists = !!import.meta.env.VITE_APP_BUTTER_CMS_API_KEY

const {items} = useMenuItems()
</script>

<template>
  <NoApiKeyView v-if="!apiKeyExists"/>
  <Layout :menu-items="items" v-else>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>

    <div class="wrapper">
      <HelloWorld msg="You did it!"/>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </Layout>

  <RouterView/>
</template>

<style>
@import '@/assets/css/bootstrap.min.css';
@import '@/assets/css/main.css';

</style>
