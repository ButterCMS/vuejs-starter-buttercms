import { butterCMS } from "@/utils/ButterCMS";
import { ref, watch } from "vue";

export const useMenuItems = () => {
  const items = ref([]);
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

export const useBlogPosts = (filter) => {
  const posts = ref([]);
  const loading = ref(true);
  const loadPosts = () => {
    if (typeof filter.value == "object") {
      butterCMS?.post
        .list(filter.value)
        .then((response) => {
          console.log(response);
          posts.value = response.data.data;
        })
        .finally(() => {
          loading.value = false;
        });
    } else {
      butterCMS.post.search(filter.value).then((response) => {
        posts.value = response.data.data;
      });
    }
  };
  loadPosts();
  watch(filter, () => loadPosts());
  return { posts, loading };
};
