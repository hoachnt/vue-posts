import axios from "axios";

export const postModule = {
  state: () => ({
    authenticated: false,
    auth: null,
    posts: [],
    isPostLoading: false,
    dark: false,
    root: null,
    selectedSort: "",
    searchQuery: "",
    page: 1,
    limit: 1,
    metaAll: 0,
    meta: "total_count",
    totalPages: 0,
    serverUrl:
      "https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/items/posts",
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
    setAuth(state, authenticated) {
      state.authenticated = authenticated;
    },
  },
  actions: {
    // async loadMorePosts({ state, commit }) {
    //   try {
    //     commit("setPage", (state.page += 1));

    //     const response = await axios.get(state.serverUrl, {
    //       params: {
    //         page: state.page,
    //         limit: state.limit,
    //       },
    //     });

    //     commit("setPosts", [...state.posts, ...response.data.data]);
    //   } catch (error) {
    //     document.location.reload(true);
    //   }
    // },
    authTrue({ state, commit }) {
      commit("setAuth", (state.auth = true));
    },
    authFalse({ state, commit }) {
      commit("setAuth", (state.auth = false));
    },
  },
  namespaced: true,
};
