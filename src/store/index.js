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
    // getHeaders() {
    //   return fetch("https://api.sitemap-generator.ru/test-api/user", {
    //     method: "PATCH",
    //     headers: {
    //       Authorization: `Bearer ${this.state.auth_key}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name: this.state.name,
    //       email: this.state.email,
    //     }),
    //   }).then((response) => {
    //     // console.log(response);
    //     // console.log(response.headers);
    //     const arr = [...response.headers.entries()]; // ВОТ ЭТО ТИПО ДОЛЖНО РАБОТАТЬ
    //     console.log(arr);
    //   });
    // },

    // не стал удалять комментарии, чтобы видно было что можно использовать другие способы отправки
    // getHeaders(context) {
    //   const config = {
    //     method: "head",
    //     url: this.state.API_URL,
    //     headers: {
    //       Authorization: `Bearer ${this.state.auth_key}`,
    //       "Content-Type": "application/json",
    //     },
    //   };

    //   return axios(config)
    //     .then((response) => {
    //       context.commit("SET_XACTIONID", response.headers);
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // },

    // getHeaders() {
    //   console.log("getHeaders");
    //   const data = JSON.stringify({
    //     name: this.state.name,
    //     email: this.state.email,
    //     phone: this.state.phone,
    //   });
    //   // const formData = new FormData();
    //   // formData.append("Authorization", `Bearer ${this.state.auth_key}`);
    //   const req = new XMLHttpRequest();
    //   req.open("PATCH", this.state.API_URL);
    //   req.setRequestHeader("Authorization", `Bearer ${this.state.auth_key}`);
    //   req.send(data);
    //   const arr = req.getAllResponseHeaders();
    //   console.log(arr);
    // },

    // getHeaders() {
    //   const data = JSON.stringify({
    //     name: "Ивasdasaadанов Иван Иванович",
    //     email: "iasdccsadsaajjhjaddasadasd@mhha.ru",
    //   });
    //   const xhr = new XMLHttpRequest();
    //   xhr.addEventListener("readystatechange", function () {
    //     if (this.readyState === 4) {
    //       console.log(xhr);
    //       const arr2 = xhr.getAllResponseHeaders();
    //       const arr3 = xhr.getAllResponseHeaders();
    //       console.log(arr2);
    //       console.log(arr3);
    //       const arr = arr2.trim().split(/[\r\n]+/);

    //       const headerMap = {};
    //       arr.forEach((line) => {
    //         const parts = line.split(": ");
    //         const header = parts.shift();
    //         const value = parts.join(": ");
    //         headerMap[header] = value;
    //       });
    //       console.log(arr);
    //     }
    //   });
    //   xhr.open("PATCH", "https://api.sitemap-generator.ru/test-api/user");
    //   xhr.setRequestHeader(
    //     "Authorization",
    //     "Bearer 3c5419cc-b1d4-49d3-a2ad-28846762311d"
    //   );
    //   xhr.setRequestHeader("Content-Type", "application/json");

    //   xhr.send(data);
    // },
  },
});
