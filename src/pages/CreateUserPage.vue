<template>
  <div class="form">
    <b-form action="#" @submit.prevent="auth()" v-if="!GET_AUTH_KEY">
      <b-form-group :label="labelName" label-for="input__name">
        <b-form-input
          v-model="name"
          id="input__name"
          :placeholder="placeholderName"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group :label="labelEmail" label-for="input__email">
        <b-form-input
          id="input__email"
          v-model="email"
          type="email"
          :placeholder="placeholderEmail"
          required
        ></b-form-input>
        <b-alert show variant="danger" v-if="GET_ERROR">{{
          errorMessage
        }}</b-alert>
      </b-form-group>
      <div v-if="errors !== []">
        <h3>Ошибки валидации:</h3>
        <p v-for="error in errors" :key="error">{{ error }}</p>
      </div>
      <b-button variant="dark" type="submit"
        >Создать нового пользователя
      </b-button>
    </b-form>
    <b-alert v-else show variant="success"
      >{{ successMessage }}
      <router-link to="/updateuser">
        <b-button variant="success">Перейти к редактированию</b-button>
      </router-link>
    </b-alert>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  required,
  email,
  minLength,
  maxLength,
  alpha,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      API_URL: "https://api.sitemap-generator.ru/test-api/user",
      name: "",
      email: "",
      labelName: "ФИО нового пользователя:",
      labelEmail: "Email нового пользователя:",
      placeholderName: "Введите ФИО нового пользователя",
      placeholderEmail: "Введите email нового пользователя",
      auth_key: null,
      errorMessage:
        "Упс! Такой email уже существует! Не удалось создать нового пользователя!",
      successMessage: "Пользователь успешно создан!",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    name: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(120),
      alpha,
    },
  },
  computed: {
    ...mapGetters(["GET_AUTH_KEY", "GET_ERROR"]),
    validationName() {
      return this.name.length > 4 && this.name.length < 121;
    },
    validationEmail() {
      return this.email.length > 2 && this.email.length < 31;
    },
    errors() {
      const errors = [];
      if (!this.$v.name.required || !this.$v.email.required) {
        errors.push("Заполните, пожалуйста, все поля");
      }
      if (
        !this.$v.name.alpha ||
        !this.$v.name.minLength ||
        !this.$v.name.maxLength
      )
        errors.push(
          "Имя должно содержать только от 5 до 120 букв латинского алфавита"
        );
      if (!this.$v.email.email) errors.push("Не валидный email");
      return errors;
    },
  },
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
