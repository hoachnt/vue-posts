import axios from "axios";
import { ref, onMounted } from "vue";

export default function usePosts(limit) {
  let page = ref(1);
  const serverUrl = ref("http://91.105.198.56/items/posts")
  const meta = ref("total_count");
  const posts = ref([]);
  const totalPages = ref(0);
  const isPostLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get(serverUrl.value, {
        params: {
          page: page.value,
          limit: limit,
          meta: meta.value,
        },
      });

      totalPages.value = Math.ceil(response.data.meta.total_count / limit);
      posts.value = await response.data.data;
    } catch (error) {
      console.log(error.name, error.message)
    } finally {
      setTimeout(() => (isPostLoading.value = false), 0);
    }
  };
  const loadMorePosts = async () => {
    try {
      page.value += 1

      const response = await axios.get(serverUrl.value, {
        params: {
          page: page.value,
          limit: limit,
        },
      });

      posts.value = await [...posts.value, ...response.data.data];
    } catch (error) {
      document.location.reload(true);
    }
  }
  onMounted(fetching);

  return {
    posts,
    totalPages,
    isPostLoading,
    page,
    meta,
    serverUrl,
    loadMorePosts
  };
}
