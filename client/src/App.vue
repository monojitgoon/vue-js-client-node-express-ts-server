<template>
  <div id="app">
    <Header />
    <Container />
    <Footer />
  </div>
</template>

<script>
import Container from './layouts/Container';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
export default {
  name: 'App',
  components: {
    Container,
    Footer,
    Header,
  },
};
</script>

<style scoped lang="scss">
@import 'styles/base/general';

#app {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: $white;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  text-align: center;
}

#app::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 800px) {
  #app {
    box-shadow: $shadow-large;
    padding: 12px;
    max-width: 450px;
    position: absolute;
    height: auto;
    overflow-y: none;
    top: 24px;
    right: 0;
    left: 0;
    margin: 0 auto 24px auto;
  }
}

@media screen and (min-width: 1000px) {
  #app {
    box-shadow: $shadow-large;
    padding: 12px;
    position: absolute;
    max-width: 1200px;
    height: auto;
    overflow-y: none;
    top: 24px;
    right: 0;
    left: 0;
    margin: 0 auto 24px auto;
  }
}
</style>
