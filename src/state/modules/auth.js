const netlifyIdentity = require("netlify-identity-widget");

export const state = {
  isIdentityModalOpen: false
};

export const mutations = {
  TOGGLE_IDENTITY_MODAL(state) {
    state.isIdentityModalOpen = !state.isIdentityModalOpen;
  }
};

export const getters = {};

export const actions = {
  initializeIdentity({ commit }, val) {
    netlifyIdentity.init({
      container: val
    });
    netlifyIdentity.open(); // open the modal
    netlifyIdentity.open("signup"); // open the modal to the signup tab
    netlifyIdentity.on("close", function() {
      commit("TOGGLE_IDENTITY_MODAL");
    });
    netlifyIdentity.on("init", user => console.log("init", user));
    netlifyIdentity.on("open", user => console.log("open", user));
    netlifyIdentity.on("login", user => console.log("login", user));
    netlifyIdentity.on("logout", () => console.log("logged out"));
  },
  toggleIdentityModal({ commit }) {
    commit("TOGGLE_IDENTITY_MODAL");
  },
  openIdentityModal({ dispatch }) {
    netlifyIdentity.open("login");
    dispatch("toggleIdentityModal");
  }
};
