<template>
  <div class="form__update">
    <div class="form" v-if="GET_AUTH_KEY">
      <form action="#" @submit.prevent="updateUser">
        <!-- <BaseFormText
        v-model="formData.name"
        title="ФИО"
        :error="formError.name"
        placeholder="Введите Ваше полное имя*"
      />
      <BaseFormText
        v-model="formData.email"
        title="Email"
        :error="formError.email"
        placeholder="Введите ваш Email*"
      />
      <BaseFormText
        v-model="formData.phone"
        title="Телефон"
        :error="formError.phone"
        placeholder="Введите ваш телефон*"
      /> -->
        <input type="text" v-model="name" :placeholder="placeholderName" />
        <input
          type="email"
          v-model="email"
          :placeholder="placeholderEmail"
          required
        />
        <input
          type="tel"
          v-model="phone"
          :placeholder="placeholderPhone"
          maxlength="16"
          v-mask="'+7(###)###-##-##'"
        />
        <button type="submit" @submit.prevent="updateUser">
          Редактировать
        </button>
      </form>
      <p>Цена: {{ newNumber | numberFormat }} Рублей</p>
      <div v-if="GET_AUTH_KEY">
        Вы успешно создали пользователя:
        <h5>Ваш ключ аутенфикации GET_AUTH_KEY: {{ GET_AUTH_KEY }}</h5>
        <h5>Ваше ФИО GET_NAME: {{ GET_NAME }}</h5>
        <h5>Ваш email GET_EMAIL: {{ GET_EMAIL }}</h5>
        <h5 v-if="GET_PHONE">Ваш email GET_PHONE: {{ GET_PHONE }}</h5>
      </div>
    </div>
    <div v-else>
      Сначала надо создать пользователя... Перейти на страницу создания
      пользователя?
      <router-link :to="{ name: 'create' }">Перейти!</router-link>
    </div>
    <h3>Комментарий к данной странице:</h3>
    <p>
      Кастомный заголовок x-actions-id из patch-запроса невозможно получить -
      для фронтенда сервер долже передать его в access-control-expose-headers.
      "Цена: 1 234 567 890 Рублей"- демонстрация работы фильтров (в данном
      случае фильтра цены)
    </p>
  </div>
</template>

<script>
import numberFormat from "@/helpers/numberFormat";
import { mapGetters, mapActions } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
// import BaseFormText from "@/components/BaseFormText";
export default {
  // components: { BaseFormText },
  data() {
    return {
      newNumber: 1234567890,
      formData: {},
      formError: {},
      name: "",
      email: "",
      phone: "",
      placeholderName: "Введите ФИО пользователя",
      placeholderEmail: "Введите email",
      placeholderPhone: "Введите телефон (минимум 10 цифр)",
    };
  },
  filters: { numberFormat },
  validations: {
    phone: {
      required,
      minLength: minLength(10),
    },
  },
  computed: {
    ...mapGetters([
      "GET_AUTH_KEY",
      "GET_NAME",
      "GET_EMAIL",
      "GET_PHONE",
      // "SET_XACTIONID",
    ]),
  },
  watch: {
    name() {
      this.$store.commit("SET_NAME", this.name);
    },
    email() {
      this.$store.commit("SET_EMAIL", this.email);
    },
    phone() {
      this.$store.commit("SET_PHONE", this.phone);
    },
  },
  methods: {
    ...mapActions(["updateUser", "getUser"]),
  },
  mounted() {
    if (localStorage.getItem("auth_key")) {
      this.$store.commit("SET_AUTH_KEY", localStorage.getItem("auth_key"));
    }
  },
  directives: {},
};
</script>
