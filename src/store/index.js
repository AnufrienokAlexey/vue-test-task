import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    API_URL: "https://api.sitemap-generator.ru/test-api/user",
    auth_key: "",
    name: "",
    email: "",
    phone: null,
    xActionId: null,
    error: "",
  },
  mutations: {
    SET_AUTH_KEY(state, payload) {
      state.auth_key = payload;
    },
    SET_NAME(state, payload) {
      state.name = payload;
    },
    SET_EMAIL(state, payload) {
      state.email = payload;
    },
    SET_PHONE(state, payload) {
      state.phone = payload;
    },
    SET_XACTIONID(state, payload) {
      state.xActionId = payload;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
  },
  getters: {
    GET_AUTH_KEY(state) {
      return state.auth_key;
    },
    GET_API_KEY(state) {
      return state.API_URL;
    },
    GET_NAME(state) {
      return state.name;
    },
    GET_EMAIL(state) {
      return state.email;
    },
    GET_PHONE(state) {
      return state.phone;
    },
    GET_ERROR(state) {
      return state.error;
    },
  },
  actions: {
    logout(context) {
      localStorage.clear();
      context.commit("SET_AUTH_KEY", "");
    },
    getUser(context) {
      if (this.state.auth_key) {
        return axios
          .get(this.state.API_URL, {
            headers: {
              Authorization: `Bearer ${this.state.auth_key}`,
            },
          })
          .then((response) => {
            context.commit("SET_AUTH_KEY", response.data.auth_key);
            context.commit("SET_NAME", response.data.name);
            context.commit("SET_EMAIL", response.data.email);
          });
      }
    },
    auth(context) {
      context.commit("SET_ERROR", "");
      return axios
        .post(
          this.state.API_URL,
          {
            name: this.state.name,
            email: this.state.email,
          },
          {
            headers: {
              "X-Application-Token": "wefiEFv_dwDEvf-12Veda_feadvkJbBgh831",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          context.commit("SET_AUTH_KEY", response.data.auth_key);
          context.commit("SET_NAME", response.data.name);
          context.commit("SET_EMAIL", response.data.email);
          context.commit("SET_PHONE", response.data.phone);
          localStorage.setItem("auth_key", response.data.auth_key);
        })
        .catch((error) => {
          context.commit("SET_ERROR", error.response.data.message);
        });
    },
    updateUser(context) {
      const data = JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
      });
      const config = {
        method: "patch",
        url: this.state.API_URL,
        headers: {
          Authorization: `Bearer ${this.state.auth_key}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      return axios(config)
        .then((response) => {
          context.commit("SET_XACTIONID", response.data.auth_key);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
});
