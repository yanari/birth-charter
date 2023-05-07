<script>
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
  components: { Pie },
  props: ['elements'],
  data() {
    return {
      chartData: null,
      chartOptions: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (({ formattedValue }) => formattedValue + '%'),
            },
          },
        }
      }
    }
  },
  mounted() {
    this.chartData = {
      labels: this.labels,
      datasets: [{
        data: this.elementsData,
        backgroundColor: this.colors
      }],
    }
  },
  computed: {
    labels() {
      return this.elements.map(i => i.name);
    },
    elementsData() {
      return this.elements.map(i => i.percentage);
    },
    colors() {
      return this.elements.map(i => i.color);
    }
  }
}
</script>

<template>
  <Pie v-if="chartData !== null" :data="chartData" :options="chartOptions" />
</template>
<style scoped></style>