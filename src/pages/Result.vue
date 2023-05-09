<script>
import Chart from '../components/Chart.vue';
import Description from '../components/Description.vue';
import Separator from '../components/Separator.vue';

import { LocalStore } from '../utils/localStorage';
export default {
  components: {
    Chart,
    Description,
    Separator,
  },
  data() {
    return {
      results: LocalStore.getData(),
      lack: [],
      dominant: [],
    }
  },
  mounted() {
    this.dominant = this.results.dominant;
    this.lack = this.results.lack;
  },
  methods: {},
  computed: {
    elements() {
      return this.results.calculation;
    },
    hasMultipleDominants() {
      return this.dominant && this.dominant.length > 1;
    },
    hasMultipleLack() {
      return this.lack && this.lack.length > 1;
    }
  }
}
</script>
<template>
  <main>
    <div class="description">
      <h2 class="dominant">
        <template v-if="hasMultipleDominants">
          The elements that dominate your birth chart are:
        </template>
        <template v-else>
          The element that dominante your birth chart is:
        </template>
      </h2>
      <Description :set="results.dominant" />
      <Separator/>
      <h2>
        <template v-if="hasMultipleLack">
          On the other hand, the weakest elements on your birth chart are
        </template>
        <template v-else>
          On the other hand, the weakest element on your birth chart is
        </template>
      </h2>
      <Description :set="results.lack" />
    </div>
    <div class="chart-area">
      <Chart :elements="elements"/>
    </div>
  </main>
</template>
<style scoped>
  main {
    background-color: var(--vt-c-text-light);
    color: var(--color-heading);
    filter: opacity(.9);
    max-width: 48rem;
  }

  .dominant {
    font-size: 2.5rem;
  }

  .chart-area {
    display: flex;
    justify-content: center;
    max-height: 24rem;
  }
</style>