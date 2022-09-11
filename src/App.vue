<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <router-link tag="b-nav-item" to="/">Главная</router-link>
        <router-link tag="b-nav-item" to="/createuser"
          >Создать нового пользователя</router-link
        >
        <router-link tag="b-nav-item" to="/updateuser"
          >Редактировать пользователя</router-link
        >
        <router-link tag="b-nav-item" to="/zkjxdvzjidhf"
          >Страница 404</router-link
        >
        <router-link tag="b-nav-item" v-if="GET_AUTH_KEY" to="/logout"
          >Выйти из пользователя
        </router-link>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  computed: {
    ...mapGetters(["GET_AUTH_KEY"]),
  },
  methods: {
    ...mapActions(["getUser"]),
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style>
body {
  background-color: #ccc;
  box-sizing: border-box;
}
#app {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.navbar {
  display: flex;
  justify-content: center;
  text-transform: uppercase;
}
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.form ::placeholder {
  text-align: center;
}
input {
  margin-bottom: 0.5em;
  width: 100%;
}
</style>
