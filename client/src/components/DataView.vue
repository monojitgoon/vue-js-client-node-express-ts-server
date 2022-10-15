<template>
  <div>
    <div v-for="(row, rindex) in offersData" :key="rindex" class="data_row">
      <div class="item">
        <div class="item__column">
          <div class="item__card">
            <h4>Departure</h4>
            <i class="fas fa-plane-departure"></i>
            <p>Date: {{ row.departureDate }}</p>
            <p>Origin: {{ row.origin }}</p>
          </div>
        </div>
        <div class="item__column">
          <div class="item__card">
            <h4>Offer</h4>
            <i class="fas fa-tags"></i>
            <p>Price: {{ row.priceAmount }} {{ row.priceCurrency }}</p>
            <p>Seat Available: {{ row.seatAvailability }}</p>
          </div>
        </div>
        <div class="item__column">
          <div class="item__card">
            <h4>Arrival</h4>
            <i class="fas fa-plane-arrival"></i>
            <p>Date: {{ row.returnDate }}</p>
            <p>Destination: {{ row.destination }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataView',
  props: {
    offersData: { type: Array, default: () => [] },
  },
  data() {
    return {};
  },
  computed: {
    isEmpty: function(value) {
      return Object.keys(value).length === 0 && value.constructor === Object;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/base/general';

.data_row {
  width: 100%;
  padding: 20px;
  box-shadow: $shadow-small;
  display: flex;
  margin: 20px 0;
  position: relative;
}

.item {
  width: 100%;
  line-height: 1.5;
}

.item:after {
  content: '';
  display: table;
  clear: both;
}

.item__column {
  float: left;
  width: 33%;
  padding: 0 10px;

  @include mobile {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }

  @include tablet {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
.item__card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}

.item__card > i {
  margin-right: 10px;
}

.item__card > p {
  margin: 0;
}
</style>
