import axios from "axios";
import { ref, onMounted } from "vue";

export default function usePosts(limit) {
  let page = ref(1);
  const serverUrl = ref(
    "https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net"
  );
  const meta = ref("total_count");
  const posts = ref([]);
  const totalPages = ref(0);
  const isPostLoading = ref(true);
  const fetching = async () => {
    try {
      const allPosts = await axios.get(`${serverUrl.value}/items/posts`, {
        params: {
          meta: meta.value,
        },
      });

      totalPages.value = Math.ceil(allPosts.data.meta.total_count / limit);
      page.value = totalPages.value;

      const response = await axios.get(`${serverUrl.value}/items/posts`, {
        params: {
          page: page.value,
          limit: limit,
        },
      });

      posts.value = await response.data.data.reverse();
    } catch (error) {
      console.log(error.name, error.message);
    } finally {
      setTimeout(() => (isPostLoading.value = false), 0);
    }
  };
  const loadMorePosts = async () => {
    try {
      if (page.value != 1) {
        page.value -= 1;

        const response = await axios.get(`${serverUrl.value}/items/posts`, {
          params: {
            page: page.value,
            limit: limit,
          },
        });

        posts.value = await [...posts.value, ...response.data.data.reverse()];
      }
    } catch (error) {
      document.location.reload(true);
    }
  };
  onMounted(fetching);

  return {
    posts,
    totalPages,
    isPostLoading,
    page,
    meta,
    serverUrl,
    loadMorePosts,
  };
}
