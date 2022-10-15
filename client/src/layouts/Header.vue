<template>
  <header class="header">
    <div class="header__logo"><img src="../assets/logo.png" /></div>
  </header>
</template>

<style scoped lang="scss">
@import '../styles/base/general';

.header {
  width: 100%;
  padding: 12px;
  box-shadow: $shadow-small;
  display: flex;
}

.header__logo {
  height: 100%;
  img {
    width: auto;
    height: 50px;
    margin-right: 4px;
  }
}
</style>
