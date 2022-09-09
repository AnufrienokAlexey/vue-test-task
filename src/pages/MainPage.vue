<template>
  <div>
    <h2>Добро пожаловать на тестовое задание Ануфриенок Алексея</h2>
    <p>
      Для создания нового пользователя перейдите по
      <router-link to="/createuser">ссылке</router-link>
    </p>
    <p>
      Для редактирования пользователя перейдите по
      <router-link to="/updateuser">ссылке</router-link>(простая ссылка) или по
      <router-link
        :to="{ name: 'update', params: { userEmail: 'userEmail@email.ru' } }"
        >ссылке
      </router-link>
      (динамическая ссылка с передачей параметров через router-link)
    </p>
    <h3>Ссылки на мои pet-проекты:</h3>
    <p>
      <a href="https://github.com/AnufrienokAlexey">Ссылка на GitHub</a>
    </p>
    <p>
      <a href="https://anufrienokalexey.github.io/vue-app/#/"
        >Проект интернет-магазина на Vue</a
      >
    </p>
    <p>
      <a href="https://anufrienokalexey.github.io/website-euclid/"
        >Адаптивный сайт PixelPerfect, Figma, JQuery, HTML, CSS, JavaScript
      </a>
    </p>
    <p>
      <a href="https://599135.ru/"
        >Коммерческий лэндинг-проект на HTML, CSS, JavaScript
      </a>
    </p>
    <h3>
      <a
        href="https://drive.google.com/file/d/1W2ABzjeBSAq_Ztw-nX0pCGr-h4jmm4aL/view?usp=sharing"
        >Мое резюме в pdf - скачать c Google.Disk
      </a>
    </h3>
    <h3>Комментарий к данной странице:</h3>
    <p>
      С этой страницы с помощью router-link можно перейти на другие и передавать
      query-параметры, а потом эти параметры использовать на други страницах. С
      помощью :to можно перейти по именнованому маршруту, а уже в
      router/index.js менять путь на который хотим (для больших проектов, чтобы
      изменить только в одном месте)
    </p>
  </div>
</template>

<script>
export default {};
</script>
