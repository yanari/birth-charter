<script>
import { Sign } from '../models/Signs';
export default {
  mounted() {
    const { astros, axes } = history.state;
    this.astros = JSON.stringify(astros, 2, 2);

    this.signs = Object.values(astros).map((value) => {
      return {
        planet: value.name,
        ...Sign.get(value.sign),
      };
    });

    this.axes = Object.entries(axes).map(([key, value]) => {
      return {
        axis: key,
        ...Sign.get(value.sign),
      };
    });
  },
  data() {
    return {
      astros: '',
      signs: {},
      axes: {},
    }
  }
}
</script>
<template>
  <table>
    <tr v-for="sign in signs">
      <td v-for="(signProperty, key) in sign" :class="{'planet': key === 'planet'}">
        {{ signProperty }}
      </td>
    </tr>
  </table>
  <table>
    <tr v-for="axis in axes">
      <td v-for="(signProperty) in axis">
        {{ signProperty }}
      </td>
    </tr>
  </table>
</template>
<style scoped>
  table {
    border: 1px solid var(--vt-c-white);
    background-color: var(--vt-c-indigo);
    color: var(--color-heading);
  }

  table td.planet {
    font-weight: bold;
    text-transform: capitalize;
  }
</style>