<template>
  <div
    class="not-found-page"
    :style="{
      'background-image': `url(${require('@/assets/images/404.jpg')})`,
      height: '100%',
    }"
  >
    <h1>Ошибка 404. Страница не найдена</h1>
  </div>
</template>
<script>
export default {};
</script>
<style>
#app {
  height: 100vh;
}
.not-found-page {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
