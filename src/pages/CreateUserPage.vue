<template>
  <div class="form">
    <form action="#" @submit.prevent="auth()" v-if="!GET_AUTH_KEY">
      <input
        type="text"
        v-model="name"
        :placeholder="placeholderName"
        required
      />
      <input
        type="email"
        v-model="email"
        :placeholder="placeholderEmail"
        required
      />
      <button type="submit">Создать нового пользователя</button>
    </form>
    <p v-else>
      Пользователь успешно создан.
      <router-link to="/updateuser"> Перейти к редактированию</router-link>
    </p>
    <p v-if="GET_ERROR">Ошибка от сервера: {{ GET_ERROR }}</p>
    <h3>Комментарий к данной странице:</h3>
    <p>
      Отправлять данные между страницами можно через: localStorage, сессии, vuex
      хранилище, адресную строку с параметрами, router:id. Я старался показать
      передачу через localStorage, vuex, router. Выбрать надо было одно ( я
      склоняюсь к router), но в целях показать навыки хотел показать все
      наработки
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      API_URL: "https://api.sitemap-generator.ru/test-api/user",
      name: "",
      email: "",
      placeholderName: "Введите ФИО пользователя",
      placeholderEmail: "Введите email",
      auth_key: null,
    };
  },
  computed: { ...mapGetters(["GET_AUTH_KEY", "GET_ERROR"]) },
  watch: {
    name() {
      this.$store.commit("SET_NAME", this.name);
    },
    email() {
      this.$store.commit("SET_EMAIL", this.email);
    },
  },
  methods: {
    ...mapActions(["auth"]),
  },
};
</script>
