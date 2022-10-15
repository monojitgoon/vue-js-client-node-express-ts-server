<template>
  <div class="footer"></div>
</template>

<style scoped lang="scss">
@import '../styles/base/general';

.footer {
  box-shadow: $shadow-large;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 60px;
  width: 100%;
  background-color: $grey-shade;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
