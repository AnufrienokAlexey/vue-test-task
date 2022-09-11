<template>
  <div>
    <div v-if="GET_AUTH_KEY">
      <h3>Данные Вашего пользователя:</h3>
      <h5>Ваш ключ аутенфикации: {{ GET_AUTH_KEY }}</h5>
      <h5>Ваше ФИО: {{ GET_NAME }}</h5>
      <h5>Ваш email: {{ GET_EMAIL }}</h5>
      <h5>
        Ваш телефон:
        <span v-if="GET_PHONE">
          {{ GET_PHONE }}
        </span>
        <span v-else>
          Не указан. Вы можете добавить его в меню
          <router-link :to="{ name: 'update' }">
            <b-button variant="info">Редактировать пользователя </b-button>
          </router-link>
        </span>
      </h5>
      <router-link :to="{ name: 'create' }">
        <b-button variant="info" @click.prevent="logout"
          >Выйти из пользователя
        </b-button>
      </router-link>
    </div>
    <b-alert v-else show variant="info"
      >{{ message }}
      <router-link :to="{ name: 'create' }">
        <b-button variant="info">Перейти!</b-button>
      </router-link>
    </b-alert>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      message:
        "Сначала надо создать пользователя... Перейти на страницу создания пользователя?",
    };
  },
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
