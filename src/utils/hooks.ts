import { butterCMS } from "@/utils/ButterCMS";
import type { NavigationItem } from "@/etitities";
import { ref } from "vue";

export const useMenuItems = () => {
  const items = ref<NavigationItem[]>([]);
  butterCMS?.content.retrieve(["navigation_menu"]).then((response) => {
    items.value = response.data.data.navigation_menu[0].menu_items;
  });

  return { items };
};

export const useCategories = () => {
  const categories = ref([]);
  butterCMS?.category.list().then((response) => {
    categories.value = response?.data.data;
  });
  return { categories };
};
