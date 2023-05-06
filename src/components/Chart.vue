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
        chartData: null
      }
    },
    mounted() {
      console.log(this.labels);
      console.log(this.elementsData);
      this.chartData = {
        labels: this.labels,
        datasets: [{
          data: this.elementsData,
          backgroundColor: this.colors
        }]
      }
    },
    computed: {
      labels() {
        return this.elements.map(i => i.name);
      },
      elementsData() {
        return this.elements.map(i => i.points);
      },
      colors() {
        return  this.elements.map(i => i.color);
      }
    }
  }
</script>

<template>
  <Pie
    v-if="chartData !== null"
    :data="chartData"
  />
</template>


<style scoped>

</style>