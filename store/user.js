// State
export const state = () => ({
  user: {},
  token: "",
});

// Getters
export const getters = {};

// Actions
export const actions = {};

// Mutations
export const mutations = {
  addUser(state, user) {
    state.user = user;
  },
  addToken(state, token) {
    state.token = token;
  },
  clear(state) {
    state.user = {};
    state.token = "";
  },
};
