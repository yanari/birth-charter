<script>
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

import { LocalStore } from '../utils/localStorage';

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
  components: { Pie },
  data() {
    return {
      elements: LocalStore.getData().calculation,
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
      // TODO: move to backend
      const totalPoints = this.elements.reduce((acc, element) => {
        acc += element.points;
        return acc;
      }, 0);

      return this.elements.map(element => {
        const percentage = (element.points * 100) / totalPoints;
        return parseFloat(percentage.toFixed(2));
      });
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