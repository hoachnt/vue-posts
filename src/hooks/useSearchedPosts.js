import { ref, computed } from "vue";

export default function useSortedPost(sortedPosts) {
  const searchQuery = ref("");
  const searchedPosts = computed(() => {
    return sortedPosts.value.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return {
    searchQuery,
    searchedPosts,
  };
}
