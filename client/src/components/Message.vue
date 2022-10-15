<template>
  <div class="msg">{{ message || '' }}</div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    message: { type: String, default: '' },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/base/general';

.msg {
  margin: 20px 10px 20px 10px;
  color: $red;
}
</style>
