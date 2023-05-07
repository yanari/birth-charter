<script>
import Chart from '../components/Chart.vue';
import { LocalStore } from '../utils/localStorage';
export default {
  components: { Chart, Chart },
  mounted() {

  },
  data() {
    return {}
  },
  methods: {
    getElementsNamesSet(filter) {
      const elementsSet = this.elements.filter((item) => item.percentage === filter);
      return elementsSet.map(item => item.name);
    },
  },
  computed: {
    elements() {
      return LocalStore.getData().calculation;
    },
    percentages() {
      return this.elements.map(i => i.percentage);
    },
    dominant() {
      const highest = Math.max(...this.percentages);
      return this.getElementsNamesSet(highest);
    },
    weak() {
      const lowest = Math.min(...this.percentages);
      return this.getElementsNamesSet(lowest);
    },
  }
}
</script>
<template>
  <main>
    <div class="description"></div>
    <div class="chart-area">
      <Chart :elements="elements"/>
      {{ dominant }}
      {{  weak }}
    </div>
  </main>
</template>
<style scoped>
  .chart-area {
    display: flex;
    justify-content: center;
    max-height: 24rem;
  }
</style>