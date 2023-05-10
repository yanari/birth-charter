<script>
import { isColorLight } from '@/utils/color';
export default {
  props: ['trait', 'color'],
  computed: {
    fontColor() {
      const isLightBackground = isColorLight(this.color)
      return isLightBackground ? 'var(--vt-c-text-light-1)' : 'var(--color-heading)';
    },
    itemStyle() {
      return {
        backgroundColor: this.color,
        color: this.fontColor,
      }
    }
  }
}
</script>
<template>
  <li :style="itemStyle">
    <span>
     {{ trait }}
    </span>
  </li>
</template>
<style scoped>
  li {
    border-radius: 16px;
    padding: .5rem 1rem;
    display: inline-block;
    list-style: none;
    line-height: normal;
    /* margin: .5rem; */
  }
</style>