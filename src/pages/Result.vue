<script>
import Chart from '../components/Chart.vue';
import { LocalStore } from '../utils/localStorage';
export default {
  components: { Chart },
  data() {
    return {
      elements: LocalStore.getData().calculation,
    }
  },
  methods: {

  },
  computed: {

  }
}
</script>
<template>
  <main>
    <div class="description">
    </div>
    <div class="chart-area">
      <Chart :elements="elements"/>
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