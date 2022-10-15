<template>
  <div class="home">
    <div class="selection">
      <p>
        <label>Origin</label>
        <SelectElement
          :waypoint-list="getOriginWaypoints"
          :selected-item="selectedItem"
          @onSelectChange="listenSelectChangeOrigin"
        />
      </p>
      <p>
        <label class="selection__label">Destination</label>
        <SelectElement
          :waypoint-list="getDestinationWaypoints"
          :selected-item="selectedItem"
          @onSelectChange="listenSelectChangeDestination"
        />
      </p>
      <p class="selection__full">
        <button class="button" @click="loadOffersData">Filter</button>
        <button class="button" @click="handleReset">Reset</button>
      </p>
      <p v-if="offersData && getErrorMessage" class="selection__full">
        <Message :message="getErrorMessage"> </Message>
      </p>
      <p class="selection__full">
        <DataView :offers-data="offersData"> </DataView>
      </p>
    </div>
  </div>
</template>
<script>
import Message from '../components/Message.vue';
import DataView from '../components/DataView.vue';
import SelectElement from '../components/SelectElement.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    SelectElement,
    DataView,
    Message,
  },

  props: {
    selectedItem: { type: String, default: '' },
  },
  data() {
    return {
      offersData: [],
    };
  },
  computed: {
    ...mapGetters('offer', [
      'getOffers',
      'getOriginWaypoints',
      'getDestinationWaypoints',
      'getOriginFilter',
      'getDestinationFilter',
      'getFilteredOffers',
      'getErrorMessage',
    ]),
  },
  async mounted() {
    await this.loadOffers();
    this.offersData = this.getOffers;
  },

  methods: {
    ...mapActions('offer', [
      'loadOffers',
      'setOriginFilter',
      'setDestinationFilter',
      'loadFilteredOffers',
    ]),
    listenSelectChangeOrigin(value) {
      this.setOriginFilter(value);
    },
    listenSelectChangeDestination(value) {
      this.setDestinationFilter(value);
    },
    handleReset: function() {
      location.reload();
    },
    loadOffersData: function() {
      if (this.getDestinationFilter || this.getOriginFilter) {
        this.loadFilteredOffers();
        this.offersData = this.getFilteredOffers;
      } else {
        this.loadOffers();
        this.offersData = this.getOffers;
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import '../styles/base/general';

.home {
  width: 100%;
  box-shadow: $shadow-small;
  display: flex;
  border-radius: 5px;
  padding: 30px;
}

.selection {
  display: inline-flex;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.selection__label {
  display: block;
}

.selection > p {
  margin: 0;
}

.selection__full {
  grid-column: 1/3;
}

.button {
  display: inline-block;
  margin: 0.5em 0.5em;
  padding: 1em 2em;
  background: $primary;
  border-radius: 10px;
  color: $white;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
  width: 25%;
  @include mobile {
    width: 100%;
  }
  @include tablet {
    width: 75%;
  }
}

.button:hover {
  background: $secondary;
  color: $white;
}
</style>
