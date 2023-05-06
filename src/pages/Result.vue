<script>
import Chart from '../components/Chart.vue';
export default {
  components: { Chart, Chart },
  mounted() {
    // const { calculation } = LocalStore.getData();

  },
  data() {
  }
}
</script>
<template>
  <main>
    <div class="description"></div>
    <div class="chart-area">
      <Chart/>
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