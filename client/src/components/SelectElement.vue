<template>
  <div>
    <select v-model="selectedWaypoint" class="select__element">
      <option v-for="(item, i) in waypointList" :key="i">{{ item }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectElement',
  props: {
    selectedItem: { type: String, default: '' },
    waypointList: { type: Array, default: () => [] },
  },
  computed: {
    selectedWaypoint: {
      get() {
        return this.selectedItem;
      },
      set(value) {
        this.$emit('onSelectChange', value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/base/general';

.select__element {
  border-radius: 10px;
  height: 45px;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: 16px;
  border: 1px solid $grey-shade3;
  margin: 5px;
  width: 100%;
  background: url(../assets/airport.svg) 99% / 5% no-repeat #fff;
  @include mobile {
    background: url(../assets/airport.svg) 99% / 15% no-repeat #fff;
  }
  @include tablet {
    background: url(../assets/airport.svg) 99% / 15% no-repeat #fff;
  }
}
</style>
