<template>
  <div class="form__update">
    <div class="form" v-if="GET_AUTH_KEY">
      <form action="#" @submit.prevent="updateUser">
        <b-form-group :label="labelName" label-for="input__name">
          <b-form-input
            v-model="name"
            id="input__name"
            :placeholder="placeholderName"
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
        </b-form-group>
        <b-form-group :label="labelPhone" label-for="input__phone">
          <b-form-input
            v-model="phone"
            id="input__phone"
            :placeholder="placeholderPhone"
            required
            v-mask="'+7 (###) ###-##-##'"
          ></b-form-input>
        </b-form-group>
        <div v-if="errors !== []">
          <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
        <b-alert show variant="info">
          <b-button variant="info" type="submit" @submit.prevent="updateUser"
            >Редактировать
          </b-button>
        </b-alert>
        <div v-if="GET_MESSAGE">{{ GET_MESSAGE }}</div>
      </form>
      <div v-if="GET_MESSAGE">
        <h3>Данные Вашего пользователя:</h3>
        <h5>Ваш ключ аутенфикации: {{ GET_AUTH_KEY }}</h5>
        <h5>Ваше ФИО: {{ GET_NAME }}</h5>
        <h5>Ваш email: {{ GET_EMAIL }}</h5>
        <h5 v-if="GET_PHONE">Ваш телефон: {{ GET_PHONE }}</h5>
      </div>
    </div>
    <b-alert v-else show variant="danger"
      >{{ message }}
      <router-link :to="{ name: 'create' }">
        <b-button variant="success">Перейти!</b-button>
      </router-link>
    </b-alert>
  </div>
</template>

<script>
import numberFormat from "@/helpers/numberFormat";
import { mapGetters, mapActions } from "vuex";
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
      name: "",
      email: "",
      phone: "",
      labelName: "Редактировать ФИО:",
      labelEmail: "Редактировать Email:",
      labelPhone: "Редактировать телефон:",
      placeholderName: "Введите ФИО для изменения",
      placeholderEmail: "Введите email для изменения",
      placeholderPhone: "Введите телефон для изменения",
      auth_key: null,
      errorMessage: "Упс! Ошибочка :)",
      message:
        "Сначала надо создать пользователя... Перейти на страницу создания пользователя?",
    };
  },
  filters: { numberFormat },
  validations: {
    phone: {
      required,
    },
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
    ...mapGetters([
      "GET_AUTH_KEY",
      "GET_NAME",
      "GET_EMAIL",
      "GET_PHONE",
      "GET_MESSAGE",
    ]),
    errors() {
      const errors = [];
      if (
        !this.$v.name.required ||
        !this.$v.email.required ||
        !this.$v.phone.required
      ) {
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
      if (this.phone.length !== 18) {
        errors.push("Телефон должен сожержать только 10 цифр");
      }

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
};
</script>
