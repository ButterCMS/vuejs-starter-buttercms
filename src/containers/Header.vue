<script setup lang="ts">
import {ref} from "vue";
import type {NavigationItem} from "@/etitities";

const isSticky = ref(true)
const isTogglerActive = ref(true)
const props = defineProps<{
  menuItems: NavigationItem[],
  activeLink: string
}>()

const togglToggler = () => {
  isTogglerActive.value = !isTogglerActive.value
}
</script>

<template>
  <header class="header">
    <div
        class="navbar-area"
        :class="{'sticky': isSticky}"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="https://buttercms.com">
                <img src="https://cdn.buttercms.com/PBral0NQGmmFzV0uG7Q6" alt="Logo"/>
              </a>
              <button
                  class='navbar-toggler'
                  :class="{'active': isTogglerActive}"
                  @click="togglToggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>

              <div
                  :class="{'show': isTogglerActive}"
                  class="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent">
                <div class="ms-auto">
                  <ul id="nav" class="navbar-nav ms-auto">
                    <li
                        v-for="menuItem in props.menuItems"
                        :key="menuItem.url"
                        class="nav-item"
                    >
                      <a
                          class="nav-link page-scroll"
                          :class="{'active': activeLink === menuItem.url}"
                          :href="menuItem.url"
                          @click="isTogglerActive = false">{{ menuItem.label }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>