import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
    isPostLoading: false,
    dark: false,
    root: null,
    selectedSort: "",
    searchQuery: "",
    page: 1,
    limit: 10,
    metaAll: 0,
    meta: "total_count",
    totalPages: 0,
    serverUrl:
      "http://91.105.198.56/items/posts",
    sortOptions: [
      { value: "title", name: "Title" },
      { value: "body", name: "Description" },
    ],
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      );
    },
    searchedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPostLoading(state, bool) {
      state.isPostLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit("setPostLoading", true);
        commit("setPage", state.page = 1);


        const response = await axios.get(state.serverUrl, {
          params: {
            page: state.page,
            limit: state.limit,
            meta: state.meta,
          },
        });

        commit(
          "setTotalPages",
          Math.ceil(response.data.meta.total_count / state.limit)
        );
        commit("setPosts", response.data.data);
        state.metaAll = response.data.meta.total_count;
      } catch (error) {
        document.location.reload(true);
      } finally {
        setTimeout(() => commit("setPostLoading", false), 0);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        commit("setPage", state.page += 1);

        const response = await axios.get(state.serverUrl, {
          params: {
            page: state.page,
            limit: state.limit,
          },
        });

        commit("setPosts", [...state.posts, ...response.data.data]);
      } catch (error) {
        document.location.reload(true);
      }
    },
  },
  namespaced: true,
};
