<script>
import Chart from '../components/Chart.vue';
import Description from '../components/Description.vue';

import { LocalStore } from '../utils/localStorage';
export default {
  components: { Chart, Description },
  data() {
    return {
      results: LocalStore.getData(),
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
    lackIntro() {
      let text = 'The element that is lacking on your birth chart is:';
      if (this.lack?.length > 1) {
        text = 'The elements that are lacking on your birth chart are:';
      }
      return text;
    }
  }
}
</script>
<template>
  <main>
    <div class="description">
      <h2 class="dominant">
        <template v-if="dominant?.length > 1">
          The element that dominante your birth chart is:
        </template>
        <template v-else>
          The elements that dominate your birth chart are:
        </template>
      </h2>
      <Description :set="results.dominant" />
      <h2>
        <template v-if="lack?.length > 1">
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
    background-color: var(--vt-c-text-light-1);
    color: var(--color-heading);
    filter: opacity(.75);
    max-width: 48rem;
  }

  .description {
    padding: 0 2rem;
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