<template>
  <div>
    <div v-if="GET_AUTH_KEY">
      <p>Ваше имя: {{ GET_NAME }}</p>
      <p>Ваш email: {{ GET_EMAIL }}</p>
      <p>Ваш телефон: {{ GET_PHONE }}</p>
      <button @click.prevent="logout">
        Выйти из под пользователя {{ GET_NAME }}
      </button>
    </div>
    <p v-else>
      Перейти на страницу создания пользователя?
      <router-link :to="{ name: 'create' }">Перейти!</router-link>
    </p>
    <h3>Комментарий к данной странице:</h3>
    <p>
      Если сразу после создания пользователя мы придем на эту страницу то увидим
      что поле телефона будет пустое. А если мы зайдем сюда после редактирования
      на странице редактирования - оно появиться в отображении На этой странице
      когда мы кликаем по кнопке мы очищаем ключ аутенфикации в localStorage,
      тем самым делая выход из приложения пользователя (и мы можем снова создать
      нового пользователя)
    </p>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["logout"]),
  },
  computed: {
    ...mapGetters(["GET_AUTH_KEY", "GET_NAME", "GET_EMAIL", "GET_PHONE"]),
  },
  mounted() {
    if (localStorage.getItem("auth_key")) {
      this.$store.commit("SET_AUTH_KEY", localStorage.getItem("auth_key"));
    }
  },
};
</script>
