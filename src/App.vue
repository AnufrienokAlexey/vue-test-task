<template>
  <div id="app">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/createuser">Создать нового пользователя</router-link> |
      <router-link to="/updateuser">Редактировать пользователя</router-link> |
      <router-link to="/zkjxdvzjidhf">Страница 404</router-link> |
      <router-link
        v-if="GET_AUTH_KEY"
        class="custom__link"
        tag="nav"
        :to="{ name: 'logout' }"
        >Выйти из созданного пользователя ('это ссылка') {{ GET_NAME }}
      </router-link>
      <div></div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["GET_NAME", "GET_AUTH_KEY"]),
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
  align-items: center;
  text-align: center;
}
nav {
  text-transform: uppercase;
  margin-bottom: 18px;
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
.custom__link {
  font-size: 0.9em;
  cursor: pointer;
  text-transform: lowercase;
}
</style>
