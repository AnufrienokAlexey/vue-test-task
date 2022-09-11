<template>
  <div>
    <b-alert show variant="info"
      >Для создания нового пользователя перейдите -
      <router-link :to="{ name: 'create' }">
        <b-button variant="info">Создать пользователя</b-button>
      </router-link>
    </b-alert>
    <b-alert show variant="info"
      >Для редактирования пользователя перейдите -
      <router-link :to="{ name: 'update' }">
        <b-button variant="info">Редактировать пользователя</b-button>
      </router-link>
    </b-alert>
    <b-alert show variant="info"
      >Страница 404 -
      <router-link to="/zkjxdvzjidhf">
        <b-button variant="info">Посмотреть как выглядит</b-button>
      </router-link>
    </b-alert>

    <h3>Ссылки на мои pet-проекты:</h3>
    <p>
      <a
        href="https://github.com/AnufrienokAlexey"
        target="_blank"
        title="Откроется в новом окне"
      >
        <b-button variant="info">Ссылка на GitHub</b-button>
      </a>
    </p>
    <p>
      <a
        href="https://anufrienokalexey.github.io/vue-app"
        target="_blank"
        title="Откроется в новом окне"
      >
        <b-button variant="info">Проект интернет-магазина на Vue</b-button>
      </a>
    </p>
    <p>
      <a
        href="https://anufrienokalexey.github.io/website-euclid"
        target="_blank"
        title="Откроется в новом окне"
      >
        <b-button variant="info"
          >Адаптивный сайт PixelPerfect, Figma, JQuery, HTML, CSS, JavaScript
        </b-button>
      </a>
    </p>
    <p>
      <a
        href="https://599135.ru"
        target="_blank"
        title="Откроется в новом окне"
      >
        <b-button variant="info"
          >Коммерческий лэндинг-проект на HTML, CSS, JavaScript
        </b-button>
      </a>
    </p>
    <p>
      <a
        href="https://drive.google.com/file/d/1W2ABzjeBSAq_Ztw-nX0pCGr-h4jmm4aL/view?usp=sharing"
        target="_blank"
        title="Откроется в новом окне"
      >
        <b-button variant="info"
          >Мое резюме в pdf - скачать c Google.Disk
        </b-button>
      </a>
    </p>
    <p>
      <a
        href="https://hh.ru/resume/7ec1f7b0ff0930e1db0039ed1f774773413455"
        target="_blank"
        title="Откроется в новом окне"
      >
        <b-button variant="info">Мое резюме - hh.ru</b-button>
      </a>
    </p>
  </div>
</template>

<script>
export default {};
</script>
